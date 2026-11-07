import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API,
});

const groqAIService = async (prompt, modelId, systemInstruction) => {
  const response = await client.chat.completions.create({
    model: modelId,
    messages: [
      ...(systemInstruction
        ? [{ role: "system", content: systemInstruction }]
        : []),
      { role: "user", content: prompt },
    ],
  });

  return {
    response: response.choices[0].message.content,
    usage: {
      inputTokens: response.usage.prompt_tokens,
      outputTokens: response.usage.completion_tokens,
      totalTokens: response.usage.total_tokens,
    },
  };
};

export default groqAIService;