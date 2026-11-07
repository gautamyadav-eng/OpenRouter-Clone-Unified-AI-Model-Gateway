import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
    apiKey:process.env.ANTHROPIC_API_KEY
})
const claudeAIService = async(prompt, modelId,systemInstruction) => {
    const response = await client.messages.create({
        model : modelId,
        max_tokens: 1024,
        system: systemInstruction || undefined,
        messages:[{
            role:"user",
            content:prompt
        }]
    });
      return {
    response: response.content[0].text,
    usage: {
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
      totalTokens:
        response.usage.input_tokens + response.usage.output_tokens,
    },
  };
};

export default claudeAIService;