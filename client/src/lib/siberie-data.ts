export interface BatailleEntry {
  id: string;
  title: string;
  date: string;
  situation: string;
  combat: string;
  bilan: string;
  mode: 'comprendre' | 'recit' | 'archives';
}

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
  batailles: BatailleEntry[];
  suiteOperations: {
    title: string;
    etapes: { date: string; detail: string }[];
  };
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
    { date: "15–19 août 1918", label: "Épreuve du feu à Kraïevski — premier contact avec l'ennemi" },
    { date: "23–24 août 1918", label: "Bataille de Doukovskoïe — 4 500 bolcheviques repoussés" },
    { date: "Oct.–Nov. 1918", label: "Remontée du Transsibérien vers Oufa en train blindé (10 000 km)" },
    { date: "1919–1920", label: "Désengagement progressif → priorité au nouvel ordre européen" },
  ],
  blocs: [
    {
      id: "enjeu",
      title: "La révolution russe",
      mode: 'comprendre',
      content: [
        "En février puis octobre 1917, deux révolutions renversent le régime tsariste. Les bolcheviks prennent le pouvoir et signent la paix avec l'Allemagne (Brest‑Litovsk, mars 1918), retirant la Russie de la guerre.",
        "Le pays bascule dans la guerre civile. Pour les Alliés, c'est un vide stratégique immense : les stocks militaires, les ports et le Transsibérien deviennent des enjeux disputés."
      ],
      keyPoints: []
    },
    {
      id: "acteurs",
      title: "L'imbroglio : France, Tchèques, Bolcheviks",
      mode: 'comprendre',
      content: [
        "Les Légions Tchèques : 50 000 soldats d'élite (ex-armée du Tsar) veulent rejoindre la France via Vladivostok. Moscou ordonne leur désarmement total. Les Tchèques refusent, se révoltent et s'emparent de Vladivostok le 30 juin 1918 sous les ordres du Général Dietrich.",
        "La France envoie le 9e RIC avec une triple mission : sécuriser le retour des Tchèques, repousser les forces bolcheviques et protéger les convois d'armes et de munitions acheminés le long du Transsibérien. Le Japon et les États‑Unis sont également présents, avec leurs propres objectifs.",
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
        "Le bataillon a repoussé les assauts bolcheviques sur le front de l'Oussouri, sécurisé la voie ferrée et protégé les convois d'armes et de munitions. Mais à l'échelle d'un continent, l'intervention ne résout pas la guerre civile russe.",
        "Le désengagement progressif (1919–1920) reflète cette réalité : la « victoire » en Sibérie est politique avant d'être militaire."
      ],
      keyPoints: [
        "Kraïevski et Doukovskoïe : le 9e RIC repousse les bolcheviques.",
        "10 000 km de Transsibérien sécurisés en train blindé.",
        "Le désengagement illustre les limites d'une intervention à si grande échelle."
      ]
    },
  ],
  batailles: [
    {
      id: "kraievski",
      title: "L'épreuve du feu — Kraïevski",
      date: "15 au 19 août 1918",
      situation: "Dès son arrivée sur le front de l'Oussouri, le bataillon est divisé en deux groupements (Groupes Schill et Feneurstein). Installés sur leurs positions le 13 août, les soldats subissent une pression constante des forces bolcheviques pendant quatre jours.",
      combat: "Il ne s'agit pas d'un affrontement frontal massif, mais d'une guerre d'usure : tirs d'artillerie, escarmouches et manœuvres dilatoires. Un coup de main bolchevique nocturne vise le poste de commandement russe (Cosaques du Tsar). Malgré la protection assurée par une douzaine de Français, l'attaque entraîne la disparition de 4 Zouaves.",
      bilan: "Premier contact réel et douloureux avec l'ennemi. Le bataillon tient ses positions face à une pression continue de 4 jours.",
      mode: 'comprendre',
    },
    {
      id: "doukovskoe",
      title: "La bataille de Doukovskoïe",
      date: "23 au 24 août 1918",
      situation: "C'est l'engagement le plus sérieux du bataillon, mené en coalition avec les forces tchèques, japonaises et anglaises le long de la voie ferrée. Grâce aux informations d'un prisonnier, le commandant Mallet apprend qu'une attaque imminente de 4 500 bolcheviques se prépare.",
      combat: "Le choc se produit à 5h00 du matin le 23 août. Le groupe Schill (9e RIC), placé en pointe, reçoit la première vague d'assaut. Jugé trop vulnérable, il reçoit l'ordre de se replier sur une position de rechange aux lisières de Doukovskoïe pour organiser la défense globale. Le 24 août, une contre-attaque vigoureuse est lancée en lien avec un détachement japonais, brisant l'élan bolchevique et sécurisant la zone.",
      bilan: "2 tués et 15 blessés. L'assaut de 4 500 bolcheviques est repoussé. La zone est sécurisée.",
      mode: 'comprendre',
    },
  ],
  suiteOperations: {
    title: "Suite des opérations",
    etapes: [
      { date: "Octobre 1918", detail: "Les Tonkinois sont regroupés pour garder Vladivostok, tandis que le reste du bataillon entame sa remontée vers l'Ouest." },
      { date: "Novembre 1918", detail: "Le bataillon traverse la Sibérie (Kharbine, Irkoutsk, Omsk) dans un train blindé pour atteindre Oufa dans l'Oural." },
      { date: "10 000 km", detail: "Ce trajet se fait sans combat direct, mais dans des conditions climatiques extrêmes. Le bataillon sert de force de présence et de protection de la ligne ferroviaire face aux partisans." },
    ],
  },
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
    { term: "Kraïevski", def: "Localité du front de l'Oussouri où le 9e RIC subit son baptême du feu (15–19 août 1918)." },
    { term: "Doukovskoïe", def: "Ville où le bataillon repousse 4 500 bolcheviques en coalition avec Tchèques, Japonais et Anglais (23–24 août 1918)." },
    { term: "Front de l'Oussouri", def: "Zone de combat à l'est de la Sibérie, première affectation du bataillon." },
    { term: "Train blindé", def: "Train militaire blindé utilisé pour la remontée du Transsibérien vers Oufa (10 000 km)." },
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
    { question: "Où le bataillon subit-il son baptême du feu ?", answer: "À Kraïevski, sur le front de l'Oussouri (15–19 août 1918)" },
    { question: "Combien de bolcheviques attaquent à Doukovskoïe ?", answer: "4 500 — repoussés par le 9e RIC et ses alliés" },
    { question: "Quel est le bilan de la bataille de Doukovskoïe ?", answer: "2 tués et 15 blessés côté français" },
    { question: "Comment le bataillon traverse-t-il la Sibérie après les combats ?", answer: "Dans un train blindé, 10 000 km sans combat direct" },
    { question: "Pourquoi les Légions Tchèques se révoltent-elles ?", answer: "Moscou ordonne leur désarmement ; elles refusent et s'emparent de Vladivostok" },
    { question: "Quel choc affrontent les marsouins du 9e ?", answer: "De +35 °C au Tonkin à −40 °C en Sibérie" },
    { question: "Quelle est la mission finale du bataillon le long du Transsibérien ?", answer: "Force de présence et protection de la ligne ferroviaire face aux partisans" },
  ],
  conclusion: "De Kraïevski à Doukovskoïe, le 9e RIC a repoussé les forces bolcheviques et sécurisé la voie ferrée. Puis, dans un train blindé, le bataillon a traversé 10 000 km de Sibérie — sans combat direct mais dans des conditions extrêmes — pour protéger le Transsibérien face aux partisans. Un engagement à l'échelle d'un continent.",
  nextStep: "Continuer vers : ASIE — Les Années Heureuses"
};
