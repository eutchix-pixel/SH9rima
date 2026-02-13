export interface Tonkin1901Content {
  title: string;
  subtitle: string;
  question: string;
  reperes: { date: string; label: string }[];
  blocs: {
    id: string;
    title: string;
    content: string[];
    keyPoints: string[];
    mode: 'comprendre' | 'recit' | 'archives';
  }[];
  episodes: {
    id: string;
    title: string;
    content: string[];
    keyPoints: string[];
    mode: 'recit' | 'archives';
  }[];
  sortie: {
    title: string;
    text: string;
  };
  revelation: {
    text: string;
    points: string[];
  };
  gallery: { caption: string; alt: string }[];
  quiz: { question: string; answer: string }[];
  conclusion: string;
  nextStep: string;
}

export const tonkin1901Data: Tonkin1901Content = {
  title: "1901–1914 — Stabilisation & troubles au Tonkin",
  subtitle: "Début de siècle : le Tonkin se stabilise… puis la géopolitique régionale rallume les tensions (Annam 1908, « affaire du datura », traque du Dê Tham).",
  question: "Comment un territoire « calme » redevient-il instable, et quels outils de contrôle (milices, renseignement, colonnes) sont utilisés pour tenir le Tonkin ?",
  reperes: [
    { date: "7 juil. 1900", label: "Création des troupes coloniales" },
    { date: "1er janv. 1901", label: "Changement de dénomination" },
    { date: "1901", label: "9e RIMa → 9e RIC" },
    { date: "1908", label: "Troubles d'Annam" },
    { date: "28 juin 1908", label: "Affaire du datura" },
    { date: "juil.–déc. 1909", label: "Traque du Dê Tham" },
    { date: "1er mars 1910", label: "Colonne dissoute, calme total" },
    { date: "fév. 1913", label: "Mort du Dê Tham" },
  ],
  blocs: [
    {
      id: "calme",
      title: "Le Tonkin se calme : pourquoi ?",
      mode: 'comprendre',
      content: [
        "Ce début de siècle au Tonkin est calme. Les faits graves sont peu nombreux et les opérations d'envergure très rares : les grandes bandes de pirates ont été chassées ; subsiste surtout un brigandage que police et milices locales parviennent à maîtriser.",
        "En parallèle, l'administration et l'armée se réorganisent : le 1er janvier 1901, les troupes de Marine changent de dénomination. Les régiments d'infanterie et d'artillerie de Marine deviennent des régiments d'infanterie coloniale (RIC) et d'artillerie coloniale (RAC). Le 9e devient ainsi 9e RIC et tient garnison à Hanoï, Son Tay, Tong."
      ],
      keyPoints: [
        "Un calme relatif : fin des grandes bandes, maintien de l'ordre local.",
        "Un territoire tenu par l'organisation (garnisons) plus que par les « grandes opérations ».",
        "Le cadre militaire change (RIMa → RIC)."
      ]
    },
    {
      id: "tension",
      title: "Le retour de la tension : pourquoi ?",
      mode: 'comprendre',
      content: [
        "La géopolitique régionale pèse directement sur le Tonkin. La défaite de la Russie dans la guerre russo‑japonaise (1904–1905) a un impact : beaucoup voient la revanche des Asiatiques sur les Occidentaux, et le prestige du Japon devient immense.",
        "Dans la péninsule indochinoise, le Japon représente l'espoir de « bouter hors du pays » les Français : des figures annamites se réfugient au Japon, et un mouvement d'agitation anti‑français et pro‑japonais se développe rapidement. Il provoque des troubles en Annam (provinces de Quan Nain, Quang‑Ngai, Thun‑Thiey, Binh Dinh) au début de 1908. Une intervention militaire est décidée."
      ],
      keyPoints: [
        "La stabilité locale dépend de l'équilibre régional (Russie/Japon).",
        "L'Annam devient un foyer d'agitation : politique, influence, symbole.",
        "Le Tonkin reste exposé aux « répliques » de la région."
      ]
    },
    {
      id: "leviers",
      title: "Gérer l'instabilité : comment ?",
      mode: 'comprendre',
      content: [
        "Sur place, stationne déjà le 3e bataillon du 9e RIC, avec trois compagnies à Hué et une à Tourane, renforcée par une batterie du 4e RAC.",
        "L'idée maîtresse de l'intervention est d'éviter l'emploi des armes contre des bandes nombreuses mais faiblement équipées (souvent des armes blanches). Les renforts sont envoyés pour intimider, et pour distraire le bataillon déjà en place des missions de garde qu'il exécute.",
        "Début avril 1908, un détachement quitte le Tonkin et opère en Annam. La 1re compagnie reste à Quinh Nham ; la 2e rejoint Binh Dinh. Des manifestations sont dispersées, des meneurs arrêtés, et le calme revient progressivement."
      ],
      keyPoints: [
        "Objectif : tenir sans « sur‑escalade » (intimidation + contrôle).",
        "Outils : détachements, gardes, arrestations, appui d'artillerie si nécessaire.",
        "Terrain social : la foule, les meneurs, les réseaux."
      ]
    },
    {
      id: "carrefour",
      title: "Ce que ça révèle : le Tonkin comme carrefour",
      mode: 'comprendre',
      content: [
        "Le Tonkin n'est pas isolé : il reçoit les ondes de choc de l'Asie (prestige du Japon, agitation politique), mais il se joue aussi sur le terrain (rizières, digues, massifs, villages, réseaux). Tenir le Tonkin, c'est tenir un carrefour : frontières, influences, routes et populations — avec des outils autant politiques que militaires."
      ],
      keyPoints: []
    }
  ],
  episodes: [
    {
      id: "datura",
      title: "« Affaire du datura » — Hanoï, 28 juin 1908",
      mode: 'recit',
      content: [
        "Le 24 juin 1908, le général Nayo‑Cando reçoit une lettre dénonçant un plan de conjuration. Le 28 juin à 20 h 00, Geil apprend l'empoisonnement de la citadelle d'Hanoï (où résident le 9e RIC et le 4e RAC) et l'imminence d'une attaque.",
        "L'enquête montre qu'une substance hallucinogène, le datura, a été versée dans le repas des hommes de garde. Elle provoque rougeurs, délire, excitation : un soldat grimpe à un arbre « persuadé d'être poursuivi par des tigres », un autre traverse Hanoï à bicyclette « comme un fou ».",
        "L'enquête révèle aussi des tentatives antérieures et la participation plus ou moins active du Dê Tham. Des agitateurs annamites réfugiés au Japon sont démasqués ; les empoisonneurs sont exécutés."
      ],
      keyPoints: [
        "Menace : attaque contre un symbole (citadelle / garnison).",
        "Mode d'action : clandestin, psychologique, visant à ouvrir une brèche.",
        "Réponse : alerte, enquête, démantèlement."
      ]
    },
    {
      id: "detham",
      title: "Traque du Dê Tham — juillet–décembre 1909",
      mode: 'recit',
      content: [
        "Au début de 1909, des bandes opèrent dans la région du Yen Thê. Le 24 juin, une nouvelle éclate : présence du Dê Tham repérée ; la zone est investie et fouillée, mais la population est complice et la région quadrillée devient « invivable ».",
        "En juillet, la colonne est mise sur pied : quatre compagnies (dont deux du 9e RIC et deux du 1er RTT), plus un peloton de cavalerie légère. Les compagnies du 9 sont celles du capitaine Gremillet et du capitaine Pertuis. La colonne est organisée en groupes et manœuvre sur les axes et les massifs (Tam Dao, Nui Lang…).",
        "Les combats et accrochages s'étalent : encerclements, négociations, embuscades, assauts, replis. La fatigue, la chaleur, l'humidité et la difficulté du renseignement pèsent. Les pertes sont lourdes : au petit jour, les pirates fuient ; « l'affaire a fait 17 tués et 39 blessés ».",
        "Fin décembre, les unités sont renvoyées ; ne demeurent qu'un élément réduit. La colonne est dissoute le 1er mars 1910, le calme étant total."
      ],
      keyPoints: [
        "Problème géopolitique « local » : bande + complicité + refuge terrain.",
        "Le renseignement est l'arme décisive (ou son absence est un frein).",
        "La pacification est une usure : hommes, climat, distances, temps."
      ]
    }
  ],
  sortie: {
    title: "1913 : la fin du Dê Tham",
    text: "Le Dê Tham échappe longtemps. Sa tête est mise à prix dès 1909, mais il est impossible de le capturer. En février 1913, il est assassiné : deux Chinois alléchés par la prime gagnent sa confiance pour mieux l'abattre. Sa mort marque le retour définitif au calme dans cette région."
  },
  revelation: {
    text: "Le Tonkin n'est pas isolé : il reçoit les ondes de choc de l'Asie (prestige du Japon, agitation politique), mais il se joue aussi sur le terrain (rizières, digues, massifs, villages, réseaux). Tenir le Tonkin, c'est tenir un carrefour : frontières, influences, routes et populations — avec des outils autant politiques que militaires.",
    points: [
      "Début XXe : calme relatif, maintien de l'ordre, fin des « grandes bandes ».",
      "Réorganisation : RIMa/RAMa → RIC/RAC ; le 9 devient 9e RIC.",
      "1908 : agitation pro‑japonaise en Annam ; intervention sans sur‑escalade.",
      "1908 : datura à Hanoï — menace clandestine et psychologique.",
      "1909–1913 : Dê Tham — l'insécurité durable qui se règle par renseignement, usure, et enfin élimination."
    ]
  },
  gallery: [
    { caption: "Carte des troubles d'Annam — 1908.", alt: "Carte schématique des provinces touchées en Annam." },
    { caption: "Hanoï : citadelle — 1908 (affaire du datura).", alt: "Vue/illustration de la citadelle d'Hanoï." },
    { caption: "Croquis des opérations dans la région du Yen Thê (Dê Tham) — 1909.", alt: "Carte/croquis des axes et massifs (Yen Thê / Tam Dao)." },
    { caption: "Interrogatoire d'un pirate (Yen‑Thê).", alt: "Scène d'interrogatoire d'un pirate du Yen Thê." },
    { caption: "Pirates de la bande du Dê Tham.", alt: "Portraits de pirates associés à la bande du Dê Tham." }
  ],
  quiz: [
    { question: "Au début du XXe siècle, le Tonkin est plutôt…", answer: "Calme, avec peu d'opérations d'envergure" },
    { question: "En 1901, le 9e RIMa devient…", answer: "9e RIC" },
    { question: "Quel événement régional renforce le prestige du Japon et pèse sur l'Indochine ?", answer: "La guerre russo‑japonaise (1904–1905) et la défaite de la Russie" },
    { question: "En 1908, quel type d'action vise la citadelle d'Hanoï ?", answer: "Un empoisonnement au datura (substance hallucinogène)" },
    { question: "La traque du Dê Tham (1909–1913) montre surtout…", answer: "Le poids du renseignement, du terrain et de l'usure dans la pacification" },
    { question: "Quel événement marque le retour définitif au calme dans la région du Yen Thê ?", answer: "La mort du Dê Tham (février 1913)" }
  ],
  conclusion: "Au début du XXe siècle, le Tonkin se calme : moins de « faits graves », moins d'opérations d'envergure, et les grandes bandes de pirates sont chassées. Mais la région reste sensible : la pression extérieure sur l'Asie, puis le choc de la guerre russo‑japonaise, alimentent un mouvement anti‑français et pro‑japonais en Annam (1908). Dans le même temps, le Tonkin connaît des actions clandestines (empoisonnement au datura à Hanoï) et une insécurité persistante liée au Dê Tham dans la région du Yen Thê. Sa mort, en 1913, marque la fin d'un cycle : le Tonkin est « pacifié » — jusqu'à la prochaine crise.",
  nextStep: "Continuer vers : ASIE — 1914–1919"
};
