import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu item animation variant
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-[#111827] text-white py-4 px-6 md:px-16">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Section: Mobile Menu Button & Navbar Links */}
        <div className="flex items-center space-x-6">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navbar Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 font-['Poppins']">
            {["Home", "Shop", "About", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.3 }}
                variants={itemVariants}
              >
                <Link className="hover:text-gray-400 transition duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Center Section: Logo */}
        <div className="text-xl font-bold font-['Poppins'] absolute left-1/2 transform -translate-x-1/2">
          &STITCH
        </div>

        {/* Right Section: Icons (Only Visible on Desktop) */}
        <div className="hidden md:flex space-x-4">
          {[ShoppingCart, User].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="cursor-pointer hover:text-gray-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#111827]mt-2 p-4 rounded-lg overflow-hidden"
          >
            <ul className="space-y-3 text-center font-['Poppins']">
              {["Home", "Shop", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  variants={itemVariants}
                >
                  <a href="#" className="block hover:text-gray-400 transition duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Cart & User Icons (Mobile Only) */}
            <div className="flex justify-center space-x-6 mt-4">
              {[ShoppingCart, User].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <Icon className="hover:text-gray-400 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
