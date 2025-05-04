import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users on component mount
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to load user data.",
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:8000/api/users/${id}`);
        Swal.fire("Deleted!", "The user has been deleted.", "success");
        fetchUsers(); // refresh after deletion
      } catch (error) {
        console.error("Delete failed", error);
        Swal.fire("Error", "Could not delete user. Try again.", "error");
      }
    }
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">User List</h2>
      {users.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Phone</th>
              <th className="py-2 px-4 border-b text-left">Role</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">{user.role || "User"}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No users available.</p>
      )}
    </div>
  );
};

export default UserTable;
