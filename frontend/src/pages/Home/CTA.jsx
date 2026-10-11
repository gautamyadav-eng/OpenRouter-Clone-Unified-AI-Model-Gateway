import React from 'react'

const CTA = () => {
  return (
     <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-500">
            GET STARTED TODAY
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            One API. Multiple AI Models.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Connect your application to multiple AI models through one
            unified gateway. Simple, flexible, and built for developers.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <div className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-medium text-white">
              Get Started
            </div>

            <div className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900">
              Explore Models
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            One integration to access multiple AI models.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA