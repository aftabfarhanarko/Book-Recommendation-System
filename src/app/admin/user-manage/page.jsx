"use client";

import { useMemo, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontalIcon, Search } from "lucide-react";

const initialUsers = [
  {
    id: "USR-001",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "Rahim Uddin",
    email: "rahim@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: "USR-003",
    name: "Karim Ali",
    email: "karim@example.com",
    role: "User",
    status: "Suspended",
  },
  {
    id: "USR-004",
    name: "Sara Akter",
    email: "sara@example.com",
    role: "User",
    status: "Active",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    if (!query.trim()) return users;
    const q = query.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.role.toLowerCase().includes(q)
    );
  }, [users, query]);

  const handleRoleChange = (id, role) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role } : user))
    );
  };

  const handleStatusChange = (id, status) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, status } : user))
    );
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-8 bg-background">
        <section className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
          <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-lg font-semibold text-foreground">
                Manage Users
              </h1>
              <p className="text-[11px] text-muted-foreground">
                {users.length} users · Search, update roles, or change status.
              </p>
            </div>
            <div className="flex w-full gap-2 sm:w-auto sm:min-w-[320px]">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-input bg-background px-3 py-2">
                <Search className="size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, email, or role..."
                  className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button
                size="sm"
                className="rounded-full text-xs px-3"
              >
                Invite user
              </Button>
            </div>
          </div>

          <Table className="border border-border rounded-xl bg-card">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[110px]">ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="w-[110px] text-right">Role</TableHead>
                <TableHead className="w-[120px] text-right">Status</TableHead>
                <TableHead className="w-[140px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-8 bg-sky-50">
                        <AvatarFallback className="text-[11px] font-semibold text-sky-600">
                          {user.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.email}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        user.status === "Active"
                          ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700"
                          : "inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700"
                      }
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="rounded-full border border-border text-muted-foreground hover:text-foreground"
                        >
                          <MoreHorizontalIcon className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem className="text-xs">
                          View profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs">
                          Edit user
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-xs"
                          onClick={() => handleRoleChange(user.id, "Admin")}
                        >
                          Set role: Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-xs"
                          onClick={() => handleRoleChange(user.id, "Moderator")}
                        >
                          Set role: Moderator
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-xs"
                          onClick={() => handleRoleChange(user.id, "User")}
                        >
                          Set role: User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-xs"
                          onClick={() => handleStatusChange(user.id, "Active")}
                        >
                          Set status: Active
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-xs"
                          onClick={() =>
                            handleStatusChange(user.id, "Suspended")
                          }
                        >
                          Set status: Suspended
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-xs"
                          variant="destructive"
                        >
                          Delete user
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  );
}
