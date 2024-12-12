import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  quranVerse: z.string().optional(),
  additionalInfo: z.string().optional(),
  thankyouMessage: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AdditionalInfoProps {
  control: Control<FormData>;
}

export function AdditionalInfo({ control }: AdditionalInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
      
      <FormField
        control={control}
        name="quranVerse"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ayat Al-Qur'an</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Masukkan ayat Al-Qur'an beserta terjemahannya"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Informasi Tambahan</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Masukkan informasi tambahan (protokol kesehatan, dress code, dll)"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="thankyouMessage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pesan Terima Kasih</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Masukkan pesan terima kasih untuk tamu undangan"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}