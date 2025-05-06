import React from 'react';
import { useCart, Product } from '../context/CartContext';
import PaymentButton from "../components/PaymentButton";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Static exchange rate: 1 USD = 0.00001 Sepolia ETH (for testing)
  const exchangeRate = 0.00001;

  // Calculate the total price in USD
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  // Convert USD to Sepolia ETH using the exchange rate
  const totalInSepoliaETH = total * exchangeRate;

  return (
    <div className="text-center p-6 max-w-4xl mx-auto px-10 py-10">
      <h2 className="text-3xl font-bold text-dark mb-6 dark:text-cyan-400 transition-colors duration-300">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="max-w-7xl mx-auto mb-10">
          <p className="text-1xl font-bold mb-5">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item: Product) => (
            <div
              key={item.id}
              className="bg-gray-800 p-4 rounded-xl flex items-center justify-between shadow hover:shadow-cyan-500/20 transition"
            >
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-cyan-300 font-medium">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="w-16 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 text-right">
          <h3 className="text-2xl font-bold text-white">
            Total: <span className="text-cyan-400">${total.toFixed(2)}</span>
          </h3>
          <h4 className="text-xl text-cyan-300 mt-2">
            Equivalent in Sepolia ETH: <span className="text-cyan-400">{totalInSepoliaETH.toFixed(6)} ETH</span>
          </h4>
        </div>
      )}

      {/* Add PaymentButton here with the converted price */}
      {cart.length > 0 && (
        <div className="mt-8">
          <PaymentButton totalPrice={totalInSepoliaETH} />
        </div>
      )}
    </div>
  );
};

export default Cart;
