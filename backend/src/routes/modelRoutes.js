import express from "express";

const router = express.Router();

const availableModels = ["GPT","Claude","Gemini"];

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