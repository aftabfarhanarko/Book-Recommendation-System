export default function RootLoading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-3xl px-6">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-pulse" />
          <div className="h-4 w-40 rounded-full bg-slate-800 animate-pulse" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-40 rounded-2xl bg-slate-900 animate-pulse" />
          <div className="h-40 rounded-2xl bg-slate-900 animate-pulse" />
          <div className="h-40 rounded-2xl bg-slate-900 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

