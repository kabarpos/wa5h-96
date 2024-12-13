import { TemplateCard } from "./TemplateCard";

// Dummy data - replace with actual data later
const templates = [
  {
    id: "1",
    name: "Modern Minimalist",
    thumbnail: "https://images.unsplash.com/photo-1460364157752-926555421a7e",
    description: "Template modern dengan desain minimalis yang elegan",
  },
  {
    id: "2",
    name: "Classic Elegant",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    description: "Template klasik dengan sentuhan elegan",
  },
  {
    id: "3",
    name: "Rustic Garden",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552",
    description: "Template dengan tema taman rustic yang romantis",
  },
];

export function TemplateShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Template Undangan</h2>
        <p className="text-muted-foreground">
          Pilih template undangan digital yang sesuai dengan tema pernikahan Anda.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} {...template} />
        ))}
      </div>
    </div>
  );
}