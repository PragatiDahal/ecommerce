import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddWomenClothingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        image: null,
      });
    
      const [imagePreview, setImagePreview] = useState(null);
    
      const handleChange = (e) => {
        if (e.target.name === "image") {
          const file = e.target.files[0];
          setFormData({ ...formData, image: file });
    
          if (file) {
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);
          } else {
            setImagePreview(null);
          }
        } else {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("image", formData.image);
    
        try {
          await axios.post(
            "http://localhost:8000/api/womenclothing",
            formDataToSend,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
    
          Swal.fire({
            icon: "success",
            title: "Clothing Item Added!",
            text: "The new clothing item has been successfully added.",
            confirmButtonColor: "#facc15", // yellow-400
          });
    
          setFormData({ name: "", price: "", image: null });
          setImagePreview(null);
        } catch (error) {
          console.error("Error adding item:", error);
    
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong while adding the item!",
            footer: "Please check your server and try again.",
            confirmButtonColor: "#ef4444", // red-500
          });
        }
      };
    
      return (
        <div className="flex flex-col items-center mb-10 px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Add Clothing for Women
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md pt-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter clothing name"
                  className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
    
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
                  required
                />
                {imagePreview && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="rounded-lg border w-full object-cover max-h-60"
                    />
                  </div>
                )}
              </div>
    
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
    
              <button
                type="submit"
                className="bg-yellow-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };

export default AddWomenClothingForm;