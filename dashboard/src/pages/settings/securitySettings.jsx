import React from "react";
import {
  ShieldCheck,
  LockKeyhole,
  KeyRound,
  Monitor,
  ChevronRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

const Security = () => {
  const securityOptions = [
    {
      title: "Password",
      description: "Change your password to keep your account secure.",
      status: "Last updated recently",
      icon: LockKeyhole,
      action: "Change Password",
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of protection to your account.",
      status: "Not configured",
      icon: Smartphone,
      action: "Set up",
    },
    {
      title: "API Key Security",
      description: "Manage your secret keys and revoke unused keys.",
      status: "Manage your keys",
      icon: KeyRound,
      action: "Manage Keys",
    },
    {
      title: "Active Sessions",
      description: "Review devices where your account is signed in.",
      status: "Review your sessions",
      icon: Monitor,
      action: "View Sessions",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">

        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white">
            <ShieldCheck size={24} className="text-gray-800" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Security
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your password, API keys and account security.
          </p>
        </div>

        {/* Security Status */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-50 p-3">
              <CheckCircle2 size={22} className="text-green-600" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Account Security
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Review your security settings regularly to help protect
                your account and API credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Security Options */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
            <h2 className="text-base font-semibold text-gray-900">
              Security Preferences
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage the security options for your account.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {securityOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.title}
                  className="flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="shrink-0 rounded-lg bg-gray-100 p-2.5">
                      <Icon size={19} className="text-gray-700" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {option.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-gray-500">
                        {option.description}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        {option.status}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                  >
                    {option.action}
                    <ChevronRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security Tip */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="text-sm font-semibold text-amber-900">
            Keep your API keys private
          </h3>

          <p className="mt-1 text-sm leading-5 text-amber-800">
            Never share secret API keys publicly or commit them to GitHub.
            Store sensitive credentials in environment variables.
          </p>
        </div>

      </div>
    </main>
  );
};

export default Security;