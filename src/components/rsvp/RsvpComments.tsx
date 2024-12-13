import { MessageSquare, Users, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Dummy data - replace with actual data later
const rsvpMessages = [
  {
    id: 1,
    name: "Budi Santoso",
    whatsapp: "+6281234567890",
    attendance: "Hadir",
    numberOfGuests: 2,
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    timestamp: "2024-02-20T10:00:00Z",
  },
  {
    id: 2,
    name: "Siti Aminah",
    whatsapp: "+6287654321098",
    attendance: "Tidak Hadir",
    numberOfGuests: 0,
    message: "Mohon maaf tidak bisa hadir. Semoga lancar sampai hari H!",
    timestamp: "2024-02-19T15:30:00Z",
  },
];

export function RsvpComments() {
  const [filter, setFilter] = useState("all");

  const getFilteredMessages = () => {
    if (filter === "all") return rsvpMessages;
    return rsvpMessages.filter((msg) => msg.attendance.toLowerCase() === filter);
  };

  const getAttendanceCount = (status: string) => {
    return rsvpMessages.filter((msg) => msg.attendance.toLowerCase() === status).length;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Konfirmasi Kehadiran</h2>
        <p className="text-muted-foreground">
          Daftar konfirmasi kehadiran dan ucapan dari tamu undangan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium">Hadir</h4>
          <p className="text-2xl font-bold">{getAttendanceCount("hadir")}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium">Tidak Hadir</h4>
          <p className="text-2xl font-bold">{getAttendanceCount("tidak hadir")}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium">Belum Pasti</h4>
          <p className="text-2xl font-bold">{getAttendanceCount("mungkin hadir")}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter kehadiran" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="hadir">Hadir</SelectItem>
            <SelectItem value="tidak hadir">Tidak Hadir</SelectItem>
            <SelectItem value="mungkin hadir">Belum Pasti</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Cari nama tamu..."
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="space-y-4">
        {getFilteredMessages().map((message) => (
          <div key={message.id} className="p-4 border rounded-lg space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{message.name}</h4>
                <p className="text-sm text-muted-foreground">{message.whatsapp}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {message.numberOfGuests} tamu
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    message.attendance === "Hadir" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}>
                    {message.attendance}
                  </span>
                </div>
              </div>
              <time className="text-sm text-muted-foreground">
                {new Date(message.timestamp).toLocaleDateString("id-ID")}
              </time>
            </div>
            <div className="flex items-start gap-2">
              <MessageSquare className="h-4 w-4 mt-1 text-muted-foreground" />
              <p className="text-sm">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}