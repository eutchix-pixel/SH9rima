import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2 } from "lucide-react";

export default function ScanPage() {
  const [, setLocation] = useLocation();
  const [scanning, setScanning] = useState(true);

  // Simulate scanning delay
  useEffect(() => {
    const timer = setTimeout(() => {
        setScanning(false);
        // Randomly pick an artwork to "find"
        const randomId = Math.floor(Math.random() * 6) + 1;
        setLocation(`/artwork/${randomId}`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-8 bg-black/90 fixed inset-0 z-50 text-white">
      <div className="relative w-64 h-64 border-4 border-accent/50 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 animate-pulse" />
        <div className="w-full h-1 bg-accent absolute top-0 animate-[scan_2s_ease-in-out_infinite]" />
        
        {scanning && <Loader2 className="h-12 w-12 animate-spin text-accent" />}
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-2">Recherche de QR Code...</h2>
        <p className="text-white/60">Placez le code dans le cadre</p>
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
