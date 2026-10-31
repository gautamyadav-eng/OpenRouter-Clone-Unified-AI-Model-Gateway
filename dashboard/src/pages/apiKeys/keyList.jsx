import { useEffect, useState } from "react";
import axios from "axios";
import { KeyRound, Search, SlidersHorizontal } from "lucide-react";
import KeyItem from "./keyItem.jsx";

const KeyList = ({refreshKey, onStatsChange}) => {

  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTrem] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);


  const fetchApiKey = async () => {
    try{
      setLoading(true)
      setError("");

    

      const {data} = await axios.get("http://localhost:3000/api/keys",{
       withCredentials:true
      });

      if(data.success){
        setApiKeys(data.apiKeys);

         onStatsChange?.({
    total: data.apiKeys.length,
    active: data.apiKeys.filter((key) => key.isActive).length,
  });
  
      }
    }catch(error){
      if(error.response?.status === 404){
        setApiKeys([]);
        onStatsChange?.({ total: 0, active: 0 });
      }else{
        setError(error.response?.data?.message ||" Failed to fetch  API keys");
      }
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApiKey();
  },[refreshKey]);

  const handleRevoke = async(id) => {
    try{
      setError("");
      const {data } = await axios.patch( `http://localhost:3000/api/keys/${id}`,
      {},
      { withCredentials: true })
    
    if (data.success) {
      await fetchApiKey();
    }
  }catch (error) {
  setError(
    error.response?.data?.message || "Failed to revoke API key"
  );
  }
};

const searchFilter = apiKeys.filter((apiKey) => 
apiKey.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
);

const filteredApiKeys = apiKeys.filter((apiKey) => {
  const matchSearch = apiKey.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

  const matchStatus = statusFilter === "all" ||
  (statusFilter ==="active" && apiKey.isActive) ||
  (statusFilter === "revoked" && !apiKey.isActive);
  return matchSearch && matchStatus;
})

  if (loading) {
    return <p className="py-10 text-center text-gray-500">Loading API keys...</p>;
  }

  if (error) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
        <p className="text-sm text-red-600">{error}</p>
        <button
          onClick={fetchApiKey}
          className="mt-3 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white"
        >
          Retry
        </button>
      </div>
    );
  }
   return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <KeyRound size={19} className="text-gray-700" />

            <h2 className="text-lg font-semibold text-gray-900">
              Your API Keys
            </h2>

            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
              {apiKeys.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            View and manage your existing API keys.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTrem(e.target.value)}
              placeholder="Search API keys..."
              className="w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 sm:w-52"
            />
          </div>

          <button
            type="button"
            onClick={() =>  setShowFilters(!showFilters)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          {showFilters && (
    <div className="absolute right-0 z-10 mt-2 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
      <button onClick={() => {
  setStatusFilter("all");
  setShowFilters(false);
}} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100">
        All Keys
      </button>
      <button onClick={() => {
    setStatusFilter("active");
    setShowFilters(false);
  }} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100">
        Active
      </button>
      <button onClick={() => {
    setStatusFilter("revoked");
    setShowFilters(false);
  }} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100">
        Revoked
      </button>
    </div>
  )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-190 text-left">
          <thead className="bg-gray-50/80">
            <tr className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">API Key</th>
              <th className="px-6 py-4">Last Used</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredApiKeys.map((apiKey) => (
              <KeyItem key={apiKey._id} 
              apiKey={{...apiKey, status:apiKey.isActive ? "Active" : "Revoked",
                createdAt: new Date(apiKey.createdAt).toLocaleDateString(),
                lastUsed: "Not available",
                key: "or_live_............",
              }} 
              onRevoke={handleRevoke}/>
              
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 border-t border-gray-100 px-6 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p> Showing {filteredApiKeys.length} of {apiKeys.length} API keys</p>
        <p>Secret keys are masked for security.</p>
      </div>
    </section>
  );
};

export default KeyList;
