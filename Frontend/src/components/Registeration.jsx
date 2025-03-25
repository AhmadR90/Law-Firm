import React, { useState } from "react";
import Login from "../assets/Login.jpg";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "client",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="p-8 w-full max-w-md bg-gray-950 border border-amber-500 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-amber-400">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-amber-400 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
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
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border border-amber-400 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            >
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className="w-full bg-amber-500 text-gray-900 p-3 rounded-lg hover:bg-amber-600 transition font-bold"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
        <img 
          src={Login}
          alt="Registration" 
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
