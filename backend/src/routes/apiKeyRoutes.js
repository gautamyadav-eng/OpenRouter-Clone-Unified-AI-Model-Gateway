import express from "express";
import createApiKey from "../controllers/apiKeyControllers.js";

const router = express.Router();

router.post("/", createApiKey);

export default router;