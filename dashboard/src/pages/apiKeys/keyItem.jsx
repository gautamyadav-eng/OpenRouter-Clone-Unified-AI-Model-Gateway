
import {
  KeyRound,
  Copy,
  MoreHorizontal,
  Clock3,
  Trash2
} from "lucide-react";
import { useState } from "react";

const KeyItem = ({ apiKey, onRevoke }) => {
  const isActive = apiKey.status === "Active";

  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className="group transition-colors duration-200 hover:bg-blue-50/40">
      {/* Name */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-gray-200 bg-white p-2.5 text-gray-600 transition-colors duration-200 group-hover:border-blue-200 group-hover:text-blue-600">
            <KeyRound size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {apiKey.name}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Created {apiKey.createdAt}
            </p>
          </div>
        </div>
      </td>

      {/* Masked API Key */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <code className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">
            {apiKey.key}
          </code>

          <button
            type="button"
            aria-label="Copy API key"
            className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Copy size={15} />
          </button>
        </div>
      </td>

      {/* Last Used */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock3 size={15} className="text-gray-400" />
          <span>{apiKey.lastUsed}</span>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isActive
              ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-200"
              : "bg-red-50 text-red-700 ring-1 ring-inset ring-red-200"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isActive ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {apiKey.status}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-5 text-right">
        <button
          type="button"
          aria-label="More API key options"
          onClick={() => setShowMenu(!showMenu)}
          className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          <MoreHorizontal size={19} />
        </button>

         {showMenu && (
    <div className="absolute right-0 z-10 mt-2 w-36 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
      <button
        type="button"
        disabled={!isActive}
        onClick={() => {
          onRevoke(apiKey._id);
          setShowMenu(false);
        }}
        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Trash2 size={15} />
        Revoke Key
      </button>
    </div>
  )}
      </td>
    </tr>
  );
};

export default KeyItem;
