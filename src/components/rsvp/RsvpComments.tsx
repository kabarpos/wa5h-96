import { MessageSquare, Users } from "lucide-react";

// Dummy data - replace with actual data later
const rsvpMessages = [
  {
    id: 1,
    name: "Budi Santoso",
    attendance: "Hadir",
    numberOfGuests: 2,
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    timestamp: "2024-02-20T10:00:00Z",
  },
  {
    id: 2,
    name: "Siti Aminah",
    attendance: "Tidak Hadir",
    numberOfGuests: 0,
    message: "Mohon maaf tidak bisa hadir. Semoga lancar sampai hari H!",
    timestamp: "2024-02-19T15:30:00Z",
  },
];

export function RsvpComments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Konfirmasi Kehadiran</h2>
        <p className="text-muted-foreground">
          Daftar konfirmasi kehadiran dan ucapan dari tamu undangan.
        </p>
      </div>

      <div className="space-y-4">
        {rsvpMessages.map((message) => (
          <div key={message.id} className="p-4 border rounded-lg space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{message.name}</h4>
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