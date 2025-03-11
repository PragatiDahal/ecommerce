import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full  mt-10 bg-gray-200 p-6 rounded-lg shadow-lg text-center">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold mb-2">Follow Us</button>
        <p className="text-lg font-bold">@store.&stitch</p>
        
        {/* Images */}
        <div className="flex justify-center space-x-4 mt-4">
          <img src="/images/nice.jpg" alt="Fashion 1" className="w-24 h-24 rounded-lg object-cover" />
          <img src="/images/nice3.jpg" alt="Fashion 2" className="w-24 h-24 rounded-lg object-cover" />
          <img src="/images/nice2.jpg" alt="Fashion 3" className="w-24 h-24 rounded-lg object-cover" />
        </div>
        
        {/* Newsletter */}
        <h2 className="text-xl font-bold mt-6">NEWSLETTER</h2>
        <p className="text-gray-700">Sign up and get up to 20% off your first purchase</p>
        
        <div className="flex items-center bg-white mt-4 p-2 rounded-lg shadow-md max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 outline-none text-gray-800"
          />
          <button className="text-gray-800">
            <span role="img" aria-label="send">📩</span>
          </button>
        </div>
      </div>
  )
}

export default Newsletter