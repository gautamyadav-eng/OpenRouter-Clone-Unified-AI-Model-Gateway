
import ActivityRow from "./requestDetails.jsx";

const ActivityTable = ({logs, loading, error, search, dateRange,status}) => {


 const filteredRequests = logs.filter((request) => {
  const model = (request.model || "").toLowerCase();
  const provider = (request.provider || "").toLowerCase();
  const requestStatus = (request.status || "").toLowerCase();

  const matchesSearch =
    model.includes(search.toLowerCase()) ||
    provider.includes(search.toLowerCase());

  const matchesStatus =
    status === "all" || requestStatus === status;

  const logDate = new Date(request.createdAt);
  const now = new Date();

  const rangeMs =
    dateRange === "all"
    ? Infinity
    : dateRange === "24h"
    ? 24 * 60 * 60 * 1000
    : dateRange === "7d"
    ? 7 * 24 * 60 * 60 * 1000
    : 30 * 24 * 60 * 60 * 1000;


  const matchesDate =
    !isNaN(logDate.getTime()) &&
    now - logDate >= 0 &&
    now - logDate <= rangeMs;

  return matchesSearch && matchesStatus && matchesDate;
});


  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-212.5 text-left">
          <thead className="bg-gray-50/80">
            <tr className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-6 py-4">Model / Provider</th>
              <th className="px-6 py-4">Method</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Tokens</th>
              <th className="px-6 py-4">Latency</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4 text-right">Details</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
           {loading ? (
  <tr>
    <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
      Loading activity logs...
    </td>
  </tr>
) : error ? (
  <tr>
    <td colSpan="7" className="px-6 py-10 text-center text-red-500">
      {error}
    </td>
  </tr>
) : filteredRequests.length === 0 ? (
  <tr>
    <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
      No activity logs found.
    </td>
  </tr>
) : (
  filteredRequests.map((request) => (
    <ActivityRow key={request._id} request={request} />
  ))
)}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 border-t border-gray-100 px-6 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
       <p>Showing {filteredRequests.length} of {logs.length} requests</p>
<p>Activity logs fetched from your account.</p>
      </div>
    </>
  );
};

export default ActivityTable;
