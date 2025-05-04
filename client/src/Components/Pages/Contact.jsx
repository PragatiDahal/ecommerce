import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

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
        confirmButtonColor: "#facc15",
      });
      setFormData({ name: "", email: "", address: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#f87171",
      });
    }
  };

  return (
    <div>
      {/* Contact Header Section */}
      <div className="relative w-full h-56 md:h-64 lg:h-72 bg-gray-200 flex items-center px-6 md:px-16 lg:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/contact.jpg')" }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700 mt-2">
            We'd love to hear from you! Whether you have questions, suggestions,
            or collaboration ideas, feel free to reach out.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full flex flex-col md:flex-row bg-white p-6 shadow-md"
        >
          {/* Left - Info */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-gray-800">Contact</h2>
            <p className="text-gray-600 mt-2">
              Phone: <span className="font-medium">9800000000</span>
            </p>
            <p className="text-gray-600">Email: stores&stitch@gmail.com</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Hours of Operation
              </h3>
              <p className="text-gray-600">Mon - Fri: 08:30 - 20:00</p>
              <p className="text-gray-600">Sat & Sun: 09:30 - 21:30</p>
            </div>

            <div className="mt-6 flex space-x-4 text-gray-700">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className="text-2xl cursor-pointer"
                >
                  <Icon className="hover:text-yellow-500" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 p-6 border border-gray-800"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Get in touch with us
            </h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              {["name", "email", "address"].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-gray-700 font-medium capitalize">
                    {field} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
                    placeholder={`Enter your ${field}`}
                    required
                  />
                </div>
              ))}
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
