import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  groomName: z.string().min(2, "Nama mempelai pria minimal 2 karakter"),
  groomFatherName: z.string().min(2, "Nama ayah mempelai pria minimal 2 karakter"),
  groomMotherName: z.string().min(2, "Nama ibu mempelai pria minimal 2 karakter"),
  brideName: z.string().min(2, "Nama mempelai wanita minimal 2 karakter"),
  brideFatherName: z.string().min(2, "Nama ayah mempelai wanita minimal 2 karakter"),
  brideMotherName: z.string().min(2, "Nama ibu mempelai wanita minimal 2 karakter"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  time: z.string().min(1, "Waktu wajib diisi"),
  venue: z.string().min(5, "Alamat venue minimal 5 karakter"),
  venueAddress: z.string().min(10, "Alamat lengkap venue minimal 10 karakter"),
  receptionDate: z.string().min(1, "Tanggal resepsi wajib diisi"),
  receptionTime: z.string().min(1, "Waktu resepsi wajib diisi"),
  receptionVenue: z.string().min(5, "Alamat venue resepsi minimal 5 karakter"),
  receptionVenueAddress: z.string().min(10, "Alamat lengkap venue resepsi minimal 10 karakter"),
  quranVerse: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export function InvitationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groomName: "",
      groomFatherName: "",
      groomMotherName: "",
      brideName: "",
      brideFatherName: "",
      brideMotherName: "",
      date: "",
      time: "",
      venue: "",
      venueAddress: "",
      receptionDate: "",
      receptionTime: "",
      receptionVenue: "",
      receptionVenueAddress: "",
      quranVerse: "",
      additionalInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Undangan berhasil dibuat!",
      description: "Undangan digital Anda telah berhasil disimpan.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Groom Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Data Mempelai Pria</h3>
            <FormField
              control={form.control}
              name="groomName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama mempelai pria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="groomFatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Ayah</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama ayah mempelai pria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="groomMotherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Ibu</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama ibu mempelai pria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Bride Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Data Mempelai Wanita</h3>
            <FormField
              control={form.control}
              name="brideName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama mempelai wanita" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brideFatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Ayah</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama ayah mempelai wanita" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brideMotherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Ibu</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama ibu mempelai wanita" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Akad Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Akad Nikah</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
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
              control={form.control}
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
          </div>
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tempat</FormLabel>
                <FormControl>
                  <Input placeholder="Nama tempat akad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="venueAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Lengkap</FormLabel>
                <FormControl>
                  <Textarea placeholder="Alamat lengkap tempat akad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Reception Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resepsi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="receptionDate"
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
              control={form.control}
              name="receptionTime"
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
          </div>
          <FormField
            control={form.control}
            name="receptionVenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tempat</FormLabel>
                <FormControl>
                  <Input placeholder="Nama tempat resepsi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receptionVenueAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Lengkap</FormLabel>
                <FormControl>
                  <Textarea placeholder="Alamat lengkap tempat resepsi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
          <FormField
            control={form.control}
            name="quranVerse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ayat Al-Quran</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Masukkan ayat Al-Quran yang ingin ditampilkan"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Ayat Al-Quran yang akan ditampilkan di undangan (opsional)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Informasi Tambahan</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Informasi tambahan untuk tamu undangan"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Informasi tambahan seperti dress code, protokol kesehatan, atau petunjuk lokasi
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Buat Undangan
        </Button>
      </form>
    </Form>
  );
}