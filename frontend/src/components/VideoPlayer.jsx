import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

export const VideoCard = ({ video, handleVideoClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => {
        handleVideoClick(video);
        scrollToTop();
      }}
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
  );
};

const VideoPlayer = () => {
  const location = useLocation();
  const { video } = location.state;
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(video);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data);
      });
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
    setCurrentVideo(video);
  };

  const recommendedVideos = useMemo(() => {
    if (currentVideo && videos.length) {
      return videos.filter((v) =>
        currentVideo?.recommended_videos?.some((id) => id === v.video_id)
      );
    }
  }, [currentVideo, videos]);

  return (
    <div className="dashboardContainer">
      <motion.div
        variants={dashboardVariant}
        initial="initial"
        animate="animate"
        className="p-6 max-w-[1600px] h-full mx-auto"
      >
        <Navbar />

        {/* video player  */}
        <div className="video-player-container p-6 max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div
              className="overflow-hidden rounded-lg"
              style={{
                width: "900px",
                height: "500px",
                maxHeight: "500px",
                maxWidth: "900px",
              }}
            >
              <ReactPlayer
                url={currentVideo.URL}
                controls
                width="100%"
                height="100%"
                playing={true}
              />
            </div>
            <h1 className="text-2xl font-semibold text-white">
              {currentVideo.Title}
            </h1>
            <p className="text-lg text-gray-400">{currentVideo.Channel}</p>
          </div>
        </div>

        <hr className="bg-gray-600" />
        {recommendedVideos?.length > 0 && (
          <>
            <div className="space-y-2 mt-6">
              <h1 className="text-xl font-bold text-white">
                Reommended Videos
              </h1>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-6">
                {recommendedVideos.map((video) => {
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
            <hr className="bg-gray-600" />
          </>
        )}

        {/* search bar  */}

        <div className="flex items-center justify-center mt-20">
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
              onClick={handleSearchSubmit}
            >
              <Search color="#ff7070" />
            </button>
          </div>
        </div>

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
      </motion.div>
    </div>
  );
};

export default VideoPlayer;
