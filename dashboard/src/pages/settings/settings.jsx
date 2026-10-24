import React from "react";
import {
  Settings,
  Bell,
  ShieldCheck,
  Palette,
  Globe,
  KeyRound,
  ChevronRight,
} from "lucide-react";

const SettingsPage = () => {
  const settingSections = [
    {
      title: "General",
      description: "Manage your dashboard preferences.",
      icon: Settings,
      options: [
        {
          title: "Language",
          description: "Choose your preferred language.",
          value: "English",
        },
        {
          title: "Timezone",
          description: "Set the timezone for activity and logs.",
          value: "Asia/Kolkata",
        },
      ],
    },
    {
      title: "Appearance",
      description: "Customize how your dashboard looks.",
      icon: Palette,
      options: [
        {
          title: "Theme",
          description: "Choose the dashboard appearance.",
          value: "Light",
        },
      ],
    },
    {
      title: "Notifications",
      description: "Manage important account notifications.",
      icon: Bell,
      options: [
        {
          title: "Usage alerts",
          description: "Get notified when API usage is high.",
          value: "Enabled",
        },
        {
          title: "Security notifications",
          description: "Receive alerts about account security.",
          value: "Enabled",
        },
      ],
    },
    {
      title: "Security",
      description: "Review your account security preferences.",
      icon: ShieldCheck,
      options: [
        {
          title: "Password",
          description: "Keep your account password secure.",
          value: "Manage",
        },
        {
          title: "API key security",
          description: "Manage and protect your API keys.",
          value: "View keys",
          icon: KeyRound,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
            <Settings size={22} className="text-gray-700" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Settings
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your dashboard preferences, notifications and security.
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-5">
          {settingSections.map((section) => {
            const SectionIcon = section.icon;

            return (
              <section
                key={section.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                {/* Section Header */}
                <div className="flex items-start gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
                  <div className="mt-0.5 rounded-lg bg-gray-100 p-2">
                    <SectionIcon size={18} className="text-gray-700" />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                      {section.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Setting Options */}
                <div className="divide-y divide-gray-100">
                  {section.options.map((option) => {
                    const OptionIcon = option.icon;

                    return (
                      <div
                        key={option.title}
                        className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-gray-50 sm:px-6"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {OptionIcon && (
                            <OptionIcon
                              size={17}
                              className="shrink-0 text-gray-500"
                            />
                          )}

                          <div>
                            <h3 className="text-sm font-medium text-gray-800">
                              {option.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                              {option.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <span className="text-xs font-medium text-gray-600 sm:text-sm">
                            {option.value}
                          </span>

                          <ChevronRight
                            size={17}
                            className="text-gray-400"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <Globe size={18} className="mt-0.5 shrink-0 text-gray-500" />

          <div>
            <p className="text-sm font-medium text-gray-800">
              Gateway preferences
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
              These options are currently UI only. Functionality can be added
              separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;