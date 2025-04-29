import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    id: "men",
    name: "MEN",
    image: "/images/mens.jpg",
  },
  {
    id: "women",
    name: "WOMEN",
    image: "/images/women.jpg",
  },
  {
    id: "kids",
    name: "KIDS",
    image: "/images/kids.jpg",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-10"
      data-aos="fade-up"
    >
      <h2
        className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-left font-['poppins']"
        data-aos="fade-right"
      >
        Shop by category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            whileTap={{ scale: 1.05 }}
            animate={zoomed === category.id ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setZoomed(category.id === zoomed ? null : category.id)}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-[550px] object-cover transition-transform duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/${category.id}`);
              }}
              className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-[#111827] text-white px-6 py-2 rounded-md font-semibold transition-transform duration-300 group-hover:scale-105 font-['poppins']"
            >
              {category.name}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
