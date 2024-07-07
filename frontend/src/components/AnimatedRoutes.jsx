import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ExpensePage from "../pages/ExpensePage";
import Profile from "../pages/Profile";
import Calculators from "../pages/Calculators";
import Quiz from "../pages/Quiz";
import Video from "../pages/Videos";
import VideoPlayer from "./VideoPlayer";
import SearchPage from "./SearchPage";
import { useSelector } from "react-redux";

const AnimatedRoutes = () => {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {userInfo ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/expenses" element={<ExpensePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/video" element={<Video />} />
            <Route path="/video-player" element={<VideoPlayer />} />
            <Route path="/search" element={<SearchPage />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </>
  );
};

export default AnimatedRoutes;
