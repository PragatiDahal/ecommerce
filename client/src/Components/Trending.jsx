import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Trending = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/trending");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    };

    fetchTrendingProducts();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? products.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <section
      className="container mx-auto my-8 bg-white p-6 rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center mb-6"
        data-aos="fade-down"
      >
        TRENDINGS
      </h2>

      <div
        className="flex justify-between items-center mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          onClick={prevSlide}
          className="p-2 bg-black text-white rounded-full mx-2"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black text-white rounded-full mx-2"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(index, index + itemsPerPage).map((product, i) => (
          <div
            key={product._id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <img
              src={`http://localhost:8000${product.image}`}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-500 text-black px-4 py-2 mt-2 rounded-md w-[200px]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
