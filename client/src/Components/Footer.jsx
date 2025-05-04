import React from 'react'
import { FaFacebookF, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">Get connected with us on our social sites:</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold">&STITCH</h2>
          <h3 className="mt-2 text-gray-400 italic">"Fashion that fits your soul"</h3> {/* Add your slogan here */}
        </div>
        <div>
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Follow us for more updates</h3>
          <div className="mt-2 flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 bg-gray-800 text-white focus:outline-none w-full"
            />
            <button className="bg-white text-gray-900 px-4 py-2">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        &copy; 2025 &STITCH. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;
