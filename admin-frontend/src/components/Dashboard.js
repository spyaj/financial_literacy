// import React from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
//       <div className="space-x-4">
//         <Link
//           to="/dashboard/users"
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//         >
//           Manage Users
//         </Link>
//         <Link
//           to="/dashboard/videos"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Manage Videos
//         </Link>
//         <Link
//           to="/dashboard/quizzes"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Quiz
//         </Link>
//         {/* <Link
//           to="/"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Log out
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the function passed as a prop
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
      <div className="space-x-4 mb-4">
        <Link
          to="/dashboard/users"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Manage Users
        </Link>
        <Link
          to="/dashboard/videos"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Videos
        </Link>
        <Link
          to="/dashboard/quizzes"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Quiz
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
