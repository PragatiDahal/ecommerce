import React, { useState } from 'react';
import Navbar from "./Navbar";

const products = [
    { id: 1, name: 'Long-sleeves Top', price: 850, image: 'hi.jpg' },
    { id: 2, name: 'V-neck Top', price: 800, image: 'jk.jpg' },
    { id: 3, name: 'floral Dress', price: 1100, image: 'dress.jpg' },
    { id: 4, name: 'Boxer Pant', price: 1200, image: 'pant.jpg' },
    { id: 5, name: 'Mini Skirt', price: 900, image: 'skirt.jpg' },
    { id: 6, name: 'One-Piece', price: 1400, image: 'dressss.jpg' },
  ];

const Product = () => {
    const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // Total number of items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.qty, 0);

  // Calculate total cost dynamically
  const totalCost = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="container mx-auto">
      {/* Navbar with Cart */}
      <Navbar cart={cart} cartItemCount={cartItemCount} totalCost={totalCost} removeFromCart={removeFromCart} />
      <h1 className="text-3xl font-bold my-4 text-[#A1A874] font-[poppins]">Best Sellers</h1>
      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-100 object-cover" />
            <h3 className="mt-2 text-lg font-bold text-[#A1A874] font-[poppins]">{product.name}</h3>
            <p className="text-[#556B2F] font-[poppins]">Rs. {product.price}</p>
            <button 
              className="bg-[#556B2F] text-white px-4 py-2 mt-2 font-[poppins]" 
              onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

  

export default Product