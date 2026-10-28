import exprees from "express";
import tokenMiddleware from "../middleware/authMiddleware.js";
import getRecentActivity from "../controllers/activityControllers.js";

const router = exprees.Router();

router.get("/", tokenMiddleware, getRecentActivity);

export default router;