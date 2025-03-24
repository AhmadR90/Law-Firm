import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImage from "../assets/Login.jpg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Successfully!", { position: "top-center" });
    console.log("Login Data:", formData);
    setFormData("")
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center text-amber-50">
        <div className="p-10 rounded-2xl shadow-lg w-[500px] bg-gray-950 border border-amber-500">
          <h2 className="text-4xl font-bold text-center mb-6 text-amber-400">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-amber-400 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-amber-400 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-amber-500 text-gray-900 p-3 rounded-lg hover:bg-amber-600 transition font-bold"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Don't have an account? 
            <Link to="/register" className="text-amber-500 hover:underline"> Register here</Link>
          </p>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="w-1/2 hidden md:block">
        <img 
          src={LoginImage}
          alt="Login" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginForm;
