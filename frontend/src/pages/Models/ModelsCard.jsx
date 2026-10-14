
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, Zap } from "lucide-react";


const ModelCard = ({ search = "", sortBy = "default" }) => {
   const [model, setModel] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() =>{
    const fetchModels = async () => {
      try{
        const response = await axios.get("http://localhost:3000/api/models");
      

      if(!response.data.success){
        throw new error(
          response.data.message || "Failed to fetch models"
        );
      }
      setModel(response.data.data.model);
    }catch(err){
      setError(
        err.response?.data?.message || err.message || "Failed to fetch model"
      );
    }finally{
      setLoading(false);
    }
  };

  fetchModels();
   }, []);

   if(loading){
    return (
      <section className="px-5, py-8 text-center text-gray-500">
        Loading models...
      </section>
    )
   }

   if(error){
    return (
      <section className="px-5 py-8 text-center text-gray-500">
        {error}
      </section>
    )
   }

   const filteredModels = model
  .filter((item) => {
    const query = search.trim().toLowerCase();

    return (
      item.name?.toLowerCase().includes(query) ||
      item.provider?.toLowerCase().includes(query) ||
      item.modelId?.toLowerCase().includes(query)
    );
  })
  .sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sortBy === "provider-asc") {
      return a.provider.localeCompare(b.provider);
    }

    return 0;
  });

   if(filteredModels.length === 0){
    return (
      <section className="px-5 py-8 text-center text-gray-500">
       No models available.
      </section>
    )
   }
   
 

  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredModels.map((model) => (
          <div
            key={model.name}
            className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-lg font-bold text-gray-800">
                {model.name.charAt(0)}
              </div>

              <ArrowUpRight
                size={19}
                className="text-gray-400 transition group-hover:text-gray-900"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-950">
                {model.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                By {model.provider}
              </p>

              <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
                {model.description}
              </p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600">
                Model ID: {model.modelId}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                <Zap size={13} />
                AI Models
              </span>

              <span className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
               Available
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelCard
