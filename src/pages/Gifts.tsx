import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

// Dummy data - replace with actual data later
const gifts = [
  {
    id: 1,
    bankName: "Bank BCA",
    accountNumber: "1234567890",
    accountHolder: "Ahmad Rizky",
    shippingAddress: "Jl. Sudirman No. 123, Jakarta Pusat",
  },
  {
    id: 2,
    bankName: "Bank Mandiri",
    accountNumber: "0987654321",
    accountHolder: "Siti Nurhaliza",
    shippingAddress: "Jl. Thamrin No. 456, Jakarta Pusat",
  },
];

export default function Gifts() {
  const [selectedGift, setSelectedGift] = useState<typeof gifts[0] | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gift Registry</h2>
        <p className="text-muted-foreground">
          Manage your gift registry and shipping information.
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bank/E-Wallet</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Account Holder</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gifts.map((gift) => (
              <TableRow key={gift.id}>
                <TableCell>{gift.bankName}</TableCell>
                <TableCell>{gift.accountNumber}</TableCell>
                <TableCell>{gift.accountHolder}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedGift(gift);
                      setIsDetailsOpen(true);
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Gift Registry Details</DialogTitle>
          </DialogHeader>
          {selectedGift && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bank/E-Wallet</h4>
                <p className="text-sm text-muted-foreground">{selectedGift.bankName}</p>
              </div>
              <div>
                <h4 className="font-medium">Account Number</h4>
                <p className="text-sm text-muted-foreground">{selectedGift.accountNumber}</p>
              </div>
              <div>
                <h4 className="font-medium">Account Holder</h4>
                <p className="text-sm text-muted-foreground">{selectedGift.accountHolder}</p>
              </div>
              <div>
                <h4 className="font-medium">Shipping Address</h4>
                <p className="text-sm text-muted-foreground">{selectedGift.shippingAddress}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}