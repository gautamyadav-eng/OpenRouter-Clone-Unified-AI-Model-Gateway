import express from "express"
import {registerUser,loginUsers} from "../controllers/RegisterControllers.js";
import tokenMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUsers);

router.get("/profile",tokenMiddleware, (req,res) =>{
    res.status(200).json({
        success:true,
        message:"Protected route access successfully",
        user : req.user
    });
});

export default router;