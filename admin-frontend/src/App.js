// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import AdminLogin from "./components/AdminLogin";
// import Dashboard from "./components/Dashboard";
// import UserManagement from "./components/UserManagement";
// import VideoManagement from "./components/VideoManagment";
// import QuizManagement from "./components/QuizManagement";
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   return (
//     <Router>
//       <Routes>
//         <Route path="/">
//           <Route
//             index
//             element={
//               isLoggedIn ? (
//                 <Navigate to="/dashboard" replace />
//               ) : (
//                 <AdminLogin onLogin={() => setIsLoggedIn(true)} />
//               )
//             }
//           />
//           <Route path="/dashboard">
//             <Route index element={<Dashboard />} />
//             <Route path="/dashboard/users" element={<UserManagement />} />
//             <Route path="/dashboard/videos" element={<VideoManagement />} />
//             <Route path="/dashboard/quizzes" element={<QuizManagement />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import VideoManagement from "./components/VideoManagment";
import QuizManagement from "./components/QuizManagement";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <AdminLogin onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )}
        />
        <Route
          path="/dashboard/users"
          element={isLoggedIn ? <UserManagement /> : <Navigate to="/" replace />}
        />
        <Route
          path="/dashboard/videos"
          element={isLoggedIn ? <VideoManagement /> : <Navigate to="/" replace />}
        />
        <Route
          path="/dashboard/quizzes"
          element={isLoggedIn ? <QuizManagement /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
