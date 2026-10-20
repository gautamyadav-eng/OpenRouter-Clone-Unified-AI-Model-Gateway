import React, { useState } from "react";
import axios from "axios";
import ModelSelector from "./ModelSelector";
import PromptInput from "./PromptInput";
import ResponsePanel from "./ResponsePanel";
function PlayGroundPage() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [promptData, setPromptData] = useState({
    systemPrompt: "",
    prompt: "",
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState("");

  const handleRunPrompt = async (data) => {
    const currentPrompt = data.prompt;
    if(!currentPrompt  || !selectedModel){
      setError("please enter a prompt and select a model");
      return;
    }
    setLoading(true);
    setError("");
    setResponse(null);
    try{
      const result = await axios.post("http://localhost:3000/api/chat", {
        prompt: currentPrompt,
        model :selectedModel.name
      }  );

      setResponse(result.data);
    }catch(error){
      console.log("chat Api error", error.response?.data || error.message);
      setError(
        error.response?.data?.message || "faild to get AI response"
      );
    }finally{
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-950">
            AI Playground
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experiment with different AI models using one unified interface.
          </p>
        </div>

        {/* Playground Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ModelSelector onModelSelect={setSelectedModel} />
            <PromptInput onRunPrompt={handleRunPrompt} />
          </div>

          <div className="space-y-6">
            <ResponsePanel response={response} loading={loading} error={error}/>

            <pre>{JSON.stringify({ selectedModel, ...promptData }, null, 2)}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlayGroundPage;
