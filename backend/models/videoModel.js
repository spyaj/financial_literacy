import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Channel: {
      type: String,
      required: true,
    },
    URL: {
      type: String,
      required: true,
    },
    Tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
