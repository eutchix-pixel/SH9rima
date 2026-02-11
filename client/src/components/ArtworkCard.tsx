import { Artwork } from "@/lib/data";
import { useSettings } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Play, Pause, Baby, Info, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface ArtworkCardProps {
  artwork: Artwork;
  nextArtworkId?: string;
}

export function ArtworkCard({ artwork, nextArtworkId }: ArtworkCardProps) {
  const { language, kidsMode } = useSettings();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const title = language === "fr" ? artwork.title : artwork.titleEn;
  const descriptionShort = language === "fr" ? artwork.descriptionShort : artwork.descriptionShortEn;
  const descriptionLong = language === "fr" ? artwork.descriptionLong : artwork.descriptionLongEn;
  const kidsContent = language === "fr" ? artwork.kidsContent : artwork.kidsContentEn;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Image Section */}
      <div className="relative aspect-[3/4] md:aspect-video w-full overflow-hidden rounded-xl shadow-xl bg-muted">
        <img 
          src={artwork.image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-2 shadow-black/50 drop-shadow-md">
            {title}
          </h1>
          <p className="text-white/90 font-medium text-lg">{artwork.artist}, {artwork.year}</p>
        </div>
      </div>

      {/* Audio Player */}
      <Card className="bg-secondary/30 border-none shadow-sm">
        <CardContent className="p-4 flex items-center gap-4">
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full shrink-0 shadow-md bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
          </Button>
          <div className="flex-1">
            <div className="text-sm font-medium mb-1">Audio Guide</div>
            <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-1000 ease-linear" 
                style={{ width: isPlaying ? '100%' : '0%' }}
              />
            </div>
          </div>
          <Headphones className="h-5 w-5 text-muted-foreground" />
        </CardContent>
      </Card>

      {/* Content */}
      <div className="space-y-4">
        <p className="font-serif text-xl leading-relaxed italic text-muted-foreground">
          {descriptionShort}
        </p>
        
        <AnimatePresence mode="wait">
          {kidsMode ? (
            <motion.div 
              key="kids"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-2xl border-2 border-yellow-400 relative overflow-hidden"
            >
              <Baby className="absolute top-4 right-4 h-8 w-8 text-yellow-500 opacity-50" />
              <h3 className="font-bold text-lg mb-2 text-yellow-800 dark:text-yellow-200">Pour les explorateurs !</h3>
              <p className="text-lg leading-relaxed">{kidsContent}</p>
            </motion.div>
          ) : (
            <motion.div
              key="adult"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-lg leading-relaxed text-foreground/90">
                {descriptionLong}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Next Recommendation */}
      {nextArtworkId && (
        <div className="pt-8 pb-4">
          <Link href={`/artwork/${nextArtworkId}`}>
            <Button className="w-full h-14 text-lg gap-2 shadow-lg" size="lg">
              {language === "fr" ? "Continuer la visite" : "Continue Tour"} 
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
