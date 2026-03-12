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

export interface GuyaneHarpieContent {
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

export const guyaneHarpieData: GuyaneHarpieContent = {
  title: "Harpie",
  subtitle: "La Guyane est confrontée à un fléau : l'orpaillage clandestin. L'opération Harpie est la réponse interarmées à ce défi, mobilisant des milliers de gendarmes et de militaires pour démanteler les sites illégaux et protéger l'environnement.",
  questionDirectrice: "Quelles sont les origines de l'opération Harpie, quels moyens engage‑t‑elle et quel rôle joue le 9e RIMa dans la lutte contre l'orpaillage clandestin ?",
  reperes: "Début des années 2000 : premières actions coordonnées (opération Anaconda) • Février 2008 : lancement officiel de l'opération Harpie, 1 180 gendarmes et 2 465 militaires mobilisés • 2010 : équipes mixtes (CRAJ, gendarmes mobiles, légionnaires du 3e REI) • 2023 : 225 personnes interpellées, 61 millions d'euros saisis, plus de 1 000 missions annuelles.",
  resume: "L'orpaillage clandestin dévaste les forêts et les fleuves de Guyane. Des milliers de garimpeiros (chercheurs d'or illégaux) venus du Brésil, du Suriname ou de l'intérieur du pays exploitent illégalement les gisements, contaminent les rivières au mercure et créent des réseaux criminels. Dès les années 2000, les autorités françaises lancent des actions ponctuelles (opération Anaconda), mais l'ampleur du phénomène impose un dispositif permanent. Le 28 février 2008, l'opération Harpie est lancée. Elle associe 1 180 gendarmes et 2 465 militaires des Forces Armées en Guyane. Le 9e RIMa y joue un rôle clé : escorte, logistique, destruction de matériel et, via le CRAJ, infiltration et renseignement. En 2023, 225 personnes ont été interpellées et 61 millions d'euros d'avoirs criminels saisis.",
  timeline: [
    { date: "Début des années 2000", description: "Opérations Anaconda — premières actions coordonnées contre les sites illégaux." },
    { date: "28 février 2008", description: "Lancement de l'opération Harpie — mise en place d'un dispositif permanent associant gendarmes et militaires." },
    { date: "2010", description: "Mise en place des équipes mixtes — intégration du CRAJ, des gendarmes mobiles et des légionnaires du 3e REI." },
    { date: "2023", description: "Bilan annuel — 225 personnes interpellées, 61 millions d'euros saisis, environ 1 000 missions." },
    { date: "Années 2020", description: "Harpie 2 et coopération internationale — renforcement des moyens mobiles et du dialogue avec le Brésil et le Suriname." },
  ],
  blocs: [
    {
      titre: "Les causes et les impacts de l'orpaillage clandestin",
      texte: "L'orpaillage illégal se développe à la faveur du prix élevé de l'or et de la porosité des frontières en forêt. Les garimpeiros, originaires principalement du Brésil, installent des campements en pleine jungle. Ils utilisent des pompes et du mercure pour extraire l'or, détruisent la végétation et polluent les rivières. Cette activité entraîne une dégradation environnementale considérable, met en danger la santé des populations amérindiennes et bushinengue et alimente des réseaux criminels transnationaux qui contrôlent le transport, le ravitaillement et la revente de l'or.",
      aRetenir: [
        "L'orpaillage clandestin est motivé par la ruée vers l'or et la pauvreté régionale.",
        "Il provoque des dégâts écologiques et sanitaires majeurs.",
        "Il alimente des réseaux criminels transnationaux.",
      ],
    },
    {
      titre: "Genèse et organisation de l'opération Harpie",
      texte: "Au début des années 2000, des opérations ponctuelles (Anaconda) sont menées pour détruire les sites illégaux. Toutefois, la pression reste forte. Le 28 février 2008, l'opération Harpie est lancée par la gendarmerie et les Forces Armées en Guyane. Ce dispositif permanent associe 1 180 gendarmes et 2 465 militaires des FAG. Harpie repose sur quatre piliers : action judiciaire (arrestation des orpailleurs et traducteurs), action administrative (destruction du matériel et des campements), action économique (saisie de l'or, du carburant et des machines) et action diplomatique (coopération avec le Brésil et le Suriname).",
      aRetenir: [
        "Harpie est une opération permanente et interarmées lancée en 2008.",
        "Elle mobilise des gendarmes et des militaires pour des missions judiciaires, administratives, économiques et diplomatiques.",
        "Les zones d'action principales sont le haut Maroni, le parc amazonien et l'Oyapock.",
      ],
    },
    {
      titre: "Rôle du 9e RIMa et des commandos CRAJ",
      texte: "Le 9e RIMa est l'un des piliers d'Harpie. Ses soldats assurent l'escorte des unités de gendarmerie, la protection des hélicoptères et la logistique dans les bases avancées. Ils participent aussi aux phases d'intervention, détruisent le matériel (moteurs, concasseurs), et assurent la sécurité des populations voisines. Le CRAJ joue un rôle essentiel dans la phase de renseignement : infiltrations en profondeur pour localiser les sites illégaux, observation discrète des mouvements de garimpeiros et transmission des coordonnées aux forces d'intervention. Les compétences fluviales du régiment — pirogues, navigation au Maroni — facilitent l'accès aux sites les plus reculés.",
      aRetenir: [
        "Le 9e RIMa protège et appuie les unités de gendarmerie lors des interventions.",
        "Le CRAJ réalise les infiltrations et fournit le renseignement opérationnel.",
        "Les compétences fluviales du régiment facilitent l'accès aux sites isolés.",
      ],
    },
    {
      titre: "Résultats et évolution de l'opération",
      texte: "Chaque année, l'opération Harpie conduit à la destruction de centaines de campements, à la saisie de plusieurs centaines de kilos d'or et de mercure et à l'arrestation de dizaines d'orpailleurs. En 2023, les forces engagées ont interpellé 225 personnes et saisi 61 millions d'euros d'avoirs criminels. Plus de 1 000 missions sont menées chaque année, mobilisant 50 à 60 gendarmes et 200 à 300 militaires par jour. Le dispositif s'adapte en permanence : allongement de la durée des missions, utilisation de drones, renforcement de la coopération avec le Brésil et le Suriname dans le cadre du projet Harpie 2.",
      aRetenir: [
        "Harpie a permis l'arrestation de centaines d'orpailleurs et la saisie de millions d'euros.",
        "Les missions mobilisent quotidiennement plusieurs centaines de gendarmes et de militaires.",
        "Le dispositif évolue vers des opérations plus longues et une coopération renforcée.",
      ],
    },
  ],
  glossaire: [
    { terme: "Garimpeiro", definition: "Orpailleur clandestin en Amazonie." },
    { terme: "Anaconda", definition: "Nom des opérations précédant Harpie, menées dans les années 2000 pour lutter contre l'orpaillage illégal." },
    { terme: "Harpie", definition: "Opération interarmées et interministérielle de lutte contre l'orpaillage illégal, lancée en 2008." },
    { terme: "Avoirs criminels", definition: "Biens saisis (or, carburant, machines) provenant d'activités illégales." },
    { terme: "Harpie 2", definition: "Évolution du dispositif visant à prolonger les opérations et à renforcer la coopération avec les pays voisins." },
  ],
  quiz: [
    {
      question: "En quelle année l'opération Harpie a‑t‑elle été officiellement lancée ?",
      options: ["2005", "2008", "2010", "2015"],
      correctIndex: 1,
    },
    {
      question: "Quel est le rôle principal du CRAJ dans le cadre de l'opération Harpie ?",
      options: ["Construire des campements", "S'infiltrer et fournir le renseignement sur les sites illégaux", "Fixer la valeur de l'or", "Former les gendarmes au tir"],
      correctIndex: 1,
    },
    {
      question: "Combien de gendarmes et de militaires sont engagés en moyenne chaque jour dans Harpie ?",
      options: ["5 gendarmes et 20 militaires", "50–60 gendarmes et 200–300 militaires", "500 gendarmes et 2 000 militaires", "1 gendarme et 3 militaires"],
      correctIndex: 1,
    },
    {
      question: "Quel montant total d'avoirs criminels a été saisi en 2023 lors des opérations Harpie ?",
      options: ["61 milliers d'euros", "61 millions d'euros", "6,1 milliards d'euros", "61 euros"],
      correctIndex: 1,
    },
  ],
};
