import { usePageNav } from "@/hooks/usePageNav";
import PageNavHeader from "@/components/PageNavHeader";
import PageNavFooter from "@/components/PageNavFooter";
import { china1900Data } from "@/lib/china-1900-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Scroll, Check, Search,
  Crosshair, Map as MapIcon, Flag, ChevronDown, RotateCcw, Info
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

const expeditionSteps: { name: string; date: string; coords: [number, number]; detail: string; etape: number }[] = [
  { name: "Ta Kou", date: "7 juillet 1900", coords: [38.97, 117.72], detail: "Débarquement du corps expéditionnaire français — 1 500 hommes sous le commandement du général Frey", etape: 1 },
  { name: "Tien Tsin", date: "11–14 juillet", coords: [39.1235, 117.1980], detail: "Bataille de Tien Tsin — la ville est prise le 14 juillet, jour de la fête nationale", etape: 2 },
  { name: "Pei Tsang", date: "5 août", coords: [39.35, 117.05], detail: "Victoire rapide — les troupes chinoises battent en retraite vers l'ouest", etape: 3 },
  { name: "Toung Tchéou", date: "12–13 août", coords: [39.85, 116.66], detail: "Dernier bivouac avant Pékin — les troupes alliées se regroupent à 3 km de la capitale", etape: 4 },
  { name: "Pékin", date: "14–17 août", coords: [39.9042, 116.4074], detail: "Assaut final — la légation française est atteinte à minuit. Fin du siège des 55 jours", etape: 5 },
];

