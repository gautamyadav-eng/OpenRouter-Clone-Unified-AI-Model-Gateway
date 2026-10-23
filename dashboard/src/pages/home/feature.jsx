
const features = [
  {
    number: "01",
    title: "Unified API",
    description:
      "Access multiple AI providers through a single gateway interface.",
  },
  {
    number: "02",
    title: "Multiple Models",
    description:
      "Explore different models without managing separate integrations.",
  },
  {
    number: "03",
    title: "Centralized Usage",
    description:
      "View request activity and usage information in one place.",
  },
];

const Features = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Gateway Features
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          The essentials of a unified AI model gateway.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <span className="text-sm font-semibold text-gray-400">
              {feature.number}
            </span>

            <h3 className="mt-4 font-semibold text-gray-900">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
