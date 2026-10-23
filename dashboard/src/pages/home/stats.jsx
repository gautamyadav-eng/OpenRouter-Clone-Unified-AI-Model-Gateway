
const statsData = [
  {
    title: "Total Requests",
    value: "1,284",
    description: "Total API requests",
    icon: "↗",
  },
  {
    title: "Tokens Used",
    value: "48.2K",
    description: "Total tokens consumed",
    icon: "◈",
  },
  {
    title: "Available Models",
    value: "12",
    description: "Models to explore",
    icon: "▦",
  },
  {
    title: "API Keys",
    value: "3",
    description: "Your API keys",
    icon: "⌘",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Overview
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          A quick look at your gateway usage.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsData.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-gray-600">
                {stat.title}
              </p>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg text-gray-700">
                {stat.icon}
              </span>
            </div>

            <h3 className="mt-4 text-3xl font-semibold text-gray-900">
              {stat.value}
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
