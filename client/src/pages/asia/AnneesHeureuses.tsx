import { heureusesData } from "@/lib/heureuses-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  RotateCcw, Music, Users, Landmark, Image as ImageIcon,
  MapPin, TreePine, Award, Volume2
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

type ReadingMode = 'decouvrir' | 'archives';

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

function SceneCard({ title, parenthese, index }: { title: string; parenthese: string; index: number }) {
  return (
    <motion.div
      className="bg-white/60 border border-[#4a3b2a]/10 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      data-testid={`scene-card-${index}`}
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#4a3b2a]/10 rounded-lg w-12 h-12 flex items-center justify-center shrink-0">
          <ImageIcon className="h-5 w-5 opacity-30" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm leading-snug">{title}</h4>
          <p className="text-xs italic opacity-60 mt-1.5 leading-relaxed">{parenthese}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AnneesHeureusesPage() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('decouvrir');
  const { scrollYProgress } = useScroll();

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
              <ArrowLeft className="mr-2 h-4 w-4" /> Accueil
            </Button>
          </Link>
          <Link href="/asie/siberie-ww1">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#4a3b2a]/10" data-testid="link-back-asie">
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
          <div className="flex items-center gap-3 mb-2">
            <TreePine className="h-8 w-8 text-[#4a3b2a]/60" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">ASIE — Entre‑deux‑guerres</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight" data-testid="text-page-title">
            {heureusesData.title}
          </h1>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed max-w-3xl">
            {heureusesData.subtitle}
          </p>
          <p className="text-base italic opacity-75 border-l-4 border-[#dcb575] pl-4 py-1 max-w-2xl">
            {heureusesData.accroche}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'decouvrir' as ReadingMode, label: 'Découvrir (2–4 min)', icon: Clock },
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
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-resume">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <TreePine className="h-6 w-6 text-[#dcb575]" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">Résumé </h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">
                {heureusesData.resume}
              </p>
              <div className="mt-4 space-y-2">
                <h4 className="font-bold uppercase text-xs tracking-widest text-[#dcb575]">À retenir</h4>
                <ul className="space-y-1.5">
                  {heureusesData.aRetenir.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-[#dcb575] mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-6" data-testid="bloc-hanoi">
            <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
              <MapPin className="h-5 w-5" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Hanoï en 3 repères</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {heureusesData.hanoiReperes.map((repere, i) => (
                <motion.div
                  key={i}
                  className="bg-[#4a3b2a] text-[#e8dcc5] rounded-xl p-5 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  data-testid={`hanoi-repere-${i}`}
                >
                  <div className="bg-white/10 rounded-lg h-20 flex items-center justify-center mb-3">
                    <Landmark className="h-8 w-8 opacity-30" />
                  </div>
                  <h4 className="font-serif font-bold text-sm">{repere.title}</h4>
                  <p className="text-xs italic opacity-60 mt-1">{repere.parenthese}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-xl" data-testid="bloc-musique">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50]" />
            <div className="relative z-10 text-[#ecf0f1] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <Music className="h-6 w-6 text-[#dcb575]" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">La musique du régiment</h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">{heureusesData.musique.texte}</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {heureusesData.musique.documents.map((doc, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 rounded-lg p-4 border border-white/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <div className="bg-white/5 rounded h-16 flex items-center justify-center mb-2">
                      <Volume2 className="h-6 w-6 opacity-20" />
                    </div>
                    <p className="text-xs font-medium">{doc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs italic opacity-50">{heureusesData.musique.parenthese}</p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-6" data-testid="bloc-1934">
            <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
              <Users className="h-5 w-5" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Tonkin 1934 — terrain & hommes</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {heureusesData.tonkin1934.cartes.map((carte, i) => (
                <motion.div
                  key={i}
                  className="bg-white/50 border border-[#4a3b2a]/10 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="bg-[#4a3b2a]/10 h-24 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 opacity-20" />
                  </div>
                  <p className="text-sm font-serif font-bold p-3">{carte}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#f5eedf] border border-[#4a3b2a]/10 rounded-xl p-5 space-y-3">
              <p className="text-sm leading-relaxed opacity-90">{heureusesData.tonkin1934.texte}</p>
              <p className="text-xs italic opacity-70 border-l-4 border-[#dcb575]/40 pl-3">{heureusesData.tonkin1934.legende}</p>
            </div>
            <p className="text-xs italic opacity-50">{heureusesData.tonkin1934.parenthese}</p>
          </section>
        </FadeInSection>

        {showArchives && (
          <FadeInSection>
            <section className="space-y-8" data-testid="bloc-archives">
              <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
                <Award className="h-5 w-5" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold">Archives</h2>
              </div>
              <p className="text-sm italic opacity-70">{heureusesData.archives.subtitle}</p>

              <div className="bg-[#f5eedf] border border-[#4a3b2a]/10 rounded-xl p-5 space-y-3">
                <div className="bg-[#4a3b2a]/10 rounded-lg h-32 flex items-center justify-center">
                  <Users className="h-10 w-10 opacity-20" />
                </div>
                <p className="text-sm leading-relaxed opacity-90">{heureusesData.archives.officiers}</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm leading-relaxed opacity-90">{heureusesData.archives.introFrech}</p>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="discours" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                  <AccordionTrigger className="font-serif text-lg md:text-xl font-bold py-5 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" /> Discours du colonel Frech — 1er mars 1932
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-4 space-y-4">
                      <blockquote className="text-sm leading-relaxed opacity-85 whitespace-pre-line font-serif italic border-l-4 border-[#dcb575] pl-4">
                        {heureusesData.archives.discours1932}
                      </blockquote>
                      <div className="text-sm leading-relaxed opacity-80 whitespace-pre-line">
                        {heureusesData.archives.postFrech}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="insigne" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                  <AccordionTrigger className="font-serif text-lg md:text-xl font-bold py-5 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5" /> Insigne du 9e RIC — 1939
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-4 space-y-4">
                      <div className="flex justify-center">
                        <img
                          src="/images/insigne-9ric-1939.png"
                          alt="Insigne du 9e RIC — 1939 — Marsouin Toujours"
                          className="h-64 object-contain rounded-lg shadow-md"
                          data-testid="img-insigne-1939"
                        />
                      </div>
                      <p className="text-sm leading-relaxed opacity-85 whitespace-pre-line">
                        {heureusesData.archives.insigne1939}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-conclusion">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-4">
              <p className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">
                {heureusesData.nextStep}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="text-center space-y-8 py-12 border-t-2 border-[#4a3b2a]/10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/asie/siberie-ww1">
                <Button variant="outline" className="border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10 px-8 py-6 text-lg" data-testid="button-back-siberie">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Sibérie
                </Button>
              </Link>
              <Link href="/#tonkin">
                <Button variant="outline" className="border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10 px-8 py-6 text-lg" data-testid="button-back-themes">
                  Revenir aux thèmes
                </Button>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
