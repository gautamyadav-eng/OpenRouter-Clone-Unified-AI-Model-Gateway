import { useState,useEffect } from "react";
import axios from "axios";
import {
  Activity as ActivityIcon,
  Activity,
  CheckCircle2,
  Clock3,
  Coins,
  Zap,
} from "lucide-react";

import ActivityFilters from "./activityFilter.jsx";
import ActivityTable from "./activityTable.jsx";

const ActivityPage = () => {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState("all");
  const [status, setStatus] = useState("all");
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalToken, setTotalTokens] = useState(0);
  
 

  useEffect(() => {
    const fetechLog = async() => {
      try{
        const data = await axios.get("http://localhost:3000/api/logs", {withCredentials:true});

        setLogs(data.data.logs || []);
        setTotalTokens(data.data.totalTokens || []);
      }catch(error){
        console.log("Activity logs fetch error:",error);
        setError(error.response?.data?.message || "Failed to fetch activity logs");
      }finally{
        setLoading(false);
      }
    }
    fetechLog();
  }, []);

  const totalRequests = logs.length;

  const successFullRequests =  logs.filter(
    (logs) => logs.status === "success"
  ).length;

  const successRate = totalRequests ? ((successFullRequests/totalRequests) *100).toFixed(1): "0.0";

  const avgLatency = totalRequests  ? Math.round(logs.reduce((total, log) => total + (log.responseTime || 0), 0)/ totalRequests) :0;

  return (
    <div className="min-h-screen bg-gray-50/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <ActivityIcon size={16} />
            <span>AI Gateway</span>
            <span>/</span>
            <span className="text-gray-900">Activity</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Activity & Logs
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Monitor API requests, response times, token usage, and request
            status across your AI gateway.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Activity size={21} />
              </div>
              <span className="text-xs text-gray-400">ALL REQUESTS</span>
            </div>
            <p className="mt-5 text-sm text-gray-500">Total Requests</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">{totalRequests.toLocaleString()}</h2>
            <p className="mt-2 text-xs text-gray-400">Sample usage data</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <CheckCircle2 size={21} />
              </div>
              <span className="text-xs text-gray-400">SUCCESSFUL</span>
            </div>
            <p className="mt-5 text-sm text-gray-500">Success Rate</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">{successRate}%</h2>
            <p className="mt-2 text-xs text-gray-400">Successful API requests</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                <Clock3 size={21} />
              </div>
              <span className="text-xs text-gray-400">PERFORMANCE</span>
            </div>
            <p className="mt-5 text-sm text-gray-500">Avg. Latency</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">{avgLatency} ms</h2>
            <p className="mt-2 text-xs text-gray-400">Average response time</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                <Coins size={21} />
              </div>
              <span className="text-xs text-gray-400">TOKEN USAGE</span>
            </div>
            <p className="mt-5 text-sm text-gray-500">Tokens Used</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">{totalToken}</h2>
            <p className="mt-2 text-xs text-gray-400">Sample token consumption</p>
          </div>
        </div>

        {/* Request Activity */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Zap size={19} className="text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">
                API Request Logs
              </h2>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Review recent requests sent through your gateway.
            </p>
          </div>

          <ActivityFilters search={search} setSearch={setSearch} dateRange={dateRange} setDateRange={setDateRange} status={status} setStatus={setStatus} />
          <ActivityTable logs={logs} loading={loading} error={error} search={search} dateRange={dateRange} status={status} />
        </section>
      </div>
    </div>
  );
};

export default ActivityPage;
