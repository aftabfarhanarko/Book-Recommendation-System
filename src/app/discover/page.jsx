"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function DiscoverPage() {
  return (
    <DashboardShell>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="bg-slate-900/60 rounded-2xl h-full border border-dashed border-slate-700 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl font-semibold text-slate-50 mb-2">
            Discover Books
          </h1>
          <p className="text-sm text-slate-400 max-w-md">
            Here you will browse all books with search, genres, and filters.
            You can later connect this section to your real data and pagination.
          </p>
        </section>
      </main>
    </DashboardShell>
  );
}
