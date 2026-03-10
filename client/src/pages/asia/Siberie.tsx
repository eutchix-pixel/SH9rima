import { siberieData } from "@/lib/siberie-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Scroll, Check, Search,
  Crosshair, Map as MapIcon, RotateCcw, Info,
  Globe, Train, Anchor, Snowflake, Users, Compass, Ship,
  Thermometer, Shield
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

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

function QuizCard({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer h-44"
      onClick={() => setFlipped(!flipped)}
      data-testid={`quiz-card-${index}`}
    >
      <div className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
        <div className="absolute inset-0 bg-[#4a3b2a] text-[#e8dcc5] rounded-xl p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden' }}>
          <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Question</p>
          <p className="text-sm font-medium leading-relaxed">{question}</p>
          <p className="text-xs opacity-40 mt-auto pt-2">Cliquer pour retourner</p>
        </div>
        <div className="absolute inset-0 bg-[#dcb575] text-[#4a3b2a] rounded-xl p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Réponse</p>
          <p className="text-base font-bold leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineInteractive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4" data-testid="timeline-interactive">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#dcb575]" />
        {siberieData.reperes.map((rep, i) => (
          <motion.div
            key={i}
            className="relative pl-12 pb-6 cursor-pointer group"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className={`absolute left-2 top-1 w-5 h-5 rounded-full border-2 transition-colors duration-300 flex items-center justify-center
              ${activeIndex === i ? 'bg-[#dcb575] border-[#4a3b2a]' : 'bg-white border-[#dcb575] group-hover:bg-[#dcb575]/30'}`}>
              <div className={`w-2 h-2 rounded-full ${activeIndex === i ? 'bg-[#4a3b2a]' : 'bg-[#dcb575]'}`} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-serif font-bold text-sm text-[#dcb575] whitespace-nowrap">{rep.date}</span>
              <span className={`text-sm transition-colors ${activeIndex === i ? 'font-bold text-[#4a3b2a]' : 'opacity-80'}`}>{rep.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const blocIcons: Record<string, React.ReactNode> = {
  enjeu: <Globe className="h-5 w-5" />,
  acteurs: <Users className="h-5 w-5" />,
  transsiberien: <Train className="h-5 w-5" />,
  consequences: <Compass className="h-5 w-5" />,
};

const etapeIcons = [Ship, Anchor, Crosshair, Train, Snowflake, MapIcon, Shield, Globe, Crosshair];

function ItineraireTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div data-testid="itineraire-timeline">
      <div className="overflow-x-auto pb-4 -mx-2">
        <div className="flex items-start gap-0 min-w-[900px] px-2">
          {siberieData.itineraire.map((step, i) => {
            const Icon = etapeIcons[i] || MapIcon;
            const isActive = activeStep === i;
            return (
              <div key={i} className="flex items-start flex-1">
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(isActive ? null : i)}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${isActive
                        ? 'bg-[#4a3b2a] border-[#dcb575] text-[#dcb575] scale-110'
                        : 'bg-white border-[#4a3b2a]/20 text-[#4a3b2a]/60 group-hover:border-[#dcb575] group-hover:text-[#dcb575]'
                      }`}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <p className={`text-xs font-bold mt-2 text-center max-w-[90px] leading-tight transition-colors ${isActive ? 'text-[#4a3b2a]' : 'opacity-60'}`}>
                    {step.etape}
                  </p>
                  {isActive && (
                    <motion.div
                      className="mt-2 bg-[#4a3b2a] text-[#e8dcc5] rounded-lg p-3 text-xs max-w-[140px] text-center shadow-lg"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.detail}
                    </motion.div>
                  )}
                </div>
                {i < siberieData.itineraire.length - 1 && (
                  <div className="flex-1 flex items-center mt-6 px-1">
                    <div className="w-full h-0.5 bg-[#dcb575]/40" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #dcb575 0, #dcb575 8px, transparent 8px, transparent 14px)' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-xs opacity-50 italic text-center mt-2">Cliquez sur une étape pour voir le détail. Faites défiler horizontalement si nécessaire.</p>
    </div>
  );
}

function TranssiberienMap() {
  return (
    <div className="relative bg-[#f5eedf] border-2 border-[#4a3b2a]/20 rounded-xl overflow-hidden shadow-lg">
      <div className="p-4 border-b border-[#4a3b2a]/10 bg-[#4a3b2a]/5">
        <div className="flex items-center gap-2">
          <MapIcon className="h-5 w-5 text-[#4a3b2a]" />
          <h3 className="font-serif font-bold text-lg">Atlas — Itinéraire du 9e RIC en Sibérie</h3>
        </div>
        <p className="text-xs opacity-60 mt-1">Schéma non à l'échelle : Hanoï → Vladivostok → Transsibérien → Oufa.</p>
      </div>

      <div className="relative h-72 md:h-96 p-4">
        <svg viewBox="0 0 900 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="900" height="350" fill="#f5eedf" />

          <path d="M80 260 Q200 320 340 240" stroke="#4a7a9b" strokeWidth="2" fill="none" strokeDasharray="6 3" />
          <text x="200" y="300" fontSize="8" fill="#4a7a9b" opacity="0.7" textAnchor="middle">Route maritime</text>

          <circle cx="80" cy="260" r="14" fill="#dcb575" stroke="#4a3b2a" strokeWidth="2" />
          <text x="80" y="264" textAnchor="middle" fontSize="8" fill="#4a3b2a" fontWeight="bold">H</text>
          <text x="80" y="290" textAnchor="middle" className="font-serif" fontSize="10" fill="#4a3b2a" fontWeight="bold">HANOÏ</text>
          <text x="80" y="302" textAnchor="middle" fontSize="7" fill="#4a3b2a" opacity="0.5">+35 °C</text>

          <circle cx="340" cy="240" r="16" fill="#dcb575" stroke="#4a3b2a" strokeWidth="2" />
          <text x="340" y="244" textAnchor="middle" fontSize="8" fill="#4a3b2a" fontWeight="bold">V</text>
          <text x="340" y="270" textAnchor="middle" className="font-serif" fontSize="10" fill="#4a3b2a" fontWeight="bold">VLADIVOSTOK</text>
          <text x="340" y="282" textAnchor="middle" fontSize="7" fill="#4a3b2a" opacity="0.5">Port d'entrée</text>

          <line x1="356" y1="235" x2="830" y2="120" stroke="#8B4513" strokeWidth="3" strokeDasharray="8 4" />
          <line x1="356" y1="235" x2="830" y2="120" stroke="#dcb575" strokeWidth="1.5" />

          {[
            { x: 420, y: 218, label: "Amour", sub: "Zone de combat" },
            { x: 500, y: 200, label: "Baïkal", sub: "Transbaïkalie" },
            { x: 580, y: 180, label: "Krasnoïarsk", sub: "" },
            { x: 660, y: 162, label: "Omsk", sub: "Gouv. Blanc" },
            { x: 740, y: 142, label: "Tchéliabinsk", sub: "Oural" },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="5" fill="#4a3b2a" opacity="0.4" />
              <text x={pt.x} y={pt.y - 12} textAnchor="middle" fontSize="8" fill="#4a3b2a" fontWeight="bold">{pt.label}</text>
              {pt.sub && <text x={pt.x} y={pt.y + 16} textAnchor="middle" fontSize="6.5" fill="#4a3b2a" opacity="0.5">{pt.sub}</text>}
            </g>
          ))}

          <circle cx="830" cy="120" r="14" fill="#c0392b" stroke="#4a3b2a" strokeWidth="2" />
          <text x="830" y="124" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">!</text>
          <text x="830" y="105" textAnchor="middle" className="font-serif" fontSize="10" fill="#c0392b" fontWeight="bold">OUFA</text>
          <text x="830" y="148" textAnchor="middle" fontSize="7" fill="#4a3b2a" opacity="0.5">Point extrême</text>

          <text x="590" y="155" textAnchor="middle" className="font-serif" fontSize="9" fill="#8B4513" fontWeight="bold" letterSpacing="4">TRANSSIBÉRIEN</text>

          <rect x="15" y="15" width="170" height="80" rx="6" fill="white" opacity="0.8" stroke="#4a3b2a" strokeWidth="0.5" />
          <text x="25" y="32" fontSize="8" fill="#4a3b2a" fontWeight="bold">LÉGENDE</text>
          <line x1="25" y1="46" x2="50" y2="46" stroke="#4a7a9b" strokeWidth="2" strokeDasharray="4 2" />
          <text x="55" y="49" fontSize="7" fill="#4a3b2a">Route maritime</text>
          <line x1="25" y1="62" x2="50" y2="62" stroke="#dcb575" strokeWidth="2" />
          <text x="55" y="65" fontSize="7" fill="#4a3b2a">Transsibérien</text>
          <circle cx="32" cy="78" r="4" fill="#c0392b" />
          <text x="55" y="81" fontSize="7" fill="#4a3b2a">Zone de front</text>

          <text x="600" y="340" textAnchor="middle" fontSize="8" fill="#4a3b2a" opacity="0.3" fontStyle="italic">−40 °C en hiver</text>
        </svg>
      </div>
    </div>
  );
}

export default function SiberiePage() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const { scrollYProgress } = useScroll();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGlossary = siberieData.glossary.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <ArrowLeft className="mr-2 h-4 w-4" /> Accueil
            </Button>
          </Link>
          <Link href="/asie/tonkin-1901-1914">
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
            <Snowflake className="h-8 w-8 text-[#4a3b2a]/60" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">ASIE — Grande Guerre</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight" data-testid="text-page-title">
            {siberieData.title}
          </h1>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed max-w-3xl">
            {siberieData.subtitle}
          </p>
          <p className="text-base italic opacity-75 border-l-4 border-[#dcb575] pl-4 py-1 max-w-2xl">
            {siberieData.question}
          </p>

          <div className="bg-[#4a3b2a]/5 border border-[#4a3b2a]/10 rounded-xl p-4 max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-bold opacity-50 mb-2">Repères</p>
            <p className="text-sm opacity-80 leading-relaxed">
              1917 : révolutions russes &bull; mars 1918 : Brest‑Litovsk &bull; 30 juin 1918 : les Tchèques prennent Vladivostok &bull; 24 juil. 1918 : départ du 9e RIC &bull; 1919–1920 : désengagement
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'comprendre' as ReadingMode, label: 'Essentiel (5 min)', icon: Clock },
              { mode: 'recit' as ReadingMode, label: 'Visite complète', icon: Scroll },
              { mode: 'archives' as ReadingMode, label: 'Archives', icon: BookOpen },
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
          <section className="space-y-4" data-testid="bloc-timeline">
            <div className="flex items-center gap-2 border-b-2 border-[#dcb575] pb-3">
              <Clock className="h-5 w-5" />
              <h2 className="font-serif text-2xl font-bold">Chronologie — 6 repères</h2>
            </div>
            <p className="text-sm opacity-60 italic">Cliquez sur un repère pour le mettre en avant.</p>
            <TimelineInteractive />
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-resume">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <Snowflake className="h-6 w-6 text-[#dcb575]" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">Résumé — 60 secondes</h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">
                La Sibérie devient un enjeu parce que la Russie s'effondre politiquement en 1917, puis sort de la guerre en 1918. Les Légions Tchèques — 50 000 soldats d'élite — se révoltent et prennent Vladivostok. La France envoie 454 hommes du 9e RIC, embarqués à Hanoï sur le vapeur André Lebon, pour sécuriser leur retour et peser sur le théâtre. Le bataillon remonte le Transsibérien de Vladivostok jusqu'à Oufa, traversant un continent entier — du +35 °C du Tonkin au −40 °C de l'hiver sibérien.
              </p>
            </div>
          </section>
        </FadeInSection>

        {siberieData.blocs
          .filter(bloc => {
            if (bloc.mode === 'comprendre') return true;
            if (bloc.mode === 'recit') return showRecit;
            if (bloc.mode === 'archives') return showArchives;
            return true;
          })
          .map((bloc, blocIdx) => (
          <FadeInSection key={bloc.id} delay={blocIdx * 0.05}>
            <section className="space-y-6" data-testid={`bloc-${bloc.id}`}>
              <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
                {blocIcons[bloc.id] || <Info className="h-5 w-5" />}
                <h2 className="font-serif text-2xl md:text-3xl font-bold">
                  {bloc.title}
                </h2>
              </div>

              <div className="space-y-4">
                {bloc.content.map((p, idx) => {
                  const isParenthese = p.startsWith("(Parenthèse");
                  return (
                    <motion.p
                      key={idx}
                      className={`text-base leading-relaxed ${isParenthese ? 'italic opacity-70 border-l-4 border-[#dcb575]/40 pl-4' : 'opacity-90'}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      {p}
                    </motion.p>
                  );
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

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-unite">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50]" />
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%228%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h8v8H0z%22%20fill%3D%22none%22%20stroke%3D%22%23ecf0f1%22%20stroke-width%3D%220.5%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#ecf0f1] p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-[#dcb575]" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">Le bataillon de marche du 9e RIC</h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-widest text-[#dcb575] font-bold mb-1">Effectifs</p>
                    <p className="text-lg font-bold">{siberieData.unite.effectifs}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-widest text-[#dcb575] font-bold mb-1">Commandant</p>
                    <p className="text-sm">{siberieData.unite.commandant}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-widest text-[#dcb575] font-bold mb-2">Composition</p>
                    {siberieData.unite.detail.map((d, i) => (
                      <p key={i} className="text-sm flex items-center gap-2">
                        <Check className="h-3 w-3 text-[#dcb575] shrink-0" /> {d}
                      </p>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-widest text-[#dcb575] font-bold mb-1">Départ</p>
                    <p className="text-sm">{siberieData.unite.depart}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {showRecit && (
          <>
            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-itineraire">
                <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
                  <Train className="h-5 w-5" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">Itinéraire — Hanoï → Oufa</h2>
                </div>
                <ItineraireTimeline />
              </section>
            </FadeInSection>

            <FadeInSection>
              <section data-testid="bloc-carte">
                <TranssiberienMap />
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="relative overflow-hidden rounded-2xl shadow-xl" data-testid="bloc-choc-thermique">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e74c3c]/10 via-transparent to-[#3498db]/10" />
                <div className="relative bg-[#fdfbf7] border border-[#4a3b2a]/10 rounded-2xl p-8 md:p-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-6 w-6 text-[#e74c3c]" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold">{siberieData.chocThermique.title}</h2>
                  </div>
                  <div className="flex items-center gap-4 justify-center py-4">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-3xl font-bold text-[#e74c3c]">+35 °C</p>
                      <p className="text-xs opacity-60 mt-1">Tonkin</p>
                    </motion.div>
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <ArrowRight className="h-8 w-8 text-[#4a3b2a]/30" />
                      <p className="text-xs opacity-40 mt-1">75° d'écart</p>
                    </motion.div>
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <p className="text-3xl font-bold text-[#3498db]">−40 °C</p>
                      <p className="text-xs opacity-60 mt-1">Sibérie</p>
                    </motion.div>
                  </div>
                  <p className="text-base leading-relaxed opacity-85 italic text-center max-w-2xl mx-auto">
                    {siberieData.chocThermique.text}
                  </p>
                </div>
              </section>
            </FadeInSection>
          </>
        )}

        {showArchives && (
          <>
            <FadeInSection>
              <section data-testid="bloc-gallery">
                <Accordion type="single" collapsible>
                  <AccordionItem value="cartes" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-xl md:text-2xl font-bold py-5 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <MapIcon className="h-5 w-5" /> Cartes & photos
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid sm:grid-cols-2 gap-4 pb-4">
                        {siberieData.gallery.map((item, i) => (
                          <div key={i} className="bg-white/50 border border-[#4a3b2a]/10 rounded-lg overflow-hidden">
                            <div className="bg-[#4a3b2a]/10 h-32 flex items-center justify-center" title={item.alt}>
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
          </>
        )}

        {showRecit && (
          <FadeInSection>
            <section className="space-y-6" data-testid="bloc-quiz">
              <div className="flex items-center gap-2 border-b-2 border-[#dcb575] pb-3">
                <Crosshair className="h-5 w-5" />
                <h2 className="font-serif text-2xl font-bold">Mini-quiz</h2>
              </div>
              <p className="text-sm opacity-60">Cliquez sur une carte pour voir la réponse.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {siberieData.quiz.map((q, i) => (
                  <QuizCard key={i} question={q.question} answer={q.answer} index={i} />
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-conclusion">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-6">
              <Compass className="h-8 w-8 text-[#dcb575]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest">Conclusion</h2>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">
                {siberieData.conclusion}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="text-center space-y-8 py-12 border-t-2 border-[#4a3b2a]/10">
            <motion.div
              className="w-16 h-1 bg-[#4a3b2a] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <p className="font-serif text-xl md:text-2xl font-bold text-[#4a3b2a]">
              {siberieData.nextStep}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#tonkin">
                <Button variant="outline" className="border-[#4a3b2a] text-[#4a3b2a] hover:bg-[#4a3b2a]/10 px-8 py-6 text-lg" data-testid="button-back-themes">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Revenir aux thèmes
                </Button>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
