import React, { useState } from "react";
import { Search, ArrowUpDown, ChevronDown } from "lucide-react";

const ModelSearch = ({ search, setSearch, sortBy, setSortBy }) => {
  const [sortOpen, setSortOpen] = useState(false);

  const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
    { label: "Provider: A to Z", value: "provider-asc" },
  ];

  const selectedSort =
    sortOptions.find((option) => option.value === sortBy)?.label || "Sort By";
  return (
    <section className="w-full bg-white px-5 pb-6 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row">
        <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-gray-400">
          <Search size={19} className="shrink-0 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search models by name or provider..."
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          

          <span
            onClick={() => setSearch("")}
            className="hidden rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-400 sm:block"
          >
            Search
          </span>
        </div>

        <button
          type="button"
          onClick={() => setSortOpen((open) => !open)}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <ArrowUpDown size={16} />
          <span>{selectedSort}</span>
          <ChevronDown size={16} />
        </button>

        {sortOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSortBy(option.value);
                  setSortOpen(false);
                }}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                  sortBy === option.value
                    ? "bg-gray-100 font-medium text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelSearch;
