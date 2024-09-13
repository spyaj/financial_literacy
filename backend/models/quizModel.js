// models/quizModel.js
import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  chapter: {
    type: String,  // Group levels under specific chapters
    required: true,
  },
  level: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
      answer: { type: String, required: true },
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
