import asyncHandler from "express-async-handler";
import Video from "../models/videoModel.js";

const fetchVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find().sort({ _id: -1 });
  res.json(videos);
});

const addVideo = asyncHandler(async (req, res) => {
  try {
    const { Image, Title, Channel, URL, Tag } = req.body;

    const video = new Video({
      Image,
      Title,
      Channel,
      URL,
      Tag,
    });

    await video.save();

    res.status(201).json({ message: "Video created successfully", video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const searchVideos = asyncHandler(async (req, res) => {
  const query = req.query.query;
  try {
    const videos = await Video.find({
      $or: [
        { Title: { $regex: query, $options: "i" } },
        { Tag: { $regex: query, $options: "i" } },
      ],
    });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { fetchVideos, addVideo, searchVideos };
