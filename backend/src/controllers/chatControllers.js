import availableModels from "../config/modelConfig.js";
import callProvider from "../services/aiProviderServices.js";
import RequestLog from "../models/RequestLog.js";
const chatControllers =async (req, res) => {
    console.log(req.apiKey);
    const {prompt, model, systemInstruction} = req.body;
    console.log("Playground request:", { prompt, model });

    if(!prompt || !model){
        return res.status(400).json({
            success: false,
            message:"prompt and model are required"
        });
    }
    const selectedModel = availableModels.find(
        (item)=> item.name === model
    );
    if(!selectedModel){
        return res.status(400).json({
            success: false,
            message:"Invaild model selected"
        });
    }
    try{
    const startTime = Date.now();
   
   const result = await callProvider(
    selectedModel.provider, 
    selectedModel.modelId, 
    prompt,
    systemInstruction
);

const responseTime = Date.now() -startTime;
try{
await RequestLog.create({
    apiKeyId: req.apiKey._id,
    provider: selectedModel.provider,
    model: selectedModel.modelId,
    status: "success",
    responseTime,
    inputTokens: result.usage.inputTokens,
    outputTokens: result.usage.outputTokens,
    totalTokens: result.usage.totalTokens
});
}catch(logError){
    console.log("Request log error", logError.message);
}
   

    res.status(200).json({
        success:true,
        message:"chat request recevied successfully",
        data: result
    });

}catch(error){
    console.log("Ai provider error", error.message);
    const status = error.status ?? error.error?.code ?? 500;
    return res.status(status).json({
        success:false,
        message:"AI provider reqest failed"
    })
}
};

export default chatControllers;