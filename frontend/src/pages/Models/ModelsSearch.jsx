
import React from "react";
import { Search, ArrowUpDown, ChevronDown } from "lucide-react";

const ModelSearch = () => {
  return (
    <section className="w-full bg-white px-5 pb-6 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row">

        {/* Search Input */}
        <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-gray-400">
          <Search size={19} className="shrink-0 text-gray-400" />

          <input
            type="text"
            placeholder="Search models by name or provider..."
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />

          <span className="hidden rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-400 sm:block">
            Search
          </span>
        </div>

        {/* Sort Button */}
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <ArrowUpDown size={16} />
          <span>Sort by</span>
          <ChevronDown size={16} />
        </button>

      </div>
    </section>
  );
};

export default ModelSearch;
