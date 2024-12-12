import { Home, PieChart, Settings, User, CreditCard, Bell, Menu, Sun, Moon, Users, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: PieChart, label: "Analytics", path: "/analytics" },
  { icon: CreditCard, label: "Transactions", path: "/transactions" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Users, label: "Data Users", path: "/data-users" },
  { icon: Heart, label: "Wedding Invitations", path: "/invitations" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!isDark).toString());
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={cn(
          "fixed left-0 top-0 h-full w-64 glass-card border-r border-border/10 transition-transform duration-300 ease-in-out z-40",
          !isOpen && "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary">Finance</h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-muted"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
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

          <div className="p-4 mt-auto">
            <div className="flex items-center gap-3 px-4 py-3">
              <User className="h-8 w-8 rounded-full bg-accent p-1" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Premium User</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
