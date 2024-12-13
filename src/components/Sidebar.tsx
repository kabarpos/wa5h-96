import { Menu, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { menuItems } from "@/config/menuItems";
import { MenuItems } from "./sidebar/MenuItems";
import { UserProfile } from "./sidebar/UserProfile";

const Sidebar = () => {
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
          
          <MenuItems items={menuItems} onItemClick={() => setIsOpen(false)} />
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Sidebar;