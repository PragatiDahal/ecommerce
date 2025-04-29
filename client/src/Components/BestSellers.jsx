import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellers = ({ addToCart }) => {
  const [category, setCategory] = useState("women");
  const [products, setProducts] = useState({
    men: [],
    women: [],
    kids: [],
  });

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    const fetchData = async () => {
      try {
        const [menRes, womenRes, kidsRes] = await Promise.all([
          axios.get("http://localhost:8000/api/Menclothing"),
          axios.get("http://localhost:8000/api/Womenclothing"),
          axios.get("http://localhost:8000/api/Kidsclothing"),
        ]);

        setProducts({
          men: menRes.data.slice(0, 3),
          women: womenRes.data.slice(0, 3),
          kids: kidsRes.data.slice(0, 3),
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="container mx-auto my-8 bg-gray-200 p-6 rounded-lg"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Best Sellers
      </h2>

      <div
        className="flex justify-center space-x-6 mb-6"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {["men", "women", "kids"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 font-semibold transition-all duration-300 ${
              category === cat
                ? "border-b-4 border-black text-black"
                : "text-gray-500"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products[category].map((product, index) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={`http://localhost:8000${product.image}`}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">Rs.{product.price}</p>
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

export default BestSellers;
