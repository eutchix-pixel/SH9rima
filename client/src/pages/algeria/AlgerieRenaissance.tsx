import { algerieRenaissanceData } from "@/lib/algerie-renaissance-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Check,
  Shield, Users, MapPin, School, Wheat, Eye,
  ChevronRight, HelpCircle, Anchor, Award
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
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

export default function AlgerieRenaissancePage() {
  const [readingMode, setReadingMode] = useState<ReadingMode>('essentiel');
  const { scrollYProgress } = useScroll();

  const showComplet = readingMode === 'complet' || readingMode === 'archives';
  const showArchives = readingMode === 'archives';

  return (
    <div className="bg-[#f5f0e6] text-[#333333] min-h-screen font-sans pb-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#dcb575] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative pt-12 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#dcb575]/20 to-[#f5f0e6] border-b border-[#dcb575]/30">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h6v6H0z%22%20fill%3D%22%23000%22%20fill-opacity%3D%220.4%22/%3E%3C/svg%3E')]" />

        <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
          <Link href="/#algerie">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#dcb575]/20" data-testid="link-back-themes">
              <ArrowLeft className="mr-2 h-4 w-4" /> Accueil
            </Button>
          </Link>
          <Link href="/asie/tourmente-1940">
            <Button variant="ghost" className="text-[#4a3b2a] hover:bg-[#dcb575]/20" data-testid="link-back-tourmente">
              Tourmente
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
            <Anchor className="h-8 w-8 text-[#dcb575]" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#4a3b2a]/50">ALGÉRIE — 1956</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-[#4a3b2a]" data-testid="text-page-title">
            {algerieRenaissanceData.title}
          </h1>
          <p className="text-lg md:text-xl text-[#4a3b2a]/85 leading-relaxed max-w-3xl">
            {algerieRenaissanceData.subtitle}
          </p>
          <p className="text-base italic text-[#4a3b2a]/70 border-l-4 border-[#dcb575] pl-4 py-1 max-w-2xl">
            {algerieRenaissanceData.accroche}
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
                  ? "bg-[#4a3b2a] text-[#f5f0e6] border-[#4a3b2a]"
                  : "border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20"}
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
                <Shield className="h-6 w-6 text-[#dcb575]" />
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">Résumé — 1 minute</h2>
              </div>
              <motion.div
                className="w-20 h-0.5 bg-[#dcb575]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-base leading-relaxed opacity-90">
                {algerieRenaissanceData.resume}
              </p>
              <div className="mt-4 space-y-2">
                <h4 className="font-bold uppercase text-xs tracking-widest text-[#dcb575]">À retenir</h4>
                <ul className="space-y-1.5">
                  {algerieRenaissanceData.aRetenir.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-[#dcb575] mt-0.5" /> {item}
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
                <div className="flex items-center gap-3 border-b-2 border-[#dcb575]/40 pb-4">
                  <Award className="h-5 w-5 text-[#dcb575]" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3b2a]">{algerieRenaissanceData.insigne.titre}</h2>
                </div>
                <p className="text-sm leading-relaxed text-[#4a3b2a]/85">{algerieRenaissanceData.insigne.colonelViguie}</p>

                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
                  <div className="relative z-10 text-[#e8dcc5] p-6 md:p-8 space-y-4">
                    <h3 className="font-serif text-lg font-bold">{algerieRenaissanceData.insigne.description}</h3>
                    <p className="text-sm leading-relaxed opacity-85">{algerieRenaissanceData.insigne.symbolique}</p>
                  </div>
                </div>

                <div className="bg-[#dcb575]/10 border border-[#dcb575]/30 rounded-xl p-5">
                  <p className="text-sm italic text-[#4a3b2a]/75 border-l-4 border-[#dcb575] pl-4">{algerieRenaissanceData.insigne.drapeau}</p>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-dispositif">
                <div className="flex items-center gap-3 border-b-2 border-[#dcb575]/40 pb-4">
                  <MapPin className="h-5 w-5 text-[#dcb575]" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3b2a]">{algerieRenaissanceData.dispositif.titre}</h2>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#dcb575]/30" style={{ height: "400px" }}>
                  <MapContainer
                    center={[36.57, 3.48]}
                    zoom={10}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {algerieRenaissanceData.dispositif.implantations.map((imp, i) => (
                      <Marker key={i} position={[imp.lat, imp.lng]} icon={markerIcon}>
                        <Popup>
                          <div className="font-sans">
                            <strong className="text-sm">{imp.nom}</strong>
                            <br />
                            <span className="text-xs text-gray-600">{imp.role}</span>
                            <br />
                            <span className="text-xs">{imp.detail}</span>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {algerieRenaissanceData.dispositif.implantations.map((imp, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/60 border border-[#dcb575]/20 rounded-xl p-4 space-y-1"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      data-testid={`implantation-${i}`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-[#dcb575]" />
                        <h4 className="font-serif font-bold text-sm text-[#4a3b2a]">{imp.nom}</h4>
                      </div>
                      <p className="text-xs font-bold text-[#dcb575] uppercase tracking-wide">{imp.role}</p>
                      <p className="text-xs text-[#4a3b2a]/70 leading-relaxed">{imp.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className="space-y-6" data-testid="bloc-missions">
                <div className="flex items-center gap-3 border-b-2 border-[#dcb575]/40 pb-4">
                  <Users className="h-5 w-5 text-[#dcb575]" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3b2a]">{algerieRenaissanceData.missions.titre}</h2>
                </div>
                <p className="text-sm italic text-[#4a3b2a]/70 border-l-4 border-[#dcb575] pl-4 py-1">{algerieRenaissanceData.missions.intro}</p>

                <div className="space-y-4">
                  {algerieRenaissanceData.missions.items.map((mission, i) => {
                    const icons = [School, Wheat, Eye];
                    const MissionIcon = icons[i] || School;
                    return (
                      <motion.div
                        key={i}
                        className="bg-white/60 border border-[#dcb575]/20 rounded-xl p-5 space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        data-testid={`mission-${i}`}
                      >
                        <div className="flex items-center gap-2">
                          <MissionIcon className="h-4 w-4 text-[#dcb575]" />
                          <h4 className="font-serif font-bold text-sm text-[#4a3b2a]">{mission.titre}</h4>
                          <span className="ml-auto text-xs font-bold text-[#dcb575] uppercase tracking-wide">{mission.date}</span>
                        </div>
                        <p className="text-sm text-[#4a3b2a]/80 leading-relaxed">{mission.texte}</p>
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
              <div className="flex items-center gap-3 border-b-2 border-[#dcb575]/40 pb-4">
                <Users className="h-5 w-5 text-[#dcb575]" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3b2a]">Portraits de Marsouins</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {algerieRenaissanceData.portraits.map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-testid={`portrait-${i}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
                    <div className="relative z-10 text-[#e8dcc5] p-5 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#dcb575]/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-[#dcb575]" />
                      </div>
                      <h4 className="font-serif font-bold text-base">{p.nom}</h4>
                      <p className="text-xs font-bold text-[#dcb575] uppercase tracking-wide">{p.role}</p>
                      <p className="text-xs opacity-80 leading-relaxed">{p.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>
        )}

        <FadeInSection>
          <section className="relative overflow-hidden rounded-2xl shadow-2xl" data-testid="bloc-conclusion">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3b2a] via-[#3a2e1f] to-[#2a1f14]" />
            <div className="relative z-10 text-[#e8dcc5] p-8 md:p-12 space-y-4">
              <p className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest">
                {algerieRenaissanceData.nextStep}
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="text-center space-y-8 py-12 border-t-2 border-[#dcb575]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/asie/tourmente-1940">
                <Button variant="outline" className="border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20 px-8 py-6 text-lg" data-testid="button-back-tourmente">
                  <ArrowLeft className="mr-2 h-5 w-5" /> La Tourmente
                </Button>
              </Link>
              <Link href="/#algerie">
                <Button variant="outline" className="border-[#4a3b2a]/30 text-[#4a3b2a] hover:bg-[#dcb575]/20 px-8 py-6 text-lg" data-testid="button-back-themes">
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
