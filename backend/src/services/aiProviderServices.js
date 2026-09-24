
import claudeAIService from "./ClaudeAiService.js";
import geminiAIService from "./geminiAiService.js";
import openAIService from "./openAiService.js";

const callProvider = async (provider, modelId, prompt) => {
  let result;
  if(provider === "OpenAI"){
    result = await openAIService(prompt,modelId);

  }else if(provider === "ClaudeAI"){
    result = await claudeAIService(prompt,modelId);

  }else if(provider === "GeminiAI"){
    result= await geminiAIService(prompt,modelId);

  }else{
 throw new Error("Unsupported provider");
  }
  return {
    provider,
    model:modelId,
    response:result
  }
}
export default callProvider;