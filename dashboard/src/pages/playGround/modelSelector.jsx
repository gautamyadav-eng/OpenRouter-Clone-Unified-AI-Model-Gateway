
import {
  ChevronDown,
  Sparkles,
  SlidersHorizontal,
  Cpu,
  Layers3,
} from "lucide-react";

const ModelSelector = () => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md sm:p-6">

      {/* Section Heading */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">Model Configuration</h2>
          <p className="mt-1 text-sm text-gray-500">
            Choose the AI model for your prompt.
          </p>
        </div>

        <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 sm:flex">
          <SlidersHorizontal size={19} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {/* Model Dropdown UI */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Select Model
          </label>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors duration-200 hover:border-gray-400">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-700">
                G
              </div>
              <div>
                <p className="text-sm font-semibold">GPT</p>
                <p className="mt-1 text-xs text-gray-500">OpenAI</p>
              </div>
            </div>

            <ChevronDown size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Provider Information */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Provider
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100/70">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm">
              <Cpu size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">OpenAI</p>
              <p className="mt-1 text-xs text-gray-500">
                Selected model provider
              </p>
            </div>
            <span className="ml-auto rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
              Available
            </span>
          </div>
        </div>

      </div>

      {/* Model Settings */}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">

        <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Sparkles size={16} />
            <span className="text-xs font-medium">Temperature</span>
          </div>
          <p className="mt-2 text-lg font-bold text-gray-900">0.7</p>
          <p className="mt-1 text-xs text-gray-500">
            Response creativity
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Layers3 size={16} />
            <span className="text-xs font-medium">Max Tokens</span>
          </div>
          <p className="mt-2 text-lg font-bold text-gray-900">2,048</p>
          <p className="mt-1 text-xs text-gray-500">
            Maximum response length
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Cpu size={16} />
            <span className="text-xs font-medium">Model Type</span>
          </div>
          <p className="mt-2 text-lg font-bold text-gray-900">Chat</p>
          <p className="mt-1 text-xs text-gray-500">
            Conversational AI
          </p>
        </div>

      </div>
    </section>
  );
};

export default ModelSelector;
