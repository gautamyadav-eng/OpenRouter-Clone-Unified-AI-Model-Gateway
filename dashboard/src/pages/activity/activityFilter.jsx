
import { Search, CalendarDays, SlidersHorizontal } from "lucide-react";

const ActivityFilters = () => {
  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="relative w-full sm:max-w-xs">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search requests or models..."
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 transition-colors hover:bg-gray-50">
          <CalendarDays size={16} className="text-gray-500" />
          <select
            defaultValue="24h"
            className="bg-transparent text-sm text-gray-700 outline-none"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 transition-colors hover:bg-gray-50">
          <SlidersHorizontal size={16} className="text-gray-500" />
          <select
            defaultValue="all"
            className="bg-transparent text-sm text-gray-700 outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="success">Success</option>
            <option value="error">Failed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ActivityFilters;
