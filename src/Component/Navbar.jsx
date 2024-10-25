import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, cartItemCount, totalCost, removeFromCart }) => {
  const [nav, setNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const Links = [
    { id: 1, link: "home" },
    { id: 2, link: "clothing" },
    { id: 3, link: "about" },
    { id: 4, link: "contact" },
  ];

  return (
    <div className="bg-[#556B2F] text-white flex justify-between items-center w-full h-16 fixed top-0 left-0 z-50">
      {/* Logo */}
      <h1 className="text-4xl font-bold font-[poppins] px-4">& STITCH</h1>

      {/* Main Links (Desktop View) */}
      <ul className="hidden md:flex space-x-6 items-center justify-end flex-grow mr-4">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-[#A1A874] duration-200 font-[poppins]"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Cart Icon (Visible on Desktop) */}
      <div className="hidden md:flex items-center pr-4 relative">
        <FaShoppingCart
          size={25}
          onClick={() => setCartOpen(!cartOpen)}
          className="cursor-pointer"
        />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#A1A874] text-white rounded-full px-2 py-1 text-xs">
            {cartItemCount}
          </span>
        )}
        {cartOpen && (
          <div className="absolute right-0 top-10 bg-white text-black w-64 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold mb-2 text-[#556B2F] font-[poppins]">Cart Items</h3>
            {cart.length === 0 ? (
              <p className="font-[poppins] text-[#556B2F]">No items in cart</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center mb-2">
                    <div>
                      <p>{item.name}</p>
                      <p className="text-[#556B2F] font-[poppins]">Qty: {item.qty}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-[#556B2F] font-[poppins] text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Total Cost Section */}
            {cart.length > 0 && (
              <div className="mt-2">
                <p className="font-bold text-[#556B2F] font-[poppins]">Total Cost: Rs.{totalCost}</p>
              </div>
            )}

            <Link to="/checkout" className="block text-center bg-[#556B2F] font-[poppins] text-white mt-2 p-2 rounded">
              Checkout
            </Link>
          </div>
        )}
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#556B2F] text-white font-[poppins]">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#A1A874] font-[poppins]"
            >
              <Link onClick={() => setNav(!nav)} to={link}>
                {link}
              </Link>
            </li>
          ))}

          {/* Cart Icon (Visible on Mobile) */}
          <li className="py-6 text-4xl relative">
            <FaShoppingCart size={35} onClick={() => setCartOpen(!cartOpen)} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A1A874] text-white rounded-full px-2 py-1 text-xs">
                {cartItemCount}
              </span>
            )}
            {cartOpen && (
              <div className="absolute right-0 top-16 bg-white text-black w-64 p-4 shadow-lg rounded-lg">
                <h3 className="font-bold mb-2 text-[#556B2F] font-[poppins]">Cart Items</h3>
                {cart.length === 0 ? (
                  <p className="text-[#556B2F] font-[poppins]">No items in cart</p>
                ) : (
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between items-center mb-2">
                        <div>
                          <p>{item.name}</p>
                          <p className="text-[#556B2F] font-[poppins]">Qty: {item.qty}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="bg-[#556B2F] text-white px-2 py-1 rounded font-[poppins]"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Total Cost Section */}
                {cart.length > 0 && (
                  <div className="mt-2">
                    <p className="font-bold text-[#556B2F] font-[poppins]">Total Cost: Rs.{totalCost}</p>
                  </div>
                )}

                <Link to="/checkout" className="block text-center bg-[#556B2F] font-[poppins] text-white mt-2 p-2 rounded">
                  Checkout
                </Link>
              </div>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
