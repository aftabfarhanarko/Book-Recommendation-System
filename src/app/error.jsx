"use client";

export default function RootError({ error, reset }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-red-900/60 bg-red-950/40 p-6 shadow-2xl shadow-red-900/40 space-y-4">
        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-red-100">
            Something went wrong
          </h1>
          <p className="text-xs text-red-200/80">
            The page could not be loaded. Try again, or go back later.
          </p>
        </div>
        <pre className="max-h-24 overflow-auto rounded-xl bg-slate-950/60 border border-red-900/40 px-3 py-2 text-[10px] text-red-300">
          {error?.message ?? "Unknown error"}
        </pre>
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-xl bg-red-500 py-2 text-xs font-medium text-slate-950 hover:bg-red-400 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

