import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ImageUpload({ value, onChange, placeholder }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        onChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative w-full aspect-square">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="space-y-2 py-4">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <div className="text-sm text-muted-foreground">
              {isDragActive ? (
                <p>Drop the image here ...</p>
              ) : (
                <p>{placeholder || "Drag & drop image here, or click to select"}</p>
              )}
            </div>
          </div>
        )}
      </div>
      {preview && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => {
            setPreview(null);
            onChange("");
          }}
        >
          Remove Image
        </Button>
      )}
    </div>
  );
}