import React from "react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contact", formData);
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting us.",
        confirmButtonColor: "#facc15", // yellow-400
      });
      setFormData({ name: "", email: "", address: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#f87171", // red-400
      });
    }
  };
  

  return (
    <div>
      {/* Contact Header Section */}
      <div className="relative w-full h-56 md:h-64 lg:h-72 bg-gray-200 flex items-center px-6 md:px-16 lg:px-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/contact.jpg')" }} // Replace with your image path
        ></div>

        {/* Contact Text */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700 mt-2">
            We'd love to hear from you! Whether you have questions, suggestions,
            or collaboration ideas, feel free to reach out.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white p-6 shadow-md">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-gray-800">Contact</h2>
            <p className="text-gray-600 mt-2">
              Phone: <span className="font-medium">9800000000</span>
            </p>
            <p className="text-gray-600">Email: stores&stitch@gmail.com</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                House of Operation
              </h3>
              <p className="text-gray-600">Mon - Fri: 08:30 - 20:00</p>
              <p className="text-gray-600">Sat & Sun: 09:30 - 21:30</p>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4 text-gray-700">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-6 border border-gray-800">
            <h2 className="text-lg font-semibold text-gray-800">
              Get in touch with us
            </h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
