import React from 'react'

const SaleEvent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-full max-w-4xl">
      {/* Left Image Section */}
      <div className="w-1/2">
        <img
          src="/images/shop.jpg"
          alt="Sale Event"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gray-200">
        <h2 className="text-gray-600 text-sm font-semibold">SALE EVENT</h2>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">Summer Shirt</h1>
        <p className="text-gray-700 text-lg font-semibold mt-2">Limited Offer - 20% off</p>
        <p className="text-gray-600 text-sm mt-2">
          Until 10/06/24, Use code <span className="font-bold">FESTIVE</span> to get discount
        </p>
        <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-yellow-600">
          Shop Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default SaleEvent