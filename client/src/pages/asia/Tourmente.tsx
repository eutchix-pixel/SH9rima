import { usePageNav } from "@/hooks/usePageNav";
import PageNavHeader from "@/components/PageNavHeader";
import PageNavFooter from "@/components/PageNavFooter";
import { tourmenteData } from "@/lib/tourmente-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  RotateCcw, Shield, Swords, Flag, Skull,
  MapPin, TreePine, Award, ChevronRight, HelpCircle
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

type ReadingMode = 'essentiel' | 'complet' | 'archives';

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

export default function TourmentePage() {
  const nav = usePageNav()!;
  const [readingMode, setReadingMode] = useState<ReadingMode>('essentiel');
  const { scrollYProgress } = useScroll();
  const [quizRevealed, setQuizRevealed] = useState<Record<number, boolean>>({});

  const showComplet = readingMode === 'complet' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  return (
    <div className="bg-[#1a1a1a] text-[#e8dcc5] min-h-screen font-sans pb-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-red-800 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative pt-12 pb-20 px-6 overflow-hidden bg-gradient-to-b from-red-950/30 to-[#1a1a1a] border-b border-red-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="absolute top-4 left-4 right-4 z-10">
          <PageNavHeader {...nav} />
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6 pt-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Swords className="h-8 w-8 text-red-500/60" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">ASIE — Seconde Guerre mondiale</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight" data-testid="text-page-title">
            {tourmenteData.title}
          </h1>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed max-w-3xl">
            {tourmenteData.subtitle}
          </p>
          <p className="text-base italic opacity-75 border-l-4 border-red-800 pl-4 py-1 max-w-2xl">
            {tourmenteData.accroche}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'essentiel' as ReadingMode, label: 'Essentiel (3 min)', icon: Clock },
              { mode: 'complet' as ReadingMode, label: 'Visite complète', icon: BookOpen },
              { mode: 'archives' as ReadingMode, label: 'Archives', icon: Shield },
            ]).map(({ mode, label, icon: Icon }) => (
              <Button
                key={mode}
                variant={readingMode === mode ? 'default' : 'outline'}
                className={readingMode === mode
                  ? "bg-red-900 text-[#e8dcc5] border-red-800"
                  : "border-[#e8dcc5]/30 text-[#e8dcc5] hover:bg-white/10"}
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
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-resume">
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#2a1f14] to-[#1a1a1a]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dc2626%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <Skull className="h-6 w-6 text-red-500" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">Résumé — 1 minute</h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-red-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">
                {tourmenteData.resume}
              </p>
              <div className="mt-4 space-y-2">
                <h4 className="font-bold uppercase text-xs tracking-widest text-red-500">À retenir</h4>
                <ul className="space-y-1.5">
                  {tourmenteData.aRetenir.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-red-500 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-6" data-testid="bloc-timeline">
            <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
              <Flag className="h-5 w-5 text-red-500" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Chronologie</h2>
            </div>
            <div className="relative pl-8 space-y-6">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-red-800/40" />
              {tourmenteData.timeline.map((event, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  data-testid={`timeline-event-${i}`}
                >
                  <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-red-700 border-2 border-red-900 shadow-[0_0_8px_rgba(220,38,38,0.3)]" />
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/8 transition-colors">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide">{event.date}</span>
                    <h4 className="font-serif font-bold text-sm mt-1">{event.titre}</h4>
                    <p className="text-xs opacity-70 mt-1 leading-relaxed">{event.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {showComplet && (
          <>
            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-etat-des-lieux">
                <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                  <Shield className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{tourmenteData.sections.etatDesLieux.titre}</h2>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                  <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-red-400">Organisation</h4>
                  <ul className="space-y-2">
                    {tourmenteData.sections.etatDesLieux.organisation.map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs leading-relaxed opacity-80">
                        <ChevronRight className="h-3 w-3 shrink-0 text-red-500 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-950/30 border border-red-900/30 rounded-xl p-5">
                  <h4 className="font-serif font-bold text-sm text-red-400 mb-2">Détachement Motorisé de Brigade</h4>
                  <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.etatDesLieux.dmb}</p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-agression-1940">
                <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                  <Swords className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{tourmenteData.sections.agression1940.titre}</h2>
                </div>
                <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.agression1940.texte}</p>
                <p className="text-sm italic opacity-75 border-l-4 border-red-800 pl-4 py-1">{tourmenteData.sections.agression1940.choc}</p>

                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#2a1f14] to-[#1a1a1a]" />
                  <div className="relative z-10 p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-red-400" />
                      <h3 className="font-serif text-lg font-bold">{tourmenteData.sections.agression1940.naCham.titre}</h3>
                    </div>
                    <p className="text-xs uppercase tracking-wide text-red-400 font-bold">{tourmenteData.sections.agression1940.naCham.terrain}</p>
                    <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.agression1940.naCham.texte}</p>
                    <div className="bg-red-900/30 border border-red-800/30 rounded-lg p-4">
                      <p className="text-sm font-bold text-red-300">{tourmenteData.sections.agression1940.naCham.bilan}</p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4" data-testid="bloc-analyse-tactique">
                  <div className="bg-white/5 border border-emerald-900/30 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-emerald-400">Points forts</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.agression1940.analyseTactique.pointsForts}</p>
                  </div>
                  <div className="bg-white/5 border border-red-900/30 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-red-400">Points faibles</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.agression1940.analyseTactique.pointsFaibles}</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3" data-testid="bloc-consequences-1940">
                  <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.agression1940.consequences.accordStationnement}</p>
                  <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.agression1940.consequences.isolement}</p>
                  <p className="text-sm italic opacity-75 border-l-4 border-red-800 pl-4 py-1">{tourmenteData.sections.agression1940.consequences.preparationSecrete}</p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-guerre-thai">
                <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{tourmenteData.sections.guerreThai.titre}</h2>
                </div>

                <div className="space-y-3">
                  <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.guerreThai.contexte}</p>
                  <p className="text-sm leading-relaxed opacity-85">{tourmenteData.sections.guerreThai.agression}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-red-400">Le 9e RIC au Cambodge</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.guerreThai.engagement}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-red-400">Conditions de combat</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.guerreThai.conditions}</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#2a1f14] to-[#1a1a1a]" />
                  <div className="relative z-10 p-6 md:p-8 space-y-4">
                    <h3 className="font-serif text-lg font-bold uppercase tracking-wide">Un dénouement amer</h3>
                    <motion.div
                      className="w-16 h-0.5 bg-red-700"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="space-y-3">
                      <div className="bg-emerald-900/20 border border-emerald-900/30 rounded-lg p-4">
                        <h4 className="text-xs uppercase tracking-wide font-bold text-emerald-400 mb-1">Succès militaire</h4>
                        <p className="text-sm opacity-85">{tourmenteData.sections.guerreThai.succesNaval}</p>
                      </div>
                      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                        <h4 className="text-xs uppercase tracking-wide font-bold text-red-400 mb-1">Médiation japonaise</h4>
                        <p className="text-sm opacity-85">{tourmenteData.sections.guerreThai.mediationJaponaise}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-sm italic opacity-75 border-l-4 border-red-800 pl-4">{tourmenteData.sections.guerreThai.consequences}</p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-coup-de-force">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/80 to-black" />
                <div className="relative z-10 p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-3">
                    <Skull className="h-6 w-6 text-red-500" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">{tourmenteData.sections.coupDeForce.titre}</h2>
                  </div>
                  <motion.div
                    className="w-20 h-0.5 bg-red-700"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <p className="text-base leading-relaxed opacity-90">{tourmenteData.sections.coupDeForce.texte}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-red-900/30 border border-red-800/30 rounded-lg p-4">
                      <h4 className="text-xs uppercase tracking-wide font-bold text-red-400 mb-2">Pertes</h4>
                      <p className="text-sm opacity-85">{tourmenteData.sections.coupDeForce.pertes}</p>
                    </div>
                    <div className="bg-red-900/30 border border-red-800/30 rounded-lg p-4">
                      <h4 className="text-xs uppercase tracking-wide font-bold text-red-400 mb-2">Captivité</h4>
                      <p className="text-sm opacity-85">{tourmenteData.sections.coupDeForce.captivite}</p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-guerilla">
                <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                  <TreePine className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{tourmenteData.sections.guerilla.titre}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm text-red-400">La guérilla Reul</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.guerilla.guerillaReul}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                    <h4 className="font-serif font-bold text-sm text-red-400">La colonne Alessandri</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{tourmenteData.sections.guerilla.colonneAlessandri}</p>
                  </div>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-retour">
                <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                  <Flag className="h-5 w-5 text-red-500" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{tourmenteData.sections.retour.titre}</h2>
                </div>

                <Accordion type="multiple" className="space-y-3">
                  <AccordionItem value="yenshan" className="border border-white/10 rounded-xl bg-white/5 px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-base font-bold py-4 hover:no-underline text-[#e8dcc5]">
                      Drame d'Yen Shan — 12 août 1945
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm opacity-80 leading-relaxed pb-4">{tourmenteData.sections.retour.yenShan}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="reconquete" className="border border-white/10 rounded-xl bg-white/5 px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-base font-bold py-4 hover:no-underline text-[#e8dcc5]">
                      La reconquête — Phong To & Dien Bien Phu
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm opacity-80 leading-relaxed pb-4">{tourmenteData.sections.retour.reconquete}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="drapeau" className="border border-red-900/30 rounded-xl bg-red-950/20 px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-base font-bold py-4 hover:no-underline text-[#e8dcc5]">
                      <div className="flex items-center gap-2">
                        <Flag className="h-4 w-4 text-red-400" /> Le drapeau sauvé
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm opacity-80 leading-relaxed pb-4">{tourmenteData.sections.retour.drapeauSauve}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-sm italic opacity-75 border-l-4 border-red-800 pl-4">{tourmenteData.sections.retour.dissolution}</p>
                </div>
              </section>
            </FadeInSection>
          </>
        )}

        {showArchives && (
          <FadeInSection>
            <section className="space-y-6" data-testid="bloc-quiz">
              <div className="flex items-center gap-3 border-b-2 border-red-800/40 pb-4">
                <HelpCircle className="h-5 w-5 text-red-500" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold">Quiz</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {tourmenteData.quiz.map((q, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 cursor-pointer hover:bg-white/8 transition-colors"
                    onClick={() => setQuizRevealed(prev => ({ ...prev, [i]: !prev[i] }))}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-testid={`quiz-question-${i}`}
                  >
                    <p className="text-sm font-bold mb-3">{q.question}</p>
                    {quizRevealed[i] ? (
                      <motion.p
                        className="text-sm text-red-400 font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {q.reponse}
                      </motion.p>
                    ) : (
                      <p className="text-xs italic opacity-50">Touchez pour révéler la réponse</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-conclusion">
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#2a1f14] to-[#1a1a1a]" />
            <div className="relative z-10 p-8 md:p-12 space-y-4">
              <p className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">
                {tourmenteData.nextStep}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <PageNavFooter {...nav} accent="#4a3b2a" />
        </FadeInSection>
      </div>
    </div>
  );
}
