import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
const geminiAIService = async (prompt, modelId) => {
  const response = await client.models.generateContent({
    model: modelId,
    contents: prompt,
  });
  return response.text;
};

export default geminiAIService;
