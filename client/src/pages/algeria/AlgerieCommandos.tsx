import { algerieCommandosData } from "@/lib/algerie-commandos-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, Compass, Users, Radio, Award,
  ChevronDown, FileText, HelpCircle, BookMarked,
  Eye, Lightbulb, Layers, Crosshair
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence, useMotionValueEvent } from "framer-motion";

type ReadingMode = 'comprendre' | 'recit' | 'archives';

const ACCENT = "#5c6b2a";
const ACCENT_DARK = "#3d4a1a";
const KRAFT = "#d4c5a0";
const INK = "#4a3b2a";
const GOLD = "#dcb575";

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
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#5c6b2a]/30 bg-[#5c6b2a]/5 shrink-0">
      <span className="text-sm font-bold text-[#5c6b2a]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        {String(num).padStart(2, '0')}
      </span>
    </div>
  );
}

const blocIcons = [Compass, Users, Radio, Award];
const blocLabels = ["GENÈSE", "EFFECTIFS", "TERRAIN", "HÉRITAGE"];

export default function AlgerieCommandosPage() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
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
    const revealed = Object.keys(quizRevealed).filter(k => quizRevealed[Number(k)]);
    setQuizScore(revealed.length);
  }, [quizRevealed]);

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
                <Link href="/algerie/kj25">
                  <button className="text-[#4a3b2a]/60 hover:text-[#4a3b2a] transition-colors text-[10px] uppercase tracking-widest flex items-center gap-1" data-testid="sticky-link-back">
                    <ArrowLeft className="h-3 w-3" /> KJ 25
                  </button>
                </Link>
                <span className="text-[#4a3b2a]/20 mx-1">/</span>
                <span className="text-[10px] uppercase tracking-widest text-[#5c6b2a] font-bold">Commandos de chasse</span>
              </div>
              <div className="flex items-center gap-1">
                {(['comprendre', 'recit', 'archives'] as ReadingMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setReadingMode(m)}
                    className={`px-3 py-1 text-[9px] uppercase tracking-wider rounded-full transition-all ${
                      readingMode === m
                        ? 'bg-[#5c6b2a] text-white'
                        : 'text-[#4a3b2a]/50 hover:text-[#4a3b2a] hover:bg-[#4a3b2a]/5'
                    }`}
                    data-testid={`sticky-mode-${m}`}
                  >
                    {m === 'comprendre' ? '3 min' : m === 'recit' ? 'Récit' : 'Archives'}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <header className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, #2a3018 0%, #3a3b25 50%, ${KRAFT} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23dcb575' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")` }} />

        <div className="absolute top-8 right-8 w-[220px] h-[220px] opacity-[0.03]">
          <svg viewBox="0 0 220 220" fill="none" stroke="#dcb575" strokeWidth="1">
            <path d="M110 20 L200 180 L20 180 Z" />
            <circle cx="110" cy="130" r="40" />
            <line x1="110" y1="20" x2="110" y2="180" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-24 md:pb-32">
          <div className="flex justify-between items-center mb-16">
            <Link href="/algerie/kj25">
              <button className="text-[#e8dcc5]/50 hover:text-[#e8dcc5] transition-colors text-[10px] uppercase tracking-widest flex items-center gap-2" data-testid="link-back-kj25">
                <ArrowLeft className="h-3 w-3" /> KJ 25
              </button>
            </Link>
            <Link href="/#algerie">
              <button className="text-[#e8dcc5]/50 hover:text-[#e8dcc5] transition-colors text-[10px] uppercase tracking-widest" data-testid="link-back-algerie">
                Algérie
              </button>
            </Link>
          </div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#dcb575]/40" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#dcb575]/60">
                1958 — 1962
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#e8dcc5]"
              style={{ fontFamily: "'Special Elite', cursive" }}
              data-testid="text-page-title"
            >
              {algerieCommandosData.title}
            </h1>

            <p className="text-sm md:text-base text-[#e8dcc5]/60 leading-relaxed max-w-2xl">
              {algerieCommandosData.subtitle}
            </p>

            <motion.div
              className="relative pl-5 border-l-2 border-[#dcb575]/30 max-w-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Crosshair className="absolute -left-[13px] top-0 h-5 w-5 text-[#dcb575] bg-[#3a3b25] p-0.5 rounded-full" />
              <p className="text-xs italic text-[#e8dcc5]/50 leading-relaxed pt-1">
                {algerieCommandosData.questionDirectrice}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 pt-4">
              {([
                { mode: 'comprendre' as ReadingMode, label: 'Comprendre', sub: '3 min', icon: Eye },
                { mode: 'recit' as ReadingMode, label: 'Récit complet', sub: '12 min', icon: BookOpen },
                { mode: 'archives' as ReadingMode, label: 'Archives', sub: 'Quiz', icon: FileText },
              ]).map(({ mode, label, sub, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setReadingMode(mode)}
                  className={`group relative px-5 py-3 rounded-lg transition-all duration-300 ${
                    readingMode === mode
                      ? 'bg-[#5c6b2a] shadow-lg shadow-[#5c6b2a]/20'
                      : 'bg-[#e8dcc5]/5 hover:bg-[#e8dcc5]/10 border border-[#e8dcc5]/10'
                  }`}
                  data-testid={`button-mode-${mode}`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-3.5 w-3.5 ${readingMode === mode ? 'text-white' : 'text-[#dcb575]/60'}`} />
                    <span className={`text-xs font-medium ${readingMode === mode ? 'text-white' : 'text-[#e8dcc5]/70'}`}>
                      {label}
                    </span>
                  </div>
                  <span className={`text-[9px] mt-0.5 block ${readingMode === mode ? 'text-white/50' : 'text-[#e8dcc5]/30'}`}>
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
            <div className="flex items-start gap-4 p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#5c6b2a]/8 to-[#5c6b2a]/3 border border-[#5c6b2a]/15">
              <div className="w-10 h-10 rounded-lg bg-[#5c6b2a]/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-[#5c6b2a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5c6b2a]">
                  Repères
                </h3>
                <p className="text-xs leading-relaxed text-[#4a3b2a]/75">
                  {algerieCommandosData.reperes}
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="relative" data-testid="bloc-resume">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3d3225] to-[#4a3b2a]" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23dcb575'/%3E%3C/svg%3E")` }} />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#dcb575] via-[#dcb575]/50 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#dcb575]/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-[#dcb575]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8dcc5]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      Résumé
                    </h2>
                    <span className="text-[9px] text-[#dcb575]/50 uppercase tracking-widest">60 secondes de lecture</span>
                  </div>
                </div>
                <motion.div
                  className="w-16 h-[2px] rounded-full"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <p className="text-sm leading-[1.9] text-[#e8dcc5]/80">
                  {algerieCommandosData.resume}
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-8" data-testid="bloc-timeline">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5c6b2a]/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-[#5c6b2a]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                  Chronologie
                </h2>
                <div className="w-12 h-[2px] bg-[#5c6b2a]/20 mt-1 rounded-full" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#5c6b2a]/40 via-[#5c6b2a]/20 to-transparent" />
              <div className="space-y-3">
                {algerieCommandosData.timeline.map((event, i) => (
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
                      <div className="w-[10px] h-[10px] rounded-full bg-[#5c6b2a] ring-4 ring-[#d4c5a0] group-hover:ring-[#5c6b2a]/20 transition-all duration-300" />
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-white/40 border border-[#4a3b2a]/8 group-hover:bg-white/60 group-hover:border-[#5c6b2a]/15 group-hover:shadow-md transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#5c6b2a] uppercase tracking-wider block mb-1">
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

        {algerieCommandosData.blocs.map((bloc, i) => {
          const BlocIcon = blocIcons[i] || Shield;
          const isHighlighted = i === 2;
          return (
            <FadeInSection key={i}>
              <section className="space-y-6" data-testid={`bloc-content-${i}`}>
                <div className="flex items-center gap-4">
                  <SectionNumber num={i + 1} />
                  <div className="flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#5c6b2a]/50 block mb-1">
                      {blocLabels[i]}
                    </span>
                    <h2 className="text-lg md:text-xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      {bloc.titre}
                    </h2>
                  </div>
                  <BlocIcon className="h-5 w-5 text-[#5c6b2a]/30" />
                </div>

                {isHighlighted ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5c6b2a] to-[#3d4a1a]" />
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23fff' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")` }} />
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
                          <Lightbulb className="h-3.5 w-3.5 text-[#dcb575]" />
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dcb575]">
                            À retenir
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {bloc.aRetenir.map((item, j) => (
                            <li key={j} className="flex gap-3 text-xs text-white/70 leading-relaxed">
                              <Check className="h-3.5 w-3.5 shrink-0 text-[#dcb575] mt-0.5" />
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
                    <div className="relative p-5 rounded-lg bg-gradient-to-r from-[#dcb575]/10 to-transparent border-l-[3px] border-[#5c6b2a]/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="h-3.5 w-3.5 text-[#5c6b2a]" />
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5c6b2a]">
                          À retenir
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {bloc.aRetenir.map((item, j) => (
                          <li key={j} className="flex gap-3 text-xs text-[#4a3b2a]/70 leading-relaxed">
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#5c6b2a]/60 mt-0.5" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d3225] to-[#4a3b2a] rounded-xl" />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#dcb575]/10 flex items-center justify-center">
                        <BookMarked className="h-4 w-4 text-[#dcb575]" />
                      </div>
                      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8dcc5]" style={{ fontFamily: "'Special Elite', cursive" }}>
                        Glossaire
                      </h2>
                      <span className="text-[9px] text-[#dcb575]/40 bg-[#dcb575]/5 px-2 py-0.5 rounded-full">
                        {algerieCommandosData.glossaire.length} termes
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: glossaryOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4 text-[#dcb575]/40 group-hover:text-[#dcb575] transition-colors" />
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 mt-6 border-t border-[#dcb575]/10">
                          {algerieCommandosData.glossaire.map((entry, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-lg bg-[#e8dcc5]/5 border border-[#e8dcc5]/5 hover:border-[#dcb575]/20 transition-colors"
                              data-testid={`glossaire-${i}`}
                            >
                              <span className="text-xs font-bold text-[#dcb575] block mb-1">
                                {entry.terme}
                              </span>
                              <span className="text-[11px] text-[#e8dcc5]/60 leading-relaxed">
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
                  <div className="w-10 h-10 rounded-lg bg-[#5c6b2a]/10 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-[#5c6b2a]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>
                      Mini‑Quiz
                    </h2>
                    <div className="w-12 h-[2px] bg-[#5c6b2a]/20 mt-1 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#5c6b2a]/5 px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-bold text-[#5c6b2a]">
                    {quizScore}/{algerieCommandosData.quiz.length}
                  </span>
                  <div className="flex gap-0.5">
                    {algerieCommandosData.quiz.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${quizRevealed[i] ? 'bg-[#5c6b2a]' : 'bg-[#4a3b2a]/15'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {algerieCommandosData.quiz.map((q, i) => (
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
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#5c6b2a]" />
                    )}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs flex items-center justify-center font-bold transition-colors ${
                          quizRevealed[i] ? 'bg-[#5c6b2a] text-white' : 'bg-[#5c6b2a]/10 text-[#5c6b2a]'
                        }`}>
                          {i + 1}
                        </span>
                        <p className="text-xs text-[#4a3b2a] leading-relaxed pt-1.5 font-medium">
                          {q.question}
                        </p>
                      </div>

                      {!quizRevealed[i] ? (
                        <div className="pl-10">
                          <input
                            type="text"
                            placeholder="Votre réponse..."
                            className="w-full bg-transparent border-b border-[#4a3b2a]/15 text-xs py-2 px-1 text-[#4a3b2a] placeholder:text-[#4a3b2a]/25 focus:outline-none focus:border-[#5c6b2a] transition-colors"
                            value={quizAnswers[i] || ""}
                            onChange={(e) => setQuizAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                            data-testid={`input-quiz-${i}`}
                          />
                          <button
                            className="mt-3 text-[10px] uppercase tracking-wider text-[#5c6b2a] hover:text-[#5c6b2a]/80 font-bold transition-colors"
                            onClick={() => setQuizRevealed(prev => ({ ...prev, [i]: true }))}
                            data-testid={`button-quiz-reveal-${i}`}
                          >
                            Voir la réponse
                          </button>
                        </div>
                      ) : (
                        <motion.div
                          className="pl-10"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-3 rounded-lg bg-[#5c6b2a]/5 border border-[#5c6b2a]/10">
                            <span className="text-[9px] font-bold text-[#5c6b2a] uppercase tracking-wider block mb-1">
                              Réponse
                            </span>
                            <p className="text-xs text-[#4a3b2a]/80 leading-relaxed">
                              {q.reponse}
                            </p>
                          </div>
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
          <section className="py-16">
            <div className="text-center space-y-6">
              <div className="w-16 h-[1px] bg-[#4a3b2a]/20 mx-auto" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#4a3b2a]/40">Navigation</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/algerie/kj25">
                  <Button
                    variant="outline"
                    className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg"
                    data-testid="button-back-kj25"
                  >
                    <ArrowLeft className="mr-2 h-3.5 w-3.5" /> KJ 25
                  </Button>
                </Link>
                <Link href="/#algerie">
                  <Button
                    variant="outline"
                    className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg"
                    data-testid="button-back-themes"
                  >
                    <Layers className="mr-2 h-3.5 w-3.5" /> Thèmes
                  </Button>
                </Link>
                <Link href="/#algerie">
                  <Button
                    className="bg-[#5c6b2a] text-white hover:bg-[#3d4a1a] px-6 py-5 text-xs rounded-lg shadow-lg shadow-[#5c6b2a]/20"
                    data-testid="button-continue-visit"
                  >
                    Continuer la visite <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
