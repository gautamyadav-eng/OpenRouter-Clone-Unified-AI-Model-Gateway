
import {
  Bot,
  Copy,
  CheckCircle2,
  Clock3,
  Coins,
  Code2,
  MoreHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";

const ResponsePanel = ({response, selectModel, loading, error, responseTime}) => {
  return (
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">

    {/* Header */}
    <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
          <Bot size={20} />
        </div>
        <div>
          <h2 className="text-base font-bold">Model Response</h2>
          <p className="mt-0.5 text-xs text-gray-500">
            AI-generated output preview
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Preview
        </span>

        <div className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
          <MoreHorizontal size={19} />
        </div>
      </div>
    </div>

    <div className="space-y-5 p-5">

      {/* Response Area */}
      <div className="min-h-75 rounded-xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">

        <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
          <Sparkles size={15} className="text-violet-500" />
          <span>
            {loading
              ? "Generating response..."
              : response
                ? "Generated response"
                : "Waiting for prompt"}
          </span>
        </div>

        <div className="space-y-4 text-sm leading-7 text-gray-600">
          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : response ? (
            <p className="whitespace-pre-wrap text-gray-700">{response}</p>
          ) : (
            <p className="text-gray-400">
              {loading
                ? "AI is generating your response..."
                : "Your AI response will appear here."}
            </p>
          )}
        </div>

      </div>

      {/* Response Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Bot size={15} />
          <span>{selectModel}</span>
          <span>•</span>
          <span>{response ? "Response received" : "No response yet"}</span>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900">
          <Copy size={15} />
          <span>Copy response</span>
        </div>
      </div>

      {/* Response Metrics */}
      <div className="border-t border-gray-100 pt-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Response Metrics
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          {/* Tokens */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Coins size={15} />
              <span className="text-xs">Tokens</span>
            </div>
            <p className="mt-2 text-lg font-bold text-gray-900">--</p>
            <p className="mt-1 text-xs text-gray-400">
              Awaiting execution
            </p>
          </div>

          {/* Latency */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Clock3 size={15} />
              <span className="text-xs">Latency</span>
            </div>
            <p className="mt-2 text-lg font-bold text-gray-900">
              {response ? `${responseTime ?? "--"} ms` : "--"}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {response ? "Response time" : "Awaiting execution"}
            </p>
          </div>

          {/* Status */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Zap size={15} />
              <span className="text-xs">Status</span>
            </div>

            <p className="mt-2 flex items-center gap-1.5 text-lg font-bold text-gray-700">
              {loading ? (
                "Generating"
              ) : error ? (
                "Failed"
              ) : response ? (
                <>
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Success
                </>
              ) : (
                "Idle"
              )}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {loading
                ? "Request in progress"
                : error
                  ? "Request failed"
                  : response
                    ? "Request completed"
                    : "No request sent"}
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
  );
};

export default ResponsePanel;
