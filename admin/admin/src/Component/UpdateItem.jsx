// src/Component/UpdateItem.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateItem = ({ apiRoute }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [itemData, setItemData] = useState({ name: "", price: "", image: "" });
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // State for image preview

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/${apiRoute}/${id}`);
        setItemData(res.data);
        setPreviewImage(`http://localhost:8000${res.data.image}`); // Set initial image preview
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };
    fetchItem();
  }, [id, apiRoute]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", itemData.name);
      formData.append("price", itemData.price);
      if (file) formData.append("image", file);

      await axios.put(`http://localhost:8000/api/${apiRoute}/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Item updated successfully!");
      navigate("/admin"); // Redirect to dashboard
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item.");
    }
  };

  // Handle image file change and set preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile)); // Create image preview URL
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-6">Update Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={itemData.name}
          onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={itemData.price}
          onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Price"
          required
        />
        
        {/* Image preview section */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Image Preview</label>
          <div className="mt-2">
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="h-32 w-32 object-cover rounded mb-4"
              />
            )}
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
