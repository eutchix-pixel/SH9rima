import { Artwork, artworks, themes } from "@/lib/data";
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

  // Next logic: find next artwork in SAME THEME
  const themeArtworks = artworks.filter(a => a.themeId === artwork.themeId);
  const currentIndex = themeArtworks.findIndex(a => a.id === id);
  const nextArtwork = themeArtworks[currentIndex + 1]; // Undefined if last

  return (
    <div className="pb-20">
       <div className="flex items-center justify-between mb-6 sticky top-0 z-40 bg-background/95 backdrop-blur-md py-3 -mx-4 px-4 border-b shadow-sm transition-all">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()} className="hover:bg-accent/10">
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <span className="font-mono text-xs font-bold opacity-50 uppercase tracking-widest">
           {artwork.themeId} • #{artwork.id.split('-')[1]}
        </span>
        <Link href={`/theme/${artwork.themeId}`}>
            <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <MapIcon className="h-6 w-6" />
            </Button>
        </Link>
      </div>

      <ArtworkCard artwork={artwork} nextArtworkId={nextArtwork?.id} />
    </div>
  );
}
