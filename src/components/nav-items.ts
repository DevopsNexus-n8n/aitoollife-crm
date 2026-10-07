import {
  CalendarDays,
  LayoutDashboard,
  type LucideIcon,
  Repeat2,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

export type NavItem = { href: string; label: string; icon: LucideIcon };

export const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: UserPlus },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/follow-ups", label: "Follow-ups", icon: Repeat2 },
  { href: "/settings", label: "Settings", icon: Settings },
];
