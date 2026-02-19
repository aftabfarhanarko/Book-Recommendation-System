export default function AdminReviewsPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-slate-50">
              Moderate Reviews
            </h1>
            <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500">
              View queue
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Approve or delete pending reviews submitted by users. This premium
            section is wired to the admin sidebar and ready to be connected to
            your review data later.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
            Placeholder for review queue with book, user, rating, excerpt, and
            moderation actions.
          </div>
        </section>
      </main>
    </div>
  );
}

