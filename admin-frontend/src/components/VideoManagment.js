import React, { useEffect, useState } from "react";
import { instance } from "./api";
import { Link } from "react-router-dom";

const VideoManagement = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    Title: "",
    Image: "",
    Channel: "",
    URL: "",
    Tag: "",
  });
  const [error, setError] = useState(null);

  // Fetch videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await instance.get("/videos");
        setVideos(data);
      } catch (error) {
        setError("Failed to load videos");
      }
    };
    fetchVideos();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setNewVideo({
      ...newVideo,
      [e.target.name]: e.target.value,
    });
  };

  // Add new video
  const addVideo = async () => {
    try {
      const { data } = await instance.post("/videos", newVideo);
      setVideos([data.video, ...videos]);
      setNewVideo({ Title: "", Image: "", Channel: "", URL: "", Tag: "" }); // Clear form
    } catch (error) {
      setError("Failed to add video");
    }
  };

  // Delete video
  const deleteVideo = async (videoId) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await instance.delete(`/videos/${videoId}`);
        setVideos(videos.filter((video) => video._id !== videoId)); // Update UI
      } catch (error) {
        setError("Failed to delete video");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Video Management</h2>
      <div className=" flex gap-5 my-6">
        <Link
          to="/dashboard"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/users"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Users
        </Link>
        <Link
          to="/dashboard/quizzes"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Quiz
        </Link>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Form to Add New Video */}
      <div className="mb-6 w-full max-w-lg">
        <input
          type="text"
          name="Title"
          value={newVideo.Title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="Image"
          value={newVideo.Image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="Channel"
          value={newVideo.Channel}
          onChange={handleChange}
          placeholder="Channel"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="URL"
          value={newVideo.URL}
          onChange={handleChange}
          placeholder="Video URL"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="Tag"
          value={newVideo.Tag}
          onChange={handleChange}
          placeholder="Tag"
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={addVideo}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Video
        </button>
      </div>

      {/* List of Videos */}
      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Channel</th>
              {/* <th className="px-4 py-2">Tag</th> */}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video._id}>
                <td className="border px-4 py-2">{video.Title}</td>
                <td className="border px-4 py-2">{video.Channel}</td>
                {/* <td className="border px-4 py-2">{video.Tag}</td> */}
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteVideo(video._id)}
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

export default VideoManagement;
