const tutorials = [
  {
    title: "How to choose your next favorite book",
    url: "https://www.youtube.com/watch?v=WRvotdUvNEw",
    category: "Recommendations",
  },
  {
    title: "Building a daily reading habit",
    url: "https://www.youtube.com/watch?v=HM0dK5Tt9Nc",
    category: "Habits",
  },
  {
    title: "Organizing your digital library",
    url: "https://www.youtube.com/watch?v=BkYQHcF3JxE",
    category: "Library",
  },
];

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
            Manage the list of YouTube tutorials for your users. Later you will
            connect this table to your real storage and actions.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
            <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Title</span>
              <span>Category</span>
              <span>URL</span>
              <span>Actions</span>
            </div>
            <div className="space-y-2">
              {tutorials.map((item) => (
                <div
                  key={item.url}
                  className="grid grid-cols-[2fr,1fr,2fr,auto] items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2"
                >
                  <span className="text-slate-100">{item.title}</span>
                  <span className="text-slate-400">{item.category}</span>
                  <span className="truncate text-slate-500">{item.url}</span>
                  <div className="flex gap-1">
                    <button className="rounded-full border border-slate-700 px-2 py-1 text-[11px] hover:bg-slate-800">
                      Edit
                    </button>
                    <button className="rounded-full border border-red-700 px-2 py-1 text-[11px] text-red-200 hover:bg-red-900/40">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
