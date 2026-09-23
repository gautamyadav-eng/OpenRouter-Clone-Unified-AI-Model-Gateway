const claudeAIService = (prompt, modelId) => {
    console.log("claudeAi prompt", prompt);
    console.log("claudeAi model", modelId);
    return {
    provider: "OpenAI",
    modelId,
    prompt
};
}
export default claudeAIService;