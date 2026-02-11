import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { AccessibilityMenu } from "./AccessibilityMenu";
import { Home, Map, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/lib/context";

export function Layout({ children, className }: { children: ReactNode; className?: string }) {
  const [location] = useLocation();
  const { kidsMode } = useSettings();

  return (
    <div className={cn("min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300", className)}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <Link href="/">
            <a className="font-serif font-bold text-lg tracking-tight flex items-center gap-2">
              <span className="text-accent text-2xl">M</span>
              <span className="hidden sm:inline-block">Musée Beaux-Arts</span>
            </a>
          </Link>
          <div className="flex items-center gap-2">
            {kidsMode && (
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                KIDS MODE
              </span>
            )}
            <AccessibilityMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 md:py-10 mx-auto max-w-4xl relative">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/90 backdrop-blur-lg z-50 md:hidden pb-safe">
        <div className="flex justify-around items-center h-16">
          <Link href="/">
            <a className={cn("flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors", location === "/" ? "text-accent" : "text-muted-foreground hover:text-foreground")}>
              <Home className="h-6 w-6" />
              Accueil
            </a>
          </Link>
          <Link href="/scan">
            <a className={cn("flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors", location === "/scan" ? "text-accent" : "text-muted-foreground hover:text-foreground")}>
              <div className="bg-accent text-accent-foreground rounded-full p-3 -mt-6 shadow-lg border-4 border-background">
                <QrCode className="h-6 w-6" />
              </div>
              <span className="sr-only">Scan</span>
            </a>
          </Link>
          <Link href="/tour/map">
            <a className={cn("flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors", location.startsWith("/tour") ? "text-accent" : "text-muted-foreground hover:text-foreground")}>
              <Map className="h-6 w-6" />
              Visite
            </a>
          </Link>
        </div>
      </nav>
      
      {/* Spacer for bottom nav on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
