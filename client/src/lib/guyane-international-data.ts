export interface TimelineEvent {
  date: string;
  description: string;
}

export interface ContentBloc {
  titre: string;
  texte: string;
  aRetenir: string[];
}

export interface GlossaryEntry {
  terme: string;
  definition: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface GuyaneInternationalContent {
  title: string;
  subtitle: string;
  questionDirectrice: string;
  reperes: string;
  resume: string;
  timeline: TimelineEvent[];
  blocs: ContentBloc[];
  glossaire: GlossaryEntry[];
  quiz: QuizQuestion[];
}

export const guyaneInternationalData: GuyaneInternationalContent = {
  title: "International",
  subtitle: "Au-delà des fleuves, le 9e RIMa échange et coopère avec ses voisins sud‑américains et caribéens. Formations, exercices conjoints et compétitions sportives renforcent les liens et enrichissent les savoir‑faire.",
  questionDirectrice: "Quels pays accueillent les marsouins du 9e RIMa pour des stages et des entraînements, et comment ces coopérations internationales améliorent‑elles leurs compétences et leur intégration régionale ?",
  reperes: "Fin des années 1970 : premières missions de coopération avec le Guyana et le Suriname • Début des années 1980 : stage des cadres au centre de jungle de Manaus (Brésil) • 1990 : première Curaçao challenge • Années 2000 : participation aux manœuvres Tradewinds dans les Caraïbes • Années 2010 : programmes d'instruction croisée avec le Suriname et le Brésil.",
  resume: "Depuis sa recréation, le 9e RIMa cherche à s'ouvrir à ses voisins. Des délégations de marsouins traversent les frontières pour s'entraîner et partager leurs savoir‑faire. À Manaus, au Brésil, les cadres suivent un stage intensif à l'école de jungle de l'armée brésilienne (CIGS), apprenant l'escalade, le franchissement de rivières et la survie avancée. Au Suriname et au Guyana, les patrouilles mixtes et les exercices fluviaux renforcent la sécurité des frontières. Dans les Antilles, les marsouins participent aux manœuvres Tradewinds et à la Curaçao challenge, compétition sportive et militaire réunissant des forces caribéennes et néerlandaises. Ces échanges forgent des liens diplomatiques et enrichissent les compétences du régiment.",
  timeline: [
    { date: "Fin des années 1970", description: "Premiers échanges régionaux — patrouilles conjointes avec le Suriname et missions exploratoires au Guyana." },
    { date: "Début des années 1980", description: "Stages à Manaus — premier contingent de marsouins au CIGS et accueil des instructeurs brésiliens en Guyane." },
    { date: "1990", description: "Première Curaçao challenge — le 9e RIMa participe à la compétition d'endurance et de tir." },
    { date: "Années 2000", description: "Exercices Tradewinds — intégration aux manœuvres caribéennes sous l'égide du SOUTHCOM." },
    { date: "Années 2010", description: "Intensification des patrouilles mixtes — programmes d'instruction croisée et d'échanges culturels avec le Suriname et le Brésil." },
  ],
  blocs: [
    {
      titre: "Stages et échanges avec le Brésil",
      texte: "L'école de jungle du Centro de Instrução de Guerra na Selva (CIGS) de Manaus est mondialement reconnue. Depuis les années 1980, des instructeurs et des cadres du 9e RIMa y suivent des cours de combat en jungle. Ils apprennent à franchir des ravins en tyrolienne, à construire des radeaux avec des lianes et à piéger des lignes de circulation. Ces stages permettent également de comparer les techniques françaises et brésiliennes et de renforcer la coopération militaire entre les deux pays. En retour, des officiers brésiliens viennent en Guyane pour découvrir les spécificités du terrain guyanais.",
      aRetenir: [
        "Le CIGS de Manaus est un partenaire clé pour la formation jungle.",
        "Les échanges France–Brésil sont réciproques et favorisent l'interopérabilité.",
        "Les techniques brésiliennes enrichissent le répertoire des marsouins.",
      ],
    },
    {
      titre: "Patrouilles et manœuvres avec le Suriname et le Guyana",
      texte: "Le Maroni marque la frontière avec le Suriname, pays devenu indépendant en 1975. Pour sécuriser les deux rives et lutter contre les trafics, le 9e RIMa effectue des patrouilles conjointes avec l'armée surinamaise : surveillance du fleuve, contrôles de pirogues, échanges de renseignements. Plus à l'est, le régiment s'entraîne avec la force de défense du Guyana (ex‑Guyane britannique) lors d'exercices baptisés Amazon Express. Les marsouins y apprennent à opérer dans des environnements différents : savane, mangrove, forêt sèche. Ces coopérations contribuent à la stabilité régionale et renforcent les liens entre voisins.",
      aRetenir: [
        "Les patrouilles mixtes assurent la sécurité et la lutte contre les trafics sur le Maroni.",
        "La coopération avec le Guyana ouvre le 9e RIMa à de nouveaux environnements (savane et mangrove).",
        "Ces échanges contribuent à la stabilité régionale.",
      ],
    },
    {
      titre: "Antilles et Caraïbes : exercices et compétitions",
      texte: "Au‑delà du continent, le 9e RIMa participe à des manœuvres dans les Antilles françaises. En Guadeloupe et en Martinique, les marsouins s'entraînent aux opérations amphibies, à la lutte contre les catastrophes naturelles et à l'aide à la population. Ces exercices se déroulent souvent dans le cadre des manœuvres Tradewinds, sous l'égide de l'United States Southern Command, et réunissent des forces caribéennes et nord‑américaines. Parallèlement, le régiment participe à la Curaçao challenge, compétition d'endurance, de tir et de course en montagne organisée par les forces néerlandaises. Ces événements testent la condition physique et la cohésion des équipes tout en renforçant les liens avec les armées partenaires.",
      aRetenir: [
        "Les manœuvres Tradewinds testent la capacité du régiment à opérer en milieu amphibie et à participer à des secours d'urgence.",
        "Les compétitions sportives (Curaçao challenge) favorisent l'esprit d'équipe et la coopération internationale.",
        "La présence du 9e RIMa dans les Antilles élargit son champ d'action au-delà de la Guyane.",
      ],
    },
    {
      titre: "Échanges culturels et diplomatie militaire",
      texte: "La coopération internationale ne se limite pas à l'entraînement. Chaque mission est l'occasion de découvrir d'autres cultures et d'entretenir des liens diplomatiques. Lors des échanges avec le Suriname et le Guyana, les marsouins sont reçus dans des casernes locales et participent à des cérémonies et à des fêtes traditionnelles. Ils apprennent à cuisiner des plats locaux, jouent au football contre leurs homologues et découvrent des langues et des musiques nouvelles. Cette diplomatie militaire fait du 9e RIMa un ambassadeur de la France en Amérique du Sud et dans les Caraïbes.",
      aRetenir: [
        "La diplomatie militaire repose sur le respect et le partage culturel.",
        "Les échanges sportifs et culinaires créent des liens au-delà des entraînements.",
        "Le 9e RIMa se présente comme un ambassadeur de la France en Amérique du Sud et dans les Caraïbes.",
      ],
    },
  ],
  glossaire: [
    { terme: "CIGS", definition: "Centro de Instrução de Guerra na Selva : école de guerre en jungle de l'armée brésilienne située à Manaus." },
    { terme: "Tradewinds", definition: "Exercice multinational organisé par le commandement sud des États‑Unis (SOUTHCOM) pour améliorer la coopération en matière de sécurité dans les Caraïbes." },
    { terme: "Curaçao challenge", definition: "Compétition sportive et militaire annuelle réunissant des forces armées de plusieurs pays caribéens et néerlandais." },
    { terme: "Patrouille mixte", definition: "Opération menée conjointement par deux armées pour surveiller une frontière ou un territoire commun." },
    { terme: "Guyana", definition: "Pays anglophone voisin de la Guyane, également appelé Guyane britannique jusqu'en 1966." },
  ],
  quiz: [
    {
      question: "Quel pays abrite le CIGS, école de jungle fréquentée par les cadres du 9e RIMa ?",
      options: ["Suriname", "Brésil", "Guyana", "États‑Unis"],
      correctIndex: 1,
    },
    {
      question: "Quel exercice multinational des Caraïbes teste la capacité du 9e RIMa à intervenir en cas de catastrophe naturelle ?",
      options: ["Tradewinds", "Curaçao challenge", "Amazon Express", "Harpie"],
      correctIndex: 0,
    },
    {
      question: "Dans quel type d'événement les marsouins se mesurent‑ils aux soldats néerlandais, surinamais et américains ?",
      options: ["Une mission d'infiltration", "Une compétition sportive appelée Curaçao challenge", "Une course de pirogues sur le Maroni", "Un exercice de tir en Guyane"],
      correctIndex: 1,
    },
    {
      question: "Quel est l'un des objectifs des patrouilles mixtes menées sur le Maroni avec l'armée surinamaise ?",
      options: ["Construire des routes asphaltées", "Surveiller les trafics et sécuriser la frontière", "Creuser des mines d'or légales", "Organiser des spectacles folkloriques"],
      correctIndex: 1,
    },
  ],
};
