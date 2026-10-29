import { Boxes } from "lucide-react";
import ModelCard from "./modelCard.jsx";

const ModelList = ({ search = "", models = [], category = "All Models", sortBy="Popular", loading=false , error="", onRetry }) => {
  const searchText = search.toLowerCase().trim();

  const filteredModels = models.filter((model) => {
    const name = (model.name || "").toLowerCase();
    const provider = (model.provider || "").toLowerCase();
     const modelCategory = model.category || "";

     const matchesSearch = name.includes(searchText) ||     provider.toLowerCase().includes(searchText);

      const matchesCategory =
    category === "All Models" || modelCategory === category;

      return matchesSearch && matchesCategory;
  });

  const sortedModels = [...filteredModels].sort((a,b) =>{
    if(sortBy ===  "Name A-Z"){
      return (a.name || "").localeCompare(b.name || "");
    }

      if (sortBy === "Name Z-A") {
    return (b.name || "").localeCompare(a.name || "");
  }
 return 0;
  });

  if(loading){
    return (
    <div className="py-16 text-center">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
      <p className="mt-4 text-sm text-gray-500">
        Loading models...
      </p>
    </div>
  );
  }

  if (error) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
      <p className="font-semibold text-gray-900">
        Failed to load models
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {error}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Retry
      </button>
    </div>
  );
}
  return (
    <section>
      {/* List Header */}
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Boxes size={21} />
            Available Models
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Explore the models listed in your gateway.
          </p>
        </div>

        <span className="w-fit rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
          {sortedModels.length} models
        </span>
      </div>

      {/* Model Cards */}
      {sortedModels.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedModels.map((model, index) => (
            <ModelCard
              key={model.id || model._id || model.name || index}
              model={model}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
          <Boxes size={28} className="mx-auto text-gray-400" />

          <p className="mt-3 font-medium text-gray-800">
            No models found
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Try searching with another model name or provider.
          </p>
        </div>
      )}
    </section>
  );
};

export default ModelList;