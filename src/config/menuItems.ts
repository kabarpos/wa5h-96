import { Home, PieChart, Settings, User, CreditCard, Bell, Users, Heart, Gift, LayoutTemplate, Music } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PieChart, label: "Analytics", path: "/analytics" },
  { icon: CreditCard, label: "Transactions", path: "/transactions" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Users, label: "Data Users", path: "/data-users" },
  { icon: Heart, label: "Wedding Invitations", path: "/invitations" },
  { icon: LayoutTemplate, label: "Templates", path: "/invitations?tab=templates" },
  { icon: Music, label: "Music Library", path: "/invitations?tab=music" },
  { icon: Gift, label: "Gift Registry", path: "/gifts" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];