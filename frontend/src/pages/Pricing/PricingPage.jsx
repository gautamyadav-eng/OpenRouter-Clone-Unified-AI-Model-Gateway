import React from "react";
import { Check, Zap, Sparkles, Building2 } from "lucide-react";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
            <Sparkles size={16} />
            Simple, transparent pricing
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Choose the right plan
            <span className="mt-2 block text-gray-500">
              for your AI workflow.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore AI models through one unified gateway. Start free and
            choose the plan that fits your development needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">

          {/* Free Plan */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-950">
              Free
            </h2>

            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
              Start exploring AI models and build your first integration.
            </p>

            <div className="mt-7">
              <span className="text-4xl font-bold tracking-tight text-gray-950">
                $0
              </span>
              <span className="ml-2 text-sm text-gray-500">/ forever</span>
            </div>

            <div className="mt-7 rounded-lg border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">
              Get started for free
            </div>

            <div className="my-7 border-t border-gray-200" />

            <p className="text-sm font-semibold text-gray-900">
              What's included
            </p>

            <ul className="mt-5 space-y-4">
              {[
                "Access to available models",
                "AI playground",
                "API key management",
                "Basic usage information",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <Check size={17} className="mt-0.5 shrink-0 text-gray-900" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col rounded-2xl border-2 border-gray-950 bg-gray-950 p-7 text-white shadow-xl">
            <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-950">
              Popular
            </div>

            <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
              <Zap size={22} />
            </div>

            <h2 className="mt-5 text-xl font-semibold">Pro</h2>

            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-300">
              For developers building and testing AI-powered applications.
            </p>

            <div className="mt-7">
              <span className="text-4xl font-bold tracking-tight">$19</span>
              <span className="ml-2 text-sm text-gray-300">/ month</span>
            </div>

            <div className="mt-7 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-gray-950">
              Get Pro
            </div>

            <div className="my-7 border-t border-gray-700" />

            <p className="text-sm font-semibold">Everything in Free, plus</p>

            <ul className="mt-5 space-y-4">
              {[
                "Higher usage limits",
                "Advanced model access",
                "Detailed usage analytics",
                "Priority request processing",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <Check size={17} className="mt-0.5 shrink-0 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
              <Building2 size={22} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-950">
              Enterprise
            </h2>

            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
              For teams that need a tailored AI gateway experience.
            </p>

            <div className="mt-7">
              <span className="text-3xl font-bold tracking-tight text-gray-950">
                Custom
              </span>
            </div>

            <div className="mt-7 rounded-lg border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">
              Contact sales
            </div>

            <div className="my-7 border-t border-gray-200" />

            <p className="text-sm font-semibold text-gray-900">
              Enterprise features
            </p>

            <ul className="mt-5 space-y-4">
              {[
                "Custom usage requirements",
                "Team-oriented workflows",
                "Flexible integration options",
                "Dedicated support options",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <Check size={17} className="mt-0.5 shrink-0 text-gray-900" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-950">
            One gateway. Multiple AI models.
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Compare plans and choose an option that suits your AI development
            workflow.
          </p>
        </div>

      </div>
    </main>
  );
};

export default PricingPage;