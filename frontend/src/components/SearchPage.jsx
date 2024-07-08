import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import { AudioLines } from "lucide-react";

const dashboardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const initialSearchTerm = query.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const fetchVideos = async () => {
    const response = await fetch("/api/videos");
    const data = await response.json();
    setVideos(data);
    setFilteredVideos(data);
  };

  const fetchSearchResults = async (term) => {
    const response = await fetch(`/api/videos/search?query=${term}`);
    const data = await response.json();
    setFilteredVideos(data);

    const related = data.filter(
      (video) =>
        video.Tag && video.Tag.toLowerCase().includes(term.toLowerCase())
    );
    setRelatedVideos(related);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    } else {
      setFilteredVideos(videos); // Reset to all videos when search term is empty
      setRelatedVideos([]);
    }
  }, [searchTerm, videos]);

  const handleVideoClick = (video) => {
    navigate("/video-player", { state: { video } });
  };

  const handleSearchSubmit = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="dashboardContainer">
      <motion.div
        variants={dashboardVariant}
        initial="initial"
        animate="animate"
        className="p-6 max-w-[1600px] h-screen mx-auto"
      >
        <Navbar />

        <div className="flex items-center justify-center">
          <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
            <button className="self-center rounded-full flex p-1 cursor-pointer bg-[#0d1829]">
              <AudioLines color="#ff7070" />
            </button>
            <input
              type="text"
              className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
              placeholder="Search movie name or select options"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="relative p-2 bg-[#0d1829] rounded-full"
              onClick={handleSearchSubmit}
            >
              <Search color="#ff7070" />
            </button>
          </div>
        </div>

        {searchTerm && relatedVideos.length > 0 && (
          <div className="related-videos p-6 max-w-[1600px] mx-auto">
            <h1 className="text-xl font-bold text-white">Related Videos</h1>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {relatedVideos.map((video, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <img
                    src={video.Image}
                    alt=""
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-lg font-semibold">{video.Title}</h1>
                    <p className="text-sm text-gray-400">{video.Channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="all-videos p-6 max-w-[1600px] mx-auto">
          <h1 className="text-xl font-bold text-white">All Videos</h1>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <img
                  src={video.Image}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2 p-2">
                  <h1 className="text-lg font-semibold">{video.Title}</h1>
                  <p className="text-sm text-gray-400">{video.Channel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchPage;
