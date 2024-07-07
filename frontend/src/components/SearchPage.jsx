import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

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

  useEffect(() => {
    fetch("/videos.json")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data); // Initialize filteredVideos with all videos
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = videos.filter((video) =>
        video.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVideos(filtered);

      // Example: Filter by tag (if 'Tag' property exists)
      const related = videos.filter(
        (video) =>
          video.Tag &&
          video.Tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRelatedVideos(related);
    } else {
      setFilteredVideos([]); // Reset filteredVideos when searchTerm is empty
      setRelatedVideos([]); // Reset relatedVideos when searchTerm is empty
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
              Search
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

        {/* <div className="all-videos p-6 max-w-[1600px] mx-auto">
          <h1 className="text-xl font-bold text-white">All Videos</h1>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredVideos.map((video, index) => (
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
        </div> */}
      </motion.div>
    </div>
  );
};

export default SearchPage;
