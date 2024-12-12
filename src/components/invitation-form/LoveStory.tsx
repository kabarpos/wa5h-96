import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, Control } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  loveStory: z.array(z.object({
    date: z.string().min(1, "Tanggal wajib diisi"),
    story: z.string().min(10, "Cerita minimal 10 karakter"),
  })),
});

type FormData = z.infer<typeof formSchema>;

interface LoveStoryProps {
  control: Control<FormData>;
}

export function LoveStory({ control }: LoveStoryProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "loveStory",
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Love Story Timeline</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ date: "", story: "" })}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Tambah Cerita
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
            name={`loveStory.${index}.date`}
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
            name={`loveStory.${index}.story`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cerita</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Ceritakan momen spesial Anda..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}

      {fields.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Belum ada cerita yang ditambahkan
        </p>
      )}
    </div>
  );
}