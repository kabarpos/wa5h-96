import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "./ImageUpload";
import { Control } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  groomName: z.string().min(2, "Nama mempelai pria minimal 2 karakter"),
  groomFatherName: z.string().min(2, "Nama ayah mempelai pria minimal 2 karakter"),
  groomMotherName: z.string().min(2, "Nama ibu mempelai pria minimal 2 karakter"),
  groomPhoto: z.string().optional(),
  brideName: z.string().min(2, "Nama mempelai wanita minimal 2 karakter"),
  brideFatherName: z.string().min(2, "Nama ayah mempelai wanita minimal 2 karakter"),
  brideMotherName: z.string().min(2, "Nama ibu mempelai wanita minimal 2 karakter"),
  bridePhoto: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CoupleDetailsProps {
  control: Control<FormData>;
}

export function CoupleDetails({ control }: CoupleDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Groom Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Data Mempelai Pria</h3>
        <FormField
          control={control}
          name="groomPhoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto Mempelai Pria</FormLabel>
              <FormControl>
                <ImageUpload 
                  value={field.value} 
                  onChange={field.onChange}
                  placeholder="Upload foto mempelai pria"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
          name="bridePhoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto Mempelai Wanita</FormLabel>
              <FormControl>
                <ImageUpload 
                  value={field.value} 
                  onChange={field.onChange}
                  placeholder="Upload foto mempelai wanita"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
  );
}