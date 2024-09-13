import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { AudioLines } from "lucide-react";
import { VideoCard } from "../components/VideoPlayer";

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

const Video = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        setVideos(data);
        setFilteredVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredVideos(
        videos.filter((video) =>
          video.Title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredVideos(videos);
    }
  }, [searchTerm, videos]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  const handleVideoClick = (video) => {
    navigate("/video-player", { state: { video } });
  };

  const renderVideosByTag = (tag) => (
    <div className="space-y-2">
      <h1 className="text-xl font-bold text-white">
        {tag.charAt(0).toUpperCase() + tag.slice(1)} Videos
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredVideos
          .filter((video) => video.Tag === tag)
          .map((video, index) => (
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
  );

  return (
    <div className="dashboardContainer">
      <motion.div
        variants={dashboardVariant}
        initial="initial"
        animate="animate"
        className="p-6 max-w-[1600px] h-full min-h-screen mx-auto"
      >
        <Navbar />

        <div className="flex flex-col gap-4 mt-10 ">
          {/* search bar */}
          <div className="flex items-center justify-center">
            <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
              <button className="self-center rounded-full flex p-1 cursor-pointer bg-[#0d1829]">
                <AudioLines color="#ff7070" />
              </button>

              <input
                type="text"
                className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
                placeholder="Search name movie or select options"
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="relative p-2 bg-[#0d1829] rounded-full"
              >
                <Search color="#ff7070" />
              </button>
            </div>
          </div>

          <hr className="bg-gray-600" />

          <div className="space-y-2 mt-6">
            <h1 className="text-xl font-bold text-white">All Videos</h1>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredVideos.map((video) => {
                return (
                  <VideoCard
                    key={video._id}
                    video={video}
                    handleVideoClick={handleVideoClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Video;
