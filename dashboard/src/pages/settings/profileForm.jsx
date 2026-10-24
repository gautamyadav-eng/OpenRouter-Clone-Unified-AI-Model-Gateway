import React from "react";
import {
  UserRound,
  Mail,
  CalendarDays,
  ShieldCheck,
  KeyRound,
  Activity,
  Pencil,
  CheckCircle2,
} from "lucide-react";

const Profile = () => {
  const profileDetails = [
    {
      label: "Full Name",
      value: "Gautam Yadav",
      icon: UserRound,
    },
    {
      label: "Email Address",
      value: "gautam@example.com",
      icon: Mail,
    },
    {
      label: "Account Type",
      value: "Developer",
      icon: ShieldCheck,
    },
    {
      label: "Member Since",
      value: "October 2026",
      icon: CalendarDays,
    },
  ];

  const accountStats = [
    {
      label: "API Keys",
      value: "3",
      icon: KeyRound,
    },
    {
      label: "Total Requests",
      value: "1,240",
      icon: Activity,
    },
    {
      label: "Account Status",
      value: "Active",
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View your personal information and account overview.
          </p>
        </div>

        {/* Profile Card */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Profile Information */}
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-900 text-2xl font-semibold text-white ring-4 ring-gray-100">
                G
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-xl font-semibold text-gray-900">
                  Gautam Yadav
                </h2>

                <p className="mt-1 break-all text-sm text-gray-500">
                  gautam@example.com
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  <CheckCircle2 size={14} />
                  Active Account
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <Pencil size={15} />
              Edit Profile
            </button>

          </div>
        </section>

        {/* Account Overview */}
        <section className="mb-6">
          <h2 className="mb-4 text-base font-semibold text-gray-900">
            Account Overview
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accountStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      {stat.label}
                    </p>

                    <div className="rounded-lg bg-gray-100 p-2">
                      <Icon size={18} className="text-gray-700" />
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Personal Information */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
            <h2 className="text-base font-semibold text-gray-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your basic account details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6">
            {profileDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.label}
                  className="flex min-w-0 items-start gap-3"
                >
                  <div className="shrink-0 rounded-lg bg-gray-100 p-2">
                    <Icon size={18} className="text-gray-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">
                      {detail.label}
                    </p>

                    <p className="mt-1 wrap-break-word text-sm font-medium text-gray-900">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security Notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <ShieldCheck
            size={19}
            className="mt-0.5 shrink-0 text-gray-600"
          />

          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Keep your account secure
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500">
              Protect your account credentials and API keys. Never share
              secret API keys publicly.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Profile;