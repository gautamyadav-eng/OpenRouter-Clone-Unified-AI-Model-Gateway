import dotenv from "dotenv"
import OpenAI from "openai";

dotenv.config();
const client = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
})
const openAIService = async (prompt, modelId, systemInstruction) => {
    
    const response = await client.responses.create({
        model: modelId,
        instructions: systemInstruction || undefined,
        input: prompt
    });
    return response.output_text;
};

export default openAIService;