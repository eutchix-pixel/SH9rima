import { artworks } from "@/lib/data";
import { ArtworkCard } from "@/components/ArtworkCard";
import { useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Map as MapIcon } from "lucide-react";
import { Link } from "wouter";

export default function ArtworkPage() {
  const [match, params] = useRoute("/artwork/:id");
  const [, setLocation] = useLocation();
  const id = params?.id;
  const artwork = artworks.find(a => a.id === id);

  if (!artwork) {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
            <h2 className="text-xl font-bold">Œuvre non trouvée / Artwork not found</h2>
            <Link href="/"><Button>Retour / Back</Button></Link>
        </div>
    );
  }

  // Simple next logic: just next id in array
  const currentIndex = artworks.findIndex(a => a.id === id);
  const nextArtwork = artworks[currentIndex + 1];

  return (
    <div className="pb-20">
       <div className="flex items-center justify-between mb-6 sticky top-0 z-40 bg-background/80 backdrop-blur-sm py-2 -mx-4 px-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <span className="font-mono text-sm font-bold opacity-50">#{artwork.id}</span>
        <Link href="/tour/map">
            <Button variant="ghost" size="icon">
                <MapIcon className="h-6 w-6" />
            </Button>
        </Link>
      </div>

      <ArtworkCard artwork={artwork} nextArtworkId={nextArtwork?.id} />
    </div>
  );
}
