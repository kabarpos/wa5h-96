import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Sidebar";
import Index from "@/pages/Index";
import Analytics from "@/pages/Analytics";
import Transactions from "@/pages/Transactions";
import Notifications from "@/pages/Notifications";
import DataUsers from "@/pages/DataUsers";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import Invitations from "@/pages/Invitations";
import Gifts from "@/pages/Gifts";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/data-users" element={<DataUsers />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}

export default App;