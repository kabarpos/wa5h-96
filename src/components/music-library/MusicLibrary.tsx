import { Music, Upload } from "lucide-react";
import { Button } from "../ui/button";

// Dummy data - replace with actual data later
const musicTracks = [
  {
    id: "1",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    duration: "3:02",
  },
  {
    id: "2",
    title: "Perfect",
    artist: "Ed Sheeran",
    duration: "4:23",
  },
  {
    id: "3",
    title: "A Thousand Years",
    artist: "Christina Perri",
    duration: "4:45",
  },
];

export function MusicLibrary() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Musik Latar</h2>
          <p className="text-muted-foreground">
            Kelola koleksi musik latar untuk undangan digital.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Musik
        </Button>
      </div>

      <div className="space-y-4">
        {musicTracks.map((track) => (
          <div key={track.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Music className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">{track.title}</h4>
                <p className="text-sm text-muted-foreground">{track.artist}</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}