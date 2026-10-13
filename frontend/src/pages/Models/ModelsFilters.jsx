import React from 'react'

function ModelsFilters() {
  const categories = [
    "Text",
    "Image",
    "Audio",
    "Video",
    "Embeddings",
  ];

  return (
    <section className="w-full bg-white px-5 pb-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            type="button"
            className="shrink-0 rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white"
          >
            All Models
          </button>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="shrink-0 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-950"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModelsFilters