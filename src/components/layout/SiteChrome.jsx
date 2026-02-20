"use client";

import Link from "next/link";

const userLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Browse Books", href: "/discover" },
  { label: "My Library", href: "/bookmark" },
  { label: "Tutorials", href: "/help" },
];

export function SiteChrome({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-violet-500">
              <span className="text-lg">📚</span>
            </div>
            <span className="text-sm font-semibold tracking-wide">
              BookWorm
            </span>
          </Link>
          <nav className="hidden gap-4 text-xs text-slate-300 sm:flex">
            {userLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/login"
              className="rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hidden rounded-full bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-500 sm:inline-flex"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} BookWorm. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/help" className="hover:text-slate-200">
              Help Center
            </Link>
            <span className="hover:text-slate-200 cursor-default">
              Twitter
            </span>
            <span className="hover:text-slate-200 cursor-default">
              Instagram
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

