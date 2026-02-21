"use client";

const libraryBooks = [
  {
    id: "LIB-001",
    title: "The Midnight Library",
    status: "Finished",
    progress: 100,
  },
  {
    id: "LIB-002",
    title: "Atomic Habits",
    status: "Reading",
    progress: 62,
  },
  {
    id: "LIB-003",
    title: "Deep Work",
    status: "Queued",
    progress: 0,
  },
  {
    id: "LIB-004",
    title: "Book Lovers",
    status: "Finished",
    progress: 100,
  },
];

const My_Librarypage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-foreground">
              My library
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Quick view of books you are reading, finished, or saved for later.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {libraryBooks.length} books in your library
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {libraryBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 text-xs font-semibold">
                    {book.title
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {book.title}
                      </p>
                      <span className="text-[11px] text-muted-foreground">
                        {book.id}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={
                          book.status === "Finished"
                            ? "inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700"
                            : book.status === "Reading"
                            ? "inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700"
                            : "inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700"
                        }
                      >
                        {book.status}
                      </span>
                      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-muted-foreground w-10 text-right">
                        {book.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default My_Librarypage;
