import { siberieData } from "@/lib/siberie-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Scroll, Check, Search,
  Crosshair, Map as MapIcon, RotateCcw, Info,
  Globe, Train, Snowflake, Users, Compass, Shield,
  Thermometer, Award, AlertTriangle, Sword
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

const mapLocations = [
  { name: "Hanoï", lat: 21.028, lng: 105.854, date: "24 juil. 1917", type: "start" as const, desc: "Départ du bataillon (1ère & 8e Cies)" },
  { name: "Vladivostok", lat: 43.116, lng: 131.874, date: "9 août 1918", type: "major" as const, desc: "Arrivée par le vapeur André Lebon" },
  { name: "Oussourik", lat: 43.800, lng: 131.951, date: "Août 1918", type: "combat" as const, desc: "Premier combat contre les Bolcheviks" },
  { name: "Doukoskoïe", lat: 44.05, lng: 132.3, date: "23-24 août 1918", type: "combat" as const, desc: "Combat — prise du village" },
  { name: "Kharbine", lat: 45.75, lng: 126.65, date: "Sept. 1918", type: "etape" as const, desc: "Étape en Mandchourie" },
  { name: "Tchita", lat: 52.034, lng: 113.500, date: "Oct. 1918", type: "etape" as const, desc: "Étape en Transbaïkalie" },
  { name: "Irkoutsk", lat: 52.297, lng: 104.296, date: "Nov. 1918", type: "etape" as const, desc: "Étape près du lac Baïkal" },
  { name: "Omsk", lat: 54.989, lng: 73.369, date: "Déc. 1918", type: "etape" as const, desc: "Capitale provisoire de Koltchak" },
  { name: "Tchéliabinsk", lat: 55.160, lng: 61.403, date: "Janv.–mars 1919", type: "etape" as const, desc: "Cantonnement hivernal, −30 à −50 °C" },
  { name: "Ourfa", lat: 37.167, lng: 38.800, date: "21 nov. 1918", type: "combat" as const, desc: "Destination finale — Turquie" },
];

const maritimeRoute: [number, number][] = [
  [21.028, 105.854],
  [16.0, 108.2],
  [12.0, 109.3],
  [8.0, 110.0],
  [5.0, 114.0],
  [7.0, 120.0],
  [15.0, 120.5],
  [22.0, 121.0],
  [30.0, 125.0],
  [35.0, 129.0],
  [43.116, 131.874],
];

const transiberienRoute: [number, number][] = [
  [43.116, 131.874],
  [43.800, 131.951],
  [44.05, 132.3],
  [45.75, 126.65],
  [52.034, 113.500],
  [52.297, 104.296],
  [54.989, 73.369],
  [55.160, 61.403],
];

const cheliabToOurfa: [number, number][] = [
  [55.160, 61.403],
  [52.0, 55.0],
  [48.0, 48.0],
  [44.0, 43.0],
  [41.0, 40.0],
  [37.167, 38.800],
];

function createIcon(type: string) {
  const color = type === "combat" ? "#c0392b" : type === "start" ? "#2c7a3a" : type === "major" ? "#dcb575" : "#4a3b2a";
  const size = type === "start" || type === "major" || type === "combat" ? 14 : 10;
  const border = type === "combat" ? "#8B0000" : "#4a3b2a";
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid ${border};box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function FitBoundsOnMount() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(
      mapLocations.map(loc => [loc.lat, loc.lng] as [number, number])
    );
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map]);
  return null;
}

