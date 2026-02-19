"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function HelpPage() {
  return (
    <DashboardShell>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="bg-slate-900/60 rounded-2xl h-full border border-dashed border-slate-700 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl font-semibold text-slate-50 mb-2">
            Help & Tutorials
          </h1>
          <p className="text-sm text-slate-400 max-w-md mb-4">
            This page will show FAQs and the embedded YouTube tutorials you
            mentioned for users.
          </p>
          <p className="text-xs text-slate-500">
            Later you can replace this placeholder with a real list of videos
            and support information.
          </p>
        </section>
      </main>
    </DashboardShell>
  );
}
