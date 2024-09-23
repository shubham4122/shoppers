import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>; // Loading indicator
  if (error) return <div className="text-center text-red-500">{error}</div>; // Error message

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
