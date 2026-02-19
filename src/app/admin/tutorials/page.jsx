export default function AdminTutorialsPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-slate-50">
              Manage Tutorials
            </h1>
            <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500">
              Add YouTube link
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Add and manage embedded YouTube tutorials for your users. This page
            follows the same premium admin design and is ready to connect to
            your tutorial storage.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
            Placeholder for tutorial list with title, URL, category, and
            actions.
          </div>
        </section>
      </main>
    </div>
  );
}

