import React from "react";
import { Paperclip, Send, SlidersHorizontal } from "lucide-react";

const PromptInput = () => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-950">
            Your Prompt
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Write instructions for the AI model.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          <SlidersHorizontal size={16} />
          Parameters
        </button>
      </div>

      <div className="mb-4">
        <label
          htmlFor="system-prompt"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          System Instructions
        </label>

        <textarea
          id="system-prompt"
          rows={3}
          placeholder="You are a helpful AI assistant..."
          className="w-full resize-y rounded-xl border border-gray-200 p-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400"
        />
      </div>

      <div>
        <label
          htmlFor="user-prompt"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Message
        </label>

        <textarea
          id="user-prompt"
          rows={6}
          placeholder="Ask anything..."
          className="w-full resize-y rounded-xl border border-gray-200 p-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <button
          type="button"
          aria-label="Attach file"
          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Paperclip size={19} />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          <Send size={16} />
          Run Prompt
        </button>
      </div>
    </section>
  );
};

export default PromptInput;