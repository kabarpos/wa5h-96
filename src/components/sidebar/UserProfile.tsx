import { User } from "lucide-react";

export function UserProfile() {
  return (
    <div className="p-4 mt-auto">
      <div className="flex items-center gap-3 px-4 py-3">
        <User className="h-8 w-8 rounded-full bg-accent p-1" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">John Doe</span>
          <span className="text-xs text-muted-foreground">Premium User</span>
        </div>
      </div>
    </div>
  );
}