import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const geminiAIService = async (prompt, modelId) => {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await client.models.generateContent({
        model: modelId,
        contents: prompt,
      });
      return response.text;
    } catch (error) {
      const status = error.status ?? error.error?.code;
      const isRetryable = status === 429 || status === 500 || status === 503;

      if (!isRetryable || attempt === 2) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
    }
  }
};

export default geminiAIService;
