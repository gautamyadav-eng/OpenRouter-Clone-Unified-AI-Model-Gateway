import express from "express";
import createApiKey, {getApiKey, deactivateApiKey} from "../controllers/apiKeyControllers.js";
import tokenMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", tokenMiddleware, createApiKey);
router.get("/" ,tokenMiddleware, getApiKey);
router.patch("/:id" ,tokenMiddleware, deactivateApiKey);

export default router;