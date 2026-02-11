import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ScanPage() {
  const [, setLocation] = useLocation();
  const [scanning, setScanning] = useState(true);

  // Simulate scanning delay
  useEffect(() => {
    const timer = setTimeout(() => {
        setScanning(false);
        // Simulate finding "Asia-1" (Samurai Armor)
        setLocation(`/artwork/asia-1`);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-center space-y-8 bg-black fixed inset-0 z-50 text-white">
      {/* Fake Camera Interface */}
      <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl border-2 border-white/20 bg-zinc-900 overflow-hidden flex flex-col items-center justify-center shadow-2xl">
        
        {/* Camera Feed Simulator (just a blurred abstract bg) */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50" />
        
        {/* Scanning Overlay */}
        <div className="relative z-10 w-64 h-64 border-2 border-accent/80 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(var(--accent),0.5)]">
            <div className="absolute inset-0 bg-accent/5 animate-pulse" />
            <div className="w-full h-0.5 bg-accent absolute top-0 shadow-[0_0_20px_rgba(var(--accent),1)] animate-[scan_2s_ease-in-out_infinite]" />
            
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-accent -mt-1 -ml-1" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-accent -mt-1 -mr-1" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-accent -mb-1 -ml-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-accent -mb-1 -mr-1" />
        </div>

        {scanning && (
            <div className="absolute bottom-12 flex items-center gap-2 text-accent animate-pulse font-mono text-sm tracking-widest">
                <Loader2 className="h-4 w-4 animate-spin" />
                ANALYSE EN COURS...
            </div>
        )}
      </div>

      <div className="max-w-xs space-y-4">
        <h2 className="text-2xl font-bold">Scannez le cartel</h2>
        <p className="text-white/60 text-sm">Pointez votre appareil vers le QR code situé à côté de l'œuvre.</p>
        <Link href="/">
            <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">Annuler</Button>
        </Link>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
