import ApiKey from "../models/ApiKey.js";
import { randomSecretKey, hashApiKey } from "../utils/apiKeyUtils.js";


const createApiKey = async(req,res) => {
    try{
        const { name} = req.body;
        const userId = req.user.userId;

        if(!name){
            return res.status(400).json({
                success: false,
                message:" API key name is required"
            });
        }

        const secretKey = await randomSecretKey();
        const keyHash =  hashApiKey(secretKey);

        const apiKey = await ApiKey.create({
            userId,
            name,
            keyHash,
        });
        console.log("Generated key hash:", keyHash);

        res.status(201).json({
            success:true,
            message:"API key generated successfully",
            apiKey : secretKey
        });

    }catch(error){
        console.log("api key creation error", error);
        res.status(500).json({
            success:false,
            message : "server error"
        });
    }
}

export default createApiKey;