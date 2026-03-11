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

export interface AlgerieContreInsurrectionContent {
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

export const algerieContreInsurrectionData: AlgerieContreInsurrectionContent = {
  title: "Algérie — Contre‑insurrection et politique (1956‑1959)",
  subtitle: "Entre 1956 et 1959, la France passe d'une logique de simple répression à une stratégie globale combinant développement, intégration et guerre psychologique. Ces années voient la naissance des SAS, des plans de Constantine et Challe, l'ascension de De Gaulle et la création de commandos de chasse.",
  questionDirectrice: "Comment l'État français tente‑t‑il de briser l'insurrection en combinant réforme et guerre, et pourquoi ces efforts finissent‑ils par renforcer la demande d'indépendance ?",
  reperes: "1956 : plan de Guy Mollet, début des SAS • 1957 : bataille d'Alger • 13 mai 1958 : crise et retour de De Gaulle • Septembre 1958 : plan de Constantine • 1959 : lancement du plan Challe et opérations Jumelles • 16 septembre 1959 : discours de l'autodétermination.",
  resume: "Pour contrer l'ALN, les autorités françaises conjuguent action militaire et réforme sociale. Des centres de rayonnement et les Sections administratives spécialisées (SAS) offrent écoles et dispensaires afin de gagner la population. Le plan de Constantine, annoncé par De Gaulle en 1958, promet des investissements et une voie vers l'égalité. Mais sur le terrain, l'armée prépare une contre‑offensive : le plan Challe (1959–1961) vise à encercler et anéantir les maquis de l'ALN grâce à des opérations héliportées de grande envergure, comme l'opération Jumelles en Kabylie. Malgré des résultats militaires significatifs, la question politique reste ouverte : en septembre 1959, De Gaulle annonce le droit à l'autodétermination, ouvrant la voie à de futures négociations.",
  timeline: [
    { date: "1956", description: "Création des SAS et des centres de rayonnement." },
    { date: "13 mai 1958", description: "Crise d'Alger ; retour de Charles de Gaulle au pouvoir." },
    { date: "Septembre 1958", description: "Annonce du plan de Constantine." },
    { date: "1959", description: "Lancement du plan Challe." },
    { date: "22 juil. 1959 – 4 avr. 1960", description: "Opération Jumelles en Kabylie." },
    { date: "16 septembre 1959", description: "Discours de De Gaulle sur l'autodétermination." },
  ],
  blocs: [
    {
      titre: "Pacification : l'approche des centres de rayonnement et des SAS",
      icon: "heart-handshake",
      texte: "Afin de « gagner les cœurs et les esprits », l'armée met en place des centres de rayonnement dans les djebels. Ces postes, dotés d'écoles, de dispensaires et de coopératives, sont animés par des officiers des Sections administratives spécialisées (SAS). Ils distribuent des vivres, soignent et alphabétisent. L'objectif est d'associer les populations à l'effort de guerre en leur offrant des services inexistants jusqu'alors.",
      aRetenir: [
        "Cette approche combine action civile et militaire ; elle cherche à isoler l'ALN en privant les maquis de soutien.",
        "Elle rencontre des limites : suspicion des populations, manque de moyens et violences concomitantes.",
      ],
    },
    {
      titre: "Plan de Constantine et l'arrivée de De Gaulle",
      icon: "landmark",
      texte: "La crise du 13 mai 1958 à Alger entraîne le retour au pouvoir de Charles de Gaulle. Pour calmer les colons et séduire les Algériens, De Gaulle annonce en septembre 1958 le plan de Constantine : cinq années d'investissement économique, création d'emplois, accès à l'éducation et aux soins. Ce programme vise à montrer que l'avenir de l'Algérie peut se construire dans le cadre français. Mais il arrive trop tard pour contrer la dynamique nationaliste.",
      aRetenir: [
        "Le plan de Constantine est la réponse sociale au malaise algérien.",
        "Il arrive tard et ne satisfait ni les colons (qui craignent une égalité) ni les nationalistes (qui aspirent à l'indépendance).",
      ],
    },
    {
      titre: "Plan Challe et opérations Jumelles",
      icon: "swords",
      texte: "Succédant au général Salan, Maurice Challe lance un plan militaire massif (plan Challe) en 1959. Sa stratégie : reprendre l'initiative, encercler les maquis et couper les flux d'hommes et d'armes. L'opération Jumelles, menée du 22 juillet 1959 au 4 avril 1960 en Kabylie, mobilise environ 40 000 hommes et utilise l'héliportage pour fouiller la forêt d'Akfadou. Des commandos de chasse, composés à 30–60 % de volontaires musulmans et d'anciens rebelles, traquent les bandes armées dans le djebel. La wilaya 3 est durement touchée.",
      aRetenir: [
        "Le plan Challe est l'offensive la plus forte de la guerre ; il remet provisoirement l'ALN en difficulté.",
        "Les commandos de chasse symbolisent la professionnalisation de la guerre (mixité harkis/anciens rebelles et soldats français).",
      ],
    },
    {
      titre: "Repenser le politique : vers l'autodétermination",
      icon: "scale",
      texte: "Malgré les succès militaires, l'armée ne parvient pas à éradiquer l'ALN. De Gaulle l'admet dès septembre 1959 en proposant le droit à l'autodétermination. Cette annonce, confirmée par un référendum en janvier 1961, divise colons et militaires mais ouvre la voie aux négociations. Le 9e RIC poursuit ses opérations tout en vivant les tensions internes de l'armée. Cette période marque un glissement irréversible vers la fin du conflit.",
      aRetenir: [
        "La reconnaissance du principe d'autodétermination marque un tournant décisif.",
        "Les opérations militaires continuent malgré tout, contribuant à alimenter la violence.",
      ],
    },
  ],
  glossaire: [
    { terme: "SAS", definition: "Sections administratives spécialisées, unités civiles‑militaires chargées du développement local." },
    { terme: "Plan de Constantine", definition: "Vaste programme de réformes économiques et sociales pour l'Algérie (1958)." },
    { terme: "Plan Challe", definition: "Stratégie militaire française (1959‑1961) destinée à anéantir l'ALN." },
    { terme: "Commandos de chasse", definition: "Unités de 70 à 140 hommes, créées en 1958 pour traquer les combattants de l'ALN." },
    { terme: "Autodétermination", definition: "Principe proposé par De Gaulle en 1959 donnant aux Algériens le choix de leur avenir." },
  ],
  quiz: [
    { question: "Que signifient les lettres SAS ?", reponse: "Sections administratives spécialisées" },
    { question: "Quel est l'objectif du plan de Constantine ?", reponse: "Moderniser l'Algérie et créer des emplois et des logements" },
    { question: "Combien de soldats environ participent à l'opération Jumelles ?", reponse: "Environ 40 000" },
    { question: "Quels sont les effectifs typiques d'un commando de chasse ?", reponse: "70 à 140 hommes, dont 30 à 60 % de volontaires musulmans" },
    { question: "Quel discours marque l'annonce de l'autodétermination ?", reponse: "Celui de De Gaulle le 16 septembre 1959" },
  ],
};
