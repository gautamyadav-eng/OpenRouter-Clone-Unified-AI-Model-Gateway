import ApiKey from "../models/ApiKey.js";
import RequestLog from "../models/RequestLog.js";

const getActivityLog = async(req, res) =>{
    try{
    const userId = req.user.userId;

    const apiKeys = await ApiKey.find({userId}).select("_id");

    const apiKeyIds = apiKeys.map((key) => key._id);

    const logs = await RequestLog.find({
        apiKeyId: {$in: apiKeyIds},
    }).sort({createdAt: -1});

    const totalTokens = logs.reduce(
  (total, log) => total + log.totalTokens,
  0
);

  return res.status(200).json({
  success: true,
  message: "Activity logs fetched successfully",
  totalRequests: logs.length,
  totalTokens,
  logs,
});
}catch(error){
    console.log("Activity logs error:",error.message);

    return res.status(500).json({
        success:false,
        message:"Internal server error",
    });
}
}
export default getActivityLog;