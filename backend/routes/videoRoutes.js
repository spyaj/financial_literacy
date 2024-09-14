import express from "express";
import {
  fetchVideos,
  addVideo,
  searchVideos,
  deleteVideo, // Import the delete video controller
} from "../controllers/videoController.js";

const router = express.Router();

// Add routes to get all videos and add a new video
router.route("/").get(fetchVideos).post(addVideo);

// Add route to delete a specific video by ID
router.route("/:id").delete(deleteVideo);

// Add a search route for videos
router.route("/search").get(searchVideos);

export default router;
