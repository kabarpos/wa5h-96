import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { CoupleDetails } from "./invitation-form/CoupleDetails";
import { CeremonyDetails } from "./invitation-form/CeremonyDetails";
import { LoveStory } from "./invitation-form/LoveStory";

const formSchema = z.object({
  // Couple Details
  groomName: z.string().min(2, "Nama mempelai pria minimal 2 karakter"),
  groomFatherName: z.string().min(2, "Nama ayah mempelai pria minimal 2 karakter"),
  groomMotherName: z.string().min(2, "Nama ibu mempelai pria minimal 2 karakter"),
  groomPhoto: z.string().optional(),
  brideName: z.string().min(2, "Nama mempelai wanita minimal 2 karakter"),
  brideFatherName: z.string().min(2, "Nama ayah mempelai wanita minimal 2 karakter"),
  brideMotherName: z.string().min(2, "Nama ibu mempelai wanita minimal 2 karakter"),
  bridePhoto: z.string().optional(),
  
  // Ceremony Details
  date: z.string().min(1, "Tanggal wajib diisi"),
  time: z.string().min(1, "Waktu wajib diisi"),
  timezone: z.enum(["WIB", "WITA", "WIT"]),
  venue: z.string().min(5, "Alamat venue minimal 5 karakter"),
  venueAddress: z.string().min(10, "Alamat lengkap venue minimal 10 karakter"),
  mapsLink: z.string().url("Link Google Maps tidak valid").optional(),
  
  // Reception Details
  receptionDate: z.string().min(1, "Tanggal resepsi wajib diisi"),
  receptionTime: z.string().min(1, "Waktu resepsi wajib diisi"),
  receptionTimezone: z.enum(["WIB", "WITA", "WIT"]),
  receptionVenue: z.string().min(5, "Alamat venue resepsi minimal 5 karakter"),
  receptionVenueAddress: z.string().min(10, "Alamat lengkap venue resepsi minimal 10 karakter"),
  receptionMapsLink: z.string().url("Link Google Maps tidak valid").optional(),
  
  // Love Story
  loveStory: z.array(z.object({
    date: z.string().min(1, "Tanggal wajib diisi"),
    story: z.string().min(10, "Cerita minimal 10 karakter"),
  })),
  
  // Additional Information
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
      groomPhoto: "",
      brideName: "",
      brideFatherName: "",
      brideMotherName: "",
      bridePhoto: "",
      date: "",
      time: "",
      timezone: "WIB",
      venue: "",
      venueAddress: "",
      mapsLink: "",
      receptionDate: "",
      receptionTime: "",
      receptionTimezone: "WIB",
      receptionVenue: "",
      receptionVenueAddress: "",
      receptionMapsLink: "",
      loveStory: [],
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
        <CoupleDetails control={form.control} />
        
        <CeremonyDetails 
          control={form.control} 
          title="Akad Nikah"
        />
        
        <CeremonyDetails 
          control={form.control} 
          title="Resepsi"
        />
        
        <LoveStory control={form.control} />
        
        <Button type="submit" className="w-full">
          Buat Undangan
        </Button>
      </form>
    </Form>
  );
}