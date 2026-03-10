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
  itineraire: {
    etape: string;
    detail: string;
  }[];
  unite: {
    effectifs: string;
    detail: string[];
    commandant: string;
    depart: string;
  };
  chocThermique: {
    title: string;
    text: string;
  };
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
    { date: "Mars 1918", label: "Traité de Brest‑Litovsk → la Russie sort de la guerre" },
    { date: "30 juin 1918", label: "Les Légions Tchèques s'emparent de Vladivostok" },
    { date: "24 juil. 1918", label: "Départ du 9e RIC depuis Hanoï sur le vapeur André Lebon" },
    { date: "1918–1919", label: "Interventions alliées → sécurisation de points/axes" },
    { date: "1919–1920", label: "Désengagement progressif → priorité au nouvel ordre européen" },
  ],
  blocs: [
    {
      id: "enjeu",
      title: "Pourquoi la Sibérie devient un enjeu ?",
      mode: 'comprendre',
      content: [
        "En 1917, la Russie s'effondre : révolution, guerre civile, vide de pouvoir. Pour les puissances étrangères, la question devient : qui contrôle les ports et le Transsibérien ? En Sibérie, tenir un axe compte plus que gagner une bataille."
      ],
      keyPoints: [
        "Crise russe = vide de pouvoir → compétition internationale.",
        "Enjeu central : contrôle des axes ferroviaires et portuaires."
      ]
    },
    {
      id: "acteurs",
      title: "L'imbroglio : France, Tchèques, Bolcheviks",
      mode: 'comprendre',
      content: [
        "Les Légions Tchèques : 50 000 soldats d'élite (ex-armée du Tsar) veulent rejoindre la France via Vladivostok. Moscou ordonne leur désarmement total. Les Tchèques refusent, se révoltent et s'emparent de Vladivostok le 30 juin 1918 sous les ordres du Général Dietrich.",
        "La France envoie le 9e RIC pour sécuriser leur retour et freiner la révolution bolchevique. Le Japon et les États‑Unis sont également présents en Asie‑Pacifique, avec des objectifs propres sur l'équilibre régional.",
        "(Parenthèse : dans une intervention « multinationale », la coalition n'a pas toujours une stratégie unique. L'alliance existe… mais les intérêts divergent.)"
      ],
      keyPoints: [
        "Triangle géopolitique : France — Légions Tchèques — Bolcheviks.",
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
  unite: {
    effectifs: "454 hommes du 9e RIC",
    detail: [
      "1ʳᵉ compagnie (Lt Deseille, 228 hommes)",
      "8ᵉ compagnie (Capt. Schill, 226 hommes)",
    ],
    commandant: "Chef de bataillon Mallet (commande aussi 2 compagnies du 16e RIC)",
    depart: "24 juillet 1918, depuis Hanoï, sur le vapeur André Lebon",
  },
  itineraire: [
    { etape: "Hanoï", detail: "Juillet 1918 — Départ des troupes coloniales" },
    { etape: "Vladivostok", detail: "Base arrière et débarquement" },
    { etape: "Jonction Amour-Mandchourie", detail: "Prise par les Tchèques après 2 jours de combat" },
    { etape: "Transsibérien", detail: "Le bataillon remonte la voie ferrée vers l'Ouest" },
    { etape: "Lac Baïkal", detail: "Traversée de la région Transbaïkalie" },
    { etape: "Krasnoïarsk & Tomsk", detail: "Progression dans la steppe sibérienne" },
    { etape: "Omsk", detail: "Centre névralgique du gouvernement « Blanc »" },
    { etape: "Monts Oural (Tchéliabinsk)", detail: "Porte d'entrée de la Russie d'Europe" },
    { etape: "Oufa", detail: "Zone de front et point d'arrêt extrême" },
  ],
  chocThermique: {
    title: "Le choc thermique : du Tonkin à la Sibérie",
    text: "Les marsouins du 9e RIC quittent les +35 °C du Tonkin pour affronter les −40 °C de l'hiver sibérien. Un voyage digne de Michel Strogoff : du riz des rizières à la neige de la steppe, des moustiques de la jungle aux blizzards de l'Oural. Le contraste est total — climat, paysage, ennemi, tout change."
  },
  glossary: [
    { term: "Brest‑Litovsk", def: "Traité de 1918 marquant la sortie de la Russie de la guerre." },
    { term: "Guerre civile", def: "Conflit interne entre forces rivales pour le contrôle du pouvoir." },
    { term: "Bolcheviks", def: "Mouvement politique qui prend le pouvoir et cherche à consolider l'État." },
    { term: "Intervention alliée", def: "Présence militaire extérieure visant à peser sur un équilibre stratégique." },
    { term: "Transsibérien", def: "Axe ferroviaire structurant la mobilité et l'autorité en Sibérie." },
    { term: "Vladivostok", def: "Port d'entrée et point d'appui en Extrême‑Orient russe." },
    { term: "Légions Tchèques", def: "50 000 soldats d'élite, ex-armée du Tsar, cherchant à rejoindre la France via Vladivostok." },
    { term: "Général Dietrich", def: "Commandant des Légions Tchèques lors de la prise de Vladivostok." },
    { term: "André Lebon", def: "Vapeur sur lequel le bataillon du 9e RIC embarque depuis Hanoï le 24 juillet 1918." },
    { term: "Bataillon de marche", def: "Unité constituée spécialement pour une opération, ici 454 hommes du 9e RIC." },
    { term: "Omsk", def: "Centre politique du gouvernement « Blanc » (anti-bolchevique) en Sibérie." },
    { term: "Oufa", def: "Zone de front et point d'arrêt extrême de la progression alliée." },
  ],
  gallery: [
    { caption: "Carte schématique du Transsibérien.", alt: "Carte du Transsibérien." },
    { caption: "Vladivostok — port d'entrée.", alt: "Vue du port de Vladivostok." },
    { caption: "Train militaire / logistique ferroviaire.", alt: "Train et wagons logistiques." },
    { caption: "Hiver sibérien : contrainte de théâtre.", alt: "Paysage enneigé, froid extrême." },
    { caption: "Coalition : diversité des forces.", alt: "Groupes de soldats de différentes nations." },
  ],
  quiz: [
    { question: "Combien d'hommes du 9e RIC partent en Sibérie ?", answer: "454 hommes (1ʳᵉ et 8ᵉ compagnies)" },
    { question: "Qui commande le bataillon de marche ?", answer: "Le chef de bataillon Mallet" },
    { question: "Sur quel navire le 9e RIC embarque-t-il ?", answer: "Le vapeur André Lebon, le 24 juillet 1918" },
    { question: "Pourquoi les Légions Tchèques se révoltent-elles ?", answer: "Moscou ordonne leur désarmement ; elles refusent et s'emparent de Vladivostok" },
    { question: "Quel est le point d'arrêt extrême du bataillon ?", answer: "Oufa — zone de front" },
    { question: "Quelle infrastructure structure la mobilité en Sibérie ?", answer: "Le Transsibérien" },
    { question: "Dans un territoire immense, la « victoire » est souvent…", answer: "Politique avant d'être militaire" },
    { question: "Quel choc affrontent les marsouins du 9e ?", answer: "De +35 °C au Tonkin à −40 °C en Sibérie" },
  ],
  conclusion: "La Sibérie, à la fin de la Grande Guerre, est un test de puissance : distance, logistique, influence, coalition. Comprendre ce théâtre, c'est comprendre que la géopolitique se joue autant sur des axes que sur des batailles.",
  nextStep: "Continuer vers : ASIE — Les Années Heureuses"
};
