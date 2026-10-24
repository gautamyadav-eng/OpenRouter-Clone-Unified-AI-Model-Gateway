
import ActivityRow from "./requestDetails.jsx";

const requests = [
  {
    id: 1,
    model: "GPT-4o",
    provider: "OpenAI",
    method: "POST",
    status: "Success",
    tokens: "1,240",
    latency: "624 ms",
    time: "2 min ago",
  },
  {
    id: 2,
    model: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    method: "POST",
    status: "Success",
    tokens: "2,180",
    latency: "912 ms",
    time: "8 min ago",
  },
  {
    id: 3,
    model: "Gemini 2.0 Flash",
    provider: "Google",
    method: "POST",
    status: "Failed",
    tokens: "—",
    latency: "1.2 s",
    time: "15 min ago",
  },
  {
    id: 4,
    model: "GPT-4o",
    provider: "OpenAI",
    method: "POST",
    status: "Success",
    tokens: "860",
    latency: "578 ms",
    time: "28 min ago",
  },
  {
    id: 5,
    model: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    method: "POST",
    status: "Success",
    tokens: "3,420",
    latency: "1.1 s",
    time: "42 min ago",
  },
  {
    id: 6,
    model: "GPT-4o",
    provider: "OpenAI",
    method: "POST",
    status: "Pending",
    tokens: "—",
    latency: "—",
    time: "Just now",
  },
];

const ActivityTable = () => {
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
            {requests.map((request) => (
              <ActivityRow key={request.id} request={request} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 border-t border-gray-100 px-6 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing {requests.length} sample requests</p>
        <p>Request details are displayed for UI preview only.</p>
      </div>
    </>
  );
};

export default ActivityTable;
