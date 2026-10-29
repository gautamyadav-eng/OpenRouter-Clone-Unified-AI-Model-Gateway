import React, { useEffect, useState } from "react";
import { Boxes, Sparkles, ShieldCheck } from "lucide-react";
import ModelFilters from "./modelFilter.jsx";
import ModelList from "./modelList.jsx";
import axios from "axios";

const Models = () => {
  const [modelList, setModelList] = useState(0);
  const [providerCount, setProviderCount] = useState(0);
  const [search, setSearch] = useState("");
  const [models, setModels] = useState([]);
  const [category, setCategory] = useState("All Models");
  const [sortBy, setSortBy] = useState("Popular");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchModel = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.get("http://localhost:3000/api/models");

      if (!data.success) {
        throw new error("Failed to fetch models.");
      }
      const fetchedModels = data.data.model || [];
      setModels(fetchedModels);
      setModelList(fetchedModels.length);

      const uniqueProviders = new Set(
        fetchedModels.map((model) => model.provider),
      );
      setProviderCount(uniqueProviders.size);
    } catch (error) {
      console.error("Model fetch error:", error);
      setError("Unable to load models. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModel();
  }, []);
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Page Header */}
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <Boxes size={16} />
              <span>AI Gateway</span>
              <span>/</span>
              <span className="text-gray-900">Models</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Models
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover AI models from different providers through one unified
              API. Compare capabilities and find the right model for your needs.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Unified Access</p>
              <p className="text-xs text-gray-500">One API, multiple models</p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <p className="text-sm text-gray-500">Available Models</p>
            <h2 className="mt-3 text-3xl font-bold">{modelList}</h2>
            <p className="mt-2 text-xs text-gray-500">
              Models listed in this demo
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <p className="text-sm text-gray-500">Providers</p>
            <h2 className="mt-3 text-3xl font-bold">{providerCount}</h2>
            <p className="mt-2 text-xs text-gray-500">Different AI providers</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <p className="text-sm text-gray-500">Featured</p>
            <div className="mt-3 flex items-center gap-2">
              <Sparkles size={23} className="text-violet-500" />
              <h2 className="text-2xl font-bold">AI Models</h2>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Browse models by capability
            </p>
          </div>
        </section>

        {/* Filters */}
        <ModelFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Models */}
        <ModelList
          search={search}
          models={models}
          category={category}
          sortBy={sortBy}
          loading={loading}
          error ={error}
          onRetry = {fetchModel}
        />
      </div>
    </main>
  );
};

export default Models;
