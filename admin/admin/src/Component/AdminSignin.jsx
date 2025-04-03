import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const navigate = useNavigate();

  // State for storing user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const validCredentials = {
    username: "admin",
    password: "admin123", 
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Validate input fields
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // Check credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      localStorage.setItem("authToken", "dummy-auth-token"); 
      setError(""); 
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#D1D5DB] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#39445B] flex flex-col md:flex-row items-center mx-auto rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 h-full p-4">
          <img
            src="/images/ab.jpg"
            className="w-auto h-auto max-w-full max-h-full rounded-lg"
            alt="login"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-[#39445B] rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center">Admin LogIn</h2>
          <form className="space-y-6 mt-8" onSubmit={handleLogin}>
            {/* Error Message */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Username Input */}
            <div>
              <label className="block text-white font-medium mb-2">Username*</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-white font-medium mb-2">Password*</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#EAB308] text-[#111827] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EAB308]"
            >
              Login to my account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;