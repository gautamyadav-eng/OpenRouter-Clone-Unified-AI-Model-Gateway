
const chatControllers = (req, res) => {
    console.log(req.apiKey);
    const {prompt, model} = req.body;

    if(!prompt || !model){
        return res.status(400).json({
            success: false,
            message:"prompt and model are required"
        });
    }
    const availableModels = ["GPT", "Claude", "Gemini"];

    if(!availableModels.includes(model)){
        return res.status(400).json({
            success: false,
            message:"Invaild model selected"
        });
    }

    res.status(200).json({
        success:true,
        message:"chat request recevied successfully",
        data:{
            prompt,
            model
        }
    });
};

export default chatControllers;