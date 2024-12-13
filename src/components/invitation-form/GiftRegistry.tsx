import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";
import { z } from "zod";
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
import { useState } from "react";

const formSchema = z.object({
  gifts: z.array(z.object({
    bankName: z.string().min(2, "Nama bank/wallet minimal 2 karakter"),
    accountNumber: z.string().min(5, "Nomor rekening/wallet minimal 5 karakter"),
    accountHolder: z.string().min(2, "Nama pemilik minimal 2 karakter"),
    shippingAddress: z.string().min(10, "Alamat pengiriman minimal 10 karakter"),
  })),
});

type FormData = z.infer<typeof formSchema>;

interface GiftRegistryProps {
  control: Control<any>;
}

export function GiftRegistry({ control }: GiftRegistryProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "gifts",
  });

  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gift Registry</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ 
            bankName: "", 
            accountNumber: "", 
            accountHolder: "",
            shippingAddress: "" 
          })}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Tambah Rekening
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bank/E-Wallet</TableHead>
            <TableHead>No. Rekening</TableHead>
            <TableHead>Pemilik</TableHead>
            <TableHead className="w-[100px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell>
                <FormField
                  control={control}
                  name={`gifts.${index}.bankName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Contoh: BCA, GoPay, OVO" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={control}
                  name={`gifts.${index}.accountNumber`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nomor rekening/e-wallet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={control}
                  name={`gifts.${index}.accountHolder`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nama pemilik" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedGift(index)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => remove(index)}
                  >
                    <span className="sr-only">Delete</span>
                    ×
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {fields.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                Belum ada rekening yang ditambahkan
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Dialog open={selectedGift !== null} onOpenChange={() => setSelectedGift(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detail Rekening</DialogTitle>
          </DialogHeader>
          {selectedGift !== null && fields[selectedGift] && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bank/E-Wallet</h4>
                <p>{fields[selectedGift].bankName}</p>
              </div>
              <div>
                <h4 className="font-medium">Nomor Rekening</h4>
                <p>{fields[selectedGift].accountNumber}</p>
              </div>
              <div>
                <h4 className="font-medium">Nama Pemilik</h4>
                <p>{fields[selectedGift].accountHolder}</p>
              </div>
              <div>
                <h4 className="font-medium">Alamat Pengiriman</h4>
                <FormField
                  control={control}
                  name={`gifts.${selectedGift}.shippingAddress`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Masukkan alamat lengkap untuk pengiriman kado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}