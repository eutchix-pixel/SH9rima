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
  reponse: string;
}

export interface AlgerieCommandosContent {
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

export const algerieCommandosData: AlgerieCommandosContent = {
  title: "Commandos de chasse",
  subtitle: "Face à un ennemi insaisissable, l'armée française créé des unités légères et mobiles : les commandos de chasse. Mélange de volontaires français et musulmans, ils sillonnent les djebels pour repérer et fixer les groupes de l'ALN.",
  questionDirectrice: "Pourquoi les commandos de chasse sont‑ils devenus un outil central de la stratégie contre‑insurrectionnelle, et qu'apportent‑ils de nouveau par rapport aux unités classiques ?",
  reperes: "Décembre 1958 : création des commandos de chasse • 1959 : opération Jumelles • 1959–1961 : plan Challe • 1961–1962 : fin progressive des commandos.",
  resume: "Les commandos de chasse naissent de la nécessité de trouver et d'engager les unités de l'ALN. En décembre 1958, Maurice Challe ordonne leur formation. Chaque commando compte 70 à 140 hommes ; 30 à 60 % sont des volontaires musulmans (harkis ou anciens rebelles ralliés). Leur mission : patrouiller dans les zones difficiles, détecter les traces de l'ALN, guider les unités héliportées et motorisées, et collecter du renseignement. Pendant l'opération Jumelles en Kabylie, ils jouent un rôle clé en fixant les katibas et en limitant les infiltrations. Malgré des résultats militaires significatifs, l'insurrection continue. Après l'annonce de l'autodétermination, les commandos sont progressivement dissous.",
  timeline: [
    { date: "Décembre 1958", description: "Création des commandos de chasse sur ordre du général Challe." },
    { date: "1959", description: "Engagement dans l'opération Jumelles en Kabylie." },
    { date: "1961", description: "Réduction progressive de leurs effectifs." },
    { date: "1962", description: "Dissolution et fin de leurs missions." },
  ],
  blocs: [
    {
      titre: "Origine",
      texte: "La guerre d'Algérie met en évidence les limites des régiments classiques face à des unités mobiles et dispersées. Le général Challe, inspiré par les expériences indochinoises et par les armées alliées, propose fin 1958 de créer des commandos de chasse. Ceux‑ci dépendent des secteurs opérationnels et ne sont pas liés à un régiment spécifique.",
      aRetenir: [
        "Les commandos de chasse naissent d'un constat d'échec des méthodes traditionnelles.",
        "Ils sont directement rattachés aux secteurs opérationnels, pas aux régiments.",
      ],
    },
    {
      titre: "Organisation",
      texte: "Chaque commando compte entre 70 et 140 hommes. Le recrutement est mixte : soldats professionnels, appelés, harkis et anciens combattants de l'ALN ralliés. Cette proportion de 30 à 60 % de volontaires musulmans favorise l'infiltration des réseaux et la connaissance du terrain. L'armement est léger : armes individuelles, radios portatives, rations de combat pour plusieurs jours d'autonomie.",
      aRetenir: [
        "La mixité du recrutement (français et musulmans) est la clé de leur efficacité.",
        "L'autonomie de plusieurs jours en terrain difficile les distingue des unités classiques.",
      ],
    },
    {
      titre: "Missions",
      texte: "Les commandos de chasse ont pour tâches principales : repérer des traces d'ALN et suivre des pistes ; guider l'intervention des unités héliportées et motorisées en communiquant en temps réel ; effectuer des embuscades, des raids et des coups de main pour désorganiser les maquis ; collecter du renseignement auprès des populations et des anciens rebelles. Ils passent plusieurs jours en autonomie, campant dans les djebels et gardant un contact radio permanent.",
      aRetenir: [
        "Leur rôle principal est la détection et la fixation de l'ennemi, pas sa destruction directe.",
        "Le renseignement humain et la connaissance du terrain sont leurs atouts majeurs.",
      ],
    },
    {
      titre: "Bilan et héritage",
      texte: "Les commandos de chasse contribuent à la temporisation de la guerre en Kabylie et en Aurès. Ils obtiennent des résultats significatifs en fixant des katibas et en limitant les infiltrations. Toutefois, leur impact politique est limité ; l'insurrection continue malgré tout. Après l'annonce de l'autodétermination, ces unités sont progressivement dissoutes et leurs cadres réaffectés. Pour le 9e RIC, travailler avec des commandos de chasse signifie opérer en complémentarité avec des spécialistes du terrain.",
      aRetenir: [
        "Résultats militaires significatifs mais insuffisants pour mettre fin à l'insurrection.",
        "Leur savoir-faire préfigure les unités spéciales modernes.",
      ],
    },
  ],
  glossaire: [
    { terme: "Harkis", definition: "Supplétifs musulmans engagés aux côtés de l'armée française." },
    { terme: "Katiba", definition: "Unité de combat de l'ALN." },
    { terme: "Commandos de chasse", definition: "Unités mobiles de 70 à 140 hommes, créées pour traquer l'ALN." },
  ],
  quiz: [
    { question: "En quelle année les commandos de chasse ont‑ils été créés ?", reponse: "Décembre 1958" },
    { question: "Quelle est la proportion approximative de volontaires musulmans dans ces unités ?", reponse: "Entre 30 % et 60 %" },
    { question: "Quel est l'objectif principal des commandos de chasse ?", reponse: "Repérer, fixer et guider les forces contre les unités de l'ALN" },
    { question: "Que deviennent les commandos de chasse après 1961 ?", reponse: "Ils sont progressivement dissous alors que la France se dirige vers l'autodétermination" },
  ],
};
