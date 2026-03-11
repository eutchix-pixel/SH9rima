export interface TimelineEvent {
  date: string;
  description: string;
}

export interface ContentBloc {
  titre: string;
  icon: string;
  texte: string;
  aRetenir: string[];
}

export interface GlossaryEntry {
  terme: string;
  definition: string;
}

export interface QuizQuestion {
  question: string;
  reponse: string;
}

export interface MapMarker {
  nom: string;
  role: string;
  detail: string;
  lat: number;
  lng: number;
}

export interface AlgeriePalestroContent {
  title: string;
  subtitle: string;
  questionDirectrice: string;
  reperes: string;
  resume: string;
  timeline: TimelineEvent[];
  blocs: ContentBloc[];
  mapMarkers: MapMarker[];
  glossaire: GlossaryEntry[];
  quiz: QuizQuestion[];
}

export const algeriePalestroData: AlgeriePalestroContent = {
  title: "Algérie — Palestro (18 mai 1956)",
  subtitle: "Au cœur des gorges de Kabylie, une patrouille du 9e RIC est décimée par une embuscade. L'événement, largement relayé, devient un symbole de la guerre d'Algérie et du courage des soldats.",
  questionDirectrice: "Comment la topographie et la tactique ont‑elles conduit à la destruction d'une section du 9e RIC, et pourquoi cet épisode résonne‑t‑il encore aujourd'hui ?",
  reperes: "18 mai 1956 : embuscade de Palestro • 19 mai 1956 : récupération des corps • 1956 : multiplication des attaques de l'ALN en Kabylie • 1957 : renforcement des effectifs français • 1958 : retour de De Gaulle.",
  resume: "Le 18 mai 1956, une section de vingt‑et‑un hommes du 9e régiment d'infanterie coloniale, commandée par le sous‑lieutenant Hervé Artur, se rend au douar Djerrah dans les montagnes de Kabylie pour soutenir un poste isolé. Dans la gorge, quarante moudjahidine de l'ALN, menés par Ali Khodja, tendent une embuscade. Pris sous un feu croisé, les soldats n'ont aucune possibilité de repli. Vingt soldats, dont Artur, sont tués ; un seul survivant est capturé et relâché ultérieurement. L'opinion publique française est profondément secouée par l'annonce du massacre, qui révèle la brutalité du conflit algérien.",
  timeline: [
    { date: "18 mai 1956", description: "Embuscade de Palestro." },
    { date: "19 mai 1956", description: "Récupération des corps et obsèques à Alger." },
    { date: "Été 1956", description: "Multiplication des embuscades de l'ALN en Kabylie." },
    { date: "1957", description: "Renforcement des opérations de ratissage." },
    { date: "1958", description: "Crise du 13 mai et retour de De Gaulle." },
  ],
  blocs: [
    {
      titre: "Un terrain difficile : gorges et djebels",
      icon: "mountain",
      texte: "La Kabylie est un massif montagneux aux pentes abruptes et aux gorges profondes. Les pistes sont étroites et dominées par des crêtes boisées, ce qui favorise les embuscades. Palestro (aujourd'hui Lakhdaria) est un bourg situé au pied des djebels de l'Atlas tellien. Les unités françaises utilisent des pistes comme celle de Djerrah pour relier les postes.",
      aRetenir: [
        "La configuration du terrain rend le convoi vulnérable ; les combattants de l'ALN utilisent la végétation et la hauteur pour se dissimuler.",
        "Les soldats du 9e RIC avancent en file indienne, exposés à une attaque sur leur flanc gauche.",
      ],
    },
    {
      titre: "L'embuscade : 18 mai 1956",
      icon: "crosshair",
      texte: "Le sous‑lieutenant Hervé Artur dirige la deuxième section de la 2e compagnie du 9e RIC. Le matin du 18 mai, il reçoit l'ordre de rejoindre le poste d'Ouled Djerrah. Arrivés dans la gorge, ses hommes sont pris sous un feu nourri. Des grenades et des rafales de mitraillettes fauchent l'avant et l'arrière de la colonne. Les survivants tentent de se mettre à couvert mais la pente escarpée empêche toute manœuvre. L'assaut dure moins d'une heure. Vingt soldats sont tués, un seul homme survit.",
      aRetenir: [
        "Le déséquilibre numérique (21 vs 40) et la surprise sont déterminants.",
        "Les communications et renforts arrivent trop tard.",
      ],
    },
    {
      titre: "Réactions et conséquences",
      icon: "newspaper",
      texte: "Le surlendemain, des renforts récupèrent les corps et constatent la brutalité de l'attaque. En France, l'opinion publique prend conscience de la gravité du conflit. L'armée renforce sa présence en Kabylie ; des opérations de ratissage visent à traquer les groupes responsables. L'embuscade accentue la volonté de certains politiciens de négocier, tandis que d'autres réclament un durcissement. Pour l'ALN, cette victoire renforce le moral et démontre l'efficacité de la guérilla.",
      aRetenir: [
        "L'opinion publique française est profondément choquée.",
        "L'armée renforce ses effectifs en Kabylie après l'embuscade.",
      ],
    },
    {
      titre: "Hommages et mémoire",
      icon: "monument",
      texte: "Les noms des soldats tombés à Palestro sont inscrits sur des monuments du 9e RIMa. Des cérémonies annuelles leur rendent hommage. L'événement est aussi l'occasion de rappeler les souffrances de la population algérienne, prise dans la spirale des violences. La toponymie a évolué : Palestro s'appelle aujourd'hui Lakhdaria.",
      aRetenir: [
        "Des cérémonies commémoratives sont organisées chaque année.",
        "Palestro s'appelle aujourd'hui Lakhdaria.",
      ],
    },
  ],
  mapMarkers: [
    {
      nom: "Palestro (Lakhdaria)",
      role: "Lieu de départ du convoi",
      detail: "Bourg au pied des djebels de l'Atlas tellien, point de départ de la section du 9e RIC.",
      lat: 36.4533,
      lng: 3.5928,
    },
    {
      nom: "Gorge de Djerrah",
      role: "Site de l'embuscade",
      detail: "Gorge étroite entre Palestro et le douar Djerrah, lieu de l'embuscade du 18 mai 1956.",
      lat: 36.43,
      lng: 3.55,
    },
    {
      nom: "Douar Ouled Djerrah",
      role: "Destination de la section",
      detail: "Poste isolé que la section du sous‑lieutenant Artur devait rejoindre pour le soutenir.",
      lat: 36.41,
      lng: 3.52,
    },
  ],
  glossaire: [
    { terme: "Palestro / Lakhdaria", definition: "Localité de Kabylie, théâtre de l'embuscade du 18 mai 1956." },
    { terme: "Hervé Artur", definition: "Sous‑lieutenant du 9e RIC, commandant de la section attaquée." },
    { terme: "Ali Khodja", definition: "Chef de groupe de l'ALN qui mène l'embuscade." },
    { terme: "ALN", definition: "Armée de libération nationale, bras armé du FLN." },
  ],
  quiz: [
    { question: "Combien de soldats composent la section du 9e RIC attaquée à Palestro ?", reponse: "21" },
    { question: "Qui commande la section française ?", reponse: "Le sous‑lieutenant Hervé Artur" },
    { question: "Quel est le nom du chef de l'ALN qui tend l'embuscade ?", reponse: "Ali Khodja" },
    { question: "Quelle est la conséquence majeure de cette embuscade en France ?", reponse: "Prise de conscience de la gravité du conflit et renforcement des opérations de ratissage" },
  ],
};
