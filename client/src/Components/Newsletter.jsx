import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="w-full mt-10 bg-gray-200 p-6 rounded-lg shadow-lg text-center"
      data-aos="fade-up"
    >
      <button
        className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold mb-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Follow Us
      </button>

      <p className="text-lg font-bold" data-aos="fade-up" data-aos-delay="200">
        @store.&stitch
      </p>

      {/* Images */}
      <div
        className="flex justify-center space-x-4 mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img src="/images/nice.jpg" alt="Fashion 1" className="w-24 h-24 rounded-lg object-cover" />
        <img src="/images/nice3.jpg" alt="Fashion 2" className="w-24 h-24 rounded-lg object-cover" />
        <img src="/images/nice2.jpg" alt="Fashion 3" className="w-24 h-24 rounded-lg object-cover" />
      </div>

      {/* Newsletter */}
      <h2 className="text-xl font-bold mt-6" data-aos="fade-in" data-aos-delay="400">
        NEWSLETTER
      </h2>
      <p className="text-gray-700" data-aos="fade-in" data-aos-delay="500">
        Sign up and get up to 20% off your first purchase
      </p>

      <div
        className="flex items-center bg-white mt-4 p-2 rounded-lg shadow-md max-w-md mx-auto"
        data-aos="zoom-in-up"
        data-aos-delay="600"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 outline-none text-gray-800"
        />
        <button className="text-gray-800">
          <span role="img" aria-label="send">📩</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
