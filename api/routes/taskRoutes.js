import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addTask, viewTask, deleteTask } from "../controller/taskController.js";

const router = express.Router();

router.post("/addtask", authMiddleware, addTask);
router.get("/viewtask", authMiddleware, viewTask);
router.delete("/deletetask/:id", authMiddleware, deleteTask);

export default router;
