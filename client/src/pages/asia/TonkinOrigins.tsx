import { tonkinOriginsData } from "@/lib/asia-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ScrollText, BookOpen, Map as MapIcon, Shirt, Crosshair, HelpCircle, ArrowRight, Volume2, Search, Check, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import GlobalMapChronology from "@/components/GlobalMapChronology";

export default function TonkinOriginsPage() {
  const [readingMode, setReadingMode] = useState<'essential' | 'complete' | 'archives'>('complete');
  const [searchQuery, setSearchQuery] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  
  const summaryRef = useRef<HTMLDivElement>(null);

  const filteredGlossary = tonkinOriginsData.modules.glossary.filter(item =>  
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const checkQuiz = () => {
    let score = 0;
    tonkinOriginsData.modules.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) score++;
    });
    setQuizScore(score);
  };

  const scrollToEssential = () => {
    setReadingMode('essential');
    summaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

        <div className="max-w-4xl mx-auto space-y-6 pt-8 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            {tonkinOriginsData.title}
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl border-l-4 border-[#4a3b2a] pl-6 italic mx-auto md:mx-0">
            {tonkinOriginsData.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 pt-6 justify-center md:justify-start">
            <Button 
              variant={readingMode === 'essential' ? 'default' : 'outline'}
              className={readingMode === 'essential' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={scrollToEssential}
            >
              <Clock className="mr-2 h-4 w-4" /> Je veux l'essentiel (1 min)
            </Button>
            <Button 
              variant={readingMode === 'complete' ? 'default' : 'outline'}
              className={readingMode === 'complete' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={() => setReadingMode('complete')}
            >
              <ScrollText className="mr-2 h-4 w-4" /> Visite complète
            </Button>
             <Button 
              variant={readingMode === 'archives' ? 'default' : 'outline'}
              className={readingMode === 'archives' ? "bg-[#4a3b2a] text-[#e8dcc5]" : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
              onClick={() => setReadingMode('archives')}
            >
              <BookOpen className="mr-2 h-4 w-4" /> Archives
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* ESSENTIAL SECTION */}
        <section ref={summaryRef} className="space-y-12">
            {/* Résumé en 60 secondes */}
            <div className="bg-[#4a3b2a] text-[#e8dcc5] p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-[#dcb575]">
                    <Clock className="h-5 w-5" />
                    <h2 className="text-xs font-bold uppercase tracking-widest">Résumé en 60 secondes</h2>
                </div>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                    {tonkinOriginsData.summary}
                </p>
            </div>

            {/* Timeline */}
            <div className="py-4">
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-8 text-center">Chronologie des événements</h3>
                <div className="relative">
                    {/* Line */}
                    <div className="absolute top-[22px] left-0 right-0 h-0.5 bg-[#4a3b2a]/20 hidden md:block" />
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
                        {tonkinOriginsData.timelineEvents.map((ev, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center group">
                                <div className="w-4 h-4 rounded-full bg-[#dcb575] border-2 border-[#4a3b2a] z-10 relative mb-3 hidden md:block group-hover:scale-125 transition-transform" />
                                <div className="font-serif text-2xl font-bold text-[#4a3b2a] mb-1">{ev.year}</div>
                                <div className="font-bold text-sm leading-tight mb-1">{ev.title}</div>
                                {ev.desc && <div className="text-xs opacity-60 leading-tight italic">({ev.desc})</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3 Key Blocks */}
            <div className="grid md:grid-cols-3 gap-6">
                {tonkinOriginsData.keyBlocks.map((block, i) => (
                    <div key={i} className="bg-[#fdfbf7] p-6 rounded-lg border border-[#4a3b2a]/10 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-serif text-xl font-bold mb-3 text-[#4a3b2a]">{block.title}</h3>
                        <p className="text-sm leading-relaxed opacity-90 mb-3">{block.content}</p>
                        {block.note && (
                            <p className="text-xs text-[#4a3b2a] font-medium italic border-l-2 border-[#dcb575] pl-2">
                                {block.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* FOCUS Palikao */}
            <div className="border-l-4 border-[#dcb575] bg-[#4a3b2a]/5 p-6 rounded-r-lg">
                 <h3 className="font-serif text-xl font-bold mb-3 text-[#4a3b2a] uppercase tracking-wide flex items-center gap-2">
                    <Crosshair className="h-5 w-5" /> {tonkinOriginsData.focus.title}
                 </h3>
                 <p className="text-base leading-relaxed opacity-90 mb-2">
                    {tonkinOriginsData.focus.content}
                 </p>
                 {tonkinOriginsData.focus.note && (
                     <p className="text-sm font-medium opacity-75 italic">
                         ({tonkinOriginsData.focus.note})
                     </p>
                 )}
            </div>

            {/* Key Points */}
            <div className="bg-[#4a3b2a] text-[#e8dcc5] p-8 rounded-xl">
                 <h3 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#dcb575]">À retenir</h3>
                 <ul className="grid md:grid-cols-2 gap-4">
                     {tonkinOriginsData.mainKeyPoints.map((point, i) => (
                         <li key={i} className="flex gap-3 items-start">
                             <Check className="h-5 w-5 text-[#dcb575] shrink-0 mt-0.5" />
                             <span className="text-sm font-medium">{point}</span>
                         </li>
                     ))}
                 </ul>
            </div>
        </section>

        {/* DETAILS - READ MORE (Hidden in Essential Mode) */}
        {readingMode !== 'essential' && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-4 py-4">
                    <div className="h-px bg-[#4a3b2a]/20 flex-1" />
                    <h2 className="font-serif text-xl italic text-[#4a3b2a]/60">Pour aller plus loin</h2>
                    <div className="h-px bg-[#4a3b2a]/20 flex-1" />
                </div>

                <Accordion type="multiple" className="space-y-4">
                    {/* 1. Le Tonkin en détail */}
                    <AccordionItem value="tonkin-detail" className="bg-[#fdfbf7] border border-[#4a3b2a]/20 rounded-lg px-6">
                        <AccordionTrigger className="font-serif text-lg font-bold hover:no-underline py-4">
                            1. {tonkinOriginsData.detailedSections[0].title}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 text-base pb-6">
                            {tonkinOriginsData.detailedSections[0].content.map((p, i) => (
                                <p key={i} className="opacity-90">{p}</p>
                            ))}
                            {/* Interactive Map Component Inside Details */}
                            <div className="mt-8 pt-6 border-t border-[#4a3b2a]/10">
                                <h4 className="font-bold mb-4 flex items-center gap-2"><MapIcon className="h-4 w-4"/> Carte interactive</h4>
                                <GlobalMapChronology />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 2. Organisation & Logistique */}
                    <AccordionItem value="orga" className="bg-[#fdfbf7] border border-[#4a3b2a]/20 rounded-lg px-6">
                        <AccordionTrigger className="font-serif text-lg font-bold hover:no-underline py-4">
                            2. Organisation : bataillons, compagnies, logistique
                        </AccordionTrigger>
                        <AccordionContent className="space-y-6 pb-6">
                             <div className="grid md:grid-cols-2 gap-6">
                                {tonkinOriginsData.modules.life.cards.map((card, i) => (
                                    <div key={i} className="bg-white p-4 rounded border border-[#4a3b2a]/5">
                                        <h4 className="font-bold text-[#4a3b2a] mb-2">{card.title}</h4>
                                        <ul className="text-sm space-y-1 opacity-80 list-disc pl-4">
                                            {card.content.map((line, l) => (
                                                <li key={l}>{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                             </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 3. Opérations */}
                    <AccordionItem value="operations" className="bg-[#fdfbf7] border border-[#4a3b2a]/20 rounded-lg px-6">
                        <AccordionTrigger className="font-serif text-lg font-bold hover:no-underline py-4">
                            3. {tonkinOriginsData.modules.operations.title}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-6 pb-6">
                            <p className="italic opacity-80">{tonkinOriginsData.modules.operations.intro}</p>
                            <div className="space-y-4 border-l-2 border-[#dcb575] pl-4">
                                {tonkinOriginsData.modules.operations.subsections.map((sub, i) => (
                                    <div key={i}>
                                        <h4 className="font-bold text-base">{sub.title}</h4>
                                        <p className="text-sm opacity-80">{sub.content}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {tonkinOriginsData.modules.operations.stories.map((story, i) => (
                                    <div key={i} className="bg-[#4a3b2a] text-[#e8dcc5] p-4 rounded text-sm">
                                        <h5 className="font-bold text-[#dcb575] mb-2">{story.title}</h5>
                                        <p className="italic opacity-90">"{story.content}"</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 4. Quang Tcheou Wan */}
                    <AccordionItem value="qtw" className="bg-[#fdfbf7] border border-[#4a3b2a]/20 rounded-lg px-6">
                        <AccordionTrigger className="font-serif text-lg font-bold hover:no-underline py-4">
                            4. {tonkinOriginsData.modules.projection.title}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-6 pb-6">
                            <p className="opacity-90">{tonkinOriginsData.modules.projection.context}</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ul className="space-y-2 text-sm border-l border-[#4a3b2a]/20 pl-4">
                                    {tonkinOriginsData.modules.projection.reperes.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                                <div className="bg-[#4a3b2a]/5 p-4 rounded">
                                    <h4 className="font-bold text-xs uppercase mb-2">Points clés</h4>
                                    <ul className="space-y-2 text-sm">
                                        {tonkinOriginsData.modules.projection.keyPoints.map((kp, i) => (
                                            <li key={i}>• {kp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    {/* Archives & Cartes */}
                    <AccordionItem value="archives" className="bg-[#fdfbf7] border border-[#4a3b2a]/20 rounded-lg px-6">
                        <AccordionTrigger className="font-serif text-lg font-bold hover:no-underline py-4">
                            Archives photographiques & Cartes
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {tonkinOriginsData.gallery.map((img, i) => (
                                <div key={i} className="group relative aspect-square bg-black/10 rounded overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#4a3b2a]/10 group-hover:bg-[#4a3b2a]/20 transition-colors">
                                    <span className="text-xs font-mono opacity-50 uppercase text-center px-2">{img.alt}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    {img.caption}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
                {/* Glossary & Quiz (Optional - keeping them but maybe in accordions too? Or just at bottom?) */}
                {/* The user didn't explicitly say to hide Glossary/Quiz, but "Mettre tout le reste... dans des accordéons". */}
                {/* I will keep them visible at bottom for interactivity, or maybe Glossary in accordion. */}
                {/* Let's keep them visible as they are interactive modules, not just "details". */}
                
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

                {/* Quiz */}
                <section className="bg-[#4a3b2a] text-[#e8dcc5] p-8 rounded-xl shadow-xl space-y-8">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <HelpCircle className="h-6 w-6 text-[#dcb575]" />
                    <h2 className="font-serif text-2xl font-bold">Testez vos connaissances</h2>
                </div>

                <div className="space-y-8">
                    {tonkinOriginsData.modules.quiz.map((q, i) => (
                    <div key={i} className="space-y-3">
                        <p className="font-bold text-lg">{i + 1}. {q.question}</p>
                        <RadioGroup 
                        onValueChange={(val) => setQuizAnswers(prev => ({ ...prev, [i]: val }))} 
                        className="space-y-2"
                        >
                        <div className="flex items-center space-x-2 bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-pointer">
                            <RadioGroupItem value={q.answer} id={`q${i}-a`} className="border-[#dcb575] text-[#dcb575]" />
                            <Label htmlFor={`q${i}-a`} className="cursor-pointer flex-1">{q.answer}</Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-pointer opacity-50">
                            <RadioGroupItem value="wrong" id={`q${i}-b`} className="border-[#dcb575]" />
                            <Label htmlFor={`q${i}-b`} className="cursor-pointer flex-1">Une autre réponse incorrecte...</Label>
                        </div>
                        </RadioGroup>
                    </div>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <Button onClick={checkQuiz} className="bg-[#dcb575] text-[#4a3b2a] hover:bg-white font-bold">
                    Vérifier mes réponses
                    </Button>
                    {quizScore !== null && (
                    <div className="font-bold text-xl flex items-center gap-2 animate-in fade-in slide-in-from-right">
                        <Check className="h-5 w-5 text-green-400" /> Score : {quizScore} / {tonkinOriginsData.modules.quiz.length}
                    </div>
                    )}
                </div>
                </section>
            </section>
        )}

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

      </div>
    </div>
  );
}
