import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/config/menuItems";

interface MenuItemsProps {
  items: MenuItem[];
  onItemClick?: () => void;
}

export function MenuItems({ items, onItemClick }: MenuItemsProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get("tab");

  return (
    <nav className="flex-1 px-4">
      <ul className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = 
            item.path.includes("?tab=") 
              ? currentPath === "/invitations" && currentTab === item.path.split("=")[1]
              : currentPath === item.path;
          
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={onItemClick}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  "hover:bg-muted",
                  isActive ? "bg-muted text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}