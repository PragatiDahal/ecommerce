import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const registerSchema = z.object({
  username: z
    .string()
    .nonempty("Username is required.")
    .regex(/^[A-Za-z][A-Za-z0-9]*\s?[A-Za-z0-9]*$/, "Invalid username format."),
  email: z
    .string()
    .nonempty("Email is required.")
    .regex(
      /^([A-Za-z0-9]+(?:[.#_][A-Za-z\d]+)*@[A-Za-z]+)(\.[A-Za-z]{2,3})$/,
      "Invalid email format."
    ),
  phone: z
    .string()
    .nonempty("Phone number is required.")
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/,
      "Password must include uppercase, lowercase, a digit, and a special character."
    ),
});

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        data
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You can now log in.",
        }).then(() => {
          navigate("/login");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div
        className="bg-[#39445B] p-10 rounded-lg shadow-lg flex w-full max-w-4xl"
        data-aos="fade-up" // Adding fade-up animation for the outer container
      >
        <div
          className="w-1/2 hidden md:block"
          data-aos="fade-right" // Adding fade-right animation for the image section
        >
          <img
            src="/images/about.jpg"
            alt="Registration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-6"
          data-aos="fade-left" // Adding fade-left animation for the form section
        >
          <h2 className="text-2xl font-bold text-white mb-5 text-center">
            Register Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative" data-aos="fade-up">
              <User className="absolute left-3 top-3  text-gray-500" size={18} />
              <input
                type="text"
                {...register("username")}
                placeholder="Username"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="relative" data-aos="fade-up">
              <Mail className="absolute left-3 top-3  text-gray-500" size={18} />
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="relative" data-aos="fade-up">
              <Phone className="absolute left-3 top-3  text-gray-500" size={18} />
              <input
                type="text"
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="relative" data-aos="fade-up">
              <Lock className="absolute left-3 top-3  text-gray-500" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
                } text-white py-2 rounded-md transition`}
              data-aos="fade-up" // Adding fade-up animation for the submit button
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-[#EAB308] font-semibold">
              Signin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
