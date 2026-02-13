import { china1900Data } from "@/lib/china-1900-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Scroll, Check, Search,
  Crosshair, Map as MapIcon, Flag, ChevronDown, RotateCcw
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";

type ReadingMode = 'comprendre' | 'recit' | 'archives';

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>;
}

function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [isInView, text, speed]);

  return (
    <div ref={ref}>
      <span>{displayed}</span>
      {!done && isInView && <span className="animate-pulse">|</span>}
    </div>
  );
}

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function QuizCard({ question, answer }: { question: string; answer: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer perspective-1000 h-40"
      onClick={() => setFlipped(!flipped)}
      data-testid={`quiz-card-${question.slice(0, 20)}`}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
        <div className="absolute inset-0 backface-hidden bg-[#4a3b2a] text-[#e8dcc5] rounded-xl p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Question</p>
          <p className="text-sm font-medium leading-relaxed">{question}</p>
          <p className="text-xs opacity-40 mt-auto pt-2">Cliquer pour retourner</p>
        </div>
        <div className="absolute inset-0 backface-hidden bg-[#dcb575] text-[#4a3b2a] rounded-xl p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Réponse</p>
          <p className="text-base font-bold leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function RouteMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { name: "Hanoï", sub: "24–25 juin", x: 10, y: 75 },
    { name: "Ta Kou", sub: "7 juillet", x: 35, y: 45 },
    { name: "Tien Tsin", sub: "11–14 juillet", x: 55, y: 35 },
    { name: "Pei Tsang", sub: "5 août", x: 70, y: 28 },
    { name: "Pékin", sub: "14–17 août", x: 88, y: 20 },
  ];

  return (
    <div ref={ref} className="relative bg-[#3a2e1f] rounded-xl p-6 overflow-hidden" style={{ minHeight: 220 }}>
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22/%3E%3C/svg%3E')]" />
      <svg viewBox="0 0 100 100" className="w-full h-40 md:h-52 relative z-10">
        {steps.map((step, i) => {
          if (i === steps.length - 1) return null;
          const next = steps[i + 1];
          return (
            <motion.line
              key={i}
              x1={step.x} y1={step.y}
              x2={next.x} y2={next.y}
              stroke="#dcb575"
              strokeWidth="0.6"
              strokeDasharray="2,1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.4 + 0.3 }}
            />
          );
        })}
        {steps.map((step, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.4 + 0.1 }}
          >
            <circle cx={step.x} cy={step.y} r="2.5" fill="#dcb575" stroke="#e8dcc5" strokeWidth="0.5" />
            <text x={step.x} y={step.y - 5} textAnchor="middle" fill="#e8dcc5" fontSize="3.2" fontWeight="bold">{step.name}</text>
            <text x={step.x} y={step.y + 6} textAnchor="middle" fill="#dcb575" fontSize="2.2" opacity="0.7">{step.sub}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export default function ChinaExpedition1900Page() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollYProgress } = useScroll();
  const [activeRepere, setActiveRepere] = useState<number | null>(null);

  const filteredGlossary = china1900Data.glossary.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleBlocs = china1900Data.blocs.filter(b => {
    if (readingMode === 'comprendre') return b.mode === 'comprendre';
    if (readingMode === 'recit') return b.mode === 'comprendre' || b.mode === 'recit';
    return true;
  });

  const showRecit = readingMode === 'recit' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  return (
    <div className="bg-[#e8dcc5] text-[#4a3b2a] min-h-screen font-sans pb-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#dcb575] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative pt-12 pb-20 px-6 overflow-hidden bg-[#dcb575]/20 border-b border-[#4a3b2a]/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a3b2a]/5 to-transparent" />

        <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
          <Link href="/#tonkin">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10" data-testid="link-back-themes">
              <ArrowLeft className="mr-2 h-4 w-4" /> Revenir aux thèmes
            </Button>
          </Link>
          <Link href="/asie/naissance-du-9-tonkin">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10" data-testid="link-back-tonkin">
              <RotateCcw className="mr-2 h-4 w-4" /> Retour ASIE
            </Button>
          </Link>
          <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10" data-testid="link-continue" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Continuer la visite <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6 pt-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight" data-testid="text-page-title">
            {china1900Data.title}
          </h1>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed max-w-3xl">
            {china1900Data.subtitle}
          </p>
          <p className="text-base italic opacity-75 border-l-4 border-[#dcb575] pl-4 py-1 max-w-2xl">
            {china1900Data.question}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'comprendre' as ReadingMode, label: 'Comprendre (5 min)', icon: Clock },
              { mode: 'recit' as ReadingMode, label: 'Récit (10–15 min)', icon: Scroll },
              { mode: 'archives' as ReadingMode, label: 'Archives (approfondir)', icon: BookOpen },
            ]).map(({ mode, label, icon: Icon }) => (
              <Button
                key={mode}
                variant={readingMode === mode ? 'default' : 'outline'}
                className={readingMode === mode
                  ? "bg-[#4a3b2a] text-[#e8dcc5]"
                  : "border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10"}
                onClick={() => setReadingMode(mode)}
                data-testid={`button-mode-${mode}`}
              >
                <Icon className="mr-2 h-4 w-4" /> {label}
              </Button>
            ))}
          </div>
        </motion.div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        <FadeInSection>
          <div className="py-6 border-b border-[#4a3b2a]/10">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6 text-center">Repères</h3>
            <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-none flex justify-start md:justify-center">
              <div className="flex gap-6 min-w-max px-4">
                {china1900Data.reperes.map((rep, i, arr) => (
                  <div
                    key={i}
                    className={`relative flex flex-col items-center gap-2 group cursor-pointer w-28 text-center transition-all duration-300 ${activeRepere === i ? 'scale-110' : ''}`}
                    onClick={() => setActiveRepere(activeRepere === i ? null : i)}
                    data-testid={`repere-${i}`}
                  >
                    <motion.div
                      className="text-base font-bold font-serif text-[#4a3b2a]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {rep.date}
                    </motion.div>
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-[#dcb575] border-2 border-[#4a3b2a] group-hover:scale-125 transition-transform z-10 relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.05, type: "spring" }}
                    />
                    {i < arr.length - 1 && (
                      <div className="absolute top-[38px] left-[50%] w-[calc(100%+24px)] h-0.5 bg-[#4a3b2a]/20" />
                    )}
                    <div className="text-xs opacity-70 leading-tight font-medium">{rep.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {visibleBlocs.map((bloc, blocIdx) => (
          <FadeInSection key={bloc.id} delay={blocIdx * 0.1}>
            <section className="space-y-6" data-testid={`bloc-${bloc.id}`}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold border-b-2 border-[#dcb575] pb-4">
                {bloc.title}
              </h2>

              <div className="space-y-5">
                {bloc.content.map((p, idx) => {
                  if (p.startsWith("SECTION:")) {
                    return (
                      <motion.h3
                        key={idx}
                        className="font-serif text-xl font-bold text-[#4a3b2a] pt-6 pb-2 border-l-4 border-[#dcb575] pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {p.replace("SECTION:", "")}
                      </motion.h3>
                    );
                  }

                  if (p.startsWith('"') || p.startsWith('"') || p.startsWith('\"')) {
                    return (
                      <div key={idx} className="bg-[#4a3b2a] text-[#e8dcc5] p-6 rounded-xl italic font-serif text-base leading-relaxed shadow-lg">
                        <TypewriterText text={p} speed={20} />
                      </div>
                    );
                  }

                  const numberMatch = p.match(/(\d[\d\s]*\d{3}|\d+\s*000)\s*(hommes|Mandchous|Mongols|tués|blessés|mètres)/);
                  if (numberMatch) {
                    return <p key={idx} className="text-base leading-relaxed opacity-90">{p}</p>;
                  }

                  if (p.startsWith("—")) {
                    return (
                      <p key={idx} className="text-lg font-bold font-serif pl-4">{p}</p>
                    );
                  }

                  return <p key={idx} className="text-base leading-relaxed opacity-90">{p}</p>;
                })}
              </div>

              {bloc.keyPoints.length > 0 && (
                <motion.div
                  className="bg-[#4a3b2a] text-[#e8dcc5] p-5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-[#dcb575]">À retenir</h4>
                  <ul className="space-y-2">
                    {bloc.keyPoints.map((kp, k) => (
                      <motion.li
                        key={k}
                        className="flex gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: k * 0.15 + 0.3 }}
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#dcb575] mt-0.5" /> {kp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </section>
          </FadeInSection>
        ))}

        {showRecit && (
          <FadeInSection>
            <section className="space-y-6">
              <div className="flex items-center gap-2 border-b-2 border-[#dcb575] pb-3">
                <MapIcon className="h-5 w-5" />
                <h2 className="font-serif text-2xl font-bold">Itinéraire : Hanoï → Pékin</h2>
              </div>
              <RouteMap />
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-heritage-drapeau">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 text-center space-y-6">
              <Flag className="h-8 w-8 mx-auto text-[#dcb575]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest">Héritage au drapeau</h2>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575] mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed max-w-2xl mx-auto opacity-90">
                {china1900Data.heritage.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                {china1900Data.heritage.inscriptions.map((ins, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#dcb575]/20 border-2 border-[#dcb575] rounded-lg px-8 py-4 font-serif text-xl font-bold text-[#dcb575] shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + 0.4, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {ins}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {showArchives && (
          <>
            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-ordre">
                <h2 className="font-serif text-2xl font-bold border-b-2 border-[#dcb575] pb-3">Ordre du chef</h2>
                <p className="text-base opacity-80">{china1900Data.ordre.intro}</p>
                <div className="bg-[#fdfbf7] border border-[#4a3b2a]/15 rounded-xl p-6 md:p-8 space-y-4 shadow-inner">
                  <div className="font-serif text-sm md:text-base leading-relaxed italic space-y-4">
                    {china1900Data.ordre.text.split('\n\n').map((para, i) => (
                      <p key={i}>"{para}"</p>
                    ))}
                  </div>
                  <div className="text-right text-sm opacity-70 pt-4 border-t border-[#4a3b2a]/10 whitespace-pre-line">
                    {china1900Data.ordre.signature}
                  </div>
                </div>
                <p className="text-xs opacity-50 italic pl-4 border-l-2 border-[#4a3b2a]/10">
                  {china1900Data.ordre.note}
                </p>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section data-testid="bloc-gallery">
                <Accordion type="single" collapsible>
                  <AccordionItem value="cartes" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-xl md:text-2xl font-bold py-5 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <MapIcon className="h-5 w-5" /> Cartes & plans
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid sm:grid-cols-2 gap-4 pb-4">
                        {china1900Data.gallery.map((item, i) => (
                          <div key={i} className="bg-white/50 border border-[#4a3b2a]/10 rounded-lg overflow-hidden">
                            <div className="bg-[#4a3b2a]/10 h-32 flex items-center justify-center">
                              <MapIcon className="h-10 w-10 opacity-20" />
                            </div>
                            <p className="text-xs p-3 opacity-70 italic">{item.caption}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="bg-white/50 p-6 rounded-xl border border-[#4a3b2a]/10" data-testid="bloc-glossaire">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-bold">Glossaire</h2>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 opacity-50" />
                    <Input
                      placeholder="Rechercher..."
                      className="pl-8 bg-white border-[#4a3b2a]/20 h-9 w-48"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      data-testid="input-glossary-search"
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
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-[#dcb575] pb-3">
                  <Crosshair className="h-5 w-5" />
                  <h2 className="font-serif text-2xl font-bold">Chiffres clés</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: 1500, label: "hommes du corps français" },
                    { value: 57000, label: "soldats chinois réorganisés" },
                    { value: 300, label: "Chinois tombés à Tien Tsin" },
                    { value: 2, label: "inscriptions au drapeau" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#4a3b2a] text-[#e8dcc5] rounded-xl p-4 text-center">
                      <div className="font-serif text-2xl md:text-3xl font-bold text-[#dcb575]">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <p className="text-xs mt-1 opacity-70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInSection>
          </>
        )}

        {showRecit && (
          <FadeInSection>
            <section className="space-y-6" data-testid="bloc-quiz">
              <h2 className="font-serif text-2xl font-bold border-b-2 border-[#dcb575] pb-3">Mini-quiz</h2>
              <p className="text-sm opacity-60">Cliquez sur une carte pour voir la réponse.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {china1900Data.quiz.map((q, i) => (
                  <QuizCard key={i} question={q.question} answer={q.answer} />
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="text-center space-y-8 py-12 border-t-2 border-[#4a3b2a]/10">
            <motion.div
              className="w-16 h-1 bg-[#4a3b2a] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-widest">Ce qu'il faut retenir</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto italic font-serif">
              "{china1900Data.conclusion}"
            </p>

            <div className="pt-8">
              <Button size="lg" className="bg-[#4a3b2a] text-[#e8dcc5] hover:bg-[#4a3b2a]/90 h-14 px-8 text-lg shadow-lg" data-testid="button-next-page">
                {china1900Data.nextStep} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </FadeInSection>

      </div>
    </div>
  );
}
