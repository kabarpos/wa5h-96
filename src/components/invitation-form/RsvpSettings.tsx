import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Control } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  rsvpEnabled: z.boolean(),
  rsvpMessages: z.array(z.object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    whatsapp: z.string().min(10, "Nomor WhatsApp tidak valid"),
    attendance: z.enum(["Hadir", "Tidak Hadir", "Mungkin Hadir"]),
    numberOfGuests: z.number().min(1, "Minimal 1 tamu"),
    message: z.string().min(10, "Pesan minimal 10 karakter"),
  })),
});

type FormData = z.infer<typeof formSchema>;

interface RsvpSettingsProps {
  control: Control<FormData>;
}

export function RsvpSettings({ control }: RsvpSettingsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Pengaturan RSVP</h3>
        <FormField
          control={control}
          name="rsvpEnabled"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mt-0">Aktifkan RSVP</FormLabel>
            </FormItem>
          )}
        />
      </div>

      <div className="p-4 border rounded-lg space-y-4">
        <h4 className="font-medium">Preview Form RSVP</h4>
        <div className="space-y-4">
          <Input placeholder="Nama Lengkap" disabled />
          <Input placeholder="Nomor WhatsApp" disabled />
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Konfirmasi Kehadiran" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hadir">Hadir</SelectItem>
              <SelectItem value="tidak-hadir">Tidak Hadir</SelectItem>
              <SelectItem value="mungkin">Mungkin Hadir</SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Jumlah Tamu" disabled />
          <Textarea placeholder="Ucapan & Doa" disabled />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Captcha:</span>
            <span className="font-mono bg-muted px-2 py-1 rounded">1 + 2 = ?</span>
            <Input className="w-20" placeholder="?" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}