import express from "express";
import { login, register } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const authRouter = express.Router();


authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.get(
  "/profile",
  protect,
  (req, res) => {
    res.json({
      message: "Profile Accessed",
      user: req.user,
    });
  }
);

export default authRouter