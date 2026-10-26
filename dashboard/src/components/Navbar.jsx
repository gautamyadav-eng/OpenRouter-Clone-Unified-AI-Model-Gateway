
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {
  Menu,
  X,
  LayoutDashboard,
  Boxes,
  Terminal,
  KeyRound,
  Activity,
  UserRound,
  Settings,
  CircleHelp,
  LogOut,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/logo.png";

const linkClasses =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-black";

const mobileLinkClasses =
  "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-black";

const Navbar = () => {
  const navigate = useNavigate();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleNavigation = (path) => {
    navigate(path);
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handelLogout = async () => {
    try{
      const {data } = await axios.post( "http://localhost:3000/api/auth/logout", {}, {
        withCredentials: true,
      });

      if (data.success) {
        window.location.href ="http://localhost:5173";
      }
    }catch(error){
      console.log("Logout error:", error);
      window.alert("Logout failed. Please try again.");
    }
  };

  const formattedUsername = username ? username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase():"user";
  const UserIntial = username ? username.trim().charAt(0).toUpperCase() :"U";
  

  useEffect(() => {
    const loadProfile = async () => {
      try{
        const {data} = await axios.get( "http://localhost:3000/api/auth/profile",{
          withCredentials: true,
        });

        if(data.success) {
          setUsername(data.user.name || "");
        }
      }catch(error) {
        console.error("Profile load error:" ,error)
      }
    };

    loadProfile();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-900">
      <nav className="relative mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="flex shrink-0 items-center"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            className={linkClasses}
            onClick={() => handleNavigation("/")}
          >
            <LayoutDashboard size={16} />
            <span>Home</span>
          </button>

          <button
            type="button"
            className={linkClasses}
            onClick={() => handleNavigation("/models")}
          >
            <Boxes size={16} />
            <span>Models</span>
          </button>

          <button
            type="button"
            className={linkClasses}
            onClick={() => handleNavigation("/playground")}
          >
            <Terminal size={16} />
            <span>Playground</span>
          </button>

          <button
            type="button"
            className={linkClasses}
            onClick={() => handleNavigation("/apikeys")}
          >
            <KeyRound size={16} />
            <span>API Keys</span>
          </button>

          <button
            type="button"
            className={linkClasses}
            onClick={() => handleNavigation("/activity")}
          >
            <Activity size={16} />
            <span>Activity</span>
          </button>
        </div>

        {/* Desktop Profile Menu */}
        <div className="relative hidden lg:block">
          <button
            type="button"
            aria-label="Open profile menu"
            aria-expanded={isProfileOpen}
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-gray-100"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors hover:border-blue-300 hover:bg-blue-50">
              <span className="text-sm font-semibold">{UserIntial}</span>
            </div>

            <ChevronDown
              size={15}
              className={`text-gray-500 transition-transform duration-200 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/10">
              {/* User Info */}
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                  {UserIntial}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {formattedUsername}
                  </p>
                  <p className="text-xs text-gray-500">Account Menu</p>
                </div>
              </div>

              {/* Profile Options */}
              <div className="p-2">
                <button
                  type="button"
                  onClick={() => handleNavigation("/profile")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <UserRound size={17} />
                  Profile
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigation("/settings")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <Settings size={17} />
                  Settings
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigation("/apikeys")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <KeyRound size={17} />
                  API Keys
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigation("/security")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <CircleHelp size={17} />
                  Help & Support
                </button>
              </div>

              {/* Logout */}
              <div className="border-t border-gray-100 p-2">
                <button
                  type="button"
                  onClick={handelLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            setIsProfileOpen(false);
          }}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black lg:hidden"
        >
          {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-gray-200 bg-white p-4 shadow-lg lg:hidden">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/")}
              >
                <LayoutDashboard size={18} />
                Home
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/models")}
              >
                <Boxes size={18} />
                Models
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/playground")}
              >
                <Terminal size={18} />
                Playground
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/apikeys")}
              >
                <KeyRound size={18} />
                API Keys
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/activity")}
              >
                <Activity size={18} />
                Activity
              </button>

              <div className="my-2 border-t border-gray-200" />

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/profile")}
              >
                <UserRound size={18} />
                Profile
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/settings")}
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                type="button"
                className={mobileLinkClasses}
                onClick={() => handleNavigation("/security")}
              >
                <CircleHelp size={18} />
                Help & Support
              </button>

              <button
                type="button"
                onClick={handelLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
