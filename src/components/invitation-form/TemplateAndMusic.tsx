import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { Layout, Music } from "lucide-react";

// Dummy data for demonstration - will be replaced with actual data later
const templates = [
  { id: "1", name: "Modern Minimalist" },
  { id: "2", name: "Classic Elegant" },
  { id: "3", name: "Rustic Garden" },
];

const musicTracks = [
  { id: "1", name: "Can't Help Falling in Love" },
  { id: "2", name: "Perfect" },
  { id: "3", name: "A Thousand Years" },
];

interface TemplateAndMusicProps {
  control: Control<any>;
}

export function TemplateAndMusic({ control }: TemplateAndMusicProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Template & Music</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="templateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Template Undangan
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih template undangan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="musicId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Musik Latar
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih musik latar" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {musicTracks.map((track) => (
                    <SelectItem key={track.id} value={track.id}>
                      {track.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}