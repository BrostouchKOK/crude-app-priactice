import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const {id} = useParams();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/api/update-user/${id}`, formData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="max-w-md mx-auto mt-10 px-6 py-7 bg-gray-100 shadow-md roudned">
      <h2 className="text-2xl font-bold mb-4">Update User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-2">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="number"
            name="phone"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your phone number"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-5">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
