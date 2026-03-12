import { usePageNav } from "@/hooks/usePageNav";
import PageNavHeader from "@/components/PageNavHeader";
import PageNavFooter from "@/components/PageNavFooter";
import { algerieRenaissanceData } from "@/lib/algerie-renaissance-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, Users, MapPin, School, Wheat, Eye,
  ChevronRight, Anchor, Award, FileText
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type ReadingMode = 'essentiel' | 'complet' | 'archives';

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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

export default function AlgerieRenaissancePage() {
  const nav = usePageNav()!;
  const [readingMode, setReadingMode] = useState<ReadingMode>('essentiel');
  const { scrollYProgress } = useScroll();
  const [insigneRevealed, setInsigneRevealed] = useState(false);

  const showComplet = readingMode === 'complet' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  return (
    <div className="min-h-screen pb-24 relative" style={{ fontFamily: "'IBM Plex Mono', monospace", backgroundColor: "#d4c5a0" }}>
      <div className={`fixed inset-0 opacity-30 pointer-events-none ${kraftBg}`} />
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%222%22%20height%3D%222%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23000%22/%3E%3C/svg%3E')]" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2563eb] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative pt-12 pb-20 px-6 overflow-hidden border-b-2 border-dashed border-[#4a3b2a]/30">
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#4a3b2a]/20 m-2" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#4a3b2a]/20 m-2" />

        <div className="absolute bottom-6 right-8 opacity-[0.04] pointer-events-none select-none">
          <svg width="180" height="220" viewBox="0 0 180 220" fill="#4a3b2a">
            <path d="M90 10 C90 10, 140 60, 140 100 C140 140, 120 160, 90 180 C60 160, 40 140, 40 100 C40 60, 90 10, 90 10Z" />
            <rect x="70" y="180" width="40" height="30" rx="3" />
            <circle cx="90" cy="95" r="25" fill="none" stroke="#4a3b2a" strokeWidth="3" />
            <rect x="80" y="70" width="20" height="50" rx="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-0 pt-0">
          <PageNavHeader {...nav} lightText={false} />
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6 pt-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Anchor className="h-6 w-6 text-[#2563eb]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#4a3b2a]/50" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              CONFIDENTIEL — SECTEUR KABYLIE — 1956
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-normal leading-tight text-[#4a3b2a]"
            style={{ fontFamily: "'Special Elite', cursive" }}
            data-testid="text-page-title"
          >
            {algerieRenaissanceData.title}
          </h1>
          <p className="text-sm md:text-base text-[#4a3b2a]/80 leading-relaxed max-w-3xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            {algerieRenaissanceData.subtitle}
          </p>
          <p className="text-sm italic text-[#4a3b2a]/60 border-l-4 border-[#2563eb] pl-4 py-1 max-w-2xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            {algerieRenaissanceData.accroche}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {([
              { mode: 'essentiel' as ReadingMode, label: 'Essentiel (3 min)', icon: Clock },
              { mode: 'complet' as ReadingMode, label: 'Visite complète', icon: BookOpen },
              { mode: 'archives' as ReadingMode, label: 'Archives', icon: FileText },
            ]).map(({ mode, label, icon: Icon }) => (
              <Button
                key={mode}
                variant={readingMode === mode ? 'default' : 'outline'}
                className={readingMode === mode
                  ? "bg-[#1e40af] text-white border-[#1e40af] text-xs"
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
                  RAPPORT — RÉSUMÉ
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
                {algerieRenaissanceData.resume}
              </p>
              <div className="mt-4 space-y-2">
                <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#dcb575]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  POINTS CLÉS
                </h4>
                <ul className="space-y-1.5">
                  {algerieRenaissanceData.aRetenir.map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      <Check className="h-3 w-3 shrink-0 text-[#dcb575] mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        {showComplet && (
          <>
            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-insigne">
                <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                  <Award className="h-5 w-5 text-[#2563eb]" />
                  <h2
                    className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    {algerieRenaissanceData.insigne.titre}
                  </h2>
                </div>
                <p className="text-xs leading-relaxed text-[#4a3b2a]/85" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {algerieRenaissanceData.insigne.colonelViguie}
                </p>

                <motion.div
                  className="relative overflow-hidden border-2 border-[#1e3a5f]/30 bg-[#1e3a5f] cursor-pointer group"
                  onClick={() => setInsigneRevealed(!insigneRevealed)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  data-testid="cartel-insigne"
                >
                  <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%200v4M0%201h4%22%20stroke%3D%22%23dcb575%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]" />
                  <div className="relative z-10 text-[#e8dcc5] p-6 md:p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-[#dcb575]/20 border-2 border-[#dcb575]/40 flex items-center justify-center">
                          <Anchor className="h-7 w-7 text-[#dcb575]" />
                        </div>
                        <div>
                          <h3
                            className="text-base font-normal"
                            style={{ fontFamily: "'Special Elite', cursive" }}
                          >
                            Insigne du 9e RIC
                          </h3>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#dcb575]/70" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            Agréé le 17 mai 1956
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#dcb575]/50 group-hover:text-[#dcb575] transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {insigneRevealed ? '▲ MASQUER' : '▼ DÉTAILS'}
                      </span>
                    </div>

                    <AnimatePresence>
                      {insigneRevealed && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-3 overflow-hidden"
                        >
                          <div className="border-t border-[#dcb575]/20 pt-4">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#dcb575] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              DESCRIPTION HÉRALDIQUE
                            </h4>
                            <p className="text-xs leading-relaxed opacity-85" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              {algerieRenaissanceData.insigne.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#dcb575] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              SYMBOLIQUE
                            </h4>
                            <p className="text-xs leading-relaxed opacity-85" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              {algerieRenaissanceData.insigne.symbolique}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <div className="border-2 border-dashed border-[#dcb575]/40 p-5 bg-[#dcb575]/5">
                  <p className="text-xs italic text-[#4a3b2a]/70 pl-4 border-l-4 border-[#dcb575]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {algerieRenaissanceData.insigne.drapeau}
                  </p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-dispositif">
                <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                  <MapPin className="h-5 w-5 text-[#2563eb]" />
                  <h2
                    className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    {algerieRenaissanceData.dispositif.titre}
                  </h2>
                </div>

                <div className="border-2 border-[#4a3b2a]/30 overflow-hidden shadow-xl" style={{ height: "400px" }}>
                  <MapContainer
                    center={[36.57, 3.48]}
                    zoom={10}
                    style={{ height: "100%", width: "100%", filter: "sepia(0.4) contrast(1.1) saturate(0.8)" }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {algerieRenaissanceData.dispositif.implantations.map((imp, i) => (
                      <Marker key={i} position={[imp.lat, imp.lng]} icon={markerIcon}>
                        <Popup>
                          <div style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            <strong className="text-xs">{imp.nom}</strong>
                            <br />
                            <span className="text-[10px] text-gray-600">{imp.role}</span>
                            <br />
                            <span className="text-[10px]">{imp.detail}</span>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {algerieRenaissanceData.dispositif.implantations.map((imp, i) => {
                    const isTizi = imp.nom === "3e Bataillon";
                    return (
                      <motion.div
                        key={i}
                        className={`border-2 p-4 space-y-1 transition-colors hover:bg-[#dcb575]/10 ${
                          isTizi
                            ? "border-[#2563eb]/40 bg-[#2563eb]/5 col-span-1 sm:col-span-2"
                            : "border-[#4a3b2a]/15 bg-white/30"
                        }`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        data-testid={`implantation-${i}`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className={`h-3 w-3 ${isTizi ? "text-[#2563eb]" : "text-[#dcb575]"}`} />
                          <h4
                            className="text-sm text-[#4a3b2a]"
                            style={{ fontFamily: "'Special Elite', cursive" }}
                          >
                            {imp.nom}
                          </h4>
                          {isTizi && (
                            <span className="ml-auto text-[9px] uppercase tracking-wider bg-[#1e40af] text-white px-2 py-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              SECTEUR CLÉ
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] font-bold text-[#2563eb] uppercase tracking-wide" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          {imp.role}
                        </p>
                        <p className="text-[11px] text-[#4a3b2a]/70 leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          {imp.detail}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-missions">
                <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                  <Users className="h-5 w-5 text-[#2563eb]" />
                  <h2
                    className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    {algerieRenaissanceData.missions.titre}
                  </h2>
                </div>
                <p className="text-xs italic text-[#4a3b2a]/60 border-l-4 border-[#2563eb] pl-4 py-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {algerieRenaissanceData.missions.intro}
                </p>

                <div className="space-y-4">
                  {algerieRenaissanceData.missions.items.map((mission, i) => {
                    const icons = [School, Wheat, Eye];
                    const MissionIcon = icons[i] || School;
                    const isTesch = i === 0;
                    return (
                      <motion.div
                        key={i}
                        className={`p-5 space-y-2 ${
                          isTesch
                            ? "border-2 border-dashed border-[#2563eb]/40 bg-[#2563eb]/5 relative"
                            : "border-2 border-[#4a3b2a]/15 bg-white/30"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        data-testid={`mission-${i}`}
                      >
                        {isTesch && (
                          <div className="absolute -top-3 left-4 bg-[#1e40af] text-white px-3 py-0.5">
                            <span className="text-[9px] uppercase tracking-[0.2em]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              ACTION SOCIALE
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <MissionIcon className={`h-4 w-4 ${isTesch ? "text-[#2563eb]" : "text-[#dcb575]"}`} />
                          <h4
                            className="text-sm text-[#4a3b2a]"
                            style={{ fontFamily: "'Special Elite', cursive" }}
                          >
                            {mission.titre}
                          </h4>
                          <span className="ml-auto text-[10px] font-bold text-[#4a3b2a]/50 uppercase tracking-wide" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                            {mission.date}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4a3b2a]/80 leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          {mission.texte}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </FadeInSection>
          </>
        )}

        {showArchives && (
          <FadeInSection>
            <section className="space-y-6" data-testid="bloc-portraits">
              <div className="flex items-center gap-3 border-b border-dashed border-[#4a3b2a]/30 pb-4">
                <Users className="h-5 w-5 text-[#2563eb]" />
                <h2
                  className="text-xl md:text-2xl font-normal text-[#4a3b2a]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  Portraits de Marsouins
                </h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {algerieRenaissanceData.portraits.map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden border-2 border-[#4a3b2a]/20 bg-[#4a3b2a] group hover:border-[#dcb575]/40 transition-colors"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-testid={`portrait-${i}`}
                  >
                    <div className="relative z-10 text-[#e8dcc5] p-5 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#dcb575]/10 border border-[#dcb575]/30 flex items-center justify-center">
                        <Users className="h-5 w-5 text-[#dcb575]" />
                      </div>
                      <h4
                        className="text-base"
                        style={{ fontFamily: "'Special Elite', cursive" }}
                      >
                        {p.nom}
                      </h4>
                      <p className="text-[9px] font-bold text-[#dcb575] uppercase tracking-[0.2em]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {p.role}
                      </p>
                      <p className="text-[11px] opacity-80 leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {p.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <Link href="/algerie/palestro">
            <section className="relative overflow-hidden border-2 border-[#4a3b2a]/30 shadow-xl cursor-pointer group hover:border-[#dcb575]/40 transition-colors" data-testid="bloc-conclusion">
              <div className="absolute inset-0 bg-[#4a3b2a]" />
              <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-4 flex items-center justify-between">
                <p
                  className="text-xl md:text-2xl font-normal uppercase tracking-[0.15em]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  {algerieRenaissanceData.nextStep}
                </p>
                <ArrowRight className="h-6 w-6 text-[#dcb575] group-hover:translate-x-1 transition-transform" />
              </div>
            </section>
          </Link>
        </FadeInSection>

        <FadeInSection>
          <PageNavFooter {...nav} accent="#6b4c2a" />
        </FadeInSection>
      </div>
    </div>
  );
}
