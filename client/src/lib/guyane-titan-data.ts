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

export interface GuyaneTitanContent {
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

export const guyaneTitanData: GuyaneTitanContent = {
  title: "Titan",
  subtitle: "Chaque lancement spatial est une mission militaire. L'opération Titan sécurise le Centre Spatial Guyanais, site stratégique de l'Europe, et mobilise le 9e RIMa pour protéger le ciel, la mer et la terre.",
  questionDirectrice: "Qu'est‑ce que le Centre Spatial Guyanais, pourquoi est‑il stratégique et comment l'opération Titan associe‑t‑elle gendarmes et militaires pour garantir la sécurité des lancements ?",
  reperes: "1968 : création du Centre Spatial Guyanais (CSG) à Kourou, 660 km², 20 % du PIB de la Guyane • Années 1990 : premiers dispositifs de sécurisation lors des lancements • 2000 : institutionnalisation de l'opération Titan • Années 2020 : adaptation aux nouvelles menaces (drones, intrusions) et coopération renforcée avec l'ESA.",
  resume: "Le Centre Spatial Guyanais est un site unique : 660 km² de savane et de mangroves où sont assemblés et lancés les satellites européens. Ce cosmodrome abrite plusieurs pas de tir (Ariane 5, Vega, Soyouz) et une base portuaire et aéroportuaire. Son importance économique est majeure : il génère près de 20 % du PIB de la Guyane et emploie des milliers de personnes. À chaque lancement, des menaces potentielles (intrusions, sabotage, pollution, attentats) exigent un dispositif de sécurité exceptionnel : l'opération Titan. Environ 150 gendarmes et des détachements de l'armée de terre et de la marine sécurisent les zones terrestre, maritime et aérienne. Le 9e RIMa participe aux patrouilles terrestres, à la surveillance des approches et à la force de réaction rapide (QRF). Ce dispositif millimétrée garantit que chaque fusée décolle en toute sécurité.",
  timeline: [
    { date: "1968", description: "Création du CSG — début de l'aventure spatiale en Guyane, installation des premières infrastructures." },
    { date: "Années 1990", description: "Premiers dispositifs de sécurité — mise en place des protections terrestres, maritimes et aériennes lors des lancements." },
    { date: "2000", description: "Institutionnalisation de l'opération Titan — formalisation d'un dispositif permanent mobilisant gendarmes et militaires." },
    { date: "Années 2020", description: "Adaptation aux nouvelles menaces — intégration de moyens anti‑drones, coopération renforcée avec l'ESA et préparation des lancements Ariane 6." },
  ],
  blocs: [
    {
      titre: "Le Centre Spatial Guyanais, un site stratégique",
      texte: "Situé près de Kourou, le CSG est le cosmodrome européen. Créé en 1968, il est choisi pour sa proximité de l'équateur, qui permet de profiter de la rotation terrestre pour la mise en orbite des satellites. Le site s'étend sur environ 660 km² et comprend des pas de tir pour les lanceurs Ariane 5, Vega et Soyouz. Il emploie des milliers de techniciens, d'ingénieurs et de militaires. Les fusées emportent des satellites de télécommunication, de météorologie et de défense, faisant du CSG un outil stratégique majeur pour l'Europe et pour la France.",
      aRetenir: [
        "Le CSG est le principal centre de lancement de l'Europe.",
        "Il s'étend sur 660 km² et contribue à 20 % du PIB de la Guyane.",
        "Sa proximité de l'équateur optimise la mise en orbite des satellites.",
      ],
    },
    {
      titre: "Organisation de l'opération Titan",
      texte: "À chaque lancement, l'opération Titan se déploie. Environ 150 gendarmes et des détachements de l'armée de terre et de la marine forment un dispositif intégré. Ils se répartissent en trois volets : sécurisation terrestre (protection des zones sensibles, filtrage des entrées, patrouilles cynophiles), surveillance maritime (zone d'exclusion en mer, vedettes rapides, avion de patrouille maritime) et contrôle aérien (zone d'interdiction aérienne, suivi radar, hélicoptères pour neutraliser les drones ou aéronefs intrusifs). Une force de réaction rapide (QRF) est prête à décoller en hélicoptère pour intervenir sur une intrusion ou un accident. Des postes de commandement coordonnent l'ensemble avec le centre de contrôle du CSG et les autorités civiles.",
      aRetenir: [
        "Titan mobilise environ 150 gendarmes et des militaires terrestres, maritimes et aériens.",
        "Les zones terrestre, maritime et aérienne sont surveillées simultanément.",
        "Une QRF est toujours prête à intervenir en cas d'incident.",
      ],
    },
    {
      titre: "Jour de lancement : une chorégraphie millimétrée",
      texte: "Le jour d'un lancement, des semaines de préparation culminent en quelques heures. La veille, les équipes Titan installent des checkpoints et des périmètres de sécurité. Au matin, les gendarmes filtrent les entrées et surveillent les zones sensibles. La Marine nationale déploie ses patrouilleurs et interdit la navigation dans une zone d'environ 50 km autour de la trajectoire. Dans les airs, un hélicoptère Fennec ou Panther patrouille en liaison radio avec le centre de contrôle. Au moment du décollage, tous les regards convergent vers le pas de tir. Le lanceur s'élève dans un tonnerre de flammes et traverse les différentes couches de l'atmosphère sous la surveillance constante des radars. Ce n'est qu'une fois la trajectoire confirmée et les zones dégagées que le dispositif est progressivement levé.",
      aRetenir: [
        "La préparation d'un lancement mobilise des équipes interarmées et interservices.",
        "Les zones d'exclusion maritimes et aériennes sont strictement contrôlées.",
        "La coordination entre militaires et personnel du CSG est essentielle à la sécurité.",
      ],
    },
    {
      titre: "Évolution et enjeux de Titan",
      texte: "Depuis sa mise en place, l'opération Titan s'adapte aux évolutions technologiques et aux nouvelles menaces. Les drones civils constituent un risque grandissant : des unités spécialisées de la gendarmerie repèrent et neutralisent les appareils intrusifs. La menace terroriste impose un contrôle renforcé des accès et des personnels. Parallèlement, l'arrivée de nouveaux lanceurs (Ariane 6) et l'extension des installations exigent l'ajustement du dispositif. Titan illustre la capacité des forces armées en Guyane à protéger un site industriel et scientifique d'importance mondiale, tout en contribuant au rayonnement de la France dans le domaine spatial.",
      aRetenir: [
        "Titan évolue face aux nouvelles menaces (drones, terrorisme) et aux nouveaux lanceurs.",
        "La coopération entre la gendarmerie, les forces armées et les acteurs du spatial est constante.",
        "La sécurité des lancements est essentielle à l'économie guyanaise et à l'image de l'Europe spatiale.",
      ],
    },
  ],
  glossaire: [
    { terme: "CSG", definition: "Centre Spatial Guyanais : base de lancement de l'Agence spatiale européenne située à Kourou, d'une superficie de 660 km²." },
    { terme: "Opération Titan", definition: "Dispositif de sécurité interarmées et interministériel déployé à chaque lancement pour protéger le CSG." },
    { terme: "QRF", definition: "Quick Reaction Force : force d'intervention rapide prête à décoller en hélicoptère pour répondre à une intrusion ou un incident." },
    { terme: "Zone d'exclusion", definition: "Espace terrestre, maritime ou aérien interdit d'accès pendant les opérations de lancement." },
    { terme: "Ariane 6", definition: "Futur lanceur européen destiné à succéder à Ariane 5." },
  ],
  quiz: [
    {
      question: "Quelle superficie approximative recouvre le Centre Spatial Guyanais ?",
      options: ["6,6 km²", "66 km²", "660 km²", "6 600 km²"],
      correctIndex: 2,
    },
    {
      question: "Quel pourcentage du PIB de la Guyane est généré par le CSG selon les estimations ?",
      options: ["Environ 2 %", "Environ 10 %", "Environ 20 %", "Environ 50 %"],
      correctIndex: 2,
    },
    {
      question: "Combien de gendarmes environ sont mobilisés lors de l'opération Titan pour sécuriser un lancement ?",
      options: ["15", "150", "1 500", "15 000"],
      correctIndex: 1,
    },
    {
      question: "Quel est l'un des objectifs principaux de l'opération Titan ?",
      options: ["Creuser des pistes forestières", "Protéger le Centre Spatial Guyanais contre les intrusions et les menaces", "Former les marsouins à la jungle", "Construire des écoles pour les enfants"],
      correctIndex: 1,
    },
  ],
};
