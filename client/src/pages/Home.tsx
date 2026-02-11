import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSettings } from "@/lib/context";
import { themes } from "@/lib/data";
import { Link } from "wouter";
import { QrCode, Search, ChevronRight } from "lucide-react";

export default function Home() {
  const { language } = useSettings();

  return (
    <div className="space-y-8 pb-24">
      {/* Welcome Header */}
      <section className="pt-6 px-2">
        <h1 className="font-serif text-3xl font-bold mb-2">
          {language === "fr" ? "Bienvenue au Musée" : "Welcome to the Museum"}
        </h1>
        <p className="text-muted-foreground">
          {language === "fr" 
            ? "Choisissez un univers pour commencer votre visite." 
            : "Choose a universe to start your visit."}
        </p>
      </section>

      {/* Main Scan Action */}
      <div className="px-2">
        <Link href="/scan">
          <Button size="lg" className="w-full h-14 text-lg gap-2 shadow-lg bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-[0.98]">
            <QrCode className="h-5 w-5" />
            {language === "fr" ? "Scanner un QR Code" : "Scan a QR Code"}
          </Button>
        </Link>
      </div>

      {/* Themes Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-bold font-serif uppercase tracking-wider text-muted-foreground text-xs">
            {language === "fr" ? "Les Collections" : "The Collections"}
          </h2>
        </div>
        
        <div className="grid gap-4">
          {themes.map((theme, index) => (
            <Link key={theme.id} href={`/theme/${theme.id}`}>
              <div 
                className={`relative overflow-hidden rounded-xl h-32 cursor-pointer shadow-md hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] group`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 ${theme.color} opacity-90 group-hover:opacity-85 transition-opacity z-10`} />
                  {/* Pattern or image behind */}
                  <img src={theme.image} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-20 h-full flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 shadow-inner">
                      <img src={theme.image} alt="" className="w-8 h-8 object-contain invert brightness-0" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                        {language === "fr" ? theme.title : theme.titleEn}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-1 max-w-[200px]">
                        {language === "fr" ? theme.description : theme.descriptionEn}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                    <ChevronRight className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
