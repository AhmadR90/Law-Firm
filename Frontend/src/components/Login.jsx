import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/Login.jpg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!", { position: "top-center" });
      return;
    }

    toast.success("Login Successfully!", { position: "top-center", autoClose: 2000 });

    console.log("Login Data:", formData);

    setFormData({
      email: "",
      password: "",
     
    });
    navigate("/client")
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="p-8 w-full max-w-md bg-gray-950 border border-amber-500 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-amber-400">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
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
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
        <img 
          src={LoginImage}
          alt="Login" 
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginForm;