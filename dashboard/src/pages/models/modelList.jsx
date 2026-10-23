
import { Boxes } from "lucide-react";
import ModelCard from "./modelCard.jsx";

const models = [
  {
    id: 1,
    name: "GPT",
    provider: "OpenAI",
    logo: "G",
    logoStyle: "bg-emerald-50 text-emerald-700",
    description: "A versatile AI model for everyday tasks, content generation, and conversations.",
    category: "Chat",
    context: "128K tokens",
    price: "Demo pricing",
    speed: "Fast",
    status: "Available",
  },
  {
    id: 2,
    name: "Claude",
    provider: "Anthropic",
    logo: "A",
    logoStyle: "bg-orange-50 text-orange-700",
    description: "Useful for writing, document analysis, and handling complex instructions.",
    category: "Reasoning",
    context: "200K tokens",
    price: "Demo pricing",
    speed: "Balanced",
    status: "Available",
  },
  {
    id: 3,
    name: "Gemini",
    provider: "Google",
    logo: "G",
    logoStyle: "bg-blue-50 text-blue-700",
    description: "A flexible model for general assistance and multimodal AI experiences.",
    category: "Vision",
    context: "128K tokens",
    price: "Demo pricing",
    speed: "Fast",
    status: "Available",
  },
  {
    id: 4,
    name: "Code Assistant",
    provider: "Demo Provider",
    logo: "</>",
    logoStyle: "bg-violet-50 text-violet-700",
    description: "Designed for programming assistance, code explanations, and debugging tasks.",
    category: "Code",
    context: "64K tokens",
    price: "Demo pricing",
    speed: "Fast",
    status: "Available",
  },
  {
    id: 5,
    name: "Reasoning Model",
    provider: "Demo Provider",
    logo: "R",
    logoStyle: "bg-rose-50 text-rose-700",
    description: "A demonstration model focused on structured analysis and multi-step problems.",
    category: "Reasoning",
    context: "64K tokens",
    price: "Demo pricing",
    speed: "Balanced",
    status: "Available",
  },
  {
    id: 6,
    name: "Vision Assistant",
    provider: "Demo Provider",
    logo: "V",
    logoStyle: "bg-cyan-50 text-cyan-700",
    description: "A sample model card for visual understanding and image-related tasks.",
    category: "Vision",
    context: "32K tokens",
    price: "Demo pricing",
    speed: "Fast",
    status: "Available",
  },
];

const ModelList = () => {
  return (
    <section>
      {/* List Header */}
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Boxes size={21} />
            Available Models
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Explore the models listed in your gateway.
          </p>
        </div>

        <span className="w-fit rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
          {models.length} models
        </span>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white/70 px-4 py-4 text-center">
        <p className="text-sm text-gray-500">
          Model names, capabilities, context lengths, and pricing shown here
          are sample UI data. Connect your actual providers and model catalog later.
        </p>
      </div>
    </section>
  );
};

export default ModelList;
