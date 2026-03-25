import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/get-all-users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-6">
        {/* Title */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            User Management
          </h2>

          <Link to={"/create"} className="flex items-center justify-center bg-green-500 cursor-pointer hover:bg-green-600 text-white px-3 rounded mb-2">
            Add User +
          </Link>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            {/* Head */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-gray-700">
              {data.map((d, i) => (
                <tr key={i}>
                  <td className="py-3 px-4">{d.name}</td>
                  <td className="py-3 px-4">{d.phone}</td>
                  <td className="py-3 px-4">{d.email}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
                      Edit
                    </button>
                    <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
