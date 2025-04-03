import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1D5DB]">
      <div className="bg-[#39445B] p-10 rounded-lg shadow-lg flex w-[800px]">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/images/ab.jpg"
            alt="Login"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-bold text-white mb-5 text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div>
              <label className="text-sm font-medium text-white">
                Username*
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
            <div>
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
            <div>
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
              className="w-full bg-[#EAB308] text-gray-700  py-2 rounded-md"
            >
              Login
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
