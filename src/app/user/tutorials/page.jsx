"use client";

import { useMemo, useState } from "react";

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
  {
    title: "Speed reading basics for busy people",
    url: "https://www.youtube.com/watch?v=ZwEquW_Yij0",
    category: "Habits",
  },
  {
    title: "Top 10 productivity books to read this year",
    url: "https://www.youtube.com/watch?v=9fqFz0GQ1ko",
    category: "Recommendations",
  },
  {
    title: "How to take better book notes",
    url: "https://www.youtube.com/watch?v=HSQF_Xi6CFc",
    category: "Library",
  },
];

const categories = ["All", "Recommendations", "Habits", "Library"];

const Tutorialspage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleTutorials = useMemo(() => {
    if (activeCategory === "All") return tutorials;
    return tutorials.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Tutorials for readers
              </h1>
              <p className="text-[11px] text-muted-foreground">
                Watch short YouTube videos by category to improve your reading
                life.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-[11px] border transition-colors ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white border-sky-600"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {visibleTutorials.map((item) => {
              const embedUrl = item.url.replace("watch?v=", "embed/");
              return (
                <article
                  key={item.url}
                  className="rounded-2xl border border-border bg-card p-3 shadow-sm flex flex-col gap-2"
                >
                  <div className="w-full h-40 rounded-xl overflow-hidden border border-border bg-black">
                    <iframe
                      src={embedUrl}
                      title={item.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-sm font-semibold text-foreground line-clamp-2">
                      {item.title}
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700 w-fit">
                      {item.category}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tutorialspage;
