import express from "express";
import getProfile from "../controllers/profileControllers.js";
import tokenMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", tokenMiddleware, getProfile);

export default router;