
const Hero = () => {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
          Welcome back!
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Manage your AI models, API keys, and usage from one place.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
          ◈
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">
            AI Gateway
          </p>
          <p className="mt-1 text-xs text-gray-500">
            One API, multiple models
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
