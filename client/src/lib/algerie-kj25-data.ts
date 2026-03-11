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

export interface AlgerieKJ25Content {
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

export const algerieKJ25Data: AlgerieKJ25Content = {
  title: "Opération KJ 25",
  subtitle: "Le 23 décembre 1957, les forces françaises mettent en œuvre une opération de cordon et de fouille autour de l'axe Tizi Ouzou – Haizer – Bouira. Cette action, connue sous le nom de KJ 25, illustre les méthodes de ratissage et la coordination entre unités.",
  questionDirectrice: "Comment la manœuvre KJ 25 s'est‑elle déroulée, et quels enseignements tire‑t‑on d'une opération qui mobilise diverses unités pour isoler et neutraliser les maquisards ?",
  reperes: "1956‑1957 : intensification des attaques en Kabylie • décembre 1957 : opération KJ 25 • 1958 : plan de Constantine • 1959 : plan Challe et opération Jumelles.",
  resume: "Au cours de l'hiver 1957, la RN12 reliant Tizi Ouzou à Bouira est régulièrement attaquée par l'ALN. Les forces françaises planifient KJ 25 : une opération de bouclage destinée à piéger les maquisards entre un cordon de compagnies et la route. Le 23 décembre, à 6 heures, des unités du 9e RIC, des commandos de chasse, des blindés et de l'artillerie se déploient simultanément. L'objectif : fouiller les villages et bloquer les issues. Malgré quelques prises, la majorité des combattants parviennent à s'esquiver grâce à leur connaissance du terrain. L'opération confirme la nécessité de compléter le ratissage par un renseignement plus fin.",
  timeline: [
    { date: "Début décembre 1957", description: "Planification de l'opération KJ 25." },
    { date: "23 décembre 1957", description: "Déploiement du cordon et fouilles." },
    { date: "Fin décembre 1957", description: "Bilans et rapports remis au commandement." },
    { date: "1958", description: "L'expérience sert à préparer les opérations du plan Challe." },
  ],
  blocs: [
    {
      titre: "Contexte : sécuriser le corridor Tizi Ouzou – Bouira",
      icon: "map",
      texte: "La RN12 traverse le cœur de la Kabylie et relie la côte (Tizi Ouzou) à la plaine de la Mitidja (Bouira). C'est une artère vitale pour l'armée et les colons. En 1957, des embuscades et attentats minent la circulation. Le commandement décide de renforcer la sécurité par des opérations coordonnées.",
      aRetenir: [
        "La route est un enjeu logistique ; sa sécurisation est une priorité.",
        "Les maquisards connaissent parfaitement les sentiers permettant de s'enfoncer dans les djebels.",
      ],
    },
    {
      titre: "Le dispositif KJ 25 : cordon et fouilles",
      icon: "target",
      texte: "L'opération KJ 25 prévoit de déployer plusieurs unités le long d'un périmètre : compagnies du 9e RIC, commandos de chasse, sections de blindés, appui d'artillerie. Le plan consiste à former un cordon qui se resserre pendant que des équipes fouillent les villages et contrôlent les habitants. Des barrages sur la RN12 empêchent les fuyards de rejoindre Tizi Ouzou ou Bouira. Un poste de commandement coordonne les mouvements et la communication radio.",
      aRetenir: [
        "La synchronisation des unités est cruciale pour éviter les échappatoires.",
        "Les fouilles s'accompagnent de visites médicales et de distributions, comme dans les centres de rayonnement.",
      ],
    },
    {
      titre: "Déroulement de l'opération",
      icon: "activity",
      texte: "Le 23 décembre à l'aube, les unités se mettent en place. Des commandos de chasse partent en reconnaissance, signalent des traces récentes mais peu de contacts. Les compagnies du 9e RIC avancent en ligne, perquisitionnant des douars. Des blindés barrent la RN12. Vers midi, quelques échanges de tirs ont lieu à proximité du col de Tizi N'Kachna ; des combattants de l'ALN ripostent avant de se replier dans les forêts. Les commandos tentent de les poursuivre mais le terrain accidenté freine la progression.",
      aRetenir: [
        "L'opération se déroule selon le plan mais les contacts restent limités.",
        "Le terrain montagneux avantage les combattants de l'ALN qui connaissent les chemins de repli.",
      ],
    },
    {
      titre: "Bilan et leçons",
      icon: "clipboard",
      texte: "KJ 25 montre l'efficacité logistique des forces françaises : coordination, déploiement rapide et contrôle des axes. Toutefois, la difficulté de fixer les maquisards souligne les limites d'un ratissage sans renseignement précis. L'ALN dispose d'un réseau de chemins et d'abris qui lui permettent d'éviter les encerclements. Pour le 9e RIC, ces opérations constituent un entraînement avant les grandes offensives du plan Challe.",
      aRetenir: [
        "KJ 25 démontre la capacité logistique mais aussi les limites du ratissage.",
        "L'expérience acquise sera réinvestie dans les opérations du plan Challe en 1959.",
      ],
    },
  ],
  glossaire: [
    { terme: "RN12", definition: "Route nationale reliant Tizi Ouzou à Bouira." },
    { terme: "Cordon", definition: "Dispositif militaire visant à encercler une zone pour y mener des fouilles." },
    { terme: "Commando de chasse", definition: "Unité légère destinée à repérer et poursuivre les combattants de l'ALN." },
    { terme: "Ratissage", definition: "Opération de recherche et de neutralisation dans une zone définie." },
  ],
  quiz: [
    { question: "Quel est l'objectif principal de l'opération KJ 25 ?", reponse: "Sécuriser l'axe Tizi Ouzou – Bouira en encerclant et fouillant les villages." },
    { question: "Quels types d'unités participent à l'opération ?", reponse: "Compagnies du 9e RIC, commandos de chasse, blindés, artillerie." },
    { question: "Pourquoi l'opération ne permet‑elle pas de neutraliser les maquisards ?", reponse: "Manque de renseignement et capacité des combattants à se replier dans les djebels." },
    { question: "Que signifie « ratissage » ?", reponse: "Opération de recherche et de neutralisation dans une zone donnée." },
  ],
};
