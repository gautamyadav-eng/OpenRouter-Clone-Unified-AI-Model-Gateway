
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
  const CapabilityIcon = capabilityIcons[model.category] || Sparkles;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl sm:p-6">

      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-transform duration-300 group-hover:scale-105 ${model.logoStyle}`}
          >
            {model.logo}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-gray-900">
              {model.name}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              {model.provider}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-500">
          {model.status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 min-h-12 text-sm leading-6 text-gray-500">
        {model.description}
      </p>

      {/* Category */}
      <div className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors group-hover:bg-gray-200">
          <CapabilityIcon size={14} />
          {model.category}
        </span>
      </div>

      {/* Details */}
      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">Context Length</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {model.context}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Input Price</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {model.price}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 ">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <Zap size={14} className="text-amber-500" />
          {model.speed}
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
