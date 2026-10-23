import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  Boxes,
  Terminal,
  KeyRound,
  Activity,
  Settings,
} from "lucide-react";

import logo from "../assets/logo.png";

const linkClasses =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-black";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-900">
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <button type="button" className={linkClasses} onClick={() => navigate("/")}>
            <LayoutDashboard size={16} />
            <span>Home</span>
          </button>

          <button type="button" className={linkClasses}>
            <Boxes size={16} />
            <span>Models</span>
          </button>

          <button type="button" className={linkClasses}>
            <Terminal size={16} />
            <span>Playground</span>
          </button>

          <button type="button" className={linkClasses}>
            <KeyRound size={16} />
            <span>API Keys</span>
          </button>

          <button type="button" className={linkClasses}>
            <Activity size={16} />
            <span>Activity</span>
          </button>
        </div>

        {/* Settings and Profile */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label="Settings"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-black"
          >
            <Settings size={19} />
          </button>

          <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
            <span className="text-sm font-semibold">G</span>
          </div>
        </div>

        {/* Mobile Menu Icon - UI Only */}
        <div className="rounded-lg p-2 text-gray-600 lg:hidden">
          <Menu size={23} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
