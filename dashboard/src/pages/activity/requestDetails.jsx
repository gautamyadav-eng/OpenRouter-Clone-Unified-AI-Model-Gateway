
import { ArrowUpRight, CheckCircle2, XCircle, Clock3 } from "lucide-react";

const ActivityRow = ({ request }) => {
  const statusStyles = {
    Success: "bg-green-50 text-green-700 ring-green-200",
    Failed: "bg-red-50 text-red-700 ring-red-200",
    Pending: "bg-yellow-50 text-yellow-700 ring-yellow-200",
  };

  const StatusIcon = {
    Success: CheckCircle2,
    Failed: XCircle,
    Pending: Clock3,
  }[request.status] || Clock3;

  return (
    <tr className="group transition-colors duration-200 hover:bg-blue-50/40">
      {/* Model */}
      <td className="px-6 py-5">
        <p className="whitespace-nowrap text-sm font-semibold text-gray-900">
          {request.model}
        </p>
        <p className="mt-1 text-xs text-gray-500">{request.provider}</p>
      </td>

      {/* Method */}
      <td className="px-6 py-5">
        <span className="rounded-md bg-blue-50 px-2 py-1 font-mono text-xs font-medium text-blue-700">
          {request.method}
        </span>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
            statusStyles[request.status] || "bg-gray-50 text-gray-600 ring-gray-200"
          }`}
        >
          <StatusIcon size={13} />
          {request.status}
        </span>
      </td>

      {/* Tokens */}
      <td className="px-6 py-5 text-sm tabular-nums text-gray-600">
        {request.tokens}
      </td>

      {/* Latency */}
      <td className="px-6 py-5 text-sm tabular-nums text-gray-600">
        {request.latency}
      </td>

      {/* Time */}
      <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-500">
        {request.time}
      </td>

      {/* Details - UI Only */}
      <td className="px-6 py-5 text-right">
        <button
          type="button"
          aria-label="View request details"
          className="rounded-lg p-2 text-gray-400 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-sm"
        >
          <ArrowUpRight size={17} />
        </button>
      </td>
    </tr>
  );
};

export default ActivityRow;
