"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  BookOpen,
  HelpCircle,
  LayoutDashboard,
  LifeBuoy,
  Library,
  Search,
  Settings,
  Sun,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Discover", href: "/discover", icon: Search },
  { label: "My Library", href: "/bookmark", icon: Library },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Help", href: "/help", icon: HelpCircle },
];

function IconWrapper({ children, active }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-xl border text-xs ${
        active
          ? "border-indigo-400 bg-indigo-500/10 text-indigo-100"
          : "border-slate-700 bg-slate-800 text-slate-300"
      }`}
    >
      {children}
    </div>
  );
}

export function DashboardShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex w-full h-screen bg-slate-950 overflow-hidden">
        <aside className="w-64 bg-slate-950 text-slate-100 flex flex-col p-6 border-r border-slate-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                Book Worm
              </span>
              <span className="text-[11px] text-slate-400">
                Reading dashboard
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <LayoutDashboard className="h-4 w-4 text-indigo-50" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-indigo-100">Overview</span>
                  <span className="text-sm font-semibold text-white">
                    Dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                  }`}
                >
                  <IconWrapper active={isActive}>
                    <Icon className="h-4 w-4" />
                  </IconWrapper>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-2xl bg-slate-900 px-4 py-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-violet-500">
              <LifeBuoy className="h-4 w-4 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-100">
                Need help?
              </span>
              <span className="text-[11px] text-slate-400">
                Go to Help Center →
              </span>
            </div>
          </div>
        </aside>

        <div className="flex flex-col flex-1 overflow-hidden bg-slate-900">
          <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
            <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2 w-64">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                className="bg-transparent text-sm outline-none w-full placeholder:text-slate-500 text-slate-100"
                placeholder="Search books, authors, topics…"
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
                <Sun className="h-4 w-4" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-2 py-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
                <span className="text-xs text-slate-200 pr-1">User</span>
              </div>
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden bg-slate-900/90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
