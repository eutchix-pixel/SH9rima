import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/lib/data";
import { useSettings } from "@/lib/context";
import { Link } from "wouter";
import { Clock, ArrowRight, QrCode, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { language } = useSettings();

  return (
    <div className="space-y-8 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] -mx-4 -mt-6 mb-8 overflow-hidden">
        <img 
          src="/images/museum-hero.png" 
          alt="Museum Gallery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">
            {language === "fr" ? "Bienvenue" : "Welcome"}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === "fr" ? "Musée des Beaux-Arts" : "Museum of Fine Arts"}
          </p>
        </div>
      </section>

      {/* Primary Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/scan">
          <Button size="lg" className="w-full h-16 text-lg gap-2 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <QrCode className="h-6 w-6" />
            {language === "fr" ? "Scanner une œuvre" : "Scan Artwork"}
          </Button>
        </Link>
        
        <Link href="/tour/map">
          <Button variant="outline" size="lg" className="w-full h-16 text-lg gap-2 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <Map className="h-6 w-6" />
            {language === "fr" ? "Carte de la salle" : "Room Map"}
          </Button>
        </Link>
      </div>

      {/* Guided Tours Section */}
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-serif">
            {language === "fr" ? "Parcours thématiques" : "Guided Tours"}
          </h2>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {language === "fr" ? "Sans guide" : "Self-guided"}
          </span>
        </div>
        
        <div className="grid gap-4">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tour/${tour.id}`}>
              <Card className={cn("cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] border-l-4", tour.color.replace('bg-', 'border-'))}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center text-lg">
                    {language === "fr" ? tour.name : tour.nameEn}
                    <div className="flex items-center text-sm font-normal text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                      <Clock className="mr-1 h-3 w-3" />
                      {tour.duration} min
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="flex items-center text-foreground/80">
                    {tour.artworks.length} {language === "fr" ? "œuvres à découvrir" : "artworks to discover"}
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
