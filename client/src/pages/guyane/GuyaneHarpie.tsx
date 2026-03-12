import { usePageNav } from "@/hooks/usePageNav";
import PageNavHeader from "@/components/PageNavHeader";
import PageNavFooter from "@/components/PageNavFooter";
import { guyaneHarpieData } from "@/lib/guyane-harpie-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, AlertTriangle, Crosshair, Search, TrendingUp,
  ChevronDown, FileText, HelpCircle, BookMarked,
  Eye, Lightbulb, Layers
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence, useMotionValueEvent } from "framer-motion";

type ReadingMode = 'comprendre' | 'recit' | 'archives';

const ACCENT = "#8b5e1a";
const ACCENT_DARK = "#5c3a0d";
const ACCENT_LIGHT = "#c49030";
const KRAFT = "#d4c5a0";

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionNumber({ num }: { num: number }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#8b5e1a]/30 bg-[#8b5e1a]/5 shrink-0">
      <span className="text-sm font-bold text-[#8b5e1a]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        {String(num).padStart(2, '0')}
      </span>
    </div>
  );
}

const blocIcons = [AlertTriangle, Crosshair, Search, TrendingUp];
const blocLabels = ["FLÉAU", "DISPOSITIF", "9e RIMa", "RÉSULTATS"];

