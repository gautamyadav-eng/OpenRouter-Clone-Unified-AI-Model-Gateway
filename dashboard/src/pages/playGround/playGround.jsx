
import { Sparkles, Terminal, ShieldCheck } from "lucide-react";
import ModelSelector from "./modelSelector.jsx";
import PromptInput from "./promptInput.jsx";
import ResponsePanel from "./responsePanel.jsx";

const Playground = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Header */}
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <Terminal size={16} />
              <span>AI Gateway</span>
              <span>/</span>
              <span className="text-gray-900">Playground</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Playground
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Experiment with AI models, write prompts, and preview responses
              from one unified workspace.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Sparkles size={21} />
            </div>
            <div>
              <p className="text-sm font-semibold">AI Workspace</p>
              <p className="text-xs text-gray-500">Ready to experiment</p>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-blue-600" />
          <div>
            <h2 className="text-sm font-semibold text-blue-900">
              Unified Model Playground
            </h2>
            <p className="mt-1 text-sm leading-6 text-blue-800/80">
              Select a model and prepare a prompt in a single interface.
              Model execution and API integration can be added later.
            </p>
          </div>
        </section>

        {/* Model Selection */}
        <ModelSelector />

        {/* Prompt and Response */}
        <section className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
          <PromptInput />
          <ResponsePanel />
        </section>

      </div>
    </main>
  );
};

export default Playground;
