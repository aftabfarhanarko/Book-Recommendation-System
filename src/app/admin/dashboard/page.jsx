"use client";

import { Users, BookOpen, Star, Layers } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = {
  totalUsers: 1240,
  totalBooks: 982,
  totalReviews: 347,
  totalCategories: 24,
};

const weeklyNewUsers = [
  { day: "D1", value: 18 },
  { day: "D2", value: 24 },
  { day: "D3", value: 20 },
  { day: "D4", value: 32 },
  { day: "D5", value: 28 },
  { day: "D6", value: 30 },
  { day: "D7", value: 26 },
];

const weeklyNewBooks = [
  { day: "D1", value: 6 },
  { day: "D2", value: 8 },
  { day: "D3", value: 5 },
  { day: "D4", value: 10 },
  { day: "D5", value: 7 },
  { day: "D6", value: 9 },
  { day: "D7", value: 8 },
];

const AdminDashbordpage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Admin overview
              </h1>
              <p className="text-[11px] text-muted-foreground">
                High level stats for users, books, reviews, and categories.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <DashboardCard
              icon={Users}
              label="Total users"
              value={metrics.totalUsers}
              trend="+32 this week"
            />
            <DashboardCard
              icon={BookOpen}
              label="Total books"
              value={metrics.totalBooks}
              trend="+18 this week"
            />
            <DashboardCard
              icon={Star}
              label="Total reviews"
              value={metrics.totalReviews}
              trend="+54 this week"
            />
            <DashboardCard
              icon={Layers}
              label="Total categories"
              value={metrics.totalCategories}
              trend="4 featured"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                New users (last 7 days)
              </h2>
              <p className="text-[11px] text-muted-foreground mb-4">
                Demo chart showing how many new readers joined BookWorm.
              </p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyNewUsers}>
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--primary) / 0.04)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        fontSize: 11,
                      }}
                    />
                    <Bar dataKey="value" radius={8} fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-1">
                New books (last 7 days)
              </h2>
              <p className="text-[11px] text-muted-foreground mb-4">
                Demo chart for how many new books were added to the catalog.
              </p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyNewBooks}>
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--secondary) / 0.1)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        fontSize: 11,
                      }}
                    />
                    <Bar dataKey="value" radius={8} fill="hsl(var(--secondary-foreground))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function DashboardCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-4 flex flex-col gap-2 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary">
          <Icon className="size-4" />
        </div>
      </div>
      <p className="text-xl font-semibold text-foreground">{value}</p>
      <p className="text-[11px] text-muted-foreground">{trend}</p>
    </div>
  );
}

export default AdminDashbordpage;
