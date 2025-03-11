import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-left font-['poppins']">
        Shop by category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            whileTap={{ scale: 1.05 }} // Click effect
            animate={zoomed === category.id ? { scale: 1.1 } : { scale: 1 }} // Smooth zoom animation
            transition={{ duration: 0.3 }}
            onClick={() => setZoomed(category.id === zoomed ? null : category.id)}
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-[550px] object-cover transition-transform duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }} // Hover zoom effect
            />
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent zoom when clicking the button
                navigate(`/${category.id}`);
              }}
              className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-[#111827]  text-white px-6 py-2 rounded-md font-semibold transition-transform duration-300 group-hover:scale-105 font-['poppins']"
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
