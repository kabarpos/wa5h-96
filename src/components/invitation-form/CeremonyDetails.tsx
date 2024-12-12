import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  date: z.string().min(1, "Tanggal wajib diisi"),
  time: z.string().min(1, "Waktu wajib diisi"),
  timezone: z.enum(["WIB", "WITA", "WIT"]),
  venue: z.string().min(5, "Alamat venue minimal 5 karakter"),
  venueAddress: z.string().min(10, "Alamat lengkap venue minimal 10 karakter"),
  mapsLink: z.string().url("Link Google Maps tidak valid").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CeremonyDetailsProps {
  control: Control<FormData>;
  title: string;
}

export function CeremonyDetails({ control, title }: CeremonyDetailsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Waktu</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="timezone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zona Waktu</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih zona waktu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="WIB">WIB</SelectItem>
                  <SelectItem value="WITA">WITA</SelectItem>
                  <SelectItem value="WIT">WIT</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="venue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tempat</FormLabel>
            <FormControl>
              <Input placeholder="Nama tempat" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="venueAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Alamat Lengkap</FormLabel>
            <FormControl>
              <Textarea placeholder="Alamat lengkap tempat" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="mapsLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link Google Maps</FormLabel>
            <FormControl>
              <Input placeholder="https://maps.google.com/..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}