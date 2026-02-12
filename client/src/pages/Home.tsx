import { museumData } from "@/lib/data";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Map, ArrowRight } from "lucide-react";

export default function Home() {
  return (
      <div className="bg-background text-foreground">
          {/* Hero / Intro */}
          <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-zinc-900 text-white">
            <div className="absolute inset-0 z-0">
               <img src="/images/museum-hero.png" className="w-full h-full object-cover opacity-30" />
               <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-none">
                  <span className="block text-xl md:text-2xl tracking-[0.2em] font-sans font-light mb-2 text-accent">SALLE D'HONNEURDU</span>
                  9<sup className="text-3xl align-top">e</sup> RIMa
                </h1>
                <div className="h-1 w-24 bg-accent mx-auto my-6" />
                <p className="font-sans text-lg md:text-xl text-white/80 font-light tracking-wide">
                  De l'Indochine à la Guyane,<br/>une épopée à travers les âges.
                </p>
              </motion.div>
            </div>

            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest">Explorer</span>
                <ChevronDown className="h-6 w-6" />
            </motion.div>
          </section>
          {/* Timeline Sections */}
          {museumData.map((section, index) => (
            <SectionView key={section.id} section={section} index={index} />
          ))}
          {/* Footer / Map Link */}
          <section className="py-20 px-6 bg-zinc-900 text-white text-center">
            <h2 className="font-serif text-3xl mb-6">Plan du Musée</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Repérez-vous dans les différentes salles et trouvez les œuvres principales.
            </p>
            <Link href="/map">
                <button className="bg-white text-black px-8 py-4 rounded-none font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    Ouvrir le plan
                </button>
            </Link>
          </section>
      </div>
  );
}

function SectionView({ section, index }: { section: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className={`min-h-screen relative flex items-center py-24 overflow-hidden ${section.colorClass}`}>
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
                 <img 
                    src={section.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover opacity-20 mix-blend-multiply grayscale contrast-125" 
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-6 md:px-12">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                {/* Sticky Title Area */}
                <div className="md:col-span-4 md:sticky md:top-24 text-left">
                    <span className="block text-xs font-bold tracking-[0.2em] opacity-60 mb-2 uppercase font-sans">
                        {section.period}
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {section.title}
                    </h2>
                    <p className="font-sans text-lg opacity-80 leading-relaxed border-l-2 border-current pl-4 max-w-sm">
                        {section.description}
                    </p>
                </div>

                {/* Subsections List (Timeline) */}
                <div className="md:col-span-8 space-y-6 md:pl-12 border-l border-current/10 ml-2 md:ml-0">
                    {section.subsections.map((sub: any, i: number) => (
                        <Link key={sub.id} href={`/detail/${sub.id}`}>
                            <motion.div 
                                className="group relative cursor-pointer bg-white/5 backdrop-blur-sm border border-current/10 p-6 hover:bg-white/10 transition-all duration-300"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute left-[-29px] md:left-[-53px] top-8 w-3 h-3 rounded-full bg-current opacity-50 group-hover:scale-150 transition-transform" />
                                
                                <div className="flex justify-between items-center">
                                    <h3 className="font-serif text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                                        {sub.title}
                                    </h3>
                                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
                                </div>
                                <p className="text-sm opacity-60 mt-2 font-sans line-clamp-2">
                                    {sub.content}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
