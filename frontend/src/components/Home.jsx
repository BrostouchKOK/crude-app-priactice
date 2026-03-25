import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          My CRUD App
        </h2>

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
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">012345678</td>
                <td className="py-3 px-4">john@example.com</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-100 transition">
                <td className="py-3 px-4">Jane Smith</td>
                <td className="py-3 px-4">098765432</td>
                <td className="py-3 px-4">jane@example.com</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;