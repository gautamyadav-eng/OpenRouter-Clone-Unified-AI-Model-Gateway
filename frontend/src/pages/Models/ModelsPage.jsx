
import React from "react";
import {
  Search,
  ChevronDown,
  ArrowUpDown,
  Sparkles,
} from "lucide-react";

const ModelsPage = () => {
  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
              EXPLORE AI
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Models
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore AI models from multiple providers through one
              unified API.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 sm:self-auto">
            <Sparkles size={16} />
            <span>Compare models</span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-gray-400">
            <Search size={19} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search models..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <ArrowUpDown size={16} />
            Sort by
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Categories */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-3">
          <button className="shrink-0 rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white">
            All Models
          </button>

          {["Text", "Image", "Audio", "Video", "Embeddings"].map(
            (category) => (
              <button
                key={category}
                className="shrink-0 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Results Heading */}
        <div className="mt-5 flex flex-col gap-2 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-gray-950">
            Featured Models
          </h2>
          <p className="text-sm text-gray-500">
            Explore models from different AI providers
          </p>
        </div>

        {/* Model Cards */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {/* GPT */}
          <article className="rounded-2xl border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-lg font-semibold text-white">
                G
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                Featured
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-950">GPT</h3>
            <p className="mt-1 text-sm text-gray-500">by OpenAI</p>

            <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
              General-purpose AI for reasoning, writing, and coding.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Text</span>
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Reasoning</span>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500">Provider</p>
              <p className="mt-1 text-sm font-medium text-gray-900">OpenAI</p>
            </div>
          </article>

          {/* Claude */}
          <article className="rounded-2xl border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg font-semibold text-orange-700">
              C
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-950">Claude</h3>
            <p className="mt-1 text-sm text-gray-500">by Anthropic</p>

            <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
              AI model suited to writing, analysis, and complex tasks.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Text</span>
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Analysis</span>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500">Provider</p>
              <p className="mt-1 text-sm font-medium text-gray-900">Anthropic</p>
            </div>
          </article>

          {/* Gemini */}
          <article className="rounded-2xl border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-semibold text-blue-700">
              G
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-950">Gemini</h3>
            <p className="mt-1 text-sm text-gray-500">by Google</p>

            <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
              Multimodal AI for understanding information and solving tasks.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Text</span>
              <span className="rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">Multimodal</span>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500">Provider</p>
              <p className="mt-1 text-sm font-medium text-gray-900">Google</p>
            </div>
          </article>

        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Browse and compare models through your unified AI gateway.
        </p>

      </div>
    </main>
  );
};

export default ModelsPage;