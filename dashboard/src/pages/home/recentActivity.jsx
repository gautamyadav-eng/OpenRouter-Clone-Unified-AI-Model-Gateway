
const activities = [
  {
    model: "GPT",
    endpoint: "/api/chat",
    status: "Success",
    tokens: "1,240",
    time: "2 min ago",
  },
  {
    model: "Claude",
    endpoint: "/api/chat",
    status: "Success",
    tokens: "856",
    time: "15 min ago",
  },
  {
    model: "Gemini",
    endpoint: "/api/chat",
    status: "Failed",
    tokens: "—",
    time: "32 min ago",
  },
  {
    model: "GPT",
    endpoint: "/api/chat",
    status: "Success",
    tokens: "2,105",
    time: "1 hour ago",
  },
];

const RecentActivity = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          A preview of recent API requests.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-5 py-4 font-medium">Model</th>
              <th className="px-5 py-4 font-medium">Endpoint</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Tokens</th>
              <th className="px-5 py-4 font-medium">Time</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {activities.map((activity, index) => (
              <tr
                key={`${activity.model}-${index}`}
                className="text-gray-700"
              >
                <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                  {activity.model}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                  {activity.endpoint}
                </td>

                <td className="whitespace-nowrap px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      activity.status === "Success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>

                <td className="whitespace-nowrap px-5 py-4">
                  {activity.tokens}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                  {activity.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 px-5 py-4">
        <p className="text-xs text-gray-500">
          Sample data for UI preview.
        </p>
      </div>
    </section>
  );
};

export default RecentActivity;
