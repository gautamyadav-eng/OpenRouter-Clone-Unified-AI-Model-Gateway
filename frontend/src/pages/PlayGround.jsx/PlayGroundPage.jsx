import React from 'react'
import ModelSelector from './ModelSelector'
import PromptInput from './PromptInput'
import ResponsePanel from './ResponsePanel'
function PlayGroundPage() {
  return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-950">
            AI Playground
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experiment with different AI models using one unified interface.
          </p>
        </div>

        {/* Playground Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ModelSelector />
            <PromptInput />
          </div>

          <ResponsePanel />
        </div>
      </div>
    </main>

  )
}

export default PlayGroundPage