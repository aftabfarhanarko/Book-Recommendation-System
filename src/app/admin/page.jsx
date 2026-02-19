const cards = [
  { label: "Total Books", value: "1,248", trend: "+12%" },
  { label: "Active Users", value: "3,560", trend: "+8%" },
  { label: "Pending Reviews", value: "23", trend: "-5%" },
];

const quickItems = [
  { label: "Add new book", target: "Books" },
  { label: "Create genre", target: "Genres" },
  { label: "Review reports", target: "Reviews" },
];

export default function AdminOverviewPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 flex flex-col gap-8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80">
        <section className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 shadow-lg shadow-slate-950/40 flex flex-col gap-2"
            >
              <span className="text-xs text-slate-400">{card.label}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-slate-50">
                  {card.value}
                </span>
                <span className="text-xs text-emerald-400">{card.trend}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-3 gap-6">
          <div className="col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-lg shadow-slate-950/40">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-slate-50">
                Admin overview
              </h1>
              <span className="text-xs text-slate-400">
                High level summary of platform health
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <p className="text-slate-400 mb-1">Books activity</p>
                <p>Most added genres: Fiction, Business, Self-help</p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <p className="text-slate-400 mb-1">Reviews</p>
                <p>Pending reviews are automatically highlighted for you.</p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <p className="text-slate-400 mb-1">Users</p>
                <p>See and edit roles for power users and moderators.</p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <p className="text-slate-400 mb-1">Tutorials</p>
                <p>Embed and manage YouTube content for your readers.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-5 shadow-lg shadow-slate-950/40 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-50">
                Quick actions
              </h2>
              <span className="text-[11px] text-slate-500">Admin tools</span>
            </div>
            <div className="flex flex-col gap-3">
              {quickItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2"
                >
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-100">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Opens {item.target} page
                    </span>
                  </div>
                  <span className="text-xs text-indigo-400">Go</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <aside className="w-72 border-l border-slate-800 overflow-y-auto p-6 flex flex-col gap-6 bg-slate-950/90 flex-shrink-0">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4">
          <h2 className="text-sm font-semibold text-slate-100 mb-2">
            Recent admin activity
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>Book updated: “Invisible Influence”</li>
            <li>New user promoted to moderator</li>
            <li>Three reviews approved</li>
            <li>New tutorial link added</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4">
          <h2 className="text-sm font-semibold text-slate-100 mb-2">
            Review queue
          </h2>
          <p className="text-xs text-slate-400">
            This is a placeholder for the list of reviews waiting for
            moderation. Connect it later to your real data.
          </p>
        </section>
      </aside>
    </div>
  );
}

