import { useState } from "react";
import axios from "axios";
import { KeyRound, Plus, Info,Copy } from "lucide-react";

const CreateKey = ({onKeyCreated}) => {

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [secretKey, setSecretkey] = useState("");
  const [error, setError] = useState("");
  const [permission, setPermission] = useState("full");

  const handleCreateKey = async () =>{
    if(!name.trim()){
      setError("Please enter API key name");
      return;
    }

    try{
      setLoading(true);
      setError("");
      setSecretkey("");

      const {data} = await axios.post("http://localhost:3000/api/keys/create", {name}, {withCredentials:true});

      if(data.success){
        setSecretkey(data.apiKey);
        setName("");
        onKeyCreated?.();
      }
    }catch(error){
      setError(error.response?.data?.message || "Failed to create apikey");
    }finally{
      setLoading(false);
    }
  }
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-gray-100 p-3 text-gray-700">
          <KeyRound size={21} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Create a new API key
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Generate a key to authenticate requests through your AI gateway.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Key Name */}
        <div>
          <label
            htmlFor="key-name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Key Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. My React Application"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />

          <p className="mt-2 text-xs text-gray-400">
            Choose a name to identify this key.
          </p>
        </div>

        {/* Key Permissions */}
        <div>
          <label
            htmlFor="key-permission"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Permissions
          </label>

          <select
            id="key-permission"
            value={permission}
            onChange={(e) =>setPermission(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="full">Full API Access</option>
            <option value="chat">Chat Completions Only</option>
            <option value="read">Read Only</option>
          </select>

          <p className="mt-2 text-xs text-gray-400">
            Select the intended access level.
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex items-start gap-2 rounded-xl bg-gray-50 p-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-gray-500" />

        <p className="text-xs leading-5 text-gray-500">
          For security, your secret key should only be displayed once
          when it is generated. This behavior will be implemented later.
        </p>
      </div>

      {/* Create Button - UI Only */}
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={handleCreateKey}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
        >
          <Plus size={17} />
          {loading ? "Creating..." :"Create API key"}
        </button>
      </div>

      {secretKey && (
  <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
    <p className="text-sm font-semibold text-green-800">
      API Key Generated Successfully!
    </p>

    <div className="mt-3 flex items-center gap-2">
      <code className="flex-1 break-all text-sm text-gray-700">
        {secretKey}
      </code>

      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(secretKey)}
        className="rounded-lg bg-white p-2 text-gray-700"
        title="Copy API key"
      >
        <Copy size={17} />
      </button>
    </div>

    <p className="mt-2 text-xs text-red-600">
      Copy this key now. It will not be shown again.
    </p>
  </div>
)}

{error && (
  <p className="mt-3 text-sm text-red-600">{error}</p>
)}
    </section>
  );
};

export default CreateKey;



