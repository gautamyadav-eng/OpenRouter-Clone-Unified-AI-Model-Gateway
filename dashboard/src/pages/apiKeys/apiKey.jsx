
import {
  KeyRound,
  ShieldCheck,
  Zap,
  Activity,
  LockKeyhole,
} from "lucide-react";

import CreateKey from "./createKey.jsx";
import KeyList from "./keyList.jsx";

const ApiKeys = () => {
  return (
    <div className="min-h-screen bg-gray-50/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <KeyRound size={16} />
              <span>AI Gateway</span>
              <span>/</span>
              <span className="text-gray-900">API Keys</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              API Keys
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Manage your API keys and securely connect your applications
              to the unified AI gateway.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-medium text-green-700">
            <ShieldCheck size={17} />
            Secure API Access
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <KeyRound size={21} />
              </div>
              <span className="text-xs font-medium text-gray-400">
                API ACCESS
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total API Keys</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">3</h2>
            <p className="mt-2 text-xs text-gray-400">
              Keys created for your projects
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <Activity size={21} />
              </div>
              <span className="text-xs font-medium text-gray-400">
                STATUS
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Active Keys</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">2</h2>
            <p className="mt-2 text-xs text-gray-400">
              Keys available for API requests
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                <Zap size={21} />
              </div>
              <span className="text-xs font-medium text-gray-400">
                USAGE
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Requests Today</p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">128</h2>
            <p className="mt-2 text-xs text-gray-400">
              Sample dashboard usage
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
          <LockKeyhole
            size={20}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <div>
            <h3 className="text-sm font-semibold text-blue-900">
              Keep your API keys secure
            </h3>
            <p className="mt-1 text-sm leading-6 text-blue-800/80">
              Never share your secret keys publicly or commit them to
              GitHub. Use environment variables to store keys in your
              applications.
            </p>
          </div>
        </div>

        {/* Create Key Section */}
        <CreateKey />

        {/* Existing Keys */}
        <KeyList />
      </div>
    </div>
  );
};

export default ApiKeys;
