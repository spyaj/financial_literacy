// routes/quizRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getQuizByLevel, submitQuizAnswers, getLeaderboard, getChaptersAndLevels } from "../controllers/quizController.js";

const router = express.Router();

router.get("/:level", protect, getQuizByLevel);
router.post("/:level/submit", protect, submitQuizAnswers);
router.get("/leaderboard/:timeframe", protect, getLeaderboard);
router.get("/chapters", getChaptersAndLevels); // New route to fetch chapters

export default router;
