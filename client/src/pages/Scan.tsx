import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScanPage() {
  const [, setLocation] = useLocation();
  const [scanning, setScanning] = useState(true);

  // Simulate scanning delay and finding a specific ID
  useEffect(() => {
    const timer = setTimeout(() => {
        setScanning(false);
        // Simulate finding "tonkin-naissance" from the spec
        setLocation(`/detail/tonkin-naissance`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col">
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-black/50 backdrop-blur-sm absolute top-0 w-full z-10">
        <h2 className="font-bold tracking-widest text-sm uppercase">Scanner un code</h2>
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
            <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Camera Viewport */}
      <div className="flex-1 relative flex items-center justify-center bg-zinc-900">
         <div className="absolute inset-0 opacity-20 bg-[url('https://media.istockphoto.com/id/1144093883/vector/abstract-technology-futuristic-digital-bg.jpg?s=612x612&w=0&k=20&c=BqF_bSgA0uT5yB_3yT5yB_3yT5yB_3yT5yB_3yT5yB_3')] bg-cover" />
         
         {/* Reticle */}
         <div className="relative w-72 h-72 border-2 border-white/50 rounded-lg">
             <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-accent -mt-1 -ml-1" />
             <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-accent -mt-1 -mr-1" />
             <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-accent -mb-1 -ml-1" />
             <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-accent -mb-1 -mr-1" />
             
             {scanning && (
                 <div className="absolute inset-x-0 h-0.5 bg-accent shadow-[0_0_15px_rgba(255,200,0,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
             )}
         </div>

         {scanning && (
            <div className="absolute bottom-32 flex items-center gap-2 font-mono text-xs text-accent animate-pulse tracking-widest">
                <Loader2 className="h-4 w-4 animate-spin" />
                RECHERCHE DU SIGNAL...
            </div>
         )}
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
