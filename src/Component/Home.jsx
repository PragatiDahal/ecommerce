import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-8 pt-12 md:p-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#556B2F] mb-4 font-[poppins]">
            & STITCH
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-[#A1A874] mb-6 font-[poppins]">
            Crafting threads that tell your story, one stitch at a time.
          </p>
          <button className="bg-[#556B2F] text-white py-2 px-6 rounded-full hover:bg-[#A1A874] transition duration-300 font-[poppins]">
            Explore
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="relative w-full md:w-1/2 h-auto flex justify-end items-center">
          <img
            src="ecommerce1.jpg" // Replace with your image URL
            alt="Fashion Model"
            className="object-contain w-full max-w-[100%] max-h-[60vh] md:max-h-screen"
          />
          {/* Circular Button over the image (Visible only on larger screens) */}
          <div className="absolute top-1/2 left-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-[#556B2F] font-[poppins] text-white py-2 px-4 rounded-full hidden md:block">
            SHOP
          </div>
        </div>
      </div>

      <Product />
    </>
  );
};

export default Home;
