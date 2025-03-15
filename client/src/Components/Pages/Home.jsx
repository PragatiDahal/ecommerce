import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CategorySection from "../CategorySection";
import BestSellers from "../BestSellers";
import Trending from "../Trending";
import SaleEvent from "../SaleEvent";
import Newsletter from "../Newsletter";

const carouselData = [
  {
    id: 1,
    title: "Men’s New Arrival",
    description: "New colors, now also available in men’s sizing",
    image: "/images/menh.png",
    link: "/men-collection",
  },
  {
    id: 2,
    title: "Women’s New Collection",
    description: "Discover our latest collection for women.",
    image: "/images/women.jpg",
    link: "/women-collection",
  },
  {
    id: 3,
    title: "Kids’ Trendy Styles",
    description: "Fun and comfy outfits for kids.",
    image: "/images/nice3.jpg",
    link: "/kids-collection",
  },
];

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="pt-12 relative w-full h-[400px] md:h-[680px] overflow-hidden bg-[#D1D5DB] flex items-center justify-center z-10">
        <AnimatePresence>
          {carouselData.map((item, index) =>
            index === currentIndex ? (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 md:p-12 gap-6 md:gap-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12">
                  <p className="text-[#111827] text-sm md:text-xl font-['Poppins']">
                    New Collection
                  </p>
                  <h2 className="text-xl md:text-4xl font-bold mb-2 text-[#111827] font-['Poppins']">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-lg mb-4 text-[#111827] font-['Poppins']">
                    {item.description}
                  </p>
                  <button
                    className="bg-[#EAB308]  px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-yellow-500 text-[#111827] font-['Poppins']"
                    onClick={() => navigate(item.link)}
                  >
                    View Collection
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[80%] md:w-full h-auto object-contain rounded-md shadow-lg"
                  />
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <CategorySection />
      <BestSellers />
      <Trending />
      <SaleEvent />
      <Newsletter />
    </>
  );
}
