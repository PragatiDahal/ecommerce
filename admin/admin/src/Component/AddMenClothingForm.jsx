import { useState } from "react";
import axios from "axios";

const AddMenClothingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null, // File upload instead of URL
  });

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] }); // File upload
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("image", formData.image);

    try {
      await axios.post(
        "http://localhost:8000/api/menClothing",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setFormData({ name: "", price: "", image: null }); // Reset form fields
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-lg font-semibold mb-4">Add Clothing for Men</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenClothingForm;

