
import path from "path";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import quizRoutes from "./routes/quizRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js"; // Adjusted import
import cookieParser from "cookie-parser";

// Hardcoded configuration (replace these values with your actual config)
const PORT = 8001;
const NODE_ENV = "development"; // Change to "production" as needed

// Connect to the database
connectDB();

const app = express();

// Parse body
app.use(express.json());
// Allow to send form data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/quiz", quizRoutes);

const __dirname = path.resolve();
if (NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Any route that is not API will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"))  
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
