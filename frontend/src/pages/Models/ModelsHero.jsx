
import React from "react";
import { Sparkles } from "lucide-react";

const ModelsHero = () => {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600">
              <Sparkles size={14} />
              <span>UNIFIED AI GATEWAY</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Explore AI Models
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Discover and compare AI models from different providers
              through one unified API.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            One API. Multiple AI providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelsHero;
