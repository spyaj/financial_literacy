import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "./api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await instance.get("/users");
        setUsers(data);
      } catch (error) {
        setError("Failed to load users");
      }
    };
    fetchUsers();
  }, []);

  // Delete user function
  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await instance.delete(`/users/${userId}`);
        setUsers(users.filter((user) => user._id !== userId)); // Update UI
      } catch (error) {
        setError("Failed to delete user");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <div className=" flex gap-5 my-6">
        
        <Link
          to="/dashboard"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/Videos"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Videos
        </Link>
        <Link
          to="/dashboard/quizzes"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Quiz
        </Link>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
