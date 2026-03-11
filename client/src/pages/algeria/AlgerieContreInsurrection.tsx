import { algerieContreInsurrectionData } from "@/lib/algerie-contre-insurrection-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, HeartHandshake, Landmark, Swords, Scale,
  ChevronRight, FileText, HelpCircle, BookMarked, AlertTriangle
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";

type ReadingMode = 'comprendre' | 'recit' | 'archives';

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

const kraftBg = "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20baseFrequency%3D%220.65%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200.82%200%200%200%200%200.75%200%200%200%200%200.62%200%200%200%200.06%200%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22/%3E%3C/svg%3E')]";

const blocIcons = [HeartHandshake, Landmark, Swords, Scale];

export default function AlgerieContreInsurrectionPage() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const { scrollYProgress } = useScroll();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizRevealed, setQuizRevealed] = useState<Record<number, boolean>>({});
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  const showRecit = readingMode === 'recit' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  return (
    <div className="min-h-screen pb-24 relative" style={{ fontFamily: "'IBM Plex Mono', monospace", backgroundColor: "#d4c5a0" }}>
      <div className={`fixed inset-0 opacity-30 pointer-events-none ${kraftBg}`} />
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%222%22%20height%3D%222%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23000%22/%3E%3C/svg%3E')]" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1e3a5f] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative pt-12 pb-20 px-6 overflow-hidden border-b-2 border-dashed border-[#4a3b2a]/30">
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#4a3b2a]/20 m-2" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#4a3b2a]/20 m-2" />

        <div className="absolute bottom-6 right-8 opacity-[0.04] pointer-events-none select-none">
          <svg width="180" height="220" viewBox="0 0 180 220" fill="#4a3b2a">
            <circle cx="90" cy="70" r="50" fill="none" stroke="#4a3b2a" strokeWidth="4" />
            <path d="M60 70 L90 40 L120 70" fill="none" stroke="#4a3b2a" strokeWidth="3" />
            <rect x="75" y="130" width="30" height="60" rx="3" />
            <path d="M50 130 L130 130" stroke="#4a3b2a" strokeWidth="3" />
          </svg>
        </div>

        <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
          <Link href="/algerie/palestro">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#dcb575]/20 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }} data-testid="link-back-palestro">
              <ArrowLeft className="mr-2 h-3 w-3" /> PALESTRO
            </Button>
          </Link>
          <Link href="/#algerie">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#dcb575]/20 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }} data-testid="link-back-algerie">
              ALGÉRIE
            </Button>
          </Link>
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6 pt-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-[#1e3a5f]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#4a3b2a]/50" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              CONFIDENTIEL — CONTRE‑INSURRECTION — 1956‑1959
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-normal leading-tight text-[#4a3b2a]"
            style={{ fontFamily: "'Special Elite', cursive" }}
            data-testid="text-page-title"
          >
            {algerieContreInsurrectionData.title}
          </h1>
          <p className="text-sm md:text-base text-[#4a3b2a]/80 leading-relaxed max-w-3xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            {algerieContreInsurrectionData.subtitle}
          </p>
          <p className="text-sm italic text-[#4a3b2a]/60 border-l-4 border-[#1e3a5f] pl-4 py-1 max-w-2xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            {algerieContreInsurrectionData.questionDirectrice}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'comprendre' as ReadingMode, label: 'Comprendre (3 min)', icon: Clock },
              { mode: 'recit' as ReadingMode, label: 'Récit complet', icon: BookOpen },
              { mode: 'archives' as ReadingMode, label: 'Archives', icon: FileText },
            ]).map(({ mode, label, icon: Icon }) => (
              <Button
                key={mode}
                variant={readingMode === mode ? 'default' : 'outline'}
                className={readingMode === mode
                  ? "bg-[#1e3a5f] text-white border-[#1e3a5f] text-xs"
                  : "border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20 text-xs"}
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                onClick={() => setReadingMode(mode)}
                data-testid={`button-mode-${mode}`}
              >
                <Icon className="mr-2 h-3 w-3" /> {label}
              </Button>
            ))}
          </div>
        </motion.div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 relative z-10">

        <FadeInSection>
          <section className="relative overflow-hidden border-2 border-[#1e3a5f]/20 bg-[#1e3a5f]/5 p-6 md:p-8" data-testid="bloc-reperes">
            <div className="flex items-center gap-3 mb-4">
              <BookMarked className="h-5 w-5 text-[#1e3a5f]" />
              <h3
                className="text-sm font-normal uppercase tracking-[0.2em] text-[#4a3b2a]"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                REPÈRES
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-[#4a3b2a]/80" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              {algerieContreInsurrectionData.reperes}
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="relative overflow-hidden rounded-none border-2 border-[#4a3b2a]/30 shadow-xl" data-testid="bloc-resume">
            <div className="absolute inset-0 bg-[#4a3b2a]" />
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-[#dcb575]" />
                <h2
                  className="text-lg md:text-xl font-normal uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  RÉSUMÉ — 60 SECONDES
                </h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-sm leading-relaxed opacity-90" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {algerieContreInsurrectionData.resume}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-6" data-testid="bloc-timeline">
            <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
              <Clock className="h-5 w-5 text-[#1e3a5f]" />
              <h2
                className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                Chronologie
              </h2>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#1e3a5f]/30" />
              {algerieContreInsurrectionData.timeline.map((event, i) => (
                <motion.div
                  key={i}
                  className="relative mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-testid={`timeline-event-${i}`}
                >
                  <div className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-[#1e3a5f] border-2 border-[#d4c5a0]" />
                  <div className="border-2 border-[#4a3b2a]/15 bg-white/30 p-4 hover:bg-[#dcb575]/10 transition-colors">
                    <span className="text-[10px] font-bold text-[#1e3a5f] uppercase tracking-wide block mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {event.date}
                    </span>
                    <p className="text-xs text-[#4a3b2a]/80 leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {algerieContreInsurrectionData.blocs.map((bloc, i) => {
          const BlocIcon = blocIcons[i] || Shield;
          const isHighlighted = i === 2;
          return (
            <FadeInSection key={i}>
              <section className="space-y-6" data-testid={`bloc-content-${i}`}>
                <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                  <BlocIcon className="h-5 w-5 text-[#1e3a5f]" />
                  <h2
                    className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    {bloc.titre}
                  </h2>
                </div>

                {isHighlighted ? (
                  <div className="relative overflow-hidden border-2 border-[#1e3a5f]/30 shadow-xl">
                    <div className="absolute inset-0 bg-[#4a3b2a]" />
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
                    <div className="relative z-10 text-[#e8dcc5] p-8 md:p-10 space-y-6">
                      <div className="absolute -top-0 -right-0 bg-[#1e3a5f] text-white px-4 py-1">
                        <span className="text-[9px] uppercase tracking-[0.2em]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          OFFENSIVE MAJEURE
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90 pt-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {bloc.texte}
                      </p>
                      <div className="mt-4 space-y-2">
                        <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#dcb575]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          À RETENIR
                        </h4>
                        <ul className="space-y-1.5">
                          {bloc.aRetenir.map((item, j) => (
                            <li key={j} className="flex gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              <Check className="h-3 w-3 shrink-0 text-[#dcb575] mt-0.5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-xs leading-relaxed text-[#4a3b2a]/85" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {bloc.texte}
                    </p>
                    <div className="border-2 border-dashed border-[#dcb575]/40 p-5 bg-[#dcb575]/5">
                      <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#1e3a5f] mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        À RETENIR
                      </h4>
                      <ul className="space-y-1.5">
                        {bloc.aRetenir.map((item, j) => (
                          <li key={j} className="flex gap-2 text-xs text-[#4a3b2a]/80" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            <Check className="h-3 w-3 shrink-0 text-[#1e3a5f] mt-0.5" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </section>
            </FadeInSection>
          );
        })}

        {showRecit && (
          <FadeInSection>
            <section className="space-y-6" data-testid="bloc-glossaire">
              <motion.div
                className="relative overflow-hidden border-2 border-[#4a3b2a]/20 cursor-pointer group"
                onClick={() => setGlossaryOpen(!glossaryOpen)}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-[#4a3b2a]" />
                <div className="relative z-10 text-[#e8dcc5] p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookMarked className="h-5 w-5 text-[#dcb575]" />
                      <h2
                        className="text-lg font-normal uppercase tracking-[0.2em]"
                        style={{ fontFamily: "'Special Elite', cursive" }}
                      >
                        Glossaire
                      </h2>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#dcb575]/50 group-hover:text-[#dcb575] transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {glossaryOpen ? '▲ MASQUER' : '▼ AFFICHER'}
                    </span>
                  </div>

                  <AnimatePresence>
                    {glossaryOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#dcb575]/20 pt-4 mt-4 space-y-3">
                          {algerieContreInsurrectionData.glossaire.map((entry, i) => (
                            <div key={i} className="flex gap-3" data-testid={`glossaire-${i}`}>
                              <ChevronRight className="h-3 w-3 shrink-0 text-[#dcb575] mt-0.5" />
                              <div>
                                <span className="text-xs font-bold text-[#dcb575]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                  {entry.terme}
                                </span>
                                <span className="text-xs opacity-80 ml-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                  — {entry.definition}
                                </span>
                              </div>
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
            <section className="space-y-6" data-testid="bloc-quiz">
              <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                <HelpCircle className="h-5 w-5 text-[#1e3a5f]" />
                <h2
                  className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  Mini‑Quiz
                </h2>
              </div>
              <div className="space-y-4">
                {algerieContreInsurrectionData.quiz.map((q, i) => (
                  <motion.div
                    key={i}
                    className="border-2 border-[#4a3b2a]/15 bg-white/30 p-5 space-y-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-testid={`quiz-question-${i}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <p className="text-xs text-[#4a3b2a] leading-relaxed pt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {q.question}
                      </p>
                    </div>

                    {!quizRevealed[i] ? (
                      <div className="pl-9">
                        <input
                          type="text"
                          placeholder="Votre réponse..."
                          className="w-full bg-transparent border-b border-[#4a3b2a]/20 text-xs py-2 px-1 text-[#4a3b2a] placeholder:text-[#4a3b2a]/30 focus:outline-none focus:border-[#1e3a5f]"
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                          value={quizAnswers[i] || ""}
                          onChange={(e) => setQuizAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                          data-testid={`input-quiz-${i}`}
                        />
                        <Button
                          variant="outline"
                          className="mt-3 border-[#1e3a5f]/30 text-[#1e3a5f] hover:bg-[#1e3a5f]/10 text-[10px]"
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                          onClick={() => setQuizRevealed(prev => ({ ...prev, [i]: true }))}
                          data-testid={`button-quiz-reveal-${i}`}
                        >
                          Voir la réponse
                        </Button>
                      </div>
                    ) : (
                      <motion.div
                        className="pl-9"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-2 border-dashed border-[#dcb575]/40 bg-[#dcb575]/10 p-3">
                          <span className="text-[10px] font-bold text-[#1e3a5f] uppercase tracking-wider block mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            RÉPONSE
                          </span>
                          <p className="text-xs text-[#4a3b2a]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            {q.reponse}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="text-center space-y-8 py-12 border-t border-dashed border-[#4a3b2a]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/algerie/palestro">
                <Button
                  variant="outline"
                  className="border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20 px-8 py-6 text-sm"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  data-testid="button-back-palestro"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Retour Algérie
                </Button>
              </Link>
              <Link href="/#algerie">
                <Button
                  variant="outline"
                  className="border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20 px-8 py-6 text-sm"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  data-testid="button-back-themes"
                >
                  Revenir aux thèmes
                </Button>
              </Link>
              <Link href="/#algerie">
                <Button
                  className="bg-[#1e3a5f] text-white hover:bg-[#152d4a] px-8 py-6 text-sm"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  data-testid="button-continue-visit"
                >
                  Continuer la visite <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
