import { AdminShell } from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Admin | Book Worm",
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}

