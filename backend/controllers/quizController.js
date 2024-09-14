// controllers/quizController.js
import asyncHandler from "express-async-handler";
import Quiz from "../models/quizModel.js";

// Fetch all quizzes
const getQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Add a new quiz
const addQuiz = asyncHandler(async (req, res) => {
  const { chapter, questions } = req.body;

  if (!chapter || !questions || questions.length === 0) {
    res.status(400).json({ message: "Please provide a valid chapter and questions" });
    return;
  }

  const quiz = new Quiz({ chapter, questions });
  await quiz.save();
  res.status(201).json({ message: "Quiz added successfully", quiz });
});

// Delete a quiz by ID
const deleteQuiz = asyncHandler(async (req, res) => {
  const quizId = req.params.id;
  console.log("Attempting to delete quiz with ID:", quizId);

  if (!quizId) {
    return res.status(400).json({ message: "No ID provided" });
  }

  const quiz = await Quiz.findByIdAndDelete(quizId);

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  res.json({ message: "Quiz deleted" });
});

export { getQuizzes, addQuiz, deleteQuiz };