function createStepIcon(etape: number, name: string, date: string) {
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;display:flex;flex-direction:column;align-items:center;pointer-events:auto">
      <div style="background:#8b1a1a;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.5)">${etape}</div>
      <div style="background:#8b1a1a;color:#fff;padding:3px 10px;border-radius:5px;font-size:13px;font-weight:700;white-space:nowrap;font-family:serif;margin-top:5px;box-shadow:0 2px 6px rgba(0,0,0,.35);letter-spacing:.3px">${name}</div>
      <div style="background:rgba(255,255,255,.92);color:#4a3b2a;padding:2px 7px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;margin-top:3px;box-shadow:0 1px 3px rgba(0,0,0,.15);border:1px solid rgba(139,26,26,.2)">${date}</div>
    </div>`,
    iconSize: [140, 80],
    iconAnchor: [70, 16],
  });
}

const seaRouteHanoiTakou: [number, number][] = [
  [21.03, 105.85],
  [20.86, 106.68],
  [20.3, 107.1],
  [19.5, 107.8],
  [18.8, 109.0],
  [19.2, 110.5],
  [20.0, 111.0],
  [21.0, 111.5],
  [22.3, 114.2],
  [23.4, 116.8],
  [24.5, 118.1],
  [26.1, 119.9],
  [28.0, 121.0],
  [30.6, 122.3],
  [32.0, 122.0],
  [34.0, 121.0],
  [35.5, 120.5],
  [37.0, 122.0],
  [37.8, 121.2],
  [38.3, 119.0],
  [38.97, 117.72],
];

function ExpeditionMap() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-3" data-testid="carte-itineraire">
      <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#4a3b2a]/30 bg-white">
        <div className="absolute top-3 left-14 z-[1000] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow text-xs font-serif font-bold text-[#4a3b2a] border border-[#4a3b2a]/20">
          Itinéraire du Corps Expéditionnaire — Chine 1900
        </div>
        <MapContainer
          center={[39.4, 117.0]}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
          style={{ background: '#f2efe9' }}
        >
          <style>{`
            .leaflet-popup-content-wrapper { background:#fff; color:#4a3b2a; border:2px solid #8b1a1a; border-radius:10px; font-family:serif; box-shadow:0 4px 12px rgba(0,0,0,.15); }
            .leaflet-popup-tip { background:#fff; }
            .leaflet-popup-content { margin:10px 14px; }
          `}</style>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Polyline
            positions={seaRouteHanoiTakou}
            pathOptions={{ color: '#fff', weight: 6, opacity: 0.8 }}
          />
          <Polyline
            positions={seaRouteHanoiTakou}
            pathOptions={{ color: '#1a5276', weight: 3, opacity: 0.8, dashArray: '8,6' }}
          />
          <Marker
            position={[21.03, 105.85]}
            icon={L.divIcon({
              className: '',
              html: `<div style="display:flex;flex-direction:column;align-items:center">
                <div style="background:#1a5276;color:#fff;padding:3px 10px;border-radius:5px;font-size:13px;font-weight:700;white-space:nowrap;font-family:serif;box-shadow:0 2px 6px rgba(0,0,0,.35)">Hanoï</div>
                <div style="background:rgba(255,255,255,.92);color:#1a5276;padding:2px 7px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;margin-top:3px;border:1px solid rgba(26,82,118,.2)">Départ</div>
                <div style="width:10px;height:10px;border-radius:50%;background:#1a5276;border:3px solid #fff;margin-top:4px;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>
              </div>`,
              iconSize: [100, 65],
              iconAnchor: [50, 60],
            })}
          >
            <Popup>
              <div style={{ textAlign: 'center', minWidth: 160 }}>
                <div style={{ fontSize: 16, fontWeight: 900, fontFamily: 'serif', color: '#1a5276' }}>Hanoï</div>
                <div style={{ fontSize: 12, marginTop: 6, lineHeight: 1.5, color: '#333' }}>Point de départ du corps expéditionnaire — traversée maritime le long des côtes de Chine jusqu'à Ta Kou</div>
              </div>
            </Popup>
          </Marker>
          <Polyline
            positions={expeditionSteps.map(s => s.coords)}
            pathOptions={{ color: '#fff', weight: 8, opacity: 0.9 }}
          />
          <Polyline
            positions={expeditionSteps.map(s => s.coords)}
            pathOptions={{ color: '#8b1a1a', weight: 5, opacity: 0.9, dashArray: '14,10' }}
          />
          {expeditionSteps.map((step, i) => {
            if (i < expeditionSteps.length - 1) {
              const next = expeditionSteps[i + 1];
              const midLat = (step.coords[0] + next.coords[0]) / 2;
              const midLng = (step.coords[1] + next.coords[1]) / 2;
              return (
                <Marker
                  key={`arrow-${i}`}
                  position={[midLat, midLng]}
                  icon={L.divIcon({
                    className: '',
                    html: `<div style="color:#8b1a1a;font-size:16px;font-weight:900;text-shadow:0 0 3px #fff,0 0 3px #fff">▸</div>`,
                    iconSize: [16, 16],
                    iconAnchor: [8, 8],
                  })}
                  interactive={false}
                />
              );
            }
            return null;
          })}
          {expeditionSteps.map((step, i) => (
            <Marker
              key={i}
              position={step.coords}
              icon={createStepIcon(step.etape, step.name, step.date)}
              eventHandlers={{ click: () => setSelected(selected === i ? null : i) }}
            >
              <Popup>
                <div style={{ textAlign: 'center', minWidth: 180 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, fontFamily: 'serif', color: '#8b1a1a' }}>{step.name}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#4a3b2a', marginTop: 4, padding: '2px 8px', background: '#f5f0e6', borderRadius: 4, display: 'inline-block' }}>{step.date}</div>
                  <div style={{ fontSize: 12, marginTop: 8, lineHeight: 1.5, color: '#333' }}>{step.detail}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="flex items-center gap-1.5 text-xs text-[#4a3b2a] font-serif">
          <span className="w-5 h-5 rounded-full bg-[#1a5276] text-white flex items-center justify-center text-[10px] font-bold">⚓</span>
          <span className="font-semibold">Hanoï</span>
          <span className="text-[#1a5276] ml-1">⟿</span>
        </div>
        {expeditionSteps.map((step, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-[#4a3b2a] font-serif">
            <span className="w-5 h-5 rounded-full bg-[#8b1a1a] text-white flex items-center justify-center text-[10px] font-bold">{step.etape}</span>
            <span className="font-semibold">{step.name}</span>
            {i < expeditionSteps.length - 1 && <span className="text-[#8b1a1a] ml-1">→</span>}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 text-[10px] text-[#4a3b2a]/70 font-serif">
        <span className="flex items-center gap-1.5"><span className="w-6 h-0.5 bg-[#1a5276] inline-block" style={{ borderTop: '2px dashed #1a5276' }} /> Route maritime</span>
        <span className="flex items-center gap-1.5"><span className="w-6 h-0.5 bg-[#8b1a1a] inline-block" style={{ borderTop: '2px dashed #8b1a1a' }} /> Route terrestre</span>
      </div>
    </div>
  );
}

export default function ChinaExpedition1900Page() {
  const nav = usePageNav()!;
  const [readingMode, setReadingMode] = useState<ReadingMode>('comprendre');
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollYProgress } = useScroll();

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

        <div className="absolute top-4 left-4 right-4 z-10">
          <PageNavHeader {...nav} lightText={false} />
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
          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'comprendre' as ReadingMode, label: 'Essentiel (2 min)', icon: Clock },
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
          <PageNavFooter {...nav} accent="#4a3b2a" />
        </FadeInSection>

      </div>
    </div>
  );
}
