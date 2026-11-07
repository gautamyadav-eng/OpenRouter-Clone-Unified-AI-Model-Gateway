
import claudeAIService from "./ClaudeAiService.js";
import geminiAIService from "./geminiAiService.js";
import openAIService from "./openAiService.js";
import groqAIService from "./groqServices.js";

const callProvider = async (provider, modelId, prompt, systemInstruction) => {
  let result;
  if(provider === "OpenAI"){
    result = await openAIService(prompt,modelId,systemInstruction);

  }else if(provider === "ClaudeAI"){
    result = await claudeAIService(prompt,modelId, systemInstruction);

  }else if(provider === "GeminiAI"){
    result= await geminiAIService(prompt,modelId, systemInstruction);

  }else if (provider === "Groq") {
  result = await groqAIService(prompt, modelId, systemInstruction);
}
  else{
 throw new Error("Unsupported provider");
  }
  return {
  provider,
  model: modelId,
  response: result.response,
  usage: result.usage,
};
}
export default callProvider;