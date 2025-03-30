import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const trendingProducts = [
  {
    id: 1,
    name: "Long Sleeves Shirt",
    price: "Rs.1800",
    image: "/images/shirt.jpg",
  },
  {
    id: 2,
    name: "Frock with Bow",
    price: "Rs.2500",
    image: "/images/frock.jpg",
  },
  {
    id: 3,
    name: "Women's Flare Pant",
    price: "Rs.3000",
    image: "/images/flarepant.jpg",
  },
  {
    id: 4,
    name: "Casual Blazer",
    price: "Rs.3500",
    image: "/images/blazer.jpg",
  },
  {
    id: 5,
    name: "Stylish Hoodie",
    price: "Rs.2800",
    image: "/images/hoodie.jpg",
  },
];

const Trending = ({ cart, setCart }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for large screens

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
      prevIndex + itemsPerPage >= trendingProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? trendingProducts.length - itemsPerPage : prevIndex - 1
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); 
  };

  return (
    <section className="container mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">TRENDINGS</h2>

      {/* Carousel Navigation */}
      <div className="flex justify-between items-center mb-4">
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

      {/* Product Cards in Carousel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingProducts.slice(index, index + itemsPerPage).map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
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
