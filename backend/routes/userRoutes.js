import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
import {
  authUser,
  registerUser,
  logOut,
  getUserProfile,
  updateUserProfile,
  getAllUsers, // Import controller for fetching users
  deleteUser, // Import controller for deleting a user
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOut);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Add new route to fetch all users
router.get("/", getAllUsers);

// Add new route to delete a specific user by ID
router.delete("/:id", deleteUser);

export default router;
