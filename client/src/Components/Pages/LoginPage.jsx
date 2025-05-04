import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

// Simplified validation schema
const loginSchema = z.object({
  username: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    // Initialize AOS after the component mounts
    AOS.init();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/login", data);
      console.log("Login Successful:", response.data);

      await Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid credentials. Please try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1D5DB]">
      <div className="bg-[#39445B] p-10 rounded-lg shadow-lg flex w-[800px]">
        {/* Left Side - Image */}
        <div
          className="w-1/2 hidden md:block"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/images/ab.jpg"
            alt="Login"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-bold text-white mb-5 text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-sm font-medium text-white">
                Name*
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="text"
                  {...register("username")}
                  className="w-full pl-10 p-2 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>

            {/* Email */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <label className="text-sm font-medium text-white">Email*</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="email"
                  {...register("email")}
                  className="w-full pl-10 p-2 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <label className="text-sm font-medium text-white">
                Password*
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full pl-10 pr-10 p-2 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-2 rounded-md ${
                loading ? "bg-gray-400" : "bg-[#EAB308] text-gray-700"
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-white mt-4 text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-[#EAB308] font-semibold">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
