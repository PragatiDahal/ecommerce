import { useState } from "react";
import {Link} from "react-router-dom";

const AdminDashboard = () => {
  const [clothingItems, setClothingItems] = useState([
    {
      id: 1,
      name: "V Neck Swiss Dot Blouse",
      price: 1200,
      image: "/images/bs1.jpg",
    },
    {
      id: 2,
      name: "Brown Blazer",
      price: 1200,
      image: "/images/blazer.jpg",
    },
  ]);

  const [shoes, setShoes] = useState([
    {
      id: 3,
      name: "Red Heels",
      price: 1200,
      image: "/images/wshoe1.jpg",
    },
    {
      id: 4,
      name: "Black Boots",
      price: 1200,
      image: "/images/wshoe.jpg",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
            <Link to ="/addclothing">
          <button className="block text-left w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
            Add clothing
          </button>
          </Link>
          <button className="block text-left w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
            Add shoes
          </button>
        </nav>
        <button className="mt-8 bg-yellow-500 w-full py-2 rounded hover:bg-yellow-600">
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Women Clothing Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Women Clothing</h2>
          <div className="grid grid-cols-2 gap-6">
            {clothingItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[450px] object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
                <div className="flex justify-between mt-3">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                    Update
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Women Shoes Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Women Shoes</h2>
          <div className="grid grid-cols-2 gap-6">
            {shoes.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[450px] object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
                <div className="flex justify-between mt-3">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
                    Update
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
