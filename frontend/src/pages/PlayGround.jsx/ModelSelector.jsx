import React, { useState, useEffect  } from "react";
import axios from 'axios';
import { ChevronDown, Sparkles, Zap, Check } from "lucide-react";



const ModelSelector = ({onModelSelect}) => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState("");

  useEffect (() =>{
    const fetchModels = async () => {  
      try {
      const response = await axios.get("http://localhost:3000/api/models");
      
      const modelList = response.data.data.model;
      
      setModels(modelList);
      setSelectedModel(modelList[0] || null);
      }catch(err){
        console.log("Error fetching models:", error);
        setError("models are not loading");
      }finally{
        setLoading(false);
      }
    }
    fetchModels();
  }, [])
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-950">
        Select Model
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Choose an AI model for your request.
      </p>

      <div className="relative mt-5">
        <button
          type="button"
          onClick={() => {setSelectedModel(models); onModelSelect(models); setIsOpen(!isOpen);}}
          
          className="flex w-full items-center justify-between rounded-xl border border-gray-200 p-4 text-left hover:border-gray-400"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
              <Sparkles size={22} className="text-gray-800" />
            </div>

            <div>
              <p className="font-medium text-gray-950">
                {selectedModel ? selectedModel.name : "Loading models..."}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {selectedModel ? selectedModel.provider : ""}
              </p>
            </div>
          </div>

          <ChevronDown
            size={20}
            className={`text-gray-500 transition ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            {models.map((model) => (
              <button
                key={model.name}
                type="button"
                onClick={() => {
                  setSelectedModel(model);
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {model.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {model.provider} · {model.description}
                  </p>
                </div>

                {selectedModel.name === model.name && (
                  <Check size={17} className="text-violet-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
        <Zap size={16} className="shrink-0 text-amber-500" />
        <span>Model pricing and limits will appear here.</span>
      </div>
    </section>
  );
};

export default ModelSelector;