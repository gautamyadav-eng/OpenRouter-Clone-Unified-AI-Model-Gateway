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
     return {
    response: response.content[0].text,
    usage: {
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
      totalTokens:
        response.usage.input_tokens + response.usage.output_tokens,
    },
}
};

export default openAIService;