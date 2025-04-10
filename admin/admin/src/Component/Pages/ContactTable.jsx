import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts on component mount
  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to load contact data.",
      });
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the contact.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:8000/api/contacts/${id}`);
        Swal.fire("Deleted!", "The contact has been deleted.", "success");
        fetchContacts(); // refresh after deletion
      } catch (error) {
        console.error("Delete failed", error);
        Swal.fire("Error", "Could not delete contact. Try again.", "error");
      }
    }
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Submissions</h2>
      {contacts.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Address</th>
              <th className="py-2 px-4 border-b text-left">Message</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{contact.name}</td>
                <td className="py-2 px-4 border-b">{contact.email}</td>
                <td className="py-2 px-4 border-b">{contact.address}</td>
                <td className="py-2 px-4 border-b">{contact.message}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(contact._id)}
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
        <p className="text-gray-600">No contacts available.</p>
      )}
    </div>
  );
};

export default ContactTable;
