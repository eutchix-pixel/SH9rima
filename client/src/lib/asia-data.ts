import { SubSection } from "@/lib/data";

export interface TonkinContent {
  title: string;
  subtitle: string;
  intro: {
    reperes: string[];
  };
  sections: {
    id: string;
    title: string;
    content: string[]; // Array of paragraphs
    keyPoints?: string[]; // "À retenir"
    dates?: { year: string; event: string }[];
    subsections?: {
      title: string;
      content: string;
    }[];
  }[];
  modules: {
    map: {
      title: string;
      intro: string;
      callouts: { name: string; desc: string }[];
    };
    life: {
      title: string;
      cards: { title: string; content: string[] }[];
    };
    operations: {
        title: string;
        intro: string;
        subsections: { title: string; content: string }[];
        stories: { title: string; content: string }[];
    };
    projection: {
        title: string;
        context: string;
        reperes: string[];
        keyPoints: string[];
    };
    glossary: { term: string; def: string }[];
    quiz: { question: string; answer: string }[];
  };
  gallery: {
      caption: string;
      alt: string;
      placeholder?: boolean;
  }[];
  conclusion: {
      text: string;
      nextStep: string;
  };
}

export const tonkinOriginsData: TonkinContent = {
  title: "Naissance du 9 au Tonkin — Des prémisses d’une conquête à l’autonomie du régiment",
  subtitle: "Ici commence l’histoire “Asie” du 9 : un théâtre rude, des marches interminables, une géographie qui commande tout… et la naissance d’un régiment qui va porter ses couleurs pendant plus d’un demi-siècle.",
  intro: {
    reperes: ["1860 (Palikao)", "1882 (Hanoï, Rivière)", "1890 (le 9 devient régiment autonome au Tonkin)", "1890–1895 (premières campagnes de pacification)"]
  },
  sections: [
    {
      id: "premisses",
      title: "Prémisses d’une conquête (1840–1860)",
      content: [
        "Pourquoi la France est au Tonkin (1890) ?",
        "Contrer l'Angleterre : Les Britanniques dominent l'Inde et la Birmanie. La France veut sa part du gâteau en Asie du Sud-Est pour rester une puissance de premier rang.",
        "La Porte de la Chine : Le Tonkin est stratégique. On veut contrôler le Fleuve Rouge pour en faire une autoroute commerciale vers les richesses du Yunnan (Chine du Sud).",
        "Laver l'affront de 1870 : Après la défaite contre les Prussiens, la République cherche une victoire de prestige. Coloniser, c'est prouver au monde que la France n'est pas morte.",
        "Sécuriser l'Indochine : La France tient déjà le Sud (Cochinchine). Pour que l'ensemble soit viable, elle doit posséder le Nord (Tonkin) et protéger ses frontières contre les incursions chinoises.",
      ],
      keyPoints: [
        "“Palikao 1860” : un repère fondateur sur le drapeau.",
        "Les mouvements de troupes et la fragmentation du pouvoir local alimentent le banditisme transfrontalier."
      ],
      subsections: [
        {
          title: "FOCUS — Palikao (1860)",
          content: "Pourquoi on s’est battu à Palikao (1860) ?\n\nForcer le Commerce : L’Empire de Chine est fermé. On se bat pour obliger l’Empereur à ouvrir ses ports aux marchandises et aux navires français et anglais.\n\nVenger les Martyrs : L’exécution du missionnaire Auguste Chapdelaine sert de “Casus Belli” (prétexte légal) pour déclencher l’intervention militaire.\n\nCasser l’Armée Impériale : Il fallait détruire la puissance militaire chinoise (la cavalerie mongole) pour dicter les conditions de paix directement à Pékin.\n\nLa bataille de Palikao, livrée le 21 septembre 1860, est l’affrontement décisif de la Seconde Guerre de l’Opium où le corps expéditionnaire franco-britannique a brisé la dernière ligne de défense de Pékin. Face à 30 000 cavaliers d’élite mongols et mandchous, les forces alliées ont utilisé leur discipline tactique et la supériorité de leur artillerie rayée pour infliger une défaite totale à l’armée impériale chinoise. Cette victoire spectaculaire, remportée sur un pont stratégique, a forcé l’empereur à la fuite, ouvert la route de la capitale et assuré à la France une influence majeure en Asie, inscrivant définitivement le nom de “Palikao” comme un fait d’armes prestigieux sur les emblèmes des Troupes de Marine."}
      ]
    },
    {
        id: "naissance",
        title: "Naissance d'un régiment (1869–1890)",
        content: [
            "1882 : Rivière prend Hanoï. Des compagnies de marine sont déjà sur place.",
            "1884 : Création de la division d'Annam. Les unités se structurent autour d'Hanoï.",
            "1888 : Les bataillons sont regroupés en régiments de marche. Le Tonkin reçoit le n°2.",
            "10 mars 1890 : le tournant. Le régiment de marche n°2 devient le 9e régiment d'infanterie de marine, autonome et stationné au Tonkin. Le 9 est né."
        ],
        keyPoints: [
            "1890 : naissance du 9 autonome au Tonkin.",
            "Le 9 devient le régiment de présence et d'action au Tonkin."
        ]
    }
  ],
  modules: {
    map: {
      title: "Carte mentale du Tonkin : fleuves, deltas, massifs",
      intro: "Pour comprendre la naissance du 9 au Tonkin, il faut “voir” le terrain : une colonne peut gagner une journée… ou la perdre sur un gué, une rizière, une crête, une forêt inextricable.",
      callouts: [
        { name: "Fleuve Rouge", desc: "Axe de circulation et de contrôle" },
        { name: "Rivière Noire", desc: "Reliefs, vallées, zones de replis" },
        { name: "Rivière Claire", desc: "Itinéraires, confluences, embuscades" },
        { name: "Delta", desc: "Canaux, densité, enjeux économiques" }
      ]
    },
    life: {
      title: "Tenues & équipements : s’adapter au Tonkin",
      cards: [
        {
          title: "Tenue (vers 1885)",
          content: [
            "Casque colonial modèle 1878 (jugulaire noire)",
            "Képi indochinois (souvent noir)",
            "Pantalon sombre (parfois treillis modèle 1879)",
            "Ceinturon d’infanterie de marine",
            "Cartouchière modèle 1877",
            "Bidon recouvert de toile bleue",
            "Musette en toile",
            "Fusil modèle 1874 encore présent sur plusieurs années"
          ]
        },
        {
          title: "Tenue (évolutions 1895–1903)",
          content: [
            "Apparition d’une toile “bleu mécanique” (1895) : couvre-casque, paletot, pantalon",
            "Passage progressif au kaki (à partir de 1903)",
            "Guêtres blanches en toile (vers 1894)",
            "Équipements : couverture roulée, sac modèle 1892, gamelle modèle 1882, bidon modèle 1877, cartouchières modèle 1888, fusil Lebel 1886/93"
          ]
        },
        {
          title: "Logistique (règle d’or)",
          content: [
            "Une colonne ne vit pas “sur le pays” longtemps. Il faut transporter :",
            "- vivres (pain, biscuits, conserves), parfois vin",
            "- munitions",
            "- matériel (artillerie, outillage)",
            "- et même le riz destiné aux auxiliaires et aux coolies",
            "Conséquence : au-delà d’environ deux semaines, la manœuvre dépend de dépôts intermédiaires et de rotations de portage."
          ]
        },
        {
          title: "Terrain (citation “ambiance”)",
          content: [
            "“Chaleur, humidité, odeurs de végétation, boue : le Tonkin fatigue les corps et étire les colonnes.”"
          ]
        }
      ]
    },
    operations: {
        title: "Premières opérations (1890–1892) : apprendre à “tenir” le Tonkin",
        intro: "Le Tonkin est alors une zone d’insécurité : bandes tonkinoises et chinoises, replis transfrontaliers, villages complicités ou soumis, terrain favorable à l’embuscade.",
        subsections: [
            { title: "Son Tay (octobre 1890 – juin 1891)", content: "Une bande (Doc Ngu) opère entre la Rivière Claire et Son Tay, s’abrite dans les massifs, surprend des détachements, et oblige à des opérations longues : marches, ratissages, destructions de repaires, poursuites dans une végétation dense. Le terrain peut annuler la surprise : rizières, lagunes, forêts, dénivelés." },
            { title: "Yen Thé : le fief de Dê Tham (novembre 1890 – janvier 1891)", content: "Dê Tham s’impose comme un chef pirate durable : villages fortifiés, postes, lignes de défense, ruses, réseau d’information. Une logique s’installe : créer des postes, couper les axes, investir et détruire les fortins, tenir dans le temps." },
            { title: "Luu Ky (novembre 1891 – mai 1892) : la chasse dans les massifs", content: "Luu Ky s’appuie sur des massifs difficiles (forêts, pentes, crêtes). Les opérations combinent colonnes convergentes, recherches de camps, coups de main sur villages, et une lutte constante contre la fuite et le renseignement adverse. Point de bascule : la pression prolongée asphyxie le ravitaillement et fragilise la bande." },
            { title: "Yen Bay (décembre 1891 – février 1892)", content: "Dans la région entre le Fleuve Rouge et le Song Chay, les opérations cherchent à briser les cycles de raids. Les colonnes progressent dans des massifs où une erreur de guide peut mener à un engagement inattendu contre un camp fortifié." },
            { title: "1893 : projection et pression (Siam)", content: "Expédition du Siam (7 août – 7 septembre 1893). Contexte : tensions autour du Laos et des accords régionaux. L’opération est limitée et vise notamment l’occupation de Chantaboum. Ce qui marque l’épisode : une action conduite sans combat majeur, où la diplomatie et la négociation jouent un rôle central ; un détachement du 9 est engagé dans un dispositif expéditionnaire embarqué, puis rappelé. À retenir : Le 9 n’agit pas seulement dans les rizières et les massifs : il peut être projeté dans des opérations “politiques” et navales." },
            { title: "1893–1895 : la pacification s’étire, les tactiques évoluent", content: "Sous la pression, les bandes changent de tactique : prises d’otages, parfois européens, pour rançon. Les colonnes réagissent par poursuites et destructions de refuges. Arrivée de Gallieni (décembre 1893 – janvier 1894) : une phase de réorganisation logistique précède l’offensive. Retour au Yen Thé contre Dê Tham (1894) : Dê Tham reste insaisissable. Pan Ai (juillet–août 1894) et haut Song Cau (mars–mai 1895) : opérations d’envergure contre des positions et dépôts d’armes." }
        ],
        stories: [
            {
                title: "Le combat de Dongly (10 septembre 1892)",
                content: "Après le pillage d’un village, le lieutenant Couteret poursuit les pirates avec vingt marsouins du 9 et des tirailleurs tonkinois. Deux jours de chasse, puis contact à Dongly : la troupe se divise, coupe la retraite, engage le combat. Cinq pirates sont tués. Le village est fouillé puis brûlé. Le détachement reçoit la médaille commémorative du Tonkin. À retenir : La pacification est une guerre d’endurance : marcher, chercher, encercler, tenir des postes. Le renseignement, les guides, et la population sont déterminants."
            },
            {
                title: "Le combat de Yen Muc (8 novembre 1894)",
                content: "Le sous-lieutenant Gressard, avec sept marsouins du 9, trente tirailleurs et cinq partisans, recherche le repaire du pirate Con Nhi dans le massif du Nui Ban To. À Yen Muc, la section est presque encerclée : une centaine puis près de deux cents Chinois se déploient dans la rizière. Une seule issue : reprendre la piste d’arrivée. “Baïonnette au canon ! À l’assaut !” La charge brise le verrou et ouvre le passage."
            }
        ]
    },
    projection: {
        title: "1898–1899 : Quang Tcheou Wan (occupation)",
        context: "À la fin du XIXe siècle, plusieurs puissances occupent des points stratégiques en Chine. La France décide à son tour d’établir une présence à Quang Tcheou Wan.",
        reperes: [
            "Octobre 1898 : envoi de compagnies ; le 9 fournit notamment des éléments pour la garnison.",
            "1899 : opérations et combats autour des postes et axes ; réaction après l’assassinat de deux officiers de marine en mission.",
            "Novembre 1899 : actions offensives, prise de positions, puis organisation durable du territoire.",
            "15 novembre 1899 : le territoire est concédé à la France par traité.",
            "1900 : mise sous autorité civile."
        ],
        keyPoints: [
            "Quang Tcheou Wan montre la dimension “littorale et politico-stratégique” des engagements.",
            "Le 9 participe à la sécurisation d’une possession, au-delà du seul Tonkin."
        ]
    },
    glossary: [
      { term: "Traités inégaux", def: "Accords imposés à la Chine au XIXe siècle, ouvrant ports et droits aux puissances étrangères." },
      { term: "Palikao (1860)", def: "Pont et bataille (septembre 1860) ; repère mémoriel sur le drapeau." },
      { term: "Tonkin", def: "Nord de l’actuel Vietnam ; delta, massifs, frontière chinoise." },
      { term: "Fleuve Rouge", def: "Axe majeur, structure les déplacements et les zones de contrôle." },
      { term: "Tirailleurs tonkinois", def: "Unités indigènes intégrées aux colonnes et opérations." },
      { term: "Colonne", def: "Formation de marche et de combat ; en terrain fermé, elle s’étire et devient vulnérable." },
      { term: "Partisans", def: "Auxiliaires locaux armés, utilisés notamment pour la sûreté et l’action dans les vallées." },
      { term: "Pacification", def: "Terme de l’époque ; désigne les opérations prolongées de contrôle, postes, ratissages et lutte contre les bandes." },
      { term: "Quang Tcheou Wan", def: "Territoire concédé à la France en 1899 ; occupation et organisation à la charnière XIXe–XXe." }
    ],
    quiz: [
      { question: "Quelle inscription rappelle l’épisode de 1860 sur le drapeau ?", answer: "Palikao 1860" },
      { question: "En quelle année le 9 devient-il un régiment autonome au Tonkin ?", answer: "1890" },
      { question: "Quel fleuve structure fortement la mobilité et le contrôle au Tonkin ?", answer: "Le Fleuve Rouge" },
      { question: "Pourquoi les colonnes ont-elles besoin de dépôts et rotations au-delà d’environ deux semaines ?", answer: "Parce que vivres, munitions et matériel doivent être portés : l’autonomie logistique est limitée." },
      { question: "Quel chef pirate est associé au fief du Yen Thé ?", answer: "Dê Tham" },
      { question: "Quel récit illustre une manœuvre de sortie d’encerclement par l’assaut ?", answer: "Le combat de Yen Muc (8 novembre 1894)" },
      { question: "Quel territoire est concédé à la France par traité le 15 novembre 1899 ?", answer: "Quang Tcheou Wan" }
    ]
  },
  gallery: [
    { caption: "Au Tonkin 1890–1946 — Hanoï (1920), porte-drapeau : lieutenant Pérignon.", alt: "Couverture d’archive “Au Tonkin 1890–1946”." },
    { caption: "Organisation administrative : du Résident supérieur à Hanoï au réseau de résidents et sous-résidents.", alt: "Schéma d’organisation administrative au Tonkin." },
    { caption: "Mirador de la citadelle de Son Tay.", alt: "Photo d’un mirador à Son Tay." },
    { caption: "Copie d’une carte pirate (Yen Thé).", alt: "Carte manuscrite attribuée aux pirates." },
    { caption: "Croquis des défenses du fort du Dê Tham.", alt: "Croquis de fortifications." },
    { caption: "Croquis du combat de Dongly.", alt: "Croquis d’un engagement tactique." },
    { caption: "Croquis des lieux de l’expédition du Siam (lieutenant Plailly).", alt: "Carte manuscrite de l’expédition du Siam." },
    { caption: "Région de Moncay — opérations de frontière (Pan Ai).", alt: "Carte de région côtière et frontalière." },
    { caption: "Carte de la région du Pan Ai.", alt: "Carte manuscrite du massif du Pan Ai." },
    { caption: "Le combat de Yen Muc (8 novembre 1894) — croquis de situation.", alt: "Page d’archive sur le combat de Yen Muc." },
    { caption: "Carte de l’île de Quang Tcheou Wan.", alt: "Carte manuscrite de Quang Tcheou Wan." },
    { caption: "Quang Tcheou Wan — Fort Bayard : pavillon des sous-officiers.", alt: "Photo d’un bâtiment à Fort Bayard." }
  ],
  conclusion: {
    text: "Le 9 “naît” au Tonkin dans un monde où la géographie décide : fleuves, deltas, massifs, rizières, forêts. À partir de 1890, il devient un régiment autonome, puis se forge dans des campagnes longues : poursuivre, encercler, tenir des postes, recommencer. C’est une histoire d’endurance, de terrain et d’adaptation.",
    nextStep: "Continuer vers : “ASIE — Stabilisation & troubles (1901–1914)”"
  }
};
