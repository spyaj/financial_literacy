// models/userModel.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    xp: { type: Number, default: 0 }, // Track user XP
    points: { type: Number, default: 0 },
    completedLevels: {
      type: [Number],
      default: [],
    },
    unlockedLevels: {
      // Store levels that are unlocked based on performance
      type: [Number],
      default: [1], // Level 1 is always unlocked by default
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
