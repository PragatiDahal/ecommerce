import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#556B2F] text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Email Subscription */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl font-bold font-[poppins] text-white mb-4 md:mb-0">
            & STITCH
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black w-full md:w-auto font-[poppins] "
            />
            <button className="bg-[#A1A874] text-white py-2 px-6 rounded-md mt-2 md:mt-0 md:ml-2 hover:bg-[#556B2F] font-[poppins] ">
              Join Us
            </button>
          </div>
        </div>

        {/* Middle Section - Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h2 className="font-bold mb-4 font-[poppins] ">Why people like us!</h2>
            <p className="text-sm leading-relaxed font-[poppins] ">
              People appreciate us because we offer garments woven with care and
              crafted to perfection. Our commitment to quality fabrics ensures a
              comfortable yet stylish experience.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="font-bold mb-4 font-[poppins]">Shop Info</h2>
            <ul className="space-y-2 font-[poppins]">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy & Terms</li>
              <li>Conditions</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-bold mb-4 font-[poppins]">Account</h2>
            <ul className="space-y-2 font-[poppins]">
              <li>My Account</li>
              <li>Shop Details</li>
              <li>Shopping Cart</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="font-bold mb-4 font-[poppins]">Contact</h2>
            <p className="text-sm font-[poppins]">
              Address: New Baneshwor, Kathmandu 44600
            </p>
            <p className="text-sm font-[poppins]">Email: stitch@gmail.com</p>
            <p className="text-sm font-[poppins]">Phone: (+977) 9808080808</p>
          </div>
        </div>

        {/* Bottom Section - Social Media Icons */}
        <div className="flex justify-center md:justify-end items-center mt-8 space-x-4">
          <FaFacebook size={24} className="cursor-pointer hover:text-[#A1A874]" />
          <FaInstagram size={24} className="cursor-pointer hover:text-[#A1A874]" />
          <FaYoutube size={24} className="cursor-pointer hover:text-[#A1A874]" />
          <FaTwitter size={24} className="cursor-pointer hover:text-[#A1A874]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
