"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-950/60 p-8 space-y-6">
        <div className="space-y-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-violet-500">
            <span className="text-2xl">📖</span>
          </div>
          <h1 className="text-xl font-semibold text-slate-50">
            Welcome back to BookWorm
          </h1>
          <p className="text-xs text-slate-400">
            Log in to keep tracking your reading journey and get new
            recommendations.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-900/50"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>New here?</span>
          <Link
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

