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

const getApiKey = async(req, res) => {
    try{
    const userId = req.user.userId;

    const userKey = await ApiKey.find({userId});
    if(userKey.length == 0){
        return res.status(404).json({
            success:false,
            message:"no api key found"
        });
    }
    return res.status(200).json({
        success :true,
        message:"Api key successfully fatch",
        apiKey : userKey
    });
}catch(error){
    console.log("api key error", error.message);
    return res.status(500).json({
        success:false,
        message:"Internal server error"
    });
}
}

const deactivateApiKey = async(req, res) => {
    try{
        const userId = req.user.userId;
        const {id} = req.params;

        const apiKey = await ApiKey.findOne({ 
            _id:id, 
            userId: userId
        });
        if(!apiKey){
            return res.status(404).json({
                success:false,
                message:"api key not found"
            });
        }

        apiKey.isActive = false;
        await apiKey.save();

        return res.status(200).json({
            success:true,
            message: "API key deactivated successfully"
        });
    }catch(error){
        console.log("api key deactivate error", error.message);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}
export default createApiKey;
export {getApiKey, deactivateApiKey};