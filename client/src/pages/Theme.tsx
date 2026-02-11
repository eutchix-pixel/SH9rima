import { themes, artworks } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Eye } from "lucide-react";
import { useSettings } from "@/lib/context";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ThemePage() {
  const [match, params] = useRoute("/theme/:id");
  const { language } = useSettings();
  const [filterDuration, setFilterDuration] = useState<number | null>(null);
  
  const themeId = params?.id;
  const theme = themes.find(t => t.id === themeId);
  const themeArtworks = artworks.filter(a => a.themeId === themeId);

  // Filter artworks based on selected duration
  const displayedArtworks = filterDuration === 5 
    ? themeArtworks.filter(a => a.isEssential)
    : themeArtworks;

  if (!theme) return <div>Not found</div>;

  return (
    <div className="pb-24">
      {/* Header with Theme Color */}
      <div className={`relative ${theme.color} text-white -mx-4 -mt-6 px-4 py-8 pb-12 rounded-b-[2.5rem] shadow-xl overflow-hidden`}>
        {/* Decorative Background */}
        <img src={theme.image} className="absolute -right-10 -top-10 w-64 h-64 opacity-10 mix-blend-overlay rotate-12 pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/20 pl-0 gap-1 mb-4">
              <ArrowLeft className="h-4 w-4" />
              {language === "fr" ? "Retour" : "Back"}
            </Button>
          </Link>
          
          <h1 className="font-serif text-4xl font-bold mb-2 tracking-tight">
            {language === "fr" ? theme.title : theme.titleEn}
          </h1>
          <p className="text-white/80 max-w-md leading-relaxed">
            {language === "fr" ? theme.description : theme.descriptionEn}
          </p>
        </div>
      </div>

      {/* Duration Selector */}
      <div className="px-2 -mt-8 relative z-20 flex justify-center gap-2 mb-8">
        {[5, 15, 30].map((min) => (
          <Button
            key={min}
            onClick={() => setFilterDuration(min === filterDuration ? null : min)}
            className={`shadow-lg border-2 ${
              filterDuration === min 
                ? "bg-white text-primary border-primary" 
                : "bg-background text-muted-foreground border-transparent hover:bg-background/90"
            } rounded-full px-6 py-6 h-auto flex flex-col gap-1 transition-all`}
          >
            <span className="text-xs uppercase font-bold tracking-widest opacity-70">
              {language === "fr" ? "J'ai" : "I have"}
            </span>
            <span className="text-lg font-black flex items-center gap-1">
              {min} <span className="text-xs font-normal">min</span>
            </span>
          </Button>
        ))}
      </div>

      {/* Stats & Actions */}
      <div className="container px-2 mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {displayedArtworks.length} {language === "fr" ? "objets à voir" : "objects to see"}
        </span>
        <Button variant="link" size="sm" className="text-primary gap-1">
          <MapPin className="h-4 w-4" />
          {language === "fr" ? "Voir sur la carte" : "View on map"}
        </Button>
      </div>

      {/* Artworks List */}
      <div className="space-y-4 px-2">
        {displayedArtworks.map((artwork, idx) => (
          <Link key={artwork.id} href={`/artwork/${artwork.id}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer group">
                <CardContent className="p-0 flex h-28">
                  <div className="w-28 h-full relative overflow-hidden">
                    <img src={artwork.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {artwork.isEssential && (
                      <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                        TOP
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center gap-1">
                    <h3 className="font-serif font-bold text-lg leading-tight line-clamp-1">
                      {language === "fr" ? artwork.title : artwork.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {artwork.artist}, {artwork.year}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {artwork.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] h-5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 flex items-center justify-center text-muted-foreground/30 group-hover:text-primary transition-colors">
                    <Eye className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
