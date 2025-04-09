import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#111827] text-white py-4 px-6 md:px-16 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 font-['Poppins']">
          <li>
            <Link className="hover:text-gray-400" to="/">
              Home
            </Link>
          </li>

          {/* Shop Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-gray-400">
              Shop <ChevronDown size={18} className="ml-1" />
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-40 bg-[#1F2937] rounded-md shadow-lg z-50"
                >
                  {["Men", "Women", "Kids"].map((category) => (
                    <li key={category}>
                      <Link
                        to={`/shop/${category.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link className="hover:text-gray-400" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-xl font-bold font-['Poppins'] absolute left-1/2 transform -translate-x-1/2">
          &STITCH
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-4">
          {/* Shopping Cart */}
          <Link to="/checkout">
            <div className="relative cursor-pointer hover:text-gray-400">
              <ShoppingCart size={24} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          <Link to="/login">
            <User className="cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111827] mt-2 p-4 rounded-lg"
          >
            <ul className="space-y-3 text-center font-['Poppins']">
              <li>
                <Link className="block hover:text-gray-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center w-full hover:text-gray-400"
                >
                  Shop <ChevronDown size={18} className="ml-1" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-2"
                    >
                      {["Men", "Women", "Kids"].map((category) => (
                        <li key={category}>
                          <Link
                            to={`/shop/${category.toLowerCase()}`}
                            className="block py-2 hover:text-gray-400"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link className="block hover:text-gray-400" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="block hover:text-gray-400" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex justify-center space-x-6 mt-4">
              {/* Shopping Cart */}
              <div className="relative cursor-pointer hover:text-gray-400">
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cart.length}
                  </span>
                )}
              </div>
              <User className="hover:text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
