export interface Theme {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  color: string;
}

export interface Artwork {
  id: string;
  themeId: string;
  title: string;
  titleEn: string;
  artist: string; // Or "Origin/Period"
  year: string;
  descriptionShort: string;
  descriptionShortEn: string;
  descriptionLong: string;
  descriptionLongEn: string;
  context: string;
  contextEn: string;
  keyPoints: string[];
  keyPointsEn: string[];
  image: string;
  audio: string;
  kidsContent: string;
  kidsContentEn: string;
  tags: string[];
  isEssential: boolean; // For short tours
  location: { x: number; y: number };
}

// Keeping Tour interface for backward compatibility if any old components use it, 
// though we're moving to theme-based exploration.
export interface Tour {
  id: string;
  name: string;
  nameEn: string;
  duration: number; // minutes
  artworks: string[]; // ids
  color: string;
}

export const themes: Theme[] = [
  {
    id: "asia",
    title: "Asie",
    titleEn: "Asia",
    description: "Explorez les richesses des cultures asiatiques à travers des objets d'art, d'histoire et de tradition militaire.",
    descriptionEn: "Explore the richness of Asian cultures through objects of art, history, and military tradition.",
    image: "/images/theme-asia.png",
    color: "bg-zinc-800 text-zinc-100"
  },
  {
    id: "algerie",
    title: "Algérie",
    titleEn: "Algeria",
    description: "Un voyage à travers l'histoire commune et les traditions artistiques de l'Algérie.",
    descriptionEn: "A journey through the shared history and artistic traditions of Algeria.",
    image: "/images/theme-algeria.png",
    color: "bg-amber-700 text-amber-50"
  },
  {
    id: "guyane",
    title: "Guyane",
    titleEn: "French Guiana",
    description: "Découvrez la culture guyanaise, entre forêt amazonienne, traditions créoles et histoire coloniale.",
    descriptionEn: "Discover Guianese culture, between the Amazon rainforest, Creole traditions, and colonial history.",
    image: "/images/theme-guyane.png",
    color: "bg-emerald-800 text-emerald-50"
  },
  {
    id: "morts",
    title: "Salle des Morts",
    titleEn: "Hall of Memory",
    description: "Un lieu de recueillement et de mémoire dédié à ceux qui sont tombés.",
    descriptionEn: "A place of contemplation and memory dedicated to those who have fallen.",
    image: "/images/theme-morts.png",
    color: "bg-slate-900 text-slate-200"
  },
  {
    id: "traditions",
    title: "Drapeau & Traditions",
    titleEn: "Flag & Traditions",
    description: "Les symboles, insignes et rituels qui forgent l'identité et l'esprit de corps.",
    descriptionEn: "The symbols, insignias, and rituals that forge identity and esprit de corps.",
    image: "/images/theme-traditions.png",
    color: "bg-blue-900 text-blue-100"
  }
];

