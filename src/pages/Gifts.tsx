import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table as TableIcon, ExternalLink } from "lucide-react";

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
    bankName: "BCA",
    accountNumber: "1234567890",
    accountHolder: "Budi Santoso",
    shippingAddress: "Jl. Sudirman No. 123, Jakarta"
  },
  {
    id: 2,
    guestName: "Siti Aminah",
    giftType: "Physical",
    description: "Microwave",
    whatsapp: "+6287654321098",
    status: "Pending",
    message: "Semoga bahagia selalu!",
    bankName: "-",
    accountNumber: "-",
    accountHolder: "-",
    shippingAddress: "Jl. Thamrin No. 456, Jakarta"
  },
];

interface GiftDetails {
  id: number;
  guestName: string;
  giftType: string;
  amount?: number;
  description?: string;
  whatsapp: string;
  status: string;
  message: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  shippingAddress: string;
}

export default function Gifts() {
  const [selectedGift, setSelectedGift] = useState<GiftDetails | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (gift: GiftDetails) => {
    setSelectedGift(gift);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gift Registry</h2>
        <p className="text-muted-foreground">
          Track and manage wedding gifts from your guests.
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount/Item</TableHead>
              <TableHead>WhatsApp</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {giftData.map((gift) => (
              <TableRow key={gift.id}>
                <TableCell className="font-medium">{gift.guestName}</TableCell>
                <TableCell>{gift.giftType}</TableCell>
                <TableCell>
                  {gift.giftType === "Cash" 
                    ? `Rp ${gift.amount?.toLocaleString()}` 
                    : gift.description}
                </TableCell>
                <TableCell>{gift.whatsapp}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      gift.status === "Confirmed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {gift.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewDetails(gift)}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Gift Details</DialogTitle>
          </DialogHeader>
          {selectedGift && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-semibold">Guest Name</div>
                <div className="col-span-2">{selectedGift.guestName}</div>
                
                <div className="font-semibold">Gift Type</div>
                <div className="col-span-2">{selectedGift.giftType}</div>
                
                <div className="font-semibold">Amount/Item</div>
                <div className="col-span-2">
                  {selectedGift.giftType === "Cash" 
                    ? `Rp ${selectedGift.amount?.toLocaleString()}` 
                    : selectedGift.description}
                </div>
                
                <div className="font-semibold">WhatsApp</div>
                <div className="col-span-2">{selectedGift.whatsapp}</div>
                
                <div className="font-semibold">Status</div>
                <div className="col-span-2">{selectedGift.status}</div>
                
                <div className="font-semibold">Bank Name</div>
                <div className="col-span-2">{selectedGift.bankName}</div>
                
                <div className="font-semibold">Account Number</div>
                <div className="col-span-2">{selectedGift.accountNumber}</div>
                
                <div className="font-semibold">Account Holder</div>
                <div className="col-span-2">{selectedGift.accountHolder}</div>
                
                <div className="font-semibold">Shipping Address</div>
                <div className="col-span-2">{selectedGift.shippingAddress}</div>
                
                <div className="font-semibold">Message</div>
                <div className="col-span-2">{selectedGift.message}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}