"use client";

import Link from "next/link";
import { Bell, LogIn, Search, UserPlus } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-end gap-4 px-4 sm:px-6 h-16 max-w-7xl mx-auto">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 rounded-2xl bg-slate-100 border border-slate-200 px-3 py-2 shadow-sm">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
              placeholder="Search books, authors, genres..."
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-300 transition"
          >
            <LogIn size={16} strokeWidth={2} />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 shadow-md shadow-sky-500/30 transition"
          >
            <UserPlus size={16} strokeWidth={2} />
            <span>Register</span>
          </Link>
          <button
            type="button"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-sky-500 hover:border-sky-300 transition"
            aria-label="Notifications"
          >
            <Bell size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
