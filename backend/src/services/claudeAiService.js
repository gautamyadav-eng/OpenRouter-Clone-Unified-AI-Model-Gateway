import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
    apiKey:process.env.ANTHROPIC_API_KEY
})
const claudeAIService = async(prompt, modelId) => {
    const response = await client.messages.create({
        model : modelId,
        max_tokens: 1024,
        messages:[{
            role:"user",
            content:prompt
        }]
    });
    return response.content[0].text;
};

export default claudeAIService;