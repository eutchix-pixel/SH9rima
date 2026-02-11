import { Artwork as ArtworkType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

interface MapProps {
  artworks: ArtworkType[];
  highlightedId?: string;
  className?: string;
}

export function Map({ artworks, highlightedId, className }: MapProps) {
  const [, setLocation] = useLocation();
  
  return (
    <div className={cn("relative w-full aspect-[4/3] bg-card border rounded-xl overflow-hidden shadow-inner", className)}>
      <img 
        src="/images/museum-map.png" 
        alt="Map of the museum room" 
        className="w-full h-full object-cover opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />
      
      {/* Overlay Grid/Room Lines (Decorative) */}
      <div className="absolute inset-0 pointer-events-none border-[16px] border-primary/5" />
      
      {/* Entrance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 text-xs font-bold text-muted-foreground uppercase tracking-widest bg-background/80 px-2 py-1 rounded">
        Entrée
      </div>

      {/* Points */}
      {artworks.map((artwork) => {
        const isHighlighted = highlightedId === artwork.id;
        
        return (
          <button
            key={artwork.id}
            onClick={() => setLocation(`/artwork/${artwork.id}`)}
            className={cn(
              "absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent",
              isHighlighted 
                ? "bg-accent text-accent-foreground scale-125 z-20 animate-bounce" 
                : "bg-primary text-primary-foreground hover:bg-accent/80 z-10"
            )}
            style={{ 
              left: `${artwork.location.x}%`, 
              top: `${artwork.location.y}%` 
            }}
            aria-label={`View artwork ${artwork.id}: ${artwork.title}`}
          >
            {artwork.id}
          </button>
        );
      })}
    </div>
  );
}
