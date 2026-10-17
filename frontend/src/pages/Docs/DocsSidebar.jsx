
import React from "react";
import {
  BookOpen,
  KeyRound,
  Boxes,
  MessageSquare,
  Code2,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    title: "GETTING STARTED",
    items: [
      { name: "Introduction", icon: BookOpen },
      { name: "Quickstart", icon: Code2 },
    ],
  },
  {
    title: "API REFERENCE",
    items: [
      { name: "API Keys", icon: KeyRound },
      { name: "Models", icon: Boxes },
      { name: "Chat Completions", icon: MessageSquare },
    ],
  },
  {
    title: "MORE",
    items: [{ name: "Authentication", icon: ShieldCheck }],
  },
];

const DocsSidebar = ({
  activeSection,
  onSectionChange
}) => {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-gray-200 bg-white px-4 py-8 md:block">
      <h2 className="mb-6 px-3 text-lg font-semibold text-gray-950">
        Documentation
      </h2>

      <nav className="space-y-7">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-400">
              {section.title}
            </h3>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => onSectionChange(item.name)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-950"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                    }`}
                  >
                    <Icon size={17} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DocsSidebar;
