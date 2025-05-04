// AdminDashboard.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [womenClothing, setWomenClothing] = useState([]);
  const [womenShoes, setWomenShoes] = useState([]);
  const [menClothing, setMenClothing] = useState([]);
  const [menShoes, setMenShoes] = useState([]);
  const [kidsClothing, setKidsClothing] = useState([]);
  const [kidsShoes, setKidsShoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          womenClothingRes,
          womenShoesRes,
          menClothingRes,
          menShoesRes,
          kidsClothingRes,
          kidsShoesRes,
        ] = await Promise.all([
          axios.get("http://localhost:8000/api/Womenclothing"),
          axios.get("http://localhost:8000/api/Womenshoes"),
          axios.get("http://localhost:8000/api/Menclothing"),
          axios.get("http://localhost:8000/api/Menshoes"),
          axios.get("http://localhost:8000/api/Kidsclothing"),
          axios.get("http://localhost:8000/api/Kidsshoes"),
        ]);

        setWomenClothing(womenClothingRes.data);
        setWomenShoes(womenShoesRes.data);
        setMenClothing(menClothingRes.data);
        setMenShoes(menShoesRes.data);
        setKidsClothing(kidsClothingRes.data);
        setKidsShoes(kidsShoesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (id, category) => {
    navigate(`/update/${category}/${id}`);
  };

  const handleDelete = async (id, category) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    const endpoints = {
      womenClothing: "Womenclothing",
      womenShoes: "Womenshoes",
      menClothing: "Menclothing",
      menShoes: "Menshoes",
      kidsClothing: "Kidsclothing",
      kidsShoes: "Kidsshoes",
    };

    try {
      await axios.delete(
        `http://localhost:8000/api/${endpoints[category]}/${id}`
      );

      const updateState = (setFunc, list) =>
        setFunc(list.filter((item) => item._id !== id));

      switch (category) {
        case "womenClothing":
          updateState(setWomenClothing, womenClothing);
          break;
        case "womenShoes":
          updateState(setWomenShoes, womenShoes);
          break;
        case "menClothing":
          updateState(setMenClothing, menClothing);
          break;
        case "menShoes":
          updateState(setMenShoes, menShoes);
          break;
        case "kidsClothing":
          updateState(setKidsClothing, kidsClothing);
          break;
        case "kidsShoes":
          updateState(setKidsShoes, kidsShoes);
          break;
        default:
          break;
      }

      alert("Item deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete the item. Please try again.");
    }
  };

  const renderTable = (data, title, category) => (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Image</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b">
                  <img
                    src={`http://localhost:8000${item.image}`}
                    alt={item.name}
                    className="h-24 w-24 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">Rs. {item.price}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button
                    onClick={() => handleUpdate(item._id, category)}
                    className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id, category)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
        <Link to="/user">
          <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
            User Details
          </button>
          </Link>
          <Link to="/contact">
          <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
            Contacts
          </button>
          </Link>
          <Link to="/addmenclothing">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Men Clothing
            </button>
          </Link>
          <Link to="/addwomenclothing">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Women Clothing
            </button>
          </Link>
          <Link to="/addkidclothing">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Kids Clothing
            </button>
          </Link>
          <Link to="/addmenshoes">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Men Shoes
            </button>
          </Link>
          <Link to="/addwomenshoes">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Women Shoes
            </button>
          </Link>
          <Link to="/addkidshoes">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add Kids Shoes
            </button>
          </Link>
          <Link to="/trending">
            <button className="block w-full py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
              Add trendings
            </button>
          </Link>
        </nav>
        <Link to="/">
          <button className="mt-8 bg-yellow-500 w-full py-2 rounded hover:bg-yellow-600">
            Log Out
          </button>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderTable(womenClothing, "Women Clothing", "womenClothing")}
        {renderTable(womenShoes, "Women Shoes", "womenShoes")}
        {renderTable(menClothing, "Men Clothing", "menClothing")}
        {renderTable(menShoes, "Men Shoes", "menShoes")}
        {renderTable(kidsClothing, "Kids Clothing", "kidsClothing")}
        {renderTable(kidsShoes, "Kids Shoes", "kidsShoes")}
      </main>
    </div>
  );
};

export default AdminDashboard;
