
import {
  MessageSquareText,
  Paperclip,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";

const PromptInput = () => {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <MessageSquareText size={19} />
          </div>
          <div>
            <h2 className="text-base font-bold">Prompt Editor</h2>
            <p className="mt-0.5 text-xs text-gray-500">
              Write your message
            </p>
          </div>
        </div>

        <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-500">
          Plain text
        </span>
      </div>

      <div className="space-y-5 p-5">

        {/* System Instructions */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            System Instructions
          </label>
          <textarea
            rows={3}
            placeholder="You are a helpful AI assistant..."
            className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* User Prompt */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <label className="text-sm font-medium text-gray-700">
              Your Prompt
            </label>
            <span className="text-xs text-gray-400">0 / 10,000</span>
          </div>

          <textarea
            rows={8}
            placeholder="Ask anything... For example, explain JavaScript closures with a simple example."
            className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800">
                <Paperclip size={15} />
                <span>Attach file</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800">
                <RotateCcw size={15} />
                <span>Reset</span>
              </div>
            </div>

            <span className="text-xs text-gray-400">
              Markdown supported
            </span>
          </div>
        </div>

        {/* Send Button UI */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg active:translate-y-0 sm:w-auto"
        >
          <Sparkles size={17} />
          <span>Send Prompt</span>
          <Send size={15} />
        </button>

      </div>
    </section>
  );
};

export default PromptInput;
