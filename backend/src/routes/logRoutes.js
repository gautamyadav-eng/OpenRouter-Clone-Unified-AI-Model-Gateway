import express from "express";
import getActivityLog from "../controllers/logControllers.js";
import tokenMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", tokenMiddleware, getActivityLog);

export default router;