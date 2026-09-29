import express from "express";
import createApiKey from "../controllers/apiKeyControllers.js";
import tokenMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", tokenMiddleware, createApiKey);

export default router;