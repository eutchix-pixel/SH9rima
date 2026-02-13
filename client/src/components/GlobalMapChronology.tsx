import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Map as MapIcon } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Sepia Tile Layer component
function SepiaTileLayer() {
  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      className="sepia-tiles"
    />
  );
}

// Map Controller to handle smooth flying to locations
function MapController({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }, [center, zoom, map]);
  
  return null;
}

// Data Structure
interface MapEvent {
  date: string;
  label: string;
  coords: [number, number];
  description: string;
  image?: string;
}

const mapEvents: MapEvent[] = [
  {
    date: "1860",
    label: "Palikao",
    coords: [39.9042, 116.4074],
    description: "Jalon fondateur : victoire en Chine ouvrant la voie vers le sud."
  },
  {
    date: "1882",
    label: "Hanoï",
    coords: [21.0285, 105.8542],
    description: "Prise de la citadelle par le commandant Rivière."
  },
  {
    date: "1890",
    label: "Naissance du 9e RIMa",
    coords: [21.0285, 105.8542],
    description: "Le régiment devient autonome et stationné au Tonkin."
  },
  {
    date: "1890-1891",
    label: "Secteur Son Tay",
    coords: [21.1333, 105.5000],
    description: "Opérations contre la bande de Doc Ngu entre Rivière Claire et Son Tay."
  },
  {
    date: "1892",
    label: "Combat de Dongly",
    coords: [21.4000, 106.3000],
    description: "Poursuite et succès tactique du lieutenant Couteret."
  },
  {
    date: "1893",
    label: "Siam (Chantaboum)",
    coords: [12.6111, 102.1039],
    description: "Projection navale et diplomatique hors du Tonkin."
  },
  {
    date: "1894",
    label: "Yen Muc",
    coords: [21.5000, 106.1000],
    description: "Sortie d'encerclement héroïque à la baïonnette."
  },
  {
    date: "1899",
    label: "Quang Tcheou Wan",
    coords: [21.2000, 110.4000],
    description: "Occupation et organisation d'un territoire concédé."
  }
];

// River Paths (Approximate)
const riverPaths = {
  redRiver: [
    [23.0, 103.5], [22.5, 104.0], [21.3, 105.4], [21.0285, 105.8542], [20.3, 106.6]
  ] as [number, number][],
  blackRiver: [
    [22.5, 102.5], [21.3, 105.4]
  ] as [number, number][],
  clearRiver: [
    [23.0, 105.0], [21.3, 105.4]
  ] as [number, number][]
};

export default function GlobalMapChronology() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at 1890 (index 2)
  const currentEvent = mapEvents[currentIndex];

  const handleNext = () => {
    if (currentIndex < mapEvents.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#4a3b2a]/20 bg-[#e8dcc5]">
        
        {/* Map */}
        <MapContainer 
          center={currentEvent.coords} 
          zoom={6} 
          scrollWheelZoom={false} 
          className="w-full h-full z-0"
        >
          {/* Custom Sepia CSS for tiles */}
          <style>
            {`
              .sepia-tiles {
                filter: sepia(0.6) contrast(1.1) brightness(0.9) saturate(0.6);
              }
              .leaflet-popup-content-wrapper {
                background: #fdfbf7;
                color: #4a3b2a;
                border: 1px solid #dcb575;
                border-radius: 4px;
                font-family: serif;
              }
              .leaflet-popup-tip {
                background: #fdfbf7;
              }
            `}
          </style>

          <SepiaTileLayer />
          
          <MapController center={currentEvent.coords} zoom={7} />

          {/* Rivers */}
          <Polyline positions={riverPaths.redRiver} pathOptions={{ color: '#3b82f6', weight: 3, opacity: 0.6 }} />
          <Polyline positions={riverPaths.blackRiver} pathOptions={{ color: '#1d4ed8', weight: 2, opacity: 0.6 }} />
          <Polyline positions={riverPaths.clearRiver} pathOptions={{ color: '#60a5fa', weight: 2, opacity: 0.6 }} />

          {/* Markers */}
          {mapEvents.map((evt, idx) => (
            <Marker 
              key={idx} 
              position={evt.coords}
              opacity={currentIndex === idx ? 1 : 0.6}
            >
              <Popup>
                <div className="max-w-[200px]">
                  <h3 className="font-bold text-lg mb-1">{evt.label}</h3>
                  <div className="text-xs font-bold opacity-60 mb-2">{evt.date}</div>
                  <p className="text-sm leading-tight">{evt.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Overlay Info Box (Museum Cartel Style) */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 z-[500] bg-[#fdfbf7]/90 backdrop-blur p-4 rounded border-l-4 border-[#4a3b2a] shadow-lg max-w-xs"
          >
            <div className="text-xs font-bold tracking-widest uppercase text-[#dcb575] mb-1">
              Carte Temporelle
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#4a3b2a] mb-1">
              {currentEvent.date}
            </h2>
            <h3 className="text-lg font-bold mb-2">{currentEvent.label}</h3>
            <p className="text-sm opacity-90 leading-relaxed italic">
              "{currentEvent.description}"
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Timeline Controls */}
      <div className="bg-[#4a3b2a] text-[#e8dcc5] p-4 rounded-lg shadow-lg flex items-center justify-between gap-4">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex-1 overflow-x-auto flex gap-2 justify-center scrollbar-hide py-2">
            {mapEvents.map((evt, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex flex-col items-center min-w-[60px] transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'opacity-100 scale-110' 
                    : 'opacity-40 hover:opacity-70 scale-90'
                }`}
              >
                <div className={`w-3 h-3 rounded-full mb-2 ${
                  currentIndex === idx ? 'bg-[#dcb575]' : 'bg-white/30'
                }`} />
                <span className="text-xs font-bold whitespace-nowrap">{evt.date}</span>
              </button>
            ))}
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentIndex === mapEvents.length - 1}
          className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
