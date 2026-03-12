import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, ChevronDown, FileText, HelpCircle, BookMarked,
  Eye, Lightbulb, Layers
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence, useMotionValueEvent } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ReadingMode = 'comprendre' | 'recit' | 'archives';

interface PageData {
  title: string;
  subtitle: string;
  questionDirectrice: string;
  reperes: string;
  resume: string;
  timeline: { date: string; description: string }[];
  blocs: { titre: string; texte: string; aRetenir: string[] }[];
  glossaire: { terme: string; definition: string }[];
  quiz: { question: string; options: string[]; correctIndex: number }[];
}

interface TraditionsPageProps {
  data: PageData;
  accent: string;
  accentDark: string;
  accentLight: string;
  heroIcon: LucideIcon;
  blocIcons: LucideIcon[];
  blocLabels: string[];
  highlightedBloc: number;
  heroGradient: string;
  heroBgPattern: string;
  prevLink: string;
  prevLabel: string;
  nextLink: string;
  nextLabel: string;
  dateRange: string;
}

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function TraditionsPageTemplate({ data, accent, accentDark, accentLight, heroIcon: HeroIcon, blocIcons, blocLabels, highlightedBloc, heroGradient, heroBgPattern, prevLink, prevLabel, nextLink, nextLabel, dateRange }: TraditionsPageProps) {
  const KRAFT = "#d4c5a0";
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

  useMotionValueEvent(scrollYProgress, "change", (v) => { setScrolled(v > 0.02); });

  useEffect(() => {
    let score = 0;
    Object.keys(quizRevealed).forEach(k => {
      const i = Number(k);
      if (quizRevealed[i] && quizAnswers[i] === data.quiz[i].correctIndex) score++;
    });
    setQuizScore(score);
  }, [quizRevealed, quizAnswers]);

  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'IBM Plex Mono', monospace", backgroundColor: KRAFT }}>
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23000%22/%3E%3C/svg%3E')]" />

      <motion.div className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50" style={{ scaleX, background: `linear-gradient(90deg, ${accent}, ${accentDark})` }} />

      <AnimatePresence>
        {scrolled && (
          <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-[3px] left-0 right-0 z-40 backdrop-blur-xl bg-[#d4c5a0]/90 border-b border-[#4a3b2a]/10 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={prevLink}>
                  <button className="text-[#4a3b2a]/60 hover:text-[#4a3b2a] transition-colors text-[10px] uppercase tracking-widest flex items-center gap-1" data-testid="sticky-link-back">
                    <ArrowLeft className="h-3 w-3" /> {prevLabel}
                  </button>
                </Link>
                <span className="text-[#4a3b2a]/20 mx-1">/</span>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: accent }}>{data.title}</span>
              </div>
              <div className="flex items-center gap-1">
                {(['comprendre', 'recit', 'archives'] as ReadingMode[]).map((m) => (
                  <button key={m} onClick={() => setReadingMode(m)} className={`px-3 py-1 text-[9px] uppercase tracking-wider rounded-full transition-all ${readingMode === m ? 'text-white' : 'text-[#4a3b2a]/50 hover:text-[#4a3b2a] hover:bg-[#4a3b2a]/5'}`} style={readingMode === m ? { backgroundColor: accent } : {}} data-testid={`sticky-mode-${m}`}>
                    {m === 'comprendre' ? '5 min' : m === 'recit' ? 'Récit' : 'Archives'}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <header className="relative overflow-hidden" style={{ background: heroGradient }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: heroBgPattern }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-24 md:pb-32">
          <div className="flex justify-between items-center mb-16">
            <Link href={prevLink}>
              <button className="text-white/30 hover:text-white/60 transition-colors text-[10px] uppercase tracking-widest flex items-center gap-2" data-testid="link-back-prev">
                <ArrowLeft className="h-3 w-3" /> {prevLabel}
              </button>
            </Link>
            <Link href="/#traditions">
              <button className="text-white/30 hover:text-white/60 transition-colors text-[10px] uppercase tracking-widest" data-testid="link-back-traditions">
                Traditions
              </button>
            </Link>
          </div>
          <motion.div className="space-y-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px]" style={{ backgroundColor: `${accentLight}66` }} />
              <span className="text-[10px] uppercase tracking-[0.5em]" style={{ color: `${accentLight}99` }}>{dateRange}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white/90" style={{ fontFamily: "'Special Elite', cursive" }} data-testid="text-page-title">{data.title}</h1>
            <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-2xl">{data.subtitle}</p>
            <motion.div className="relative pl-5 max-w-xl" style={{ borderLeft: `2px solid ${accentLight}4d` }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <HeroIcon className="absolute -left-[13px] top-0 h-5 w-5 p-0.5 rounded-full" style={{ color: accentLight, backgroundColor: accentDark }} />
              <p className="text-xs italic text-white/35 leading-relaxed pt-1">{data.questionDirectrice}</p>
            </motion.div>
            <div className="flex flex-wrap gap-2 pt-4">
              {([
                { mode: 'comprendre' as ReadingMode, label: 'Comprendre', sub: '5 min', icon: Eye },
                { mode: 'recit' as ReadingMode, label: 'Récit complet', sub: '10–15 min', icon: BookOpen },
                { mode: 'archives' as ReadingMode, label: 'Archives', sub: 'Quiz', icon: FileText },
              ]).map(({ mode, label, sub, icon: Icon }) => (
                <button key={mode} onClick={() => setReadingMode(mode)} className={`group relative px-5 py-3 rounded-lg transition-all duration-300 ${readingMode === mode ? 'shadow-lg' : 'hover:bg-white/5 border border-white/10'}`} style={readingMode === mode ? { backgroundColor: accent, boxShadow: `0 10px 15px -3px ${accent}33` } : {}} data-testid={`button-mode-${mode}`}>
                  <div className="flex items-center gap-2">
                    <Icon className={`h-3.5 w-3.5 ${readingMode === mode ? 'text-white' : 'text-white/40'}`} />
                    <span className={`text-xs font-medium ${readingMode === mode ? 'text-white' : 'text-white/50'}`}>{label}</span>
                  </div>
                  <span className={`text-[9px] mt-0.5 block ${readingMode === mode ? 'text-white/50' : 'text-white/20'}`}>{sub}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to bottom, transparent, ${KRAFT})` }} />
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20 relative z-10">
        <FadeInSection>
          <section data-testid="bloc-reperes">
            <div className="flex items-start gap-4 p-6 md:p-8 rounded-xl border" style={{ background: `linear-gradient(135deg, ${accent}14, ${accent}08)`, borderColor: `${accent}26` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}1a` }}>
                <Shield className="h-5 w-5" style={{ color: accent }} />
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accent }}>Repères</h3>
                <p className="text-xs leading-relaxed text-[#4a3b2a]/75">{data.reperes}</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section data-testid="bloc-resume">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accentDark}, ${accent})` }} />
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, ${accentLight}, ${accentLight}80, transparent)` }} />
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentLight}1a` }}>
                    <Clock className="h-4 w-4" style={{ color: accentLight }} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90" style={{ fontFamily: "'Special Elite', cursive" }}>Résumé</h2>
                    <span className="text-[9px] uppercase tracking-widest" style={{ color: `${accentLight}80` }}>60 secondes de lecture</span>
                  </div>
                </div>
                <motion.div className="w-16 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg, ${accentLight}, transparent)` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
                <p className="text-sm leading-[1.9] text-white/80">{data.resume}</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-8" data-testid="bloc-timeline">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accent}1a` }}>
                <Clock className="h-5 w-5" style={{ color: accent }} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>Chronologie</h2>
                <div className="w-12 h-[2px] mt-1 rounded-full" style={{ backgroundColor: `${accent}33` }} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px]" style={{ background: `linear-gradient(to bottom, ${accent}66, ${accent}33, transparent)` }} />
              <div className="space-y-3">
                {data.timeline.map((event, i) => (
                  <motion.div key={i} className="relative flex items-start gap-5 group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} data-testid={`timeline-event-${i}`}>
                    <div className="relative z-10 mt-4">
                      <div className="w-[10px] h-[10px] rounded-full ring-4 ring-[#d4c5a0] transition-all duration-300" style={{ backgroundColor: accent }} />
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-white/40 border border-[#4a3b2a]/8 group-hover:bg-white/60 group-hover:shadow-md transition-all duration-300">
                      <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: accent }}>{event.date}</span>
                      <p className="text-xs text-[#4a3b2a]/75 leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {data.blocs.map((bloc, i) => {
          const BlocIcon = blocIcons[i] || Shield;
          const isHL = i === highlightedBloc;
          return (
            <FadeInSection key={i}>
              <section className="space-y-6" data-testid={`bloc-content-${i}`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ border: `2px solid ${accent}4d`, backgroundColor: `${accent}0d` }}>
                    <span className="text-sm font-bold" style={{ color: accent, fontFamily: "'IBM Plex Mono', monospace" }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] block mb-1" style={{ color: `${accent}80` }}>{blocLabels[i]}</span>
                    <h2 className="text-lg md:text-xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>{bloc.titre}</h2>
                  </div>
                  <BlocIcon className="h-5 w-5" style={{ color: `${accent}4d` }} />
                </div>
                {isHL ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})` }} />
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23fff' stroke-width='0.2' fill='none'/%3E%3C/svg%3E")` }} />
                    <div className="absolute top-4 right-4"><span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20 bg-white/5 px-3 py-1 rounded-full border border-white/10">{blocLabels[i]}</span></div>
                    <div className="relative z-10 p-8 md:p-10 space-y-6">
                      <p className="text-sm leading-[1.9] text-white/85 pt-2">{bloc.texte}</p>
                      <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
                        <div className="flex items-center gap-2"><Lightbulb className="h-3.5 w-3.5" style={{ color: accentLight }} /><h4 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentLight }}>À retenir</h4></div>
                        <ul className="space-y-2">{bloc.aRetenir.map((item, j) => (<li key={j} className="flex gap-3 text-xs text-white/70 leading-relaxed"><Check className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: accentLight }} /><span>{item}</span></li>))}</ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 pl-14">
                    <p className="text-sm leading-[1.9] text-[#4a3b2a]/80">{bloc.texte}</p>
                    <div className="relative p-5 rounded-lg border-l-[3px]" style={{ background: `linear-gradient(to right, ${accentLight}1a, transparent)`, borderColor: `${accent}4d` }}>
                      <div className="flex items-center gap-2 mb-3"><Lightbulb className="h-3.5 w-3.5" style={{ color: accent }} /><h4 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accent }}>À retenir</h4></div>
                      <ul className="space-y-2">{bloc.aRetenir.map((item, j) => (<li key={j} className="flex gap-3 text-xs text-[#4a3b2a]/70 leading-relaxed"><Check className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: `${accent}99` }} /><span>{item}</span></li>))}</ul>
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
              <motion.div className="relative overflow-hidden rounded-xl cursor-pointer group" onClick={() => setGlossaryOpen(!glossaryOpen)} whileTap={{ scale: 0.995 }}>
                <div className="absolute inset-0 rounded-xl" style={{ background: `linear-gradient(135deg, ${accentDark}, ${accent})` }} />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentLight}1a` }}><BookMarked className="h-4 w-4" style={{ color: accentLight }} /></div>
                      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90" style={{ fontFamily: "'Special Elite', cursive" }}>Glossaire</h2>
                      <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: `${accentLight}66`, backgroundColor: `${accentLight}0d` }}>{data.glossaire.length} termes</span>
                    </div>
                    <motion.div animate={{ rotate: glossaryOpen ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown className="h-4 w-4" style={{ color: `${accentLight}66` }} /></motion.div>
                  </div>
                  <AnimatePresence>
                    {glossaryOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 mt-6" style={{ borderTop: `1px solid ${accentLight}1a` }}>
                          {data.glossaire.map((entry, i) => (
                            <div key={i} className="p-3 rounded-lg border hover:border-opacity-30 transition-colors" style={{ backgroundColor: `${accentLight}0d`, borderColor: `${accentLight}0d` }} data-testid={`glossaire-${i}`}>
                              <span className="text-xs font-bold block mb-1" style={{ color: accentLight }}>{entry.terme}</span>
                              <span className="text-[11px] text-white/50 leading-relaxed">{entry.definition}</span>
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
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accent}1a` }}><HelpCircle className="h-5 w-5" style={{ color: accent }} /></div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-normal text-[#4a3b2a]" style={{ fontFamily: "'Special Elite', cursive" }}>Mini‑Quiz</h2>
                    <div className="w-12 h-[2px] mt-1 rounded-full" style={{ backgroundColor: `${accent}33` }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${accent}0d` }}>
                  <span className="text-[10px] font-bold" style={{ color: accent }}>{quizScore}/{data.quiz.length}</span>
                  <div className="flex gap-0.5">
                    {data.quiz.map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full transition-colors" style={{ backgroundColor: quizRevealed[i] ? (quizAnswers[i] === data.quiz[i].correctIndex ? accent : '#f87171') : '#4a3b2a26' }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {data.quiz.map((q, i) => (
                  <motion.div key={i} className="relative overflow-hidden rounded-xl border border-[#4a3b2a]/10 bg-white/40 backdrop-blur-sm" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} data-testid={`quiz-question-${i}`}>
                    {quizRevealed[i] && <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: quizAnswers[i] === q.correctIndex ? accent : '#f87171' }} />}
                    <div className="p-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg text-xs flex items-center justify-center font-bold transition-colors" style={quizRevealed[i] ? { backgroundColor: quizAnswers[i] === q.correctIndex ? accent : '#f87171', color: 'white' } : { backgroundColor: `${accent}1a`, color: accent }}>{i + 1}</span>
                        <p className="text-xs text-[#4a3b2a] leading-relaxed pt-1.5 font-medium">{q.question}</p>
                      </div>
                      <div className="pl-10 space-y-2">
                        {q.options.map((opt, j) => {
                          const isSel = quizAnswers[i] === j;
                          const isCor = j === q.correctIndex;
                          const rev = quizRevealed[i];
                          return (
                            <button key={j} onClick={() => { if (!rev) setQuizAnswers(prev => ({ ...prev, [i]: j })); }} className={`w-full text-left p-3 rounded-lg text-xs transition-all duration-200 border ${rev ? isCor ? 'font-medium' : isSel ? 'bg-red-50 border-red-200 text-red-600 line-through' : 'bg-white/20 border-[#4a3b2a]/5 text-[#4a3b2a]/40' : isSel ? '' : 'bg-white/20 border-[#4a3b2a]/8 text-[#4a3b2a]/70 hover:bg-white/40'}`} style={rev && isCor ? { backgroundColor: `${accent}1a`, borderColor: `${accent}4d`, color: accent } : !rev && isSel ? { backgroundColor: `${accent}1a`, borderColor: `${accent}4d`, color: accent } : {}} data-testid={`quiz-option-${i}-${j}`}>
                              <span className="mr-2 font-bold text-[10px]">{String.fromCharCode(65 + j)})</span>{opt}
                            </button>
                          );
                        })}
                      </div>
                      {!quizRevealed[i] && quizAnswers[i] !== undefined && quizAnswers[i] !== null && (
                        <div className="pl-10"><button className="mt-1 text-[10px] uppercase tracking-wider font-bold transition-colors" style={{ color: accent }} onClick={() => setQuizRevealed(prev => ({ ...prev, [i]: true }))} data-testid={`button-quiz-reveal-${i}`}>Valider</button></div>
                      )}
                      {quizRevealed[i] && (
                        <motion.div className="pl-10" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                          <p className="text-[10px] font-bold" style={{ color: quizAnswers[i] === q.correctIndex ? accent : '#ef4444' }}>{quizAnswers[i] === q.correctIndex ? 'Bonne réponse !' : `La bonne réponse était : ${q.options[q.correctIndex]}`}</p>
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
                <Link href={prevLink}><Button variant="outline" className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg" data-testid="button-back-prev"><ArrowLeft className="mr-2 h-3.5 w-3.5" /> {prevLabel}</Button></Link>
                <Link href="/#traditions"><Button variant="outline" className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg" data-testid="button-back-themes"><Layers className="mr-2 h-3.5 w-3.5" /> Thèmes</Button></Link>
                <Link href={nextLink}><Button className="text-white px-6 py-5 text-xs rounded-lg shadow-lg" style={{ backgroundColor: accent, boxShadow: `0 10px 15px -3px ${accent}33` }} data-testid="button-continue-visit">{nextLabel} <ArrowRight className="ml-2 h-3.5 w-3.5" /></Button></Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
