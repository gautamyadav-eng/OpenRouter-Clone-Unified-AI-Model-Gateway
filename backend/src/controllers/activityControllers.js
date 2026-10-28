import ApiKey from "../models/ApiKey.js";
import RequestLog from "../models/RequestLog.js";

const getRecentActivity = async (req, res) =>{
    try{
        const userId = req.user.userId;

        const apikeys = await ApiKey.find({userId}).select("_id");

        const apiKeyIds = apikeys.map((key) => key._id);
        
        const activities = await RequestLog.find({
            apiKeyId: {$in: apiKeyIds},
        })
        .sort({createdAt: -1})
        .limit(5)
        .select("provider model status responseTime createdAt");

        return res.status(200).json({
            success: true,
            activities
        });
    }catch(error){
        console.log("Recent activity error:", error.message);
        return res.status(500).json({
            success:false,
            message:"Failed to fetch recent activity"
        });
    }
}
export default getRecentActivity;