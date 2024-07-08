import express from "express";
import {
  fetchVideos,
  addVideo,
  searchVideos,
} from "../controllers/videoController.js";

const router = express.Router();

router.route("/").get(fetchVideos).post(addVideo);

router.route("/search").get(searchVideos);

export default router;
