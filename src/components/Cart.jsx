import React from "react";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, editCartItem } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleEditQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    editCartItem(productId, newQuantity);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Selected Items</h2>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg transition-transform duration-300"
            >
              <div className="flex items-center">
                <img
                  className="w-16 h-16 object-cover mr-4"
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (!isNaN(newQuantity)) {
                      handleEditQuantity(item.id, newQuantity);
                    }
                  }}
                  className="w-16 text-center border border-gray-300 rounded mr-4"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 text-white py-1 px-3 rounded-full hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-4 text-lg font-bold text-right">
          Total: ${totalPrice.toFixed(2)}
        </div>
      )}
    </section>
  );
};

export default Cart;
