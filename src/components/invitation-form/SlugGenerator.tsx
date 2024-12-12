import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Control, useWatch } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

const formSchema = z.object({
  slug: z.string().min(3, "Slug minimal 3 karakter"),
  groomName: z.string(),
  brideName: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface SlugGeneratorProps {
  control: Control<FormData>;
}

export function SlugGenerator({ control }: SlugGeneratorProps) {
  const groomName = useWatch({
    control,
    name: "groomName",
  });

  const brideName = useWatch({
    control,
    name: "brideName",
  });

  const generateSlug = () => {
    if (groomName && brideName) {
      const slug = `${groomName.toLowerCase()}-${brideName.toLowerCase()}`
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return slug;
    }
    return "";
  };

  useEffect(() => {
    if (groomName && brideName) {
      const generatedSlug = generateSlug();
      control._formValues.slug = generatedSlug;
    }
  }, [groomName, brideName]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">URL Undangan</h3>
      <FormField
        control={control}
        name="slug"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Slug URL</FormLabel>
            <div className="flex items-center gap-2">
              <FormControl>
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">weddinginvitation.com/</span>
                  <Input {...field} placeholder="nama-pengantin" />
                </div>
              </FormControl>
              <Button
                type="button"
                variant="outline"
                onClick={() => field.onChange(generateSlug())}
              >
                Generate
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}