import React, { useState }  from "react";
import { Search, SlidersHorizontal} from "lucide-react";

const categories = [
  "All Models",
  "Chat",
  "Reasoning",
  "Code",
  "Vision",
];

const ModelFilters = ({search, setSearch, category, setCategory, sortBy, setSortBy}) => {
 
  

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            size={19}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search models or providers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* Sort UI */}
        <div className="flex items-center gap-2 self-start rounded-xl border border-gray-200 px-3 py-2.5 transition-colors hover:bg-gray-50 lg:self-auto">
          <SlidersHorizontal size={17} className="text-gray-500" />
          
          <label className="text-sm text-gray-600">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cursor-pointer bg-transparent text-sm font-medium outline-none"
          >
            <option value="Popular">Popular</option>
            <option value="Name A-Z">Name (A–Z)</option>
            <option value="Name Z-A">Name (Z–A)</option>
          </select>
          
        </div>
      </div>

      {/* Categories */}
      <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
              category === item
                ? "border-gray-900 bg-gray-900 text-white hover:bg-gray-800"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ModelFilters;
