export interface Section {
  id: string;
  title: string;
  period: string;
  description: string;
  colorClass: string; // Tailwind class
  bgImage: string;
  subsections: SubSection[];
}

export interface SubSection {
  id: string; // e.g., "tonkin-naissance"
  title: string;
  image: string; // placeholder for now
  audio?: string;
  content: string; // Narrative text
  link?: string; // Optional custom link override
}

export const museumData: Section[] = [
  {
    id: "tonkin",
    title: "Tonkin",
    period: "1890 - 1946",
    description: "L'épopée coloniale en Indochine. Une histoire de conquête, d'exploration et de vie quotidienne dans les postes isolés.",
    colorClass: "bg-[#e8dcc5] text-[#4a3b2a]", // Parchemin / Sepia
    bgImage: "/images/bg-tonkin.png",
    subsections: [
      { 
        id: "tonkin-naissance", 
        title: "Naissance", 
        image: "/images/placeholder.png", 
        content: "La création du régiment et ses premières missions...",
        link: "/asie/naissance-du-9-tonkin"
      },
      { id: "tonkin-chine", title: "Chine", image: "/images/placeholder.png", content: "L'intervention en Chine jusqu'à Pekin ...", link: "/asie/chine-1900-expedition" },
      { id: "tonkin-1900", title: "1900-1914", image: "/images/placeholder.png", content: "La pacification et l'organisation du territoire...", link: "/asie/tonkin-1901-1914" },
      { id: "tonkin-siberie", title: "Sibérie", image: "/images/placeholder.png", content: "L'expédition de Sibérie, une aventure méconnue...", link: "/asie/siberie-ww1" },
      { id: "tonkin-heureuses", title: "Années Heureuses", image: "/images/placeholder.png", content: "La vie de garnison dans les années 20 et 30...", link: "/asie/annees-heureuses" },
      { id: "tonkin-tourmente", title: "Tourmente", image: "/images/placeholder.png", content: "La Seconde Guerre mondiale et le coup de force japonais...", link: "/asie/tourmente-1940" }
    ]
  },
  {
    id: "algerie",
    title: "Algérie",
    period: "1956 - 1962",
    description: "Les opérations de maintien de l'ordre, la vie dans le djebel et la complexité d'une guerre sans nom.",
    colorClass: "bg-[#dcb575] text-[#333333]", // Ocre / Sable
    bgImage: "/images/bg-algeria.png",
    subsections: [
      { id: "algerie-renaissance", title: "Renaissance", image: "/images/placeholder.png", content: "La reconstitution du régiment pour l'Algérie...", link: "/algerie/renaissance" },
      { id: "algerie-palestro", title: "Palestro", image: "/images/placeholder.png", content: "Le secteur de Palestro et ses défis...", link: "/algerie/palestro" },
      { id: "algerie-contre", title: "Contre-insurrection", image: "/images/placeholder.png", content: "Les techniques de guerre contre-révolutionnaire..." },
      { id: "algerie-kj25", title: "KJ 25", image: "/images/placeholder.png", content: "Les opérations majeures dans le secteur..." },
      { id: "algerie-commando", title: "Commando de Chasse", image: "/images/placeholder.png", content: "L'action des commandos de chasse..." },
      { id: "algerie-disparition", title: "Disparition", image: "/images/placeholder.png", content: "La fin de la guerre et la dissolution..." }
    ]
  },
  {
    id: "guyane",
    title: "Guyane",
    period: "1976 - Aujourd'hui",
    description: "L'enfer vert, la protection du centre spatial et la lutte contre l'orpaillage illégal.",
    colorClass: "bg-[#064e3b] text-[#ecfdf5]", // Jungle Green
    bgImage: "/images/bg-guyane.png",
    subsections: [
      { id: "guyane-debuts", title: "Débuts", image: "/images/placeholder.png", content: "L'installation du régiment en Guyane..." },
      { id: "guyane-emprises", title: "Emprises", image: "/images/placeholder.png", content: "Les différents postes et camps..." },
      { id: "guyane-fluvial", title: "Fluvial", image: "/images/placeholder.png", content: "La maîtrise du fleuve et la navigation..." },
      { id: "guyane-craj", title: "CRAJ", image: "/images/placeholder.png", content: "Le Centre d'Entraînement en Forêt Équatoriale..." },
      { id: "guyane-jungle", title: "Jungle", image: "/images/placeholder.png", content: "La vie et le combat en milieu équatorial..." },
      { id: "guyane-inter", title: "International", image: "/images/placeholder.png", content: "La coopération avec les armées voisines..." },
      { id: "guyane-harpie", title: "Harpie", image: "/images/placeholder.png", content: "L'opération Harpie contre l'orpaillage..." },
      { id: "guyane-titan", title: "Titan", image: "/images/placeholder.png", content: "La protection du Centre Spatial Guyanais..." }
    ]
  },
  {
    id: "traditions",
    title: "Traditions",
    period: "L'Esprit du 9",
    description: "Ce qui unit les marsouins à travers les âges : symboles, rituels et mémoire.",
    colorClass: "bg-[#7f1d1d] text-[#fef3c7]", // Rouge Garance / Or
    bgImage: "/images/bg-traditions.png",
    subsections: [
      { id: "traditions-drapeau", title: "Drapeau", image: "/images/placeholder.png", content: "L'histoire et les décorations du drapeau..." },
      { id: "traditions-insignes", title: "Insignes", image: "/images/placeholder.png", content: "La symbolique de l'insigne du régiment..." },
      { id: "traditions-pagode", title: "Pagode", image: "/images/placeholder.png", content: "La Pagode, lieu de mémoire et de tradition..." },
      { id: "traditions-chant", title: "Chant", image: "/images/placeholder.png", content: "Les chants de marche et de bivouac..." },
      { id: "traditions-esprit", title: "Esprit du 9", image: "/images/placeholder.png", content: "Ce qui fait l'âme du régiment..." }
    ]
  }
];
