import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1D5DB]">
      <div className="bg-[#39445B] p-10 rounded-lg shadow-lg flex w-[800px]">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/images/about.jpg"
            alt="Hostel"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-bold text-white mb-5 text-center">
            Register Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-600" size={18} />
              <input
                type="text"
                {...register("username")}
                placeholder="Username"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-600" size={18} />
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-600" size={18} />
              <input
                type="text"
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-600" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="w-full p-2 pl-10 mt-1 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#EAB308] text-gray-800 py-2 rounded-md "
            >
              Signup
            </button>
          </form>

          {/* Signin Link */}
          <p className="text-sm text-white mt-4 text-center">
            Already have an account? {" "}
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
