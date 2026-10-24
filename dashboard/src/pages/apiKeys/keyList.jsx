
import { KeyRound, Search, SlidersHorizontal } from "lucide-react";
import KeyItem from "./keyItem.jsx";

const apiKeys = [
  {
    id: 1,
    name: "React Frontend",
    key: "or_live_••••••••••••8xK2",
    createdAt: "Oct 20, 2026",
    lastUsed: "2 minutes ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Backend Development",
    key: "or_live_••••••••••••4mP9",
    createdAt: "Oct 18, 2026",
    lastUsed: "1 hour ago",
    status: "Active",
  },
  {
    id: 3,
    name: "Testing Project",
    key: "or_test_••••••••••••7qL1",
    createdAt: "Oct 15, 2026",
    lastUsed: "Never",
    status: "Revoked",
  },
];

const KeyList = () => {
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
              placeholder="Search API keys..."
              className="w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 sm:w-52"
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
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
            {apiKeys.map((apiKey) => (
              <KeyItem key={apiKey.id} apiKey={apiKey} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 border-t border-gray-100 px-6 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing {apiKeys.length} sample API keys</p>
        <p>Secret keys are masked for security.</p>
      </div>
    </section>
  );
};

export default KeyList;
