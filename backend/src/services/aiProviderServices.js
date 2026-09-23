import claudeAIService from "./ClaudeAiService.js";
import geminiAIService from "./geminiAiService.js";
import openAIService from "./openAiService.js";

const callProvider = (provider, modelId, prompt) => {
  if(provider === "OpenAI"){
    return openAIService(prompt,modelId);
  }
    if(provider === "ClaudeAI"){
    return claudeAIService(prompt,modelId);
  }
    if(provider === "GeminiAI"){
    return geminiAIService(prompt,modelId);
  }
 throw new Error("Unsupported provider");
}
export default callProvider;