import React, { useState } from "react";
import { useCart } from "./context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // You can integrate a toast notification here instead of an alert
    alert(`${product.title} has been added to your cart!`); // Replace with a toast
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <img
        className="w-full h-48 object-cover mb-4"
        src={product.image}
        alt={product.title}
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border border-gray-300 rounded p-1 w-16 mb-2"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className={`bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 ${
          isInCart ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isInCart}
      >
        {isInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
