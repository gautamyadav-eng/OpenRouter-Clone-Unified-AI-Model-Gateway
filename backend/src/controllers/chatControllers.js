import availableModels from "../config/modelConfig.js";
import callProvider from "../services/aiProviderServices.js";
const chatControllers =async (req, res) => {
    console.log(req.apiKey);
    const {prompt, model} = req.body;

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
   const result = await callProvider(selectedModel.provider, selectedModel.modelId, prompt);
   

    res.status(200).json({
        success:true,
        message:"chat request recevied successfully",
        data: result
    });

}catch(error){
    console.log("Ai provider error", error.message);
    return res.status(error.status || 500).json({
        success:false,
        message:"AI provider reqest failed"
    })
}
};

export default chatControllers;