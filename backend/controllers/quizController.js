import Quiz from "../models/quizModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// Fetch a quiz by its level
// export const getQuizByLevel = async (req, res) => {
//   console.log("Received level:", req.params.level);
//   try {
//     console.log("Received level:", req.params.level);
//     const level = parseInt(req.params.level);  // Convert level to a number
//     if (isNaN(level)) {
//       return res.status(400).json({ error: "Invalid level format" });
//     }

//     const quiz = await Quiz.findOne({ level });

//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found for this level" });
//     }

//     res.json(quiz);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

export const getQuizByLevel = asyncHandler(async (req, res) => {
  const level = Number(req.params.level);

  // Check if conversion was successful
  if (isNaN(level)) {
    return res.status(400).json({ error: "Invalid level format" });
  }

  console.log("Received level (backend):", level); // Log to verify

  const quiz = await Quiz.findOne({ level });

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found for this level" });
  }

  res.json(quiz);
});

// Submit quiz answers and update user XP and unlock levels
// Ensure level is cast to a number
export const submitQuizAnswers = asyncHandler(async (req, res) => {
  const level = Number(req.params.level); // Cast level to a number
  const { answers } = req.body;

  const quiz = await Quiz.findOne({ level });
  if (!quiz) {
    res.status(404);
    throw new Error("Quiz not found");
  }

  let correctAnswers = 0;
  quiz.questions.forEach((question) => {
    if (answers[question._id] === question.answer) {
      correctAnswers++;
    }
  });

  const totalQuestions = quiz.questions.length;
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;
  const user = req.user;

  // Calculate XP for correct answers (e.g., 10 XP per correct answer)
  const xpGained = correctAnswers * 10;
  user.xp += xpGained;

  // Check if the user should unlock the next level
  if (percentageCorrect >= 60) {
    user.completedLevels.push(level);
    const nextLevel = level + 1;
    if (!user.unlockedLevels.includes(nextLevel)) {
      user.unlockedLevels.push(nextLevel);
    }
  }

  await user.save();

  res.json({
    message: "Quiz submitted successfully",
    correctAnswers,
    totalQuestions,
    percentageCorrect,
    xpGained,
  });
});

// Fetch leaderboard
export const getLeaderboard = asyncHandler(async (req, res) => {
  const { timeframe } = req.params;

  let startDate;
  const now = new Date();

  switch (timeframe) {
    case "daily":
      startDate = new Date(now.setDate(now.getDate() - 1));
      break;
    case "weekly":
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case "monthly":
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    default:
      res.status(400);
      throw new Error("Invalid timeframe");
  }

  const leaderboard = await User.find({ updatedAt: { $gte: startDate } })
    .sort({ xp: -1 }) // Sort users by XP in descending order
    .limit(10);

  res.json(leaderboard);
});

// Get chapters and levels
// export const getChaptersAndLevels = async (req, res) => {
//   try {
//     console.log(req);
//     const quizzes = await Quiz.find(); // Fetch all quizzes
//     console.log(quizzes);
//     const chapters = quizzes.reduce((acc, quiz) => {
//       const chapterIndex = acc.findIndex((c) => c.name === quiz.chapter);
//       if (chapterIndex === -1) {
//         // If chapter doesn't exist, create a new entry
//         acc.push({
//           name: quiz.chapter,
//           levels: [quiz.level],
//         });
//       } else {
//         // If chapter exists, add the level
//         acc[chapterIndex].levels.push(quiz.level);
//       }
//       return acc;
//     }, []);

//     res.status(200).json(chapters); // Send the chapters and levels
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

export const getChaptersAndLevels = asyncHandler(async (req, res) => {
  // const quizes = await Quiz.find()
  //   .sort({ _id: -1 });
  res.json({
    message: 'Chapters and levels fetched successfully',
  });
});
