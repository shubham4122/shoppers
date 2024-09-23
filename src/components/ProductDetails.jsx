import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-slick";
import { useCart } from "./context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  useEffect(() => {
    // Fetch product details
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    // Fetch related products
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setRelatedProducts(response.data);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Settings for Slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-800 mb-4">${product.price}</p>
          <p className="text-md text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Related Products</h2>
      <Carousel {...settings}>
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.id} className="p-2">
            <img
              src={relatedProduct.image}
              alt={relatedProduct.title}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-md mt-2 text-center">{relatedProduct.title}</h3>
            <p className="text-center">${relatedProduct.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetails;
