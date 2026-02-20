export default function BookDetailsPage({ params }) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/60 md:grid-cols-[260px,1fr]">
        <div className="space-y-4">
          <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400" />
          <button className="w-full rounded-xl bg-indigo-600 py-2 text-xs font-medium text-white hover:bg-indigo-500">
            Add to shelf
          </button>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-3 text-[11px] text-slate-300">
            <div className="font-semibold text-slate-100 mb-1">
              Shelves placeholder
            </div>
            <p>
              Later this box will show which shelf this book belongs to (Want to
              Read, Currently Reading, Read) and progress.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-200">
          <div>
            <h1 className="text-2xl font-semibold text-slate-50 mb-1">
              Book title #{id}
            </h1>
            <p className="text-xs text-slate-400">By author name</p>
          </div>

          <div className="text-xs text-slate-300 space-y-1">
            <p>Genre: Placeholder genre</p>
            <p>Average rating: ⭐ 4.3 (placeholder)</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Description
            </h2>
            <p>
              This is a placeholder description for the selected book. You will
              later load this content from your database.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100">
                Reviews
              </h2>
              <span className="text-[11px] text-slate-400">
                Pending reviews will be approved by admin.
              </span>
            </div>

            <form className="space-y-2">
              <div className="flex gap-2 text-[11px]">
                <span className="text-slate-400">Your rating:</span>
                <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              </div>
              <textarea
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Write your review…"
                rows={3}
              />
              <button
                type="submit"
                className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
              >
                Submit review
              </button>
            </form>

            <div className="space-y-2 pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-500">
                Approved reviews will show here with user name, rating, and
                text. This area is wired as a placeholder for your future review
                system.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

