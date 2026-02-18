const navItems = [
  { label: "Home", active: true },
  { label: "Discover", active: false },
  { label: "Bookmark", active: false },
  { label: "Settings", active: false },
  { label: "Help", active: false },
];

const bookTabs = ["Popular", "Top Selling", "Following", "New"];

const books = [
  { title: "I Owe You One", author: "Sophie Kinsella" },
  { title: "Factfulness", author: "Hans Rosling" },
  { title: "The Other Son", author: "Nick Alexander" },
  { title: "Can You Keep A Secret?", author: "Sophie Kinsella" },
  { title: "Educated", author: "Tara Westover" },
  { title: "In The Company Of Ghosts", author: "Andrew Author" },
  { title: "Invisible Influence", author: "Jonah Berger" },
  { title: "The Power Of Agency", author: "Paul Napper" },
];

const readingList = [
  { title: "Hold Back The Stars", pages: 121, progress: 64 },
  { title: "One Day A Novel", pages: 11, progress: 45 },
  { title: "In The Company Of Ghosts", pages: 21, progress: 52 },
];

const trendingAuthors = [
  { name: "James Elijah", following: false },
  { name: "William Henry", following: false },
  { name: "Aria Abigail", following: false },
  { name: "Mia Evelyn", following: false },
  { name: "Mateo Levi", following: true },
];

const blogs = [
  {
    title: "The Week All You Need To Know About",
    author: "Sheita",
    likes: 122,
    comments: 44,
  },
  {
    title: "Mobile With New App For Designers",
    author: "Malik",
    likes: 88,
    comments: 22,
  },
  {
    title: "Five Ways To Find More Time In Business",
    author: "Sonic",
    likes: 12,
    comments: 4,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex w-full max-w-7xl h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Sidebar */}
        <aside className="w-56 bg-gray-900 flex flex-col p-6 flex-shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-full bg-indigo-500" />
            <span className="text-white font-bold text-lg tracking-wide">E-Book</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.active ? "bg-white" : "bg-gray-600"
                  }`}
                />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Area */}
        <div className="flex flex-col flex-1 overflow-hidden">

          {/* Top Bar */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
              <span className="text-gray-400 text-sm">🔍</span>
              <input
                className="bg-transparent text-sm outline-none w-full placeholder-gray-400"
                placeholder="Search"
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition">☀️</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition">🔔</button>
              <div className="w-9 h-9 rounded-full bg-indigo-400" />
            </div>
          </header>

          {/* Content */}
          <div className="flex flex-1 overflow-hidden">

            {/* Center Column */}
            <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">

              {/* Book Section */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {bookTabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          index === 0
                            ? "bg-indigo-600 text-white"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="text-sm text-indigo-600 font-medium hover:underline">
                    Next ▸
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {books.map((book) => (
                    <article
                      key={book.title}
                      className="flex flex-col gap-2 cursor-pointer group"
                    >
                      <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <span className="text-white font-bold text-xl opacity-80">
                          {book.title.split(" ")[0]}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-400">{book.author}</p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Currently Reading */}
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-4">Currently Reading</h2>
                <div className="flex flex-col gap-3">
                  {readingList.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-pink-400 to-orange-400 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{item.pages} pages</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 w-40">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded-full transition-all"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{item.progress}% complete</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            {/* Right Panel */}
            <aside className="w-64 border-l border-gray-100 overflow-y-auto p-6 flex flex-col gap-8 bg-white flex-shrink-0">

              {/* Trending Authors */}
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-4">Trending Authors</h2>
                <div className="flex flex-col gap-3">
                  {trendingAuthors.map((author) => (
                    <div key={author.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{author.name}</span>
                      </div>
                      <button
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                          author.following
                            ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                        }`}
                      >
                        {author.following ? "Unfollow" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Blogs */}
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-4">Popular Blogs</h2>
                <div className="flex flex-col gap-4">
                  {blogs.map((blog) => (
                    <article key={blog.title} className="flex gap-3">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0" />
                      <div className="flex flex-col justify-between">
                        <div className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                          {blog.title}
                        </div>
                        <div className="text-xs text-gray-400">Published by {blog.author}</div>
                        <div className="flex gap-3 text-xs text-gray-500 mt-1">
                          <span>👍 {blog.likes}</span>
                          <span>💬 {blog.comments}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}