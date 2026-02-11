import { Artwork, themes } from "@/lib/data";
import { useSettings } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Play, Pause, Baby, Info, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ArtworkCardProps {
  artwork: Artwork;
  nextArtworkId?: string;
}

export function ArtworkCard({ artwork, nextArtworkId }: ArtworkCardProps) {
  const { language, kidsMode, theme: appTheme } = useSettings();
  const [isPlaying, setIsPlaying] = useState(false);

  const title = language === "fr" ? artwork.title : artwork.titleEn;
  const descriptionShort = language === "fr" ? artwork.descriptionShort : artwork.descriptionShortEn;
  const descriptionLong = language === "fr" ? artwork.descriptionLong : artwork.descriptionLongEn;
  const context = language === "fr" ? artwork.context : artwork.contextEn;
  const keyPoints = language === "fr" ? artwork.keyPoints : artwork.keyPointsEn;
  const kidsContent = language === "fr" ? artwork.kidsContent : artwork.kidsContentEn;
  
  const themeData = themes.find(t => t.id === artwork.themeId);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Theme Tag */}
      {themeData && (
        <div className="flex items-center gap-2 mb-2">
           <Link href={`/theme/${themeData.id}`}>
             <Badge variant="outline" className="cursor-pointer hover:bg-secondary pl-1 pr-2 py-1 gap-1 text-xs uppercase tracking-widest border-primary/20">
               <div className={`w-2 h-2 rounded-full ${themeData.color.split(' ')[0]}`} />
               {language === "fr" ? themeData.title : themeData.titleEn}
             </Badge>
           </Link>
        </div>
      )}

      {/* Image Section */}
      <div className="relative aspect-[3/4] md:aspect-video w-full overflow-hidden rounded-xl shadow-xl bg-muted group">
        <img 
          src={artwork.image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-2 shadow-black/50 drop-shadow-md">
            {title}
          </h1>
          <p className="text-white/90 font-medium text-lg border-l-2 border-accent pl-3">
            {artwork.artist}, {artwork.year}
          </p>
        </div>
      </div>

      {/* Audio Player */}
      <Card className="bg-secondary/30 border-none shadow-sm">
        <CardContent className="p-4 flex items-center gap-4">
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full shrink-0 shadow-md bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-95"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
          </Button>
          <div className="flex-1">
            <div className="text-sm font-bold mb-1 uppercase tracking-wider text-muted-foreground text-[10px]">
              {language === "fr" ? "Guide Audio" : "Audio Guide"}
            </div>
            <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-foreground transition-all duration-1000 ease-linear" 
                style={{ width: isPlaying ? '100%' : '0%' }}
              />
            </div>
          </div>
          <Headphones className="h-5 w-5 text-muted-foreground" />
        </CardContent>
      </Card>

      {/* Content */}
      <div className="space-y-6">
        {/* Short Intro */}
        <p className="font-serif text-xl leading-relaxed italic text-muted-foreground border-l-4 border-muted pl-4">
          {descriptionShort}
        </p>
        
        <AnimatePresence mode="wait">
          {kidsMode ? (
            <motion.div 
              key="kids"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-2xl border-2 border-yellow-400 relative overflow-hidden shadow-sm"
            >
              <Baby className="absolute top-4 right-4 h-8 w-8 text-yellow-500 opacity-50" />
              <h3 className="font-bold text-lg mb-2 text-yellow-800 dark:text-yellow-200 font-serif">
                {language === "fr" ? "Pour les explorateurs !" : "For explorers!"}
              </h3>
              <p className="text-lg leading-relaxed text-yellow-900/80 dark:text-yellow-100/80">{kidsContent}</p>
            </motion.div>
          ) : (
            <motion.div
              key="adult"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Main Text */}
              <p className="text-lg leading-relaxed text-foreground/90 first-letter:text-4xl first-letter:font-serif first-letter:mr-1 first-letter:float-left">
                {descriptionLong}
              </p>

              {/* Context Box */}
              <div className="bg-muted/50 p-5 rounded-lg border border-border">
                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" /> {language === "fr" ? "Contexte Historique" : "Historical Context"}
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {context}
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-3 gap-3">
                {keyPoints.map((point, i) => (
                   <div key={i} className="bg-card border p-3 rounded text-center shadow-sm">
                      <span className="block text-2xl font-serif text-accent mb-1">{i + 1}</span>
                      <span className="text-xs font-medium uppercase tracking-wide">{point}</span>
                   </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Next Recommendation */}
      {nextArtworkId && (
        <div className="pt-8 pb-4">
          <div className="text-center mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
             {language === "fr" ? "À voir ensuite dans ce thème" : "Next in this theme"}
          </div>
          <Link href={`/artwork/${nextArtworkId}`}>
            <Button className="w-full h-16 text-lg gap-3 shadow-xl rounded-xl transition-transform active:scale-[0.98]" size="lg">
              {language === "fr" ? "Continuer la visite" : "Continue Tour"} 
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
