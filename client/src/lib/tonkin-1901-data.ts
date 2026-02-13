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
  glossary: { term: string; def: string }[];
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
        "Au début du XXe siècle, les grandes bandes de pirates ont été chassées. Le Tonkin connaît un calme relatif : peu de faits graves, pas d'opérations d'envergure. Police et milices locales suffisent à contenir le brigandage résiduel.",
        "L'armée se réorganise : le 1er janvier 1901, les troupes de Marine changent de nom. Le 9e RIMa devient 9e RIC (Régiment d'Infanterie Coloniale) et tient garnison à Hanoï, Son Tay et Tong."
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
        "La défaite russe face au Japon (1904–1905) change la donne : pour la première fois, une puissance asiatique bat un empire occidental. Le prestige du Japon explose et nourrit un mouvement anti‑français en Indochine.",
        "En 1908, l'agitation éclate en Annam : figures politiques réfugiées au Japon, manifestations dans plusieurs provinces (Quan Nain, Quang‑Ngai, Binh Dinh). Une intervention militaire est décidée."
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
        "Le 3e bataillon du 9e RIC (Hué, Tourane) est déjà sur place, mais l'idée maîtresse est d'éviter la sur‑escalade : les bandes sont nombreuses mais faiblement armées. Les renforts servent à intimider, pas à combattre.",
        "Début avril 1908, un détachement opère en Annam. Manifestations dispersées, meneurs arrêtés : le calme revient progressivement."
      ],
      keyPoints: [
        "Objectif : tenir sans « sur‑escalade » (intimidation + contrôle).",
        "Outils : détachements, gardes, arrestations, appui d'artillerie si nécessaire.",
        "Terrain social : la foule, les meneurs, les réseaux."
      ]
    },
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
  glossary: [
    { term: "RIMa", def: "Régiment d'Infanterie de Marine — désignation avant 1901." },
    { term: "RIC", def: "Régiment d'Infanterie Coloniale — nouvelle désignation à partir du 1er janvier 1901." },
    { term: "RAC", def: "Régiment d'Artillerie Coloniale — remplace les régiments d'artillerie de Marine." },
    { term: "RTT", def: "Régiment de Tirailleurs Tonkinois — unité de soldats autochtones encadrés par des officiers français." },
    { term: "Dê Tham", def: "Chef de bande insaisissable, figure de la résistance anti-française dans la région du Yen Thê. Assassiné en février 1913." },
    { term: "Datura", def: "Plante hallucinogène utilisée pour empoisonner les soldats de la citadelle d'Hanoï le 28 juin 1908." },
    { term: "Annam", def: "Protectorat français au centre du Viêt Nam actuel, entre le Tonkin (nord) et la Cochinchine (sud)." },
    { term: "Tonkin", def: "Protectorat français au nord du Viêt Nam actuel, avec Hanoï pour capitale." },
    { term: "Yen Thê", def: "Région montagneuse du Tonkin, refuge du Dê Tham et de ses bandes." },
    { term: "Colonne", def: "Formation militaire mobile constituée pour une opération spécifique, souvent en terrain difficile." },
    { term: "Pacification", def: "Ensemble des opérations militaires et politiques visant à rétablir l'ordre dans un territoire." },
    { term: "Guerre russo-japonaise", def: "Conflit de 1904–1905 entre la Russie et le Japon, remporté par le Japon. Événement majeur pour le prestige asiatique." },
    { term: "Citadelle", def: "Fortification abritant la garnison militaire. À Hanoï, siège du 9e RIC et du 4e RAC." },
    { term: "Marsouin", def: "Surnom traditionnel des soldats d'infanterie de Marine / coloniale." },
  ],
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
