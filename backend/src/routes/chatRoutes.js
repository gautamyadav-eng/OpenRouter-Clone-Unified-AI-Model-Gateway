//User ka prompt receive karne aur AI response ke liye request bhejne wala route.

import express from "express";
import chatControllers from "../controllers/chatControllers.js";
import apiKeyMiddleware from "../middleware/apiKeyMiddleware.js";
import rateLimitMiddleware from "../middleware/rateLimitMiddleware.js";

const router = express.Router();
router.post("/",apiKeyMiddleware, rateLimitMiddleware,chatControllers);

export default router;