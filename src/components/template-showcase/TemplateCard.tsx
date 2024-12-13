import { Eye, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface TemplateCardProps {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

export function TemplateCard({ id, name, thumbnail, description }: TemplateCardProps) {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
    navigate("/invitations", { state: { selectedTemplate: id } });
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="relative aspect-video">
        <img 
          src={thumbnail} 
          alt={name}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleUseTemplate} className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Gunakan Template
          </Button>
        </div>
      </div>
    </div>
  );
}