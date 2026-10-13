import React from "react";
import { Copy, Check } from "lucide-react";

const CodeExample = ({
  title = "JavaScript",
  code = "",
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <span className="text-xs font-medium text-gray-400">
          {title}
        </span>

        <button
          type="button"
          aria-label="Copy code"
          className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-gray-400 transition hover:bg-gray-800 hover:text-white"
        >
          <Copy size={14} />
          Copy
        </button>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeExample;