import express from "express";
import availableModels from "../config/modelConfig.js";

const router = express.Router();


router.get("/", (req, res) => {


    res.status(200).json({
        success:true,
        message:"Available model fetched successfully",
        data:{
            model: availableModels
        }
    });
});
export default router;