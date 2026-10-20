import React from "react";
import {
  Bot,
  Copy,
  Check,
  Clock,
  Zap,
  Code2,
} from "lucide-react";

const ResponsePanel = ({response, loading, error}) => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-950">
            Response
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            AI-generated output will appear here.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
          <Bot size={23} className="text-gray-800" />
        </div>
      </div>

      {/* Response Content */}
      <div className="mt-5 min-h-64">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-700">
          <Code2 size={17} />
          Model Output
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5">
          <div className="mb-3 flex items-center gap-2 text-gray-500">
            <Bot size={18} />
            <span className="text-sm font-medium">AI Assistant</span>
          </div>

          
{loading ? (
  <p className="text-sm leading-7 text-gray-500">
    Generating response...
  </p>
) : error ? (
  <p className="text-sm leading-7 text-red-600">
    {error}
  </p>
) : response ? (
  <pre className="whitespace-pre-wrap className-words text-sm leading-7 text-gray-700">
    {JSON.stringify(response.data, null, 2)}
  </pre>
) : (
  <p className="text-sm leading-7 text-gray-500">
    Your AI response will appear here after you run a prompt.
    Select a model, enter your message, and click Run Prompt
    to get started.
  </p>
)}
        </div>
      </div>

      {/* Response Stats */}
      <div className="mt-5 flex flex-wrap gap-4 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock size={15} />
          <span>Latency: --</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Zap size={15} />
          <span>Tokens: --</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          <Copy size={15} />
          Copy Response
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          <Check size={15} />
          Save
        </button>
      </div>
    </section>
  );
};

export default ResponsePanel;