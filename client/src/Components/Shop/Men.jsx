import React from "react";

const clothingProducts = [
  { id: 1, name: "Casual T-shirt", price: "Rs. 2500", image: "/images/t-shirt1.jpg" },
  { id: 2, name: "Half-sleeve shirt", price: "Rs. 2500", image: "/images/shortsleeve.jpg" },
  { id: 3, name: "Full-sleeve shirt", price: "Rs. 3000", image: "/images/shirt.jpg" },
  { id: 4, name: "Jeans", price: "Rs. 3500", image: "/images/pants.jpg" },
  { id: 5, name: "Hoodie", price: "Rs. 4000", image: "/images/hoodie.jpg" },
  { id: 6, name: "Pants", price: "Rs. 4500", image: "/images/pant.jpg" },
];

const shoeProducts = [
  { id: 7, name: "Formal shoes", price: "Rs. 5000", image: "/images/menshoe.jpg" },
  { id: 8, name: "Boots", price: "Rs. 4500", image: "/images/menshoe1.jpg" },
  { id: 9, name: "Casual shoes", price: "Rs. 6000", image: "/images/menshoe2.jpg" },
  { id: 10, name: "Nike shoes", price: "Rs. 7000", image: "/images/menshoe3.jpg" },
  { id: 11, name: "Lofar shoes", price: "Rs.3500", image: "/images/menshoe4.jpg" },
  { id: 12, name: "Party shoes", price: "Rs. 3000", image: "/images/menshoe5.jpg" },
];

const Men = () => {
  return (
    <div className="container mx-auto p-6">
  {/* Clothing Section */}
  <div className="bg-gray-100 py-10 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center  inline-block px-6 py-2 rounded-lg">
      Clothing
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {clothingProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.name} className="w-full h-[450px] object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-700 text-lg font-medium">{product.price}</p>
            <button className="mt-3 bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Shoes Section */}
  <div className="bg-gray-100 py-10 mt-16 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center  inline-block px-6 py-2 rounded-lg">
      Shoes
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {shoeProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.name} className="w-full h-[450px] object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-700 text-lg font-medium">{product.price}</p>
            <button className="mt-3 bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Men;
