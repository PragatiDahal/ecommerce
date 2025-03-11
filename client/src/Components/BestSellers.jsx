import React, { useState } from "react";

const products = {
  men: [
    { id: 1, name: "Casual Shirt", price: "Rs.2500", image: "/images/men-shirt.jpg" },
    { id: 2, name: "Slim Fit Jeans", price: "Rs.3200", image: "/images/men-jeans.jpg" },
    { id: 3, name: "Sports Sneakers", price: "Rs.4500", image: "/images/men-sneakers.jpg" },
  ],
  women: [
    { id: 4, name: "V Neck Swiss Dot Blouse", price: "Rs.3200", image: "/images/bs1.jpg" },
    { id: 5, name: "Wide Leg Jeans", price: "Rs.3500", image: "/images/jean.jpg" },
    { id: 6, name: "Nike Air Jordan", price: "Rs.8000", image: "/images/jordan.jpg" },
  ],
  kids: [
    { id: 7, name: "Cartoon Printed T-Shirt", price: "Rs.1500", image: "/images/kids-shirt.jpg" },
    { id: 8, name: "Denim Shorts", price: "Rs.1800", image: "/images/kids-shorts.jpg" },
    { id: 9, name: "Kids Sneakers", price: "Rs.3000", image: "/images/kids-sneakers.jpg" },
  ],
};

const BestSellers = () => {
  const [category, setCategory] = useState("women"); // Default category

  return (
    <section className="container mx-auto my-8 bg-gray-200 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Best Sellers</h2>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 mb-6">
        {Object.keys(products).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 font-semibold transition-all duration-300 ${
              category === cat ? "border-b-4 border-black text-black" : "text-gray-500"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products[category].map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-yellow-500 text-black px-4 py-2 mt-2 rounded-md w-[200px]">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