function TranssiberienMap() {
  return (
    <div className="relative bg-[#f5eedf] border-2 border-[#4a3b2a]/20 rounded-xl overflow-hidden shadow-lg">
      <div className="p-4 border-b border-[#4a3b2a]/10 bg-[#4a3b2a]/5">
        <div className="flex items-center gap-2">
          <MapIcon className="h-5 w-5 text-[#4a3b2a]" />
          <h3 className="font-serif font-bold text-lg">Atlas — Déplacements du bataillon (1918–1919)</h3>
        </div>
        <p className="text-xs opacity-60 mt-1">Carte mondiale : route maritime, Transsibérien, et destination finale.</p>
      </div>

      <div className="relative h-[400px] md:h-[500px]" style={{ filter: "sepia(0.25) saturate(0.85)" }}>
        <MapContainer
          center={[45, 85]}
          zoom={3}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
          style={{ background: "#f5eedf" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBoundsOnMount />

          <Polyline
            positions={maritimeRoute}
            pathOptions={{ color: "#4a7a9b", weight: 3, dashArray: "10 6", opacity: 0.8 }}
          />

          <Polyline
            positions={transiberienRoute}
            pathOptions={{ color: "#8B4513", weight: 4, opacity: 0.9 }}
          />

          <Polyline
            positions={cheliabToOurfa}
            pathOptions={{ color: "#c0392b", weight: 3, dashArray: "8 5", opacity: 0.7 }}
          />

          {mapLocations.map((loc, i) => (
            <Marker key={i} position={[loc.lat, loc.lng]} icon={createIcon(loc.type)}>
              <Popup>
                <div className="text-xs" style={{ minWidth: 140 }}>
                  <p className="font-bold text-sm" style={{ color: "#4a3b2a" }}>{loc.name}</p>
                  <p style={{ color: "#dcb575", fontWeight: 600 }}>{loc.date}</p>
                  <p style={{ color: "#4a3b2a", opacity: 0.8 }}>{loc.desc}</p>
                  {loc.type === "combat" && <p style={{ color: "#c0392b", fontWeight: 700 }}>Lieu de combat</p>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="flex flex-wrap gap-4 p-4 bg-[#4a3b2a]/5 border-t border-[#4a3b2a]/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed border-[#4a7a9b]" />
          <span>Route maritime</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#8B4513]" />
          <span>Transsibérien</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed border-[#c0392b]" />
          <span>Vers Ourfa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#c0392b] border border-[#8B0000]" />
          <span>Combat</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4a3b2a] opacity-60 border border-[#4a3b2a]" />
          <span>Étape</span>
        </div>
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

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'comprendre' as ReadingMode, label: 'Comprendre (5 min)', icon: Clock },
              { mode: 'recit' as ReadingMode, label: 'Récit (10–12 min)', icon: Scroll },
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
          <section className="space-y-4" data-testid="bloc-timeline">
            <div className="flex items-center gap-2 border-b-2 border-[#dcb575] pb-3">
              <Clock className="h-5 w-5" />
              <h2 className="font-serif text-2xl font-bold">Chronologie — 10 repères</h2>
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
                {siberieData.resume}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="space-y-6" data-testid="bloc-contexte">
            <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
              <Globe className="h-5 w-5" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Contexte géopolitique</h2>
            </div>
            <div className="space-y-4">
              {siberieData.contexte.text.map((p, idx) => {
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
            <motion.div
              className="bg-[#4a3b2a] text-[#e8dcc5] p-5 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-[#dcb575]">À retenir</h4>
              <ul className="space-y-2">
                {siberieData.contexte.keyPoints.map((kp, k) => (
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
          </section>
        </FadeInSection>

        {showRecit && (
          <>
            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-recit-intro">
                <div className="flex items-center gap-3 border-b-2 border-[#dcb575] pb-4">
                  <Scroll className="h-5 w-5" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">Ce qui se passe</h2>
                </div>
                <div className="bg-[#fdfbf7] border border-[#4a3b2a]/10 rounded-xl p-6 space-y-3">
                  {siberieData.recitIntro.split('\n').filter(l => l.trim()).map((line, i) => (
                    <p key={i} className={`text-sm leading-relaxed ${line.startsWith('ACTE') ? 'font-bold text-[#4a3b2a]' : 'opacity-80 italic'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section data-testid="bloc-carte">
                <TranssiberienMap />
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="relative overflow-hidden rounded-2xl shadow-xl" data-testid="bloc-pertes">
                <div className="bg-[#fdfbf7] border border-[#4a3b2a]/10 rounded-2xl p-8 md:p-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-[#c0392b]" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold">Bilan des pertes</h2>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 py-4">
                    {[
                      { n: "5", label: "Tués" },
                      { n: "16", label: "Blessés" },
                      { n: "5", label: "Disparus" },
                      { n: "5", label: "Morts (blessures)" },
                      { n: "6", label: "Morts (maladie)" },
                      { n: "25", label: "Gelures" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="text-center bg-[#4a3b2a]/5 rounded-lg p-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p className="text-2xl font-bold text-[#c0392b]">{stat.n}</p>
                        <p className="text-xs opacity-60 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm opacity-70 italic text-center">
                    Climat : de −30 à −50 °C, bien loin des douceurs indochinoises.
                  </p>
                </div>
              </section>
            </FadeInSection>
          </>
        )}

        {showArchives && (
          <>
            <FadeInSection>
              <section data-testid="bloc-texte-source">
                <Accordion type="single" collapsible>
                  <AccordionItem value="source" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-xl md:text-2xl font-bold py-5 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" /> Texte source intégral
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pb-6 text-sm leading-relaxed opacity-85">
                        {siberieData.texteSource.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-citation">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50]" />
                <div className="relative z-10 text-[#ecf0f1] p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-[#dcb575]" />
                    <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-widest">Citation à l'ordre de l'armée</h2>
                  </div>
                  <p className="text-xs opacity-50">Ordre du ministre de la guerre, 30 avril 1919 — J.O.R.F. 24 juin 1919</p>
                  <motion.div
                    className="w-20 h-0.5 bg-[#dcb575]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <blockquote className="text-base leading-relaxed opacity-90 italic border-l-4 border-[#dcb575] pl-6">
                    {siberieData.citation.split('\n\n').map((para, i) => (
                      <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
                    ))}
                  </blockquote>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section data-testid="bloc-gallery">
                <Accordion type="single" collapsible>
                  <AccordionItem value="cartes" className="border border-[#4a3b2a]/20 rounded-xl bg-[#fdfbf7] px-6 shadow-sm">
                    <AccordionTrigger className="font-serif text-xl md:text-2xl font-bold py-5 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <MapIcon className="h-5 w-5" /> Images & légendes
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
            <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-binh-lieu">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#2a1f14] to-[#4a3b2a]" />
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%221%22%20fill%3D%22%23dcb575%22/%3E%3C/svg%3E')]" />
              <div className="relative z-10 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-[#e74c3c]" />
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-[#e8dcc5] uppercase tracking-widest">{siberieData.binhLieu.title}</h2>
                    <p className="text-sm text-[#dcb575]/70 mt-1">{siberieData.binhLieu.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  className="w-20 h-0.5 bg-[#dcb575]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <p className="text-sm text-[#e8dcc5]/80 italic">
                  {siberieData.binhLieu.resume}
                </p>

                {showArchives ? (
                  <div className="space-y-4 pt-4">
                    {siberieData.binhLieu.texteSource.map((p, i) => (
                      <motion.p
                        key={i}
                        className="text-sm text-[#e8dcc5]/85 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white/5 border border-[#dcb575]/20 rounded-xl p-4">
                    <p className="text-xs text-[#dcb575]/60 italic text-center">
                      Texte source intégral disponible en mode « Archives (approfondir) ».
                    </p>
                  </div>
                )}

                <motion.div
                  className="bg-white/10 text-[#e8dcc5] p-5 rounded-xl border border-[#dcb575]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-[#dcb575]">À retenir</h4>
                  <ul className="space-y-2">
                    {siberieData.binhLieu.keyPoints.map((kp, k) => (
                      <li key={k} className="flex gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-[#dcb575] mt-0.5" /> {kp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </section>
          </FadeInSection>
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
