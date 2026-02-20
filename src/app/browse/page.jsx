export default function BrowseBooksPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-6 shadow-2xl shadow-slate-950/60 space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-50">
              Browse books
            </h1>
            <p className="text-xs text-slate-400">
              Search by title or author, filter by genre and rating, and sort
              results.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-60"
              placeholder="Search by title or author"
            />
            <select className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option>All genres</option>
            </select>
            <select className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option>Any rating</option>
            </select>
            <select className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option>Sort by</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-200"
            >
              <div className="mb-2 h-32 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400" />
              <div className="font-semibold mb-0.5">Sample book title</div>
              <div className="text-[11px] text-slate-400 mb-1">
                Author name
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Genre</span>
                <span>⭐ 4.5</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 text-[11px] text-slate-400">
          <button className="rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800">
            Previous
          </button>
          <span>Page 1 of 5</span>
          <button className="rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

