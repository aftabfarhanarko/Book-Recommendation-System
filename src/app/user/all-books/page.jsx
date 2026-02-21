"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const books = [
  {
    id: "BK-001",
    title: "The Midnight Library",
    category: "Fantasy",
    cover:
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "BK-002",
    title: "Atomic Habits",
    category: "Self-help",
    cover:
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "BK-003",
    title: "Deep Work",
    category: "Productivity",
    cover:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "BK-004",
    title: "Book Lovers",
    category: "Romance",
    cover:
      "https://images.pexels.com/photos/462577/pexels-photo-462577.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "BK-005",
    title: "Educated",
    category: "Memoir",
    cover:
      "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "BK-006",
    title: "The Silent Patient",
    category: "Thriller",
    cover:
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const All_bookspage = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const filteredBooks = useMemo(() => {
    let result = books;

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(q) ||
          book.category.toLowerCase().includes(q),
      );
    }

    if (sort === "title-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "title-desc") {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "category") {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [query, sort]);

  const sortLabel =
    sort === "title-asc"
      ? "Title A-Z"
      : sort === "title-desc"
      ? "Title Z-A"
      : sort === "category"
      ? "Category"
      : "Featured";

  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                All books
              </h1>
              <p className="text-[11px] text-muted-foreground">
                Browse all books, filter by name or category, and sort the list.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-2 rounded-xl border border-input bg-background px-3 py-2">
                <Search className="size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by book name or category..."
                  className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="xs"
                    className="rounded-xl border-input bg-background px-3 py-2 h-auto text-xs font-normal flex items-center gap-2"
                  >
                    <SlidersHorizontal className="size-4 text-muted-foreground" />
                    <span className="text-foreground">Sort: {sortLabel}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() => setSort("featured")}
                  >
                    Featured
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() => setSort("title-asc")}
                  >
                    Title A-Z
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() => setSort("title-desc")}
                  >
                    Title Z-A
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() => setSort("category")}
                  >
                    Category
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <article
                key={book.id}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col"
              >
                <div className="h-44 w-full overflow-hidden bg-muted">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 flex flex-col gap-1.5">
                  <h2 className="text-sm font-semibold text-foreground line-clamp-2">
                    {book.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700">
                      {book.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      ID: {book.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default All_bookspage;
