import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";
import { z } from "zod";

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

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded-lg relative">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-destructive"
            onClick={() => remove(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <FormField
            control={control}
            name={`gifts.${index}.bankName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Bank / E-Wallet</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: BCA, GoPay, OVO" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`gifts.${index}.accountNumber`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Rekening / Nomor E-Wallet</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nomor rekening atau nomor e-wallet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`gifts.${index}.accountHolder`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Pemilik</FormLabel>
                <FormControl>
                  <Input placeholder="Nama pemilik rekening atau e-wallet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`gifts.${index}.shippingAddress`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Pengiriman Kado</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan alamat lengkap untuk pengiriman kado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}

      {fields.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Belum ada rekening yang ditambahkan
        </p>
      )}
    </div>
  );
}