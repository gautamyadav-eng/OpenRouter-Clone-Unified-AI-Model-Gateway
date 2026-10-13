
import React from "react";
import { ArrowUpRight, Zap } from "lucide-react";

const models = [
  {
    name: "GPT",
    provider: "OpenAI",
    description: "Advanced AI model for reasoning, coding, and general tasks.",
    context: "128K context",
    category: "Text",
  },
  {
    name: "Claude",
    provider: "Anthropic",
    description: "AI model for writing, analysis, coding, and complex tasks.",
    context: "200K context",
    category: "Text",
  },
  {
    name: "Gemini",
    provider: "Google",
    description: "Multimodal AI model for understanding and generating content.",
    context: "1M context",
    category: "Text",
  },
];

const ModelCard = () => {
  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.name}
            className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-lg font-bold text-gray-800">
                {model.name.charAt(0)}
              </div>

              <ArrowUpRight
                size={19}
                className="text-gray-400 transition group-hover:text-gray-900"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-950">
                {model.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                By {model.provider}
              </p>

              <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
                {model.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                <Zap size={13} />
                {model.context}
              </span>

              <span className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
                {model.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelCard
