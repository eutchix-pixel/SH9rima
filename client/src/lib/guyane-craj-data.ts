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

export interface GuyaneCrajContent {
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

export const guyaneCrajData: GuyaneCrajContent = {
  title: "CRAJ",
  subtitle: "Pour opérer en forêt équatoriale, il faut plus que des muscles : il faut des connaissances, de la discrétion et du sang‑froid. Le CRAJ forme les marsouins à survivre, à se repérer et à infiltrer des sites illégaux au cœur de la jungle.",
  questionDirectrice: "Quelles compétences les marsouins du CRAJ acquièrent‑ils au Centre d'entraînement en forêt équatoriale et quel rôle jouent‑ils dans les missions d'infiltration et de lutte contre l'orpaillage clandestin ?",
  reperes: "Début des années 1980 : création du Centre d'entraînement en forêt équatoriale (C3F) • Création du CRAJ : unité d'élite du 9e RIMa spécialisée dans la recherche et l'action en jungle • 2008 : opération Harpie, première opération d'envergure contre l'orpaillage clandestin • Évolutions récentes : coopération avec le Brésil et le Suriname.",
  resume: "Le CRAJ est un commando du 9e RIMa spécialisé dans la recherche et l'action en jungle. Ses membres suivent un cursus exigeant au Centre d'entraînement en forêt équatoriale (C3F), souvent appelé centre de mise en condition « Cayenne Jungle ». Ce stage leur enseigne la survie (orientation au topofil, construction de bivouac, gestion de l'eau et de la nourriture), la progression discrète (machette, cordes, descente en rappel) et les techniques d'infiltration. Le CRAJ intervient principalement dans le cadre de l'opération Harpie pour localiser les campements d'orpaillage illégal et guider les forces d'intervention. Ses membres opèrent en binômes, parfois durant plusieurs jours sans soutien extérieur.",
  timeline: [
    { date: "Début des années 1980", description: "Création du C3F — mise en place du premier stage de jungle pour les marsouins." },
    { date: "Fin des années 1980", description: "Constitution des premiers commandos de recherche — prémices de l'actuel CRAJ." },
    { date: "2008", description: "Lancement de l'opération Harpie — 1 180 gendarmes et 2 465 militaires mobilisés contre l'orpaillage clandestin." },
    { date: "2010", description: "Missions d'infiltration mixte — le CRAJ opère avec les gendarmes mobiles et les légionnaires du 3e REI." },
    { date: "Années 2020", description: "Coopérations internationales — entraînements conjoints avec les forces brésiliennes et surinamaises." },
  ],
  blocs: [
    {
      titre: "Le Centre d'entraînement en forêt équatoriale (C3F)",
      texte: "Pour se familiariser avec la jungle, les marsouins du 9e RIMa et des unités venues de métropole passent par le C3F, installé dans une base reculée. Pendant plusieurs semaines, les stagiaires apprennent à se repérer sans GPS : utilisation de la boussole, du topofil (fil d'orientation), lecture de reliefs et observation de la canopée. Ils construisent des bivouacs avec des bâches et des lianes, apprennent à filtrer l'eau et à préparer des repas à partir de ressources locales. La formation inclut aussi le tir en milieu dense, la progression en corde et la descente en rappel dans les vallées encaissées.",
      aRetenir: [
        "Le C3F forme à la survie, à la navigation et au combat en jungle.",
        "Les outils de base sont la boussole, le topofil et la machette.",
        "Chaque stagiaire doit construire un bivouac et gérer sa nourriture et son eau.",
      ],
    },
    {
      titre: "Le commando CRAJ et ses missions",
      texte: "Après la formation, les marsouins les plus aguerris rejoignent le Commando de recherche et d'action en jungle (CRAJ). Cette unité d'élite, forte d'une trentaine d'hommes, est capable de s'infiltrer sur des centaines de kilomètres à pied ou en pirogue. Dans le cadre de l'opération Harpie, le CRAJ mène des missions clandestines pour localiser les campements d'orpaillage illégal. Ses membres opèrent en binômes, parfois durant plusieurs jours sans soutien extérieur, observant les mouvements des garimpeiros et transmettant des coordonnées aux forces d'intervention. Le CRAJ coopère avec les gendarmes mobiles, les légionnaires du 3e REI et les forces armées brésiliennes et surinamaises.",
      aRetenir: [
        "Le CRAJ est spécialisé dans l'infiltration et la reconnaissance en forêt profonde.",
        "Ses missions principales : localisation de sites illégaux et guidage des forces d'intervention.",
        "La coopération avec les gendarmes et les forces étrangères est essentielle à la réussite des opérations.",
      ],
    },
    {
      titre: "Savoir‑faire et équipements",
      texte: "Au cœur de la jungle, le CRAJ utilise un équipement spécifique : machettes, coupe‑coupe, topofil, GPS encrypté, radios longue portée, filets de camouflage et sacs étanches. Pour se déplacer discrètement, les commandos préfèrent les pistes de chasse et les lits de rivières asséchées. Ils adaptent leur tenue en fonction de la météo : casques légers avec moustiquaire, gilets à poches, gourdes isothermes. Le savoir‑faire du CRAJ repose avant tout sur l'observation et l'anticipation : lire les traces au sol, détecter les fumées, repérer les campements avant d'être repéré. La formation continue — en Guyane comme à Manaus, au Brésil — maintient le niveau opérationnel.",
      aRetenir: [
        "L'équipement du CRAJ est adapté au milieu tropical et à l'infiltration discrète.",
        "Les commandos utilisent des techniques d'observation et d'anticipation pour survivre et repérer les sites illégaux.",
        "La formation continue (Guyane, Manaus) maintient le niveau opérationnel.",
      ],
    },
  ],
  glossaire: [
    { terme: "C3F", definition: "Centre d'entraînement en forêt équatoriale : structure de formation située en Guyane où les militaires apprennent la vie et le combat en jungle." },
    { terme: "Topofil", definition: "Bobine de fil utilisée pour mesurer et suivre une distance lors des progressions en forêt." },
    { terme: "Garimpeiro", definition: "Orpailleur clandestin opérant dans la forêt amazonienne." },
    { terme: "CRAJ", definition: "Commando de recherche et d'action en jungle : unité d'élite du 9e RIMa spécialisée dans l'infiltration et la reconnaissance en milieu tropical." },
    { terme: "Opération Harpie", definition: "Dispositif interarmées lancé en 2008 pour lutter contre l'orpaillage illégal et l'insécurité en Guyane." },
  ],
  quiz: [
    {
      question: "Quel outil traditionnel de mesure de distance est enseigné au C3F ?",
      options: ["Le GPS", "Le topofil", "La montre à gousset", "Le télémètre laser"],
      correctIndex: 1,
    },
    {
      question: "Quelle opération mobilise le CRAJ contre l'orpaillage clandestin ?",
      options: ["Opération Titan", "Opération Harpie", "Opération Maroni", "Opération Jumelles"],
      correctIndex: 1,
    },
    {
      question: "Quel est l'un des rôles principaux du CRAJ ?",
      options: ["Installer des ponts flottants sur le Maroni", "Localiser les sites illégaux et guider les forces d'intervention", "Construire des pas de tir au Centre Spatial", "Organiser des défilés à Cayenne"],
      correctIndex: 1,
    },
    {
      question: "Où les commandos du 9e RIMa se rendent‑ils pour se perfectionner à la jungle en dehors de la Guyane ?",
      options: ["À Paris", "À Manaus, au Brésil", "À Fort‑de‑France, en Martinique", "À Dakar, au Sénégal"],
      correctIndex: 1,
    },
  ],
};
