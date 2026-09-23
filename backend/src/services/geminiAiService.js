const geminiAIService = (prompt, modelId) => {
    console.log("geminiAi prompt", prompt);
    console.log("geminiAi model", modelId);
    return {
    provider: "OpenAI",
    modelId,
    prompt
};
}
export default geminiAIService;