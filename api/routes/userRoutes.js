import express from "express";
import {
  userLogin,
  userSignUp,
  userProfile,
  userLogout,
} from "../controller/userController.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.get("/profile", authMiddleware, userProfile);
router.get("/logout", authMiddleware, userLogout);

export default router;
