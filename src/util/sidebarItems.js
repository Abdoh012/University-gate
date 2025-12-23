import { LayoutDashboard, Inbox, Search } from "lucide-react";

// Menu items.
export const items = [
  {
    title: "Dashboard",
    condition: "dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students Management",
    condition: "students",
    url: "/students",
    icon: Inbox,
  },
  {
    title: "Log",
    condition: "log",
    url: "/log",
    icon: Search,
  },
];
