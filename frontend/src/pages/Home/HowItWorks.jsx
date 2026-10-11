import React from 'react'

const HowItWorks = () => {
  return (
     <section
    id="how-it-works"
    className="w-full bg-white px-5 py-16 sm:px-8 lg:py-24"
  >
    <div className="mx-auto max-w-7xl">

      {/* Section Heading */}
      <div className="mb-10 max-w-2xl sm:mb-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
          GET STARTED
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
          Get started with OpenRouter
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600">
          One API to access and manage multiple AI models.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

        {/* Step 1 */}
        <article className="flex flex-col rounded-2xl border border-gray-200 p-5 sm:p-6">
          <p className="mb-5 text-sm font-medium text-gray-500">01 / ACCOUNT</p>

          <div className="flex min-h-48 flex-1 flex-col rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 font-semibold text-white">
                O
              </div>
              <span className="text-sm font-semibold text-gray-900">
                OpenRouter Clone
              </span>
            </div>

            <div className="space-y-3">
              <div className="h-9 rounded-lg border border-gray-200 bg-white" />
              <div className="h-9 rounded-lg border border-gray-200 bg-white" />
              <div className="rounded-lg bg-gray-950 py-2.5 text-center text-sm text-white">
                Create account
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-xl font-semibold text-gray-950">
            Sign up
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Create your account to get started with a unified AI gateway.
          </p>
        </article>

        {/* Step 2 */}
        <article className="flex flex-col rounded-2xl border border-gray-200 p-5 sm:p-6">
          <p className="mb-5 text-sm font-medium text-gray-500">02 / CREDITS</p>

          <div className="flex min-h-48 flex-1 flex-col rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Account balance</p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-3xl font-semibold text-gray-950">
                $10.00
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
                Credits
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-sm font-medium text-gray-900">
                Add credits
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Manage your usage
              </p>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-2/3 rounded-full bg-gray-800" />
            </div>
          </div>

          <h3 className="mt-5 text-xl font-semibold text-gray-950">
            Buy credits
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Add credits to your account to use supported AI models.
          </p>
        </article>

        {/* Step 3 */}
        <article className="flex flex-col rounded-2xl border border-gray-200 p-5 sm:p-6">
          <p className="mb-5 text-sm font-medium text-gray-500">03 / API KEY</p>

          <div className="flex min-h-48 flex-1 flex-col rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-gray-900">
                API Keys
              </span>
              <span className="rounded-md bg-white px-2 py-1 text-xs text-gray-500 ring-1 ring-gray-200">
                Secret
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-2 text-xs text-gray-500">Your API key</p>
              <p className="break-all font-mono text-sm text-gray-700">
                sk-or-v1-••••••••••••
              </p>
            </div>

            <div className="mt-3 rounded-lg bg-gray-950 py-2.5 text-center text-sm text-white">
              Generate API key
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Keep your key secure.
            </p>
          </div>

          <h3 className="mt-5 text-xl font-semibold text-gray-950">
            Get your API key
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Create an API key to connect your application to the gateway.
          </p>
        </article>

      </div>
    </div>
  </section>
  )
}

export default HowItWorks