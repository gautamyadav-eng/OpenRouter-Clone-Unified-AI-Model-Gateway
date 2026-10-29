import {
  Sparkles,
  Code2,
  Eye,
  Brain,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const capabilityIcons = {
  Chat: Sparkles,
  Reasoning: Brain,
  Code: Code2,
  Vision: Eye,
};

const ModelCard = ({ model }) => {
  if (!model) return null;

  const CapabilityIcon = capabilityIcons[model.category] || Sparkles;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-bold transition-transform duration-200 group-hover:scale-105 ${
              model.logoStyle || "bg-gray-100 text-gray-700"
            }`}
          >
            {model.logo || <Sparkles size={20} />}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-gray-900">
              {model.name || "Unnamed Model"}
            </h3>

            <p className="mt-1 truncate text-xs text-gray-500">
              {model.provider || "Unknown Provider"}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-500">
          {model.status || "Available"}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 min-h-12 text-sm leading-6 text-gray-500">
        {model.description || "AI model available through your gateway."}
      </p>

      {/* Category */}
      <div className="mt-3">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors group-hover:bg-gray-200">
          <CapabilityIcon size={14} />
          {model.category || "General"}
        </span>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
        <div className="min-w-0">
          <p className="text-xs text-gray-400">Context Length</p>

          <p className="mt-1 truncate text-sm font-semibold text-gray-800">
            {model.context || "—"}
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-xs text-gray-400">Input Price</p>

          <p className="mt-1 truncate text-sm font-semibold text-gray-800">
            {model.price || "—"}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <Zap size={14} className="text-amber-500" />
          {model.speed || "Standard"}
        </span>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 transition-all duration-200 group-hover:gap-2 group-hover:text-black">
          View details
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
};

export default ModelCard;