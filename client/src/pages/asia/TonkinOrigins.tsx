import { tonkinOriginsData } from "@/lib/asia-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ScrollText, BookOpen, Map as MapIcon, Shirt, Crosshair, HelpCircle, ArrowRight, Volume2, Search, Check } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import GlobalMapChronology from "@/components/GlobalMapChronology";

export default function TonkinOriginsPage() {
  const [readingMode, setReadingMode] = useState<'essential' | 'complete' | 'archives'>('complete');
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollYProgress } = useScroll();

  const filteredGlossary = tonkinOriginsData.modules.glossary.filter(item =>  
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#e8dcc5] text-[#4a3b2a] min-h-screen font-sans pb-24">
      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#dcb575] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header / Hero */}
      <header className="relative pt-12 pb-16 px-6 overflow-hidden bg-[#dcb575]/20 border-b border-[#4a3b2a]/10">
        <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
            <Link href="/#tonkin">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10">
                <ArrowLeft className="mr-2 h-4 w-4" /> Revenir aux thèmes
            </Button>
            </Link>
            
            <Link href="/detail/tonkin-1900">
             <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10">
                Continuer la visite <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
            </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 pt-8">
          <div className="flex flex-wrap gap-2 text-xs font-bold tracking-widest uppercase opacity-60">
            {tonkinOriginsData.intro.reperes.map((rep, i) => (
              <span key={i} className="bg-[#4a3b2a]/5 px-2 py-1 rounded border border-[#4a3b2a]/10">{rep}</span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            {tonkinOriginsData.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <Button 
              variant={readingMode === 'essential' ? 'default' : 'outline'}
              className={readingMode === 'essential' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={() => setReadingMode('essential')}
            >
              <Clock className="mr-2 h-4 w-4" /> Essentiel (2 min)
            </Button>
            <Button 
              variant={readingMode === 'complete' ? 'default' : 'outline'}
              className={readingMode === 'complete' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={() => setReadingMode('complete')}
            >
              <ScrollText className="mr-2 h-4 w-4" /> Visite complète (20 min)
            </Button>
            <Button 
              variant={readingMode === 'archives' ? 'default' : 'outline'}
              className={readingMode === 'archives' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={() => setReadingMode('archives')}
            >
              <BookOpen className="mr-2 h-4 w-4" /> Archives
            </Button>
          </div>
          
          <Button variant="ghost" className="text-xs uppercase tracking-widest opacity-60 hover:bg-transparent pl-0 hover:opacity-100 transition-opacity">
            <Volume2 className="mr-2 h-4 w-4" /> Écouter l’ambiance (Jungle / Rivière)
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Timeline - always visible */}
        <div className="py-8 border-b border-[#4a3b2a]/10 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6 text-center">Chronologie des événements</h3>
            <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-none flex justify-start md:justify-center">
                <div className="flex gap-8 min-w-max px-8">
                    {[
                        { year: "1860", title: "Palikao", desc: "Succès décisif" },
                        { year: "1882", title: "Hanoï", desc: "Prise de la citadelle" },
                        { year: "1890", title: "Naissance du 9", desc: "Régiment autonome" },
                        { year: "1893", title: "Siam", desc: "Expédition navale" },
                        { year: "1894", title: "Yen Thé", desc: "Contre Dê Tham" },
                        { year: "1899", title: "Quang Tcheou Wan", desc: "Concession" },
                    ].map((ev, i, arr) => (
                        <div key={i} className="relative flex flex-col items-center gap-3 group cursor-pointer w-32 text-center">
                             <div className="text-xl font-bold font-serif text-[#4a3b2a]">{ev.year}</div>
                             <div className="w-4 h-4 rounded-full bg-[#dcb575] border-2 border-[#4a3b2a] group-hover:scale-125 transition-transform z-10 relative" />
                             {i < arr.length - 1 && (
                                 <div className="absolute top-[46px] left-[50%] w-[calc(100%+32px)] h-0.5 bg-[#4a3b2a]/20" />
                             )}
                             <div>
                                 <div className="font-bold text-sm leading-tight mb-1">{ev.title}</div>
                                 <div className="text-xs opacity-60 leading-tight">{ev.desc}</div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {readingMode === 'essential' ? (
          <div className="space-y-10" data-testid="essential-view">
            <section className="space-y-6">
              <h2 className="font-serif text-2xl font-bold border-b border-[#4a3b2a]/20 pb-3">Pourquoi la France est au Tonkin ?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Contrer l'Angleterre", desc: "Rivalité coloniale en Asie du Sud-Est." },
                  { title: "Porte de la Chine", desc: "Contrôler le Fleuve Rouge vers le Yunnan." },
                  { title: "Prestige après 1870", desc: "Laver la défaite contre les Prussiens." },
                  { title: "Sécuriser l'Indochine", desc: "La France tient le Sud, il faut le Nord." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#fdfbf7] border border-[#4a3b2a]/15 rounded-lg p-4">
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold border-b border-[#4a3b2a]/20 pb-3">Palikao (1860) — Le premier jalon</h2>
              <p className="text-base leading-relaxed">
                Bataille décisive de la Seconde Guerre de l'Opium. Le corps franco-britannique brise 30 000 cavaliers mongols et mandchous, force l'empereur à la fuite et ouvre Pékin. L'inscription "Palikao 1860" figure sur le drapeau du régiment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold border-b border-[#4a3b2a]/20 pb-3">Naissance du 9 (1882–1890)</h2>
              <div className="space-y-3 border-l-2 border-[#dcb575] pl-5">
                <p className="text-sm"><span className="font-bold">1882</span> — Rivière prend Hanoï.</p>
                <p className="text-sm"><span className="font-bold">1884</span> — Division d'Annam, les unités se structurent.</p>
                <p className="text-sm"><span className="font-bold">1888</span> — Régiments de marche. Le Tonkin reçoit le n°2.</p>
                <p className="text-sm"><span className="font-bold">10 mars 1890</span> — Le n°2 devient le <span className="font-bold">9e régiment d'infanterie de marine</span>, autonome à Hanoï.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold border-b border-[#4a3b2a]/20 pb-3">Pacification (1890–1895)</h2>
              <p className="text-base leading-relaxed">
                Le 9 combat des bandes armées au Tonkin : Doc Ngu à Son Tay, Dê Tham au Yen Thé. Gallieni réorganise les forces en 1893. Expédition au Siam. La pacification est une guerre d'endurance : marches, postes, ratissages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold border-b border-[#4a3b2a]/20 pb-3">Quang Tcheou Wan (1898–1899)</h2>
              <p className="text-base leading-relaxed">
                La France occupe ce territoire en Chine du Sud. Le 9 fournit des éléments pour la garnison. Concédé par traité le 15 novembre 1899.
              </p>
            </section>

            <section className="bg-[#4a3b2a] text-[#e8dcc5] p-6 rounded-xl">
              <h3 className="font-bold uppercase text-xs tracking-widest mb-4 text-[#dcb575]">Ce qu'il faut retenir</h3>
              <ul className="space-y-3">
                {[
                  "Le 9 naît au Tonkin le 10 mars 1890, régiment autonome stationné à Hanoï.",
                  "\"Palikao 1860\" : premier fait d'armes inscrit sur le drapeau.",
                  "La pacification forge le régiment : terrain difficile, endurance, adaptation.",
                  "Le 9 agit au-delà du Tonkin : Siam (1893), Quang Tcheou Wan (1898–1899)."
                ].map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-[#dcb575] mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="text-center pt-6">
              <Button 
                size="lg" 
                className="bg-[#4a3b2a] text-[#e8dcc5] hover:bg-[#4a3b2a]/90"
                onClick={() => setReadingMode('complete')}
              >
                <ScrollText className="mr-2 h-4 w-4" /> Lire la version complète
              </Button>
            </section>
          </div>
        ) : (
          <>
            {/* Main Content Sections */}
            <div className="space-y-8">
              <Accordion type="multiple" defaultValue={readingMode === 'complete' ? tonkinOriginsData.sections.map(s => s.id) : ['tonkin']} className="space-y-4">
                {tonkinOriginsData.sections.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border border-[#4a3b2a]/20 rounded-lg bg-[#fdfbf7] px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-xl md:text-2xl font-bold py-6 hover:no-underline">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 text-base leading-relaxed opacity-90 pb-6">
                      {section.content.map((p, idx) => (
                        <p key={idx} className={`${p.startsWith("-") ? "pl-4" : ""} ${p.includes("?") && idx === 0 ? "font-bold text-[#dcb575] uppercase tracking-widest text-xs mb-2" : ""}`}>
                            {p}
                        </p>
                      ))}
                      
                      {section.subsections && section.subsections.map((sub, i) => (
                          <div key={i} className="mt-8 bg-[#4a3b2a]/5 border border-[#4a3b2a]/10 rounded-lg overflow-hidden">
                              <div className="bg-[#4a3b2a] text-[#e8dcc5] px-4 py-2 font-bold font-serif flex items-center gap-2">
                                 <Crosshair className="h-4 w-4" /> {sub.title}
                              </div>
                              <div className="p-4 space-y-4">
                                  {sub.content.split('\n\n').map((paragraph, idx) => (
                                      <div key={idx}>
                                          {idx === 0 ? (
                                               <h4 className="font-bold text-[#4a3b2a] mb-1">{paragraph}</h4>
                                          ) : paragraph.includes(' : ') ? (
                                              <p className="text-sm leading-relaxed opacity-90">
                                                <span className="font-bold text-[#4a3b2a]">{paragraph.split(' : ')[0]} :</span> {paragraph.split(' : ').slice(1).join(' : ')}
                                              </p>
                                          ) : (
                                              <p className="text-sm leading-relaxed opacity-90">{paragraph}</p>
                                          )}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      ))}

                      {section.keyPoints && (
                        <div className="bg-[#4a3b2a]/5 p-4 rounded-md border-l-4 border-[#4a3b2a] mt-6">
                          <h4 className="font-bold uppercase text-xs tracking-widest mb-2 opacity-70">À retenir</h4>
                          <ul className="space-y-2">
                            {section.keyPoints.map((kp, k) => (
                              <li key={k} className="flex gap-2 text-sm font-medium">
                                <span className="text-[#4a3b2a]">•</span> {kp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Module: Carte & Milieu */}
            <section className="bg-[#4a3b2a] text-[#e8dcc5] p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3 opacity-60 uppercase text-xs tracking-widest font-bold">
                        <MapIcon className="h-4 w-4" /> Module Interactif
                    </div>
                    <h2 className="font-serif text-3xl font-bold">{tonkinOriginsData.modules.map.title}</h2>
                    
                    <div className="pt-4">
                        <GlobalMapChronology />
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/images/bg-tonkin.png')] opacity-10 mix-blend-overlay" />
            </section>

            {/* Module: Opérations */}
            <section className="space-y-8">
              <div className="flex items-center gap-2 border-b border-[#4a3b2a]/20 pb-2">
                <Crosshair className="h-5 w-5" />
                <h2 className="font-serif text-2xl font-bold">{tonkinOriginsData.modules.operations.title}</h2>
              </div>
              <p className="text-lg opacity-90">{tonkinOriginsData.modules.operations.intro}</p>

              <div className="space-y-6 border-l-2 border-[#dcb575] pl-6">
                {tonkinOriginsData.modules.operations.subsections.map((sub, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#dcb575]" />
                    <h3 className="font-bold text-lg mb-2">{sub.title}</h3>
                    <p className="opacity-80 text-sm leading-relaxed">{sub.content}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {tonkinOriginsData.modules.operations.stories.map((story, i) => (
                  <div key={i} className="bg-[#4a3b2a] text-[#e8dcc5] p-6 rounded-lg shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 block">Récit du terrain</span>
                    <h3 className="font-serif text-xl font-bold mb-3 text-[#dcb575]">{story.title}</h3>
                    <p className="text-sm opacity-90 italic leading-relaxed">"{story.content}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Module: Projection Quang Tcheou Wan */}
            <section className="space-y-6">
                <div className="flex items-center gap-2 border-b border-[#4a3b2a]/20 pb-2">
                    <MapIcon className="h-5 w-5" />
                    <h2 className="font-serif text-2xl font-bold">{tonkinOriginsData.modules.projection.title}</h2>
                </div>
                <p className="text-lg opacity-90 italic border-l-4 border-[#dcb575] pl-6 py-2">
                    {tonkinOriginsData.modules.projection.context}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase text-xs tracking-widest opacity-70">Chronologie</h3>
                         <ul className="space-y-3 relative border-l border-[#4a3b2a]/20 ml-2">
                            {tonkinOriginsData.modules.projection.reperes.map((rep, i) => (
                              <li key={i} className="pl-6 relative">
                                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#4a3b2a]" />
                                  <p className="text-sm">{rep}</p>
                              </li>
                            ))}
                          </ul>
                    </div>
                    <div className="bg-[#4a3b2a] text-[#e8dcc5] p-6 rounded-lg">
                        <h3 className="font-bold uppercase text-xs tracking-widest opacity-70 mb-4 text-[#dcb575]">À retenir</h3>
                        <ul className="space-y-3">
                             {tonkinOriginsData.modules.projection.keyPoints.map((kp, i) => (
                                 <li key={i} className="flex gap-2 text-sm">
                                     <Check className="h-4 w-4 shrink-0 text-[#dcb575]" />
                                     <span>{kp}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Glossary */}
            <section className="bg-white/50 p-6 rounded-xl border border-[#4a3b2a]/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-bold">Glossaire</h2>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 opacity-50" />
                  <Input 
                    placeholder="Rechercher..." 
                    className="pl-8 bg-white border-[#4a3b2a]/20 h-9 w-48"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredGlossary.map((item, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-bold text-[#dcb575]">{item.term}</span> : <span className="opacity-80">{item.def}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="text-center space-y-8 py-12 border-t-2 border-[#4a3b2a]/10">
              <div className="w-16 h-1 bg-[#4a3b2a] mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-bold uppercase tracking-widest">Ce qu'il faut retenir</h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto italic font-serif">
                "{tonkinOriginsData.conclusion.text}"
              </p>
              
              <div className="pt-8">
                <Button size="lg" className="bg-[#4a3b2a] text-[#e8dcc5] hover:bg-[#4a3b2a]/90 h-14 px-8 text-lg shadow-lg">
                  {tonkinOriginsData.conclusion.nextStep} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </section>
          </>
        )}

      </div>
    </div>
  );
}
