import { Map } from "@/components/Map";
import { artworks, tours } from "@/lib/data";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useSettings } from "@/lib/context";

export default function TourPage() {
  const [match, params] = useRoute("/tour/:id");
  const { language } = useSettings();
  
  // If id is 'map', show full map mode. If mock tour ID, filter map?
  // For simplicity, showing map with all points for now, or highlighted points for tour.
  
  const tourId = params?.id;
  const tour = tours.find(t => t.id === tourId);
  
  const highlightedArtworks = tour 
    ? artworks.filter(a => tour.artworks.includes(a.id))
    : artworks;

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-serif font-bold">
            {tour ? (language === "fr" ? tour.name : tour.nameEn) : (language === "fr" ? "Carte de la salle" : "Room Map")}
          </h1>
          {tour && (
            <p className="text-sm text-muted-foreground">
              {language === "fr" ? "Suivez les points surlignés" : "Follow highlighted points"}
            </p>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
         <Map 
           artworks={artworks} 
           highlightedId={undefined} // Show all, maybe highlight specific ones if touring
           className="shadow-2xl border-4 border-background"
         />
         
         <div className="mt-8 grid grid-cols-2 gap-4">
            {/* Legend or list */}
            {highlightedArtworks.map(art => (
               <Link key={art.id} href={`/artwork/${art.id}`}>
                 <div className="flex items-center gap-3 p-3 rounded-lg bg-card border shadow-sm cursor-pointer hover:bg-accent/10 transition-colors">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {art.id}
                    </div>
                    <div className="text-sm font-medium line-clamp-2">
                       {language === "fr" ? art.title : art.titleEn}
                    </div>
                 </div>
               </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