export const artworks: Artwork[] = [
  // ASIA
  {
    id: "asia-1",
    themeId: "asia",
    title: "Armure de Samouraï (Yoroi)",
    titleEn: "Samurai Armor (Yoroi)",
    artist: "Époque Edo",
    year: "XVIIIe siècle",
    descriptionShort: "Armure complète de guerrier japonais.",
    descriptionShortEn: "Complete Japanese warrior armor.",
    descriptionLong: "Cette armure (yoroi) offre une protection complète tout en permettant une grande liberté de mouvement. Elle est composée de lamelles de fer laquées liées par des cordons de soie.",
    descriptionLongEn: "This armor (yoroi) offers complete protection while allowing great freedom of movement. It is composed of lacquered iron scales bound by silk cords.",
    context: "Le samouraï n'était pas seulement un guerrier, mais un homme lettré et cultivé, suivant le code du Bushido.",
    contextEn: "The samurai was not just a warrior, but a literate and cultivated man, following the code of Bushido.",
    keyPoints: ["Casque (Kabuto) orné", "Masque grimaçant (Mempo)", "Protection flexible"],
    keyPointsEn: ["Ornate helmet (Kabuto)", "Grimacing mask (Mempo)", "Flexible protection"],
    image: "/images/obj-asia-1.png",
    audio: "#",
    kidsContent: "Regarde le masque ! Il fait peur pour effrayer les ennemis. Le guerrier ressemblait à un démon sur le champ de bataille.",
    kidsContentEn: "Look at the mask! It's scary to frighten enemies. The warrior looked like a demon on the battlefield.",
    tags: ["Guerre", "Japon", "Métal"],
    isEssential: true,
    location: { x: 20, y: 30 }
  },
  {
    id: "asia-2",
    themeId: "asia",
    title: "Sabre Katana",
    titleEn: "Katana Sword",
    artist: "Forgeron Masamune (Attribué)",
    year: "1300",
    descriptionShort: "L'âme du samouraï, une lame d'une finesse légendaire.",
    descriptionShortEn: "The soul of the samurai, a blade of legendary sharpness.",
    descriptionLong: "Le katana est porté tranchant vers le haut. Sa courbure est obtenue lors de la trempe sélective, rendant le tranchant extrêmement dur et le dos plus souple pour absorber les chocs.",
    descriptionLongEn: "The katana is worn edge up. Its curvature is obtained during selective quenching, making the edge extremely hard and the spine more flexible to absorb shocks.",
    context: "La fabrication d'un katana est un rituel sacré qui peut prendre plusieurs mois.",
    contextEn: "Making a katana is a sacred ritual that can take several months.",
    keyPoints: ["Ligne de trempe (Hamon)", "Garde (Tsuba) décorée", "Acier plié"],
    keyPointsEn: ["Temper line (Hamon)", "Decorated guard (Tsuba)", "Folded steel"],
    image: "/images/artwork-2.png", // Placeholder
    audio: "#",
    kidsContent: "Cette épée est si coupante qu'elle peut trancher une feuille qui tombe dessus. Les samouraïs en prenaient grand soin.",
    kidsContentEn: "This sword is so sharp it can slice a leaf falling on it. Samurai took great care of it.",
    tags: ["Arme", "Japon", "Acier"],
    isEssential: true,
    location: { x: 30, y: 30 }
  },

  // ALGERIE
  {
    id: "algerie-1",
    themeId: "algerie",
    title: "Bijoux Kabyles",
    titleEn: "Kabyle Jewelry",
    artist: "Artisanat traditionnel",
    year: "XIXe siècle",
    descriptionShort: "Parure en argent, corail et émail.",
    descriptionShortEn: "Set of silver, coral, and enamel jewelry.",
    descriptionLong: "Les bijoux de Beni Yenni sont célèbres pour leurs émaux colorés (jaune, vert, bleu) sertis sur argent. Le corail rouge est censé protéger du mauvais œil.",
    descriptionLongEn: "Beni Yenni jewelry is famous for its colored enamels (yellow, green, blue) set on silver. Red coral is believed to protect against the evil eye.",
    context: "Ces bijoux faisaient partie de la dot de la mariée et constituaient son patrimoine personnel.",
    contextEn: "These jewels were part of the bride's dowry and constituted her personal heritage.",
    keyPoints: ["Technique de l'émail cloisonné", "Symboles protecteurs", "Fonction sociale"],
    keyPointsEn: ["Cloisonné enamel technique", "Protective symbols", "Social function"],
    image: "/images/obj-algeria-1.png",
    audio: "#",
    kidsContent: "Vois-tu toutes ces couleurs ? Chaque couleur a une signification. Le rouge du corail porte bonheur !",
    kidsContentEn: "Do you see all these colors? Each color has a meaning. The red of the coral brings good luck!",
    tags: ["Bijoux", "Argent", "Femme"],
    isEssential: true,
    location: { x: 60, y: 30 }
  },

  // GUYANE
  {
    id: "guyane-1",
    themeId: "guyane",
    title: "Costume de Touloulou",
    titleEn: "Touloulou Costume",
    artist: "Tradition du Carnaval",
    year: "Contemporain",
    descriptionShort: "La reine du carnaval guyanais.",
    descriptionShortEn: "The queen of the Guianese carnival.",
    descriptionLong: "La Touloulou est un personnage mystérieux, entièrement couvert pour ne pas être reconnu. C'est elle qui invite les hommes à danser et mène la danse.",
    descriptionLongEn: "The Touloulou is a mysterious character, entirely covered so as not to be recognized. She is the one who invites men to dance and leads the dance.",
    context: "Le carnaval de Guyane est l'un des plus longs du monde. Il permet l'inversion des rôles sociaux.",
    contextEn: "The Guianese carnival is one of the longest in the world. It allows for the inversion of social roles.",
    keyPoints: ["Anonymat total", "Élégance bourgeoise", "Satire sociale"],
    keyPointsEn: ["Total anonymity", "Bourgeois elegance", "Social satire"],
    image: "/images/obj-guyane-1.png",
    audio: "#",
    kidsContent: "Qui se cache derrière le masque ? Personne ne sait ! C'est le secret du carnaval. On se déguise pour s'amuser sans être reconnu.",
    kidsContentEn: "Who is hiding behind the mask? Nobody knows! It's the secret of the carnival. We dress up to have fun without being recognized.",
    tags: ["Carnaval", "Textile", "Fête"],
    isEssential: true,
    location: { x: 80, y: 60 }
  },

  // SALLE DES MORTS
  {
    id: "morts-1",
    themeId: "morts",
    title: "Casque Adrian (1915)",
    titleEn: "Adrian Helmet (1915)",
    artist: "Armée Française",
    year: "1915-1918",
    descriptionShort: "Le premier casque d'acier moderne de l'armée française.",
    descriptionShortEn: "The first modern steel helmet of the French army.",
    descriptionLong: "Ce casque porte les traces des combats. Il symbolise la protection fragile du soldat face à la violence industrielle de la Grande Guerre.",
    descriptionLongEn: "This helmet bears the traces of combat. It symbolizes the fragile protection of the soldier against the industrial violence of the Great War.",
    context: "Avant 1915, les soldats portaient des casquettes en tissu qui ne protégeaient pas des éclats d'obus.",
    contextEn: "Before 1915, soldiers wore cloth caps that did not protect against shrapnel.",
    keyPoints: ["Cimier sur le dessus", "Insigne de l'arme (Grenade)", "Couleur Bleu Horizon"],
    keyPointsEn: ["Crest on top", "Insignia of the arm (Grenade)", "Horizon Blue color"],
    image: "/images/obj-morts-1.png",
    audio: "#",
    kidsContent: "Ce casque en métal servait à protéger la tête des soldats. C'est un objet de mémoire très important.",
    kidsContentEn: "This metal helmet was used to protect soldiers' heads. It is a very important object of memory.",
    tags: ["Guerre 14-18", "Uniforme", "Mémoire"],
    isEssential: true,
    location: { x: 20, y: 80 }
  },

  // TRADITIONS
  {
    id: "traditions-1",
    themeId: "traditions",
    title: "Drapeau de Régiment",
    titleEn: "Regimental Flag",
    artist: "Broderie d'Or",
    year: "1805",
    descriptionShort: "Emblème sacré portant les victoires du régiment.",
    descriptionShortEn: "Sacred emblem bearing the victories of the regiment.",
    descriptionLong: "Le drapeau est l'âme du régiment. Il porte inscrit en lettres d'or les noms des batailles où l'unité s'est illustrée. Le perdre est le déshonneur suprême.",
    descriptionLongEn: "The flag is the soul of the regiment. It bears inscribed in gold letters the names of the battles where the unit distinguished itself. Losing it is the supreme dishonor.",
    context: "Sous l'Empire, l'Aigle au sommet de la hampe était encore plus important que le tissu lui-même.",
    contextEn: "Under the Empire, the Eagle at the top of the pole was even more important than the fabric itself.",
    keyPoints: ["Soie et or", "Noms de batailles", "Symbole d'unité"],
    keyPointsEn: ["Silk and gold", "Battle names", "Symbol of unity"],
    image: "/images/obj-traditions-1.png",
    audio: "#",
    kidsContent: "Ce drapeau est comme le trésor de l'équipe. Les soldats le protégeaient toujours pour montrer qu'ils étaient unis.",
    kidsContentEn: "This flag is like the team's treasure. Soldiers always protected it to show they were united.",
    tags: ["Symbole", "Napoléon", "Tissu"],
    isEssential: true,
    location: { x: 50, y: 50 }
  }
];

// Re-export tours to satisfy any lingering imports, though effectively deprecated in UI
export const tours: Tour[] = [
  {
    id: "short",
    name: "L'Essentiel (5 min)",
    nameEn: "The Essentials (5 min)",
    duration: 5,
    artworks: ["asia-1", "morts-1"],
    color: "bg-emerald-500"
  },
  {
    id: "medium",
    name: "Découverte (15 min)",
    nameEn: "Discovery (15 min)",
    duration: 15,
    artworks: ["asia-1", "algerie-1", "morts-1", "traditions-1"],
    color: "bg-blue-500"
  },
  {
    id: "long",
    name: "Grand Tour (30 min)",
    nameEn: "Grand Tour (30 min)",
    duration: 30,
    artworks: ["asia-1", "asia-2", "algerie-1", "guyane-1", "morts-1", "traditions-1"],
    color: "bg-purple-500"
  }
];

export const themeTours = [
    { duration: 5, label: "5 min", labelEn: "5 min", filter: (a: Artwork) => a.isEssential },
    { duration: 15, label: "15 min", labelEn: "15 min", filter: (a: Artwork) => true }, // All items for now, could be subset
    { duration: 30, label: "30 min", labelEn: "30 min", filter: (a: Artwork) => true }
];
