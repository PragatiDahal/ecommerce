import React, { useEffect, useState } from "react";
import axios from "axios";

const Men = ({ addToCart }) => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [shoeProducts, setShoeProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [clothingRes, shoeRes] = await Promise.all([
          axios.get("http://localhost:8000/api/Menclothing"),
          axios.get("http://localhost:8000/api/Menshoes"),
        ]);

        setClothingProducts(clothingRes.data);
        setShoeProducts(shoeRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold py-10">
        Loading products...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Clothing Section */}
      <div className="bg-gray-100 py-10 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center inline-block px-6 py-2 rounded-lg">
          Clothing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {clothingProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`http://localhost:8000${product.image}`}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  Rs. {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shoes Section */}
      <div className="bg-gray-100 py-10 mt-16 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center inline-block px-6 py-2 rounded-lg">
          Shoes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {shoeProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`http://localhost:8000${product.image}`}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
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
