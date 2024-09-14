// routes/quizRoutes.js
import express from "express";
import { addQuiz, getQuizzes, deleteQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.route("/").get(getQuizzes).post(addQuiz);
router.route("/:id").delete(deleteQuiz);

export default router;
