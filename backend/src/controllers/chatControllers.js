import availableModels from "../config/modelConfig.js";
import callProvider from "../services/aiProviderServices.js";
const chatControllers = (req, res) => {
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
   const result =  callProvider(selectedModel.provider, selectedModel.modelId, prompt);
   

    res.status(200).json({
        success:true,
        message:"chat request recevied successfully",
        data: result
    });
};

export default chatControllers;