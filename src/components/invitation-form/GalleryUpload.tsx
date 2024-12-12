import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "./ImageUpload";
import { Plus, Trash2 } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  gallery: z.array(z.string()),
  groomName: z.string().optional(),
  brideName: z.string().optional(),
  date: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface GalleryUploadProps {
  control: Control<FormData>;
}

export function GalleryUpload({ control }: GalleryUploadProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "gallery",
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Galeri Foto</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append("")}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Tambah Foto
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative">
            <FormField
              control={control}
              name={`gallery.${index}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Upload foto galeri"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {fields.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Belum ada foto yang ditambahkan
        </p>
      )}
    </div>
  );
}
