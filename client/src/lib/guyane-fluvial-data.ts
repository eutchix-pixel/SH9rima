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

export interface GuyaneFluvialContent {
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

export const guyaneFluvialData: GuyaneFluvialContent = {
  title: "Fluvial",
  subtitle: "Le Maroni est l'artère vitale du régiment. En pirogue, les marsouins parcourent des centaines de kilomètres pour ravitailler les postes, soutenir les populations et affirmer la présence de la France. Entre rapides et troncs d'arbres, la navigation est un art.",
  questionDirectrice: "Pourquoi la maîtrise du fleuve est‑elle au cœur des missions du 9e RIMa et quels savoir‑faire les marsouins développent‑ils pour franchir les rapides et naviguer dans la jungle ?",
  reperes: "1976 : acquisition de 12 pirogues pour Saint‑Jean • 1977 : premières missions fluviales vers les bornes frontières et Maripasoula • 1986 : plan Maroni, intensification des patrouilles fluviales • 1990 : création du poste de Nasson, base de la section fluviale • 1996 : réoccupation du camp de Maripasoula, logistique fluviale renforcée.",
  resume: "La Guyane est un territoire de fleuves. Pour le 9e RIMa, le Maroni et l'Oyapock constituent les voies d'accès principales. Depuis 1976, le détachement de Saint‑Jean dispose d'une flotte de pirogues motorisées. Ces embarcations légères, fabriquées en bois local, transportent hommes, vivres, médicaments et matériel. L'équipage est composé d'un takariste placé à l'avant, chargé de repérer les rochers et les passes, et d'un motoriste à l'arrière, responsable de la propulsion et de la direction. Le fleuve est parsemé de sauts — des rapides où le courant se resserre — qui exigent reconnaissance et technique. Parfois, l'équipage doit porter la pirogue à terre pour contourner l'obstacle. Cette maîtrise du fleuve fait du 9e RIMa un régiment unique, capable de projeter sa présence au cœur de la forêt amazonienne.",
  timeline: [
    { date: "1976", description: "Réception des premières pirogues — 12 pirogues motorisées pour Saint‑Jean." },
    { date: "1977", description: "Première mission fluviale vers les bornes frontières — la mission vers la borne 5 échoue mais celle vers la borne 2 réussit." },
    { date: "1986", description: "Intensification des patrouilles — plan Maroni et escortes des convois de réfugiés." },
    { date: "1990", description: "Installation du poste de Nasson — base d'appui pour la section fluviale sur le bas Maroni." },
    { date: "1996", description: "Réoccupation du camp de Maripasoula — reprise des missions d'endurance sur 400 km de fleuve." },
  ],
  blocs: [
    {
      titre: "La pirogue, un vecteur de présence",
      texte: "Lorsque le 9e BIMa s'installe à Saint‑Jean du Maroni, il reçoit douze pirogues taillées dans des troncs de bois local. Ces bateaux deviennent la colonne vertébrale de la logistique. Chaque semaine, des convois remontent le fleuve jusqu'à Maripasoula et parfois au‑delà pour ravitailler les postes isolés et transporter des vivres, du carburant, du courrier et des matériaux de construction. Dans les années 1980, la mission s'intensifie avec l'augmentation des patrouilles liées au plan Maroni. Les pirogues sont modernisées : moteurs plus puissants, coques renforcées, équipement radio embarqué. Malgré ces améliorations, le fleuve reste imprévisible et la pirogue demeure un outil artisanal, dépendant du savoir‑faire de ses marins.",
      aRetenir: [
        "La pirogue est à la fois moyen de transport et symbole de présence.",
        "Le fleuve relie les postes et les villages, remplaçant les routes inexistantes.",
        "La logistique fluviale évolue mais reste essentielle à la mission.",
      ],
    },
    {
      titre: "Rôles du takariste et du motoriste",
      texte: "La navigation au Maroni obéit à un rituel précis. À l'avant, le takariste — généralement un marsouin expérimenté ou un Amérindien — tient une longue perche. Sa mission : repérer les rochers, branchages et bancs de sable qui affleurent et indiquer la trajectoire au motoriste. Il crie « taka » (attention) en touchant l'eau pour signaler un obstacle. À l'arrière, le motoriste manœuvre un moteur hors‑bord de forte puissance. Il doit réagir en une fraction de seconde aux signaux du takariste. Entre les deux, les passagers et le chargement sont répartis pour équilibrer la pirogue. Un déséquilibre peut faire chavirer l'embarcation dans les rapides.",
      aRetenir: [
        "Takariste : éclaireur et guide du fleuve.",
        "Motoriste : pilote et responsable de la propulsion.",
        "La coordination et l'équilibre des passagers sont primordiaux pour la sécurité.",
      ],
    },
    {
      titre: "Franchir les rapides et les sauts",
      texte: "Le Maroni est parsemé de sauts, rapides où le courant se resserre et se cabre. Franchir un saut exige une préparation minutieuse. Avant d'engager la pirogue, le takariste reconnaît les remous à pied ou depuis la berge. Le motoriste choisit la « passe » la moins dangereuse et accélère pour prendre de la vitesse. Dans certains cas, l'équipage doit porter la pirogue : la vider, la hisser sur la berge, contourner l'obstacle et la remettre à l'eau plus haut. Les sauts les plus connus — Acarouany, Charvein, Nassau — sont aussi des repères pour les postes et les patrouilles. L'entretien des rampes de halage et des câbles fait partie des missions des sections fluviales.",
      aRetenir: [
        "Les rapides sont des points dangereux qui nécessitent reconnaissance et technique.",
        "Le portage est parfois indispensable pour contourner les sauts les plus violents.",
        "L'entretien des rampes et des câbles fait partie des missions des sections fluviales.",
      ],
    },
    {
      titre: "Vie sur le fleuve",
      texte: "Naviguer pendant des heures entre deux murs de verdure crée une routine singulière. Les convois partent souvent à l'aube pour profiter de la fraîcheur. Les marins emportent des hamacs, de l'eau, des vivres et des filets à moustiques. Les arrêts se font dans les carbets (abris traditionnels) des villages amérindiens ou bushinengue. Les soldats apprennent à préparer le poisson, à fumer la viande et à filtrer l'eau. Sur le fleuve, la météo décide de tout : crues soudaines, orages tropicaux, brumes matinales. Le fleuve est un espace de solidarité où marsouins et habitants partagent le quotidien.",
      aRetenir: [
        "La navigation rythme la vie des marsouins et des populations locales.",
        "Les marins adoptent des pratiques de survie et de partage en forêt.",
        "Le fleuve est un espace de solidarité et d'échanges culturels.",
      ],
    },
  ],
  glossaire: [
    { terme: "Maroni", definition: "Fleuve frontière entre la Guyane française et le Suriname, long de plus de 500 km." },
    { terme: "Takariste", definition: "Membre d'équipage placé à l'avant de la pirogue qui repère les obstacles et guide le motoriste." },
    { terme: "Motoriste", definition: "Pilote de la pirogue qui manœuvre le moteur et suit les indications du takariste." },
    { terme: "Saut (rapide)", definition: "Portion du fleuve où le courant s'accélère et crée des tourbillons. Les sauts les plus connus du Maroni sont Acarouany, Charvein, Nassau." },
    { terme: "Portage", definition: "Action de transporter la pirogue à terre pour contourner un obstacle infranchissable." },
  ],
  quiz: [
    {
      question: "Quel est le rôle principal du takariste dans une pirogue ?",
      options: ["Conduire le moteur", "Repérer les obstacles et guider", "Préparer les repas", "Naviguer au GPS"],
      correctIndex: 1,
    },
    {
      question: "Quelle opération est parfois nécessaire pour franchir les sauts les plus dangereux ?",
      options: ["Tirer au canon", "Portager la pirogue sur la berge", "Vider la pirogue et la couler", "Attendre la saison sèche"],
      correctIndex: 1,
    },
    {
      question: "En quelle année le poste de Nasson a‑t‑il été créé pour soutenir la section fluviale ?",
      options: ["1976", "1986", "1990", "1996"],
      correctIndex: 2,
    },
    {
      question: "Quel fleuve constitue la principale voie logistique du 9e RIMa ?",
      options: ["Le Maroni", "La Seine", "Le Danube", "L'Amazone"],
      correctIndex: 0,
    },
  ],
};
