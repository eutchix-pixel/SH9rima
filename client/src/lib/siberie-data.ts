export interface SiberieContent {
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
  role9: string;
  glossary: { term: string; def: string }[];
  gallery: { caption: string; alt: string }[];
  quiz: { question: string; answer: string }[];
  conclusion: string;
  nextStep: string;
}

export const siberieData: SiberieContent = {
  title: "Sibérie (Grande Guerre) — Pourquoi une intervention alliée ?",
  subtitle: "1918–1920 : la guerre mondiale se termine, mais l'ordre international vacille. En Russie, révolution et guerre civile transforment la Sibérie en enjeu géopolitique.",
  question: "Pourquoi des forces françaises et alliées se retrouvent-elles à Vladivostok et le long du Transsibérien, alors que l'Europe sort de la Première Guerre mondiale ?",
  reperes: [
    { date: "1917", label: "Révolutions en Russie → bascule politique" },
    { date: "1918", label: "Sortie de la guerre (Brest‑Litovsk) → rupture stratégique" },
    { date: "1918", label: "Montée de la guerre civile → fragmentation du pouvoir" },
    { date: "1918–1919", label: "Interventions alliées → sécurisation de points/axes" },
    { date: "1919–1920", label: "Désengagement progressif → priorité au nouvel ordre européen" },
  ],
  blocs: [
    {
      id: "enjeu",
      title: "Pourquoi la Sibérie devient un enjeu ?",
      mode: 'comprendre',
      content: [
        "Ce qui bascule, ce n'est pas seulement un régime : c'est un espace‑continent. La Russie entre dans une zone de rupture (révolution, guerre civile, fragmentation du pouvoir). Pour les puissances étrangères, la question devient : qui contrôle les ports, les stocks, et les voies de communication ?",
        "Dans ce type de crise, la géographie impose ses règles : distances immenses ; infrastructures rares ; dépendance à quelques points d'entrée (ports) et à une colonne vertébrale ferroviaire.",
        "(Parenthèse utile : en Sibérie, « tenir un axe » peut compter davantage que « gagner une bataille ».)"
      ],
      keyPoints: [
        "Enjeu = contrôle des axes + influence, pas seulement terrain.",
        "Crise russe = vide de pouvoir et compétition internationale.",
        "Sibérie = distances → la logistique devient politique."
      ]
    },
    {
      id: "acteurs",
      title: "Qui intervient, et pour quoi faire ?",
      mode: 'comprendre',
      content: [
        "Plusieurs acteurs interviennent ou cherchent à peser : les puissances alliées (dont la France) : protéger des intérêts, sécuriser des points d'appui, éviter l'extension du chaos et maintenir une capacité d'influence.",
        "Les forces russes opposées aux bolcheviks : acteurs internes de la guerre civile, avec des agendas et des zones d'autorité variables. Les bolcheviks : cherchent à consolider un pouvoir central et à reprendre le contrôle des axes.",
        "Le Japon et les États‑Unis : présents en Asie‑Pacifique, avec des objectifs et des inquiétudes propres, notamment sur l'équilibre régional.",
        "(Parenthèse : dans une intervention « multinationale », la coalition n'a pas toujours une stratégie unique. L'alliance existe… mais les intérêts divergent.)"
      ],
      keyPoints: [
        "Plusieurs agendas coexistent : sécurité, influence, équilibre régional.",
        "La coopération alliée n'efface pas la concurrence entre puissances.",
        "La guerre civile russe reconfigure le théâtre."
      ]
    },
    {
      id: "transsiberien",
      title: "Le levier clé : le Transsibérien (logistique = politique)",
      mode: 'recit',
      content: [
        "Le Transsibérien n'est pas seulement une ligne de train : c'est l'ossature d'un continent. Contrôler une gare, un pont, un nœud ferroviaire, c'est contrôler : le déplacement des troupes ; l'acheminement des vivres et munitions ; la circulation de l'information et de l'autorité.",
        "La Sibérie se lit donc comme une carte d'axes : Vladivostok (entrée maritime) → réseau ferroviaire → profondeur continentale.",
        "(Parenthèse : plus les distances sont grandes, plus la « chaîne logistique » devient fragile — et plus elle devient un objectif.)"
      ],
      keyPoints: [
        "Un port + un rail = capacité d'intervention.",
        "Les nœuds logistiques ont une valeur stratégique disproportionnée.",
        "L'axe structure les opérations et la politique."
      ]
    },
    {
      id: "consequences",
      title: "Conséquences : ce que ça change (et ce que ça ne change pas)",
      mode: 'recit',
      content: [
        "Une intervention en Sibérie est d'abord un signal : présence, influence, sécurisation d'axes. Elle peut stabiliser localement, protéger un point d'appui, ou soutenir un acteur — mais elle ne résout pas à elle seule une guerre civile à l'échelle d'un continent.",
        "(Parenthèse : dans les théâtres immenses, la « victoire » est souvent politique avant d'être militaire.)"
      ],
      keyPoints: [
        "Effet principal : influence et contrôle local d'axes.",
        "Limite : un territoire‑continent ne se « stabilise » pas vite.",
        "Le temps et l'endurance pèsent autant que la force."
      ]
    },
  ],
  role9: "Des éléments du 9 ont été associés à l'histoire « Asie » du régiment. Pour une version exhaustive (dates, missions, lieux), cette section sera complétée à partir des documents régimentaires.",
  glossary: [
    { term: "Brest‑Litovsk", def: "Traité de 1918 marquant la sortie de la Russie de la guerre." },
    { term: "Guerre civile", def: "Conflit interne entre forces rivales pour le contrôle du pouvoir." },
    { term: "Bolcheviks", def: "Mouvement politique qui prend le pouvoir et cherche à consolider l'État." },
    { term: "Intervention alliée", def: "Présence militaire extérieure visant à peser sur un équilibre stratégique." },
    { term: "Transsibérien", def: "Axe ferroviaire structurant la mobilité et l'autorité en Sibérie." },
    { term: "Vladivostok", def: "Port d'entrée et point d'appui en Extrême‑Orient russe." },
  ],
  gallery: [
    { caption: "Carte schématique du Transsibérien.", alt: "Carte du Transsibérien." },
    { caption: "Vladivostok — port d'entrée.", alt: "Vue du port de Vladivostok." },
    { caption: "Train militaire / logistique ferroviaire.", alt: "Train et wagons logistiques." },
    { caption: "Hiver sibérien : contrainte de théâtre.", alt: "Paysage enneigé, froid extrême." },
    { caption: "Coalition : diversité des forces.", alt: "Groupes de soldats de différentes nations." },
  ],
  quiz: [
    { question: "En Sibérie, l'enjeu principal est souvent…", answer: "Le contrôle des axes et de l'influence" },
    { question: "Quelle infrastructure structure la mobilité en Sibérie ?", answer: "Le Transsibérien" },
    { question: "Pourquoi un port compte autant dans ce théâtre ?", answer: "Parce qu'il conditionne l'entrée, le ravitaillement et la présence" },
    { question: "Une coalition multinationale signifie toujours…", answer: "Des intérêts parfois divergents malgré l'alliance" },
    { question: "Dans un territoire immense, la « victoire » est souvent…", answer: "Politique avant d'être militaire" },
    { question: "Quel est l'effet majeur d'une intervention limitée ?", answer: "Peser localement (points d'appui, axes), sans régler seul un conflit continental" },
  ],
  conclusion: "La Sibérie, à la fin de la Grande Guerre, est un test de puissance : distance, logistique, influence, coalition. Comprendre ce théâtre, c'est comprendre que la géopolitique se joue autant sur des axes que sur des batailles.",
  nextStep: "Continuer vers : ASIE — Les Années Heureuses"
};
