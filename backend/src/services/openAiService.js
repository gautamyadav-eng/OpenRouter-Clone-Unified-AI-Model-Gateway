const openAIService = (prompt, modelId) => {
    console.log("openAi prompt", prompt);
    console.log("openAi model", modelId);
    return {
    provider: "OpenAI",
    modelId,
    prompt
};
}
export default openAIService;