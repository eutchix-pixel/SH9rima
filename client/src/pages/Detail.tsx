import { museumData, SubSection, Section } from "@/lib/data";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause, Headphones, Map, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DetailPage() {
  const [match, params] = useRoute("/detail/:id");
  const id = params?.id;
  
  // Find subsection and parent section
  let subSection: SubSection | undefined;
  let section: Section | undefined;

  for (const s of museumData) {
    const sub = s.subsections.find(sub => sub.id === id);
    if (sub) {
      subSection = sub;
      section = s;
      break;
    }
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'gallery' | 'map'>('text');

  if (!subSection || !section) {
    return <div className="p-10 text-center">Contenu introuvable</div>;
  }

  return (
    <div className={`min-h-screen ${section.colorClass} pb-24 relative`}>
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-10">
            <img src={section.bgImage} className="w-full h-full object-cover grayscale" />
        </div>

        {/* Header Image */}
        <div className="relative h-[40vh] w-full overflow-hidden z-10">
            <img 
                src={subSection.image} 
                className="w-full h-full object-cover" 
                alt={subSection.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 text-white">
                 <div className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2">
                    {section.title}
                 </div>
                 <h1 className="font-serif text-4xl md:text-5xl font-bold leading-none">
                    {subSection.title}
                 </h1>
            </div>
        </div>

        <div className="container px-4 py-8 max-w-3xl mx-auto space-y-8">
            
            {/* Audio Player Widget */}
            <div className="bg-black/10 backdrop-blur-md p-4 rounded-lg flex items-center gap-4 border border-current/10">
                <Button 
                    size="icon" 
                    className="h-12 w-12 rounded-full shrink-0 bg-current text-white hover:opacity-90 transition-opacity"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
                </Button>
                <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Récit Audio</div>
                    <div className="h-1 bg-current/20 rounded-full overflow-hidden">
                         <motion.div 
                            className="h-full bg-current" 
                            initial={{ width: 0 }}
                            animate={{ width: isPlaying ? "100%" : "0%" }}
                            transition={{ duration: 30, ease: "linear" }}
                         />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-current/20">
                <button 
                    onClick={() => setActiveTab('text')}
                    className={`flex-1 pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'text' ? 'border-b-2 border-current opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                    Récit
                </button>
                <button 
                    onClick={() => setActiveTab('gallery')}
                    className={`flex-1 pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'gallery' ? 'border-b-2 border-current opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                    Galerie
                </button>
                <button 
                    onClick={() => setActiveTab('map')}
                    className={`flex-1 pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'map' ? 'border-b-2 border-current opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                    Carte
                </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[300px]">
                {activeTab === 'text' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-lg prose-headings:font-serif leading-relaxed opacity-90">
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                            {subSection.content}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </motion.div>
                )}

                {activeTab === 'gallery' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-black/10 rounded-lg flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 opacity-20" />
                        </div>
                        <div className="aspect-square bg-black/10 rounded-lg flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 opacity-20" />
                        </div>
                    </motion.div>
                )}

                {activeTab === 'map' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-video bg-black/10 rounded-lg flex items-center justify-center border border-current/10">
                        <div className="text-center opacity-50">
                            <Map className="h-12 w-12 mx-auto mb-2" />
                            <span className="text-xs uppercase tracking-widest">Carte Interactive du Secteur</span>
                        </div>
                    </motion.div>
                )}
            </div>

        </div>
    </div>
  );
}
