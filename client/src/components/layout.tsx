import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { QrCode, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function Layout({ children, className }: { children: ReactNode; className?: string }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Floating Scanner Button */}
      <Link href="/scan">
        <button 
          className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground rounded-full p-4 shadow-2xl shadow-black/50 border-2 border-white/20 transition-transform active:scale-95 hover:scale-110 flex items-center gap-2 group"
          aria-label="Scanner"
        >
          <QrCode className="h-8 w-8" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-sm">
            SCANNER
          </span>
        </button>
      </Link>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Back Button (if not home) */}
      {!isHome && location !== "/scan" && (
        <button 
          onClick={() => window.history.back()}
          className="fixed top-4 left-4 z-40 bg-background/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-foreground shadow-lg active:scale-95"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
