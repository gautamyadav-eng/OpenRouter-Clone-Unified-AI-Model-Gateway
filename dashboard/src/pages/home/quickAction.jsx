
const actions = [
  {
    title: "Try Playground",
    description: "Test AI models with your own prompts.",
    icon: "⌘",
  },
  {
    title: "Explore Models",
    description: "Discover and compare available AI models.",
    icon: "◈",
  },
  {
    title: "Manage API Keys",
    description: "View your API key management options.",
    icon: "⚿",
  },
];

const QuickActions = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Common tasks for your AI gateway.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <div
            key={action.title}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-800">
              {action.icon}
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              {action.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {action.description}
            </p>

            <p className="mt-4 text-sm font-medium text-gray-700">
              Explore <span aria-hidden="true">→</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