export default function GuyaneHarpiePage() {
  const nav = usePageNav()!;
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
  const [quizRevealed, setQuizRevealed] = useState<Record<number, boolean>>({});
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const showRecit = readingMode === 'recit' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.02);
  });

  useEffect(() => {
    let score = 0;
    Object.keys(quizRevealed).forEach(k => {
      const i = Number(k);
      if (quizRevealed[i] && quizAnswers[i] === guyaneHarpieData.quiz[i].correctIndex) score++;
    });
    setQuizScore(score);
  }, [quizRevealed, quizAnswers]);

  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'IBM Plex Mono', monospace", backgroundColor: KRAFT }}>
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23000%22/%3E%3C/svg%3E')]" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
        style={{ scaleX, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
      />

      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[3px] left-0 right-0 z-40 backdrop-blur-xl bg-[#d4c5a0]/90 border-b border-[#4a3b2a]/10 shadow-sm"
          >
            <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={nav.prevLink}>
                  <button className="text-[#4a3b2a]/60 hover:text-[#4a3b2a] transition-colors text-[10px] uppercase tracking-widest flex items-center gap-1" data-testid="sticky-link-back">
                    <ArrowLeft className="h-3 w-3" /> {nav.prevLabel}
                  </button>
                </Link>
                <span className="text-[#4a3b2a]/20 mx-1">/</span>
                <span className="text-[10px] uppercase tracking-widest text-[#8b5e1a] font-bold">Harpie</span>
              </div>
              <div className="flex items-center gap-1">
                {(['comprendre', 'recit', 'archives'] as ReadingMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setReadingMode(m)}
                    className={`px-3 py-1 text-[9px] uppercase tracking-wider rounded-full transition-all ${
                      readingMode === m
                        ? 'bg-[#8b5e1a] text-white'
                        : 'text-[#4a3b2a]/50 hover:text-[#4a3b2a] hover:bg-[#4a3b2a]/5'
                    }`}
                    data-testid={`sticky-mode-${m}`}
                  >
                    {m === 'comprendre' ? '5 min' : m === 'recit' ? 'Récit' : 'Archives'}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <header className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, #1a0e04 0%, #2a1808 30%, #3d2510 55%, #5c3a18 70%, ${KRAFT} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L25 15 L35 15 L27 22 L30 32 L20 26 L10 32 L13 22 L5 15 L15 15 Z' stroke='%23c49030' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")` }} />

        <div className="absolute top-10 right-10 w-[200px] h-[200px] opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="none" stroke="#c49030" strokeWidth="0.8">
            <path d="M60 160 L80 100 L100 140 L120 80 L140 120 L160 60" />
            <circle cx="100" cy="60" r="25" />
            <line x1="100" y1="85" x2="100" y2="160" />
            <line x1="60" y1="160" x2="160" y2="160" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-24 md:pb-32">
          <PageNavHeader {...nav} />

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#c49030]/40" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#c49030]/60">
                2000 — Aujourd'hui
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#f0e8d8]"
              style={{ fontFamily: "'Special Elite', cursive" }}
              data-testid="text-page-title"
            >
              Harpie
            </h1>

            <p className="text-sm md:text-base text-[#d4c0a0]/60 leading-relaxed max-w-2xl">
              {guyaneHarpieData.subtitle}
            </p>

            <motion.div
              className="relative pl-5 border-l-2 border-[#c49030]/30 max-w-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <AlertTriangle className="absolute -left-[13px] top-0 h-5 w-5 text-[#c49030] bg-[#2a1808] p-0.5 rounded-full" />
              <p className="text-xs italic text-[#d4c0a0]/50 leading-relaxed pt-1">
                {guyaneHarpieData.questionDirectrice}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 pt-4">
              {([
                { mode: 'comprendre' as ReadingMode, label: 'Comprendre', sub: '5 min', icon: Eye },
                { mode: 'recit' as ReadingMode, label: 'Récit complet', sub: '10–15 min', icon: BookOpen },
                { mode: 'archives' as ReadingMode, label: 'Archives', sub: 'Quiz', icon: FileText },
              ]).map(({ mode, label, sub, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setReadingMode(mode)}
                  className={`group relative px-5 py-3 rounded-lg transition-all duration-300 ${
                    readingMode === mode
                      ? 'bg-[#8b5e1a] shadow-lg shadow-[#8b5e1a]/20'
                      : 'bg-[#d4c0a0]/5 hover:bg-[#d4c0a0]/10 border border-[#d4c0a0]/10'
                  }`}
                  data-testid={`button-mode-${mode}`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-3.5 w-3.5 ${readingMode === mode ? 'text-white' : 'text-[#c49030]/60'}`} />
                    <span className={`text-xs font-medium ${readingMode === mode ? 'text-white' : 'text-[#d4c0a0]/70'}`}>
                      {label}
                    </span>
                  </div>
                  <span className={`text-[9px] mt-0.5 block ${readingMode === mode ? 'text-white/50' : 'text-[#d4c0a0]/30'}`}>
                    {sub}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to bottom, transparent, ${KRAFT})` }} />
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20 relative z-10">

        <FadeInSection>
          <section className="relative" data-testid="bloc-reperes">
            <div className="flex items-start gap-4 p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#8b5e1a]/8 to-[#8b5e1a]/3 border border-[#8b5e1a]/15">
              <div className="w-10 h-10 rounded-lg bg-[#8b5e1a]/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-[#8b5e1a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8b5e1a]">
                  Repères
                </h3>
                <p className="text-xs leading-relaxed text-[#4a3b2a]/75">
                  {guyaneHarpieData.reperes}
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="relative" data-testid="bloc-resume">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e04] to-[#3d2510]" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23c49030'/%3E%3C/svg%3E")` }} />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c49030] via-[#c49030]/50 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c49030]/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-[#c49030]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0e8d8]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      Résumé
                    </h2>
                    <span className="text-[9px] text-[#c49030]/50 uppercase tracking-widest">60 secondes de lecture</span>
                  </div>
                </div>
                <motion.div
                  className="w-16 h-[2px] rounded-full"
                  style={{ background: `linear-gradient(90deg, #c49030, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <p className="text-sm leading-[1.9] text-[#f0e8d8]/80">
                  {guyaneHarpieData.resume}
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-8" data-testid="bloc-timeline">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#8b5e1a]/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-[#8b5e1a]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                  Chronologie
                </h2>
                <div className="w-12 h-[2px] bg-[#8b5e1a]/20 mt-1 rounded-full" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#8b5e1a]/40 via-[#8b5e1a]/20 to-transparent" />
              <div className="space-y-3">
                {guyaneHarpieData.timeline.map((event, i) => (
                  <motion.div
                    key={i}
                    className="relative flex items-start gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    data-testid={`timeline-event-${i}`}
                  >
                    <div className="relative z-10 mt-4">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#8b5e1a] ring-4 ring-[#d4c5a0] group-hover:ring-[#8b5e1a]/20 transition-all duration-300" />
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-white/40 border border-[#4a3b2a]/8 group-hover:bg-white/60 group-hover:border-[#8b5e1a]/15 group-hover:shadow-md transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#8b5e1a] uppercase tracking-wider block mb-1">
                        {event.date}
                      </span>
                      <p className="text-xs text-[#4a3b2a]/75 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {guyaneHarpieData.blocs.map((bloc, i) => {
          const BlocIcon = blocIcons[i] || Shield;
          const isHighlighted = i === 2;
          return (
            <FadeInSection key={i}>
              <section className="space-y-6" data-testid={`bloc-content-${i}`}>
                <div className="flex items-center gap-4">
                  <SectionNumber num={i + 1} />
                  <div className="flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8b5e1a]/50 block mb-1">
                      {blocLabels[i]}
                    </span>
                    <h2 className="text-lg md:text-xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      {bloc.titre}
                    </h2>
                  </div>
                  <BlocIcon className="h-5 w-5 text-[#8b5e1a]/30" />
                </div>

                {isHighlighted ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8b5e1a] to-[#5c3a0d]" />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23fff' stroke-width='0.2' fill='none'/%3E%3C/svg%3E")` }} />
                    <div className="absolute top-4 right-4">
                      <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {blocLabels[i]}
                      </span>
                    </div>
                    <div className="relative z-10 p-8 md:p-10 space-y-6">
                      <p className="text-sm leading-[1.9] text-white/85 pt-2">
                        {bloc.texte}
                      </p>
                      <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="h-3.5 w-3.5 text-[#c49030]" />
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c49030]">
                            À retenir
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {bloc.aRetenir.map((item, j) => (
                            <li key={j} className="flex gap-3 text-xs text-white/70 leading-relaxed">
                              <Check className="h-3.5 w-3.5 shrink-0 text-[#c49030] mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 pl-14">
                    <p className="text-sm leading-[1.9] text-[#4a3b2a]/80">
                      {bloc.texte}
                    </p>
                    <div className="relative p-5 rounded-lg bg-gradient-to-r from-[#c49030]/10 to-transparent border-l-[3px] border-[#8b5e1a]/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="h-3.5 w-3.5 text-[#8b5e1a]" />
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8b5e1a]">
                          À retenir
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {bloc.aRetenir.map((item, j) => (
                          <li key={j} className="flex gap-3 text-xs text-[#4a3b2a]/70 leading-relaxed">
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#8b5e1a]/60 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            </FadeInSection>
          );
        })}

        {showRecit && (
          <FadeInSection>
            <section data-testid="bloc-glossaire">
              <motion.div
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setGlossaryOpen(!glossaryOpen)}
                whileTap={{ scale: 0.995 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e04] to-[#3d2510] rounded-xl" />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#c49030]/10 flex items-center justify-center">
                        <BookMarked className="h-4 w-4 text-[#c49030]" />
                      </div>
                      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0e8d8]" style={{ fontFamily: "'Special Elite', cursive" }}>
                        Glossaire
                      </h2>
                      <span className="text-[9px] text-[#c49030]/40 bg-[#c49030]/5 px-2 py-0.5 rounded-full">
                        {guyaneHarpieData.glossaire.length} termes
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: glossaryOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4 text-[#c49030]/40 group-hover:text-[#c49030] transition-colors" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {glossaryOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 mt-6 border-t border-[#c49030]/10">
                          {guyaneHarpieData.glossaire.map((entry, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-lg bg-[#f0e8d8]/5 border border-[#f0e8d8]/5 hover:border-[#c49030]/20 transition-colors"
                              data-testid={`glossaire-${i}`}
                            >
                              <span className="text-xs font-bold text-[#c49030] block mb-1">
                                {entry.terme}
                              </span>
                              <span className="text-[11px] text-[#f0e8d8]/60 leading-relaxed">
                                {entry.definition}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </section>
          </FadeInSection>
        )}

        {showArchives && (
          <FadeInSection>
            <section className="space-y-8" data-testid="bloc-quiz">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8b5e1a]/10 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-[#8b5e1a]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      Mini‑Quiz
                    </h2>
                    <div className="w-12 h-[2px] bg-[#8b5e1a]/20 mt-1 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#8b5e1a]/5 px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-bold text-[#8b5e1a]">
                    {quizScore}/{guyaneHarpieData.quiz.length}
                  </span>
                  <div className="flex gap-0.5">
                    {guyaneHarpieData.quiz.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          quizRevealed[i]
                            ? quizAnswers[i] === guyaneHarpieData.quiz[i].correctIndex
                              ? 'bg-[#8b5e1a]'
                              : 'bg-red-400'
                            : 'bg-[#4a3b2a]/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {guyaneHarpieData.quiz.map((q, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-xl border border-[#4a3b2a]/10 bg-white/40 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    data-testid={`quiz-question-${i}`}
                  >
                    {quizRevealed[i] && (
                      <div className={`absolute top-0 left-0 w-1 h-full ${
                        quizAnswers[i] === q.correctIndex ? 'bg-[#8b5e1a]' : 'bg-red-400'
                      }`} />
                    )}
                    <div className="p-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs flex items-center justify-center font-bold transition-colors ${
                          quizRevealed[i]
                            ? quizAnswers[i] === q.correctIndex
                              ? 'bg-[#8b5e1a] text-white'
                              : 'bg-red-400 text-white'
                            : 'bg-[#8b5e1a]/10 text-[#8b5e1a]'
                        }`}>
                          {i + 1}
                        </span>
                        <p className="text-xs text-[#4a3b2a] leading-relaxed pt-1.5 font-medium">
                          {q.question}
                        </p>
                      </div>

                      <div className="pl-10 space-y-2">
                        {q.options.map((opt, j) => {
                          const isSelected = quizAnswers[i] === j;
                          const isCorrect = j === q.correctIndex;
                          const revealed = quizRevealed[i];
                          return (
                            <button
                              key={j}
                              onClick={() => { if (!revealed) setQuizAnswers(prev => ({ ...prev, [i]: j })); }}
                              className={`w-full text-left p-3 rounded-lg text-xs transition-all duration-200 border ${
                                revealed
                                  ? isCorrect
                                    ? 'bg-[#8b5e1a]/10 border-[#8b5e1a]/30 text-[#8b5e1a] font-medium'
                                    : isSelected
                                      ? 'bg-red-50 border-red-200 text-red-600 line-through'
                                      : 'bg-white/20 border-[#4a3b2a]/5 text-[#4a3b2a]/40'
                                  : isSelected
                                    ? 'bg-[#8b5e1a]/10 border-[#8b5e1a]/30 text-[#8b5e1a]'
                                    : 'bg-white/20 border-[#4a3b2a]/8 text-[#4a3b2a]/70 hover:bg-white/40 hover:border-[#8b5e1a]/15'
                              }`}
                              data-testid={`quiz-option-${i}-${j}`}
                            >
                              <span className="mr-2 font-bold text-[10px]">{String.fromCharCode(65 + j)})</span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {!quizRevealed[i] && quizAnswers[i] !== undefined && quizAnswers[i] !== null && (
                        <div className="pl-10">
                          <button
                            className="mt-1 text-[10px] uppercase tracking-wider text-[#8b5e1a] hover:text-[#8b5e1a]/80 font-bold transition-colors"
                            onClick={() => setQuizRevealed(prev => ({ ...prev, [i]: true }))}
                            data-testid={`button-quiz-reveal-${i}`}
                          >
                            Valider
                          </button>
                        </div>
                      )}

                      {quizRevealed[i] && (
                        <motion.div
                          className="pl-10"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className={`text-[10px] font-bold ${quizAnswers[i] === q.correctIndex ? 'text-[#8b5e1a]' : 'text-red-500'}`}>
                            {quizAnswers[i] === q.correctIndex ? 'Bonne réponse !' : `La bonne réponse était : ${q.options[q.correctIndex]}`}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <PageNavFooter {...nav} accent="#0d6b3d" />
        </FadeInSection>
      </div>
    </div>
  );
}
