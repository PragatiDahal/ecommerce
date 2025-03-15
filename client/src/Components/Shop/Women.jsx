import React from 'react'
const clothingProducts = [
    { id: 1, name: "V-Neck Stride Drill Blouse", price: "Rs. 2000", image: "/images/bs1.jpg" },
    { id: 2, name: "Casual shirt", price: "Rs. 2500", image: "/images/shirt1.jpg" },
    { id: 3, name: "Wide leg jeans", price: "Rs. 3000", image: "/images/jean.jpg" },
    { id: 4, name: "Casual Blazer", price: "Rs. 3500", image: "/images/blazer.jpg" },
    { id: 5, name: "Flare pant", price: "Rs. 4000", image: "/images/flarepant.jpg" },
    { id: 6, name: "Bow tie shirt", price: "Rs. 4500", image: "/images/Bowtie.jpg" },
  ];
  
  const shoeProducts = [
    { id: 7, name: "Long Boots", price: "Rs. 5,000", image: "/images/wshoe.jpg" },
    { id: 8, name: "Pencil heel ", price: "Rs. 4,500", image: "/images/wshoe1.jpg" },
    { id: 9, name: "Lofar shoes", price: "Rs. 6,000", image: "/images/wshoe2.jpg" },
    { id: 10, name: "Slipper", price: "Rs. 3,500", image: "/images/wshoe3.jpg" },
    { id: 11, name: "Jordan shoes", price: "Rs. 7,000", image: "/images/jordan.jpg" },
    { id: 12, name: "Vans shoes", price: "Rs. 3,000", image: "/images/wshoe4.jpg" },
  ];

const Women = () => {
  return (
    <div className="container mx-auto p-6">
  {/* Clothing Section */}
  <div className="bg-gray-100 py-10 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center inline-block px-6 py-2 rounded-lg">
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
  )
}

export default Women