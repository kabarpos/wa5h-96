import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Gift } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Dummy data - replace with actual data later
const giftData = [
  {
    id: 1,
    guestName: "Budi Santoso",
    giftType: "Cash",
    amount: 1000000,
    whatsapp: "+6281234567890",
    status: "Confirmed",
    message: "Selamat menempuh hidup baru!",
  },
  {
    id: 2,
    guestName: "Siti Aminah",
    giftType: "Physical",
    description: "Microwave",
    whatsapp: "+6287654321098",
    status: "Pending",
    message: "Semoga bahagia selalu!",
  },
];

export default function Gifts() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gift Registry</h2>
        <p className="text-muted-foreground">
          Track and manage wedding gifts from your guests.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter gifts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Gifts</SelectItem>
            <SelectItem value="cash">Cash Gifts</SelectItem>
            <SelectItem value="physical">Physical Gifts</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Search by guest name..."
          className="w-full sm:w-[300px]"
        />
      </div>

      <div className="grid gap-4">
        {giftData.map((gift) => (
          <Card key={gift.id} className="p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-semibold">{gift.guestName}</h3>
                <p className="text-sm text-muted-foreground">{gift.whatsapp}</p>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm">
                    {gift.giftType === "Cash"
                      ? `Rp ${gift.amount.toLocaleString()}`
                      : gift.description}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    gift.status === "Confirmed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                >
                  {gift.status}
                </span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            {gift.message && (
              <p className="mt-4 text-sm text-muted-foreground">
                "{gift.message}"
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}