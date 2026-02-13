import { SubSection } from "@/lib/data";

export interface TonkinContent {
  title: string;
  subtitle: string;
  summary: string;
  timelineEvents: { year: string; title: string; desc?: string }[];
  keyBlocks: { title: string; content: string; note?: string }[];
  focus: { title: string; content: string; note?: string };
  mainKeyPoints: string[];
  
  detailedSections: {
    id: string;
    title: string;
    content: string[];
    subsections?: { title: string; content: string }[];
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
  subtitle: "Un théâtre rude, une carte qui commande tout, et une présence française qui s’installe : c’est dans ce cadre que naît, au Tonkin, un régiment autonome — le 9.",
  summary: "Au XIXe siècle, la France projette des troupes en Asie pour sécuriser routes maritimes et points d’appui, et peser dans une région stratégique. L’instabilité au sud de la Chine (troubles, bandes armées, insécurité transfrontalière) fait du Tonkin un carrefour à contrôler. Les compagnies de Marine, d’abord dispersées, sont progressivement regroupées, organisées, puis fixées : le 10 mars 1890, le régiment de marche devient le 9e régiment d’infanterie de marine autonome au Tonkin.",
  timelineEvents: [
    { year: "1840", title: "Ouverture", desc: "Traités inégaux" },
    { year: "1860", title: "Palikao", desc: "Victoire décisive" },
    { year: "1882", title: "Hanoï", desc: "Rivière prend la citadelle" },
    { year: "1888", title: "Organisation", desc: "Régiments de marche" },
    { year: "1890", title: "Naissance du 9", desc: "Autonomie au Tonkin" },
    { year: "1890-95", title: "Pacification", desc: "Campagnes d'endurance" }
  ],
  keyBlocks: [
    {
      title: "Pourquoi des Troupes de marine en Asie ?",
      content: "Parce qu’elles sont l’outil des expéditions lointaines : embarquer, débarquer, tenir des positions, protéger et appuyer une présence française durable (commerce, diplomatie, sécurité).",
      note: "À retenir : ce n’est pas “un épisode”, c’est un engagement qui s’installe."
    },
    {
      title: "Pourquoi le Tonkin compte ?",
      content: "Le Tonkin est proche de la Chine, riche en ressources, et traversé par des axes d’eau (Fleuve Rouge et affluents) : la géographie y impose le rythme des opérations.",
      note: "Ici, un gué, une digue ou une rizière peut décider d’une journée de marche."
    },
    {
      title: "Comment naît le 9 ?",
      content: "Au départ, des compagnies de Marine sont envoyées et regroupées selon les besoins. À mesure que la présence se prolonge, l’organisation se fixe : commandement, regroupements, régiments de marche. Le tournant arrive le 10 mars 1890 : le régiment de marche devient le 9e régiment d’infanterie de marine autonome, stationné au Tonkin.",
      note: "C’est la “naissance” du 9 au Tonkin : une unité pensée pour durer."
    }
  ],
  focus: {
    title: "FOCUS — Palikao (1860)",
    content: "Palikao est un jalon-mémoire : victoire décisive (21 septembre 1860) dans une campagne qui mène à la prise de Pékin (17 octobre) puis au traité de Pékin (22 octobre). L’inscription “Palikao 1860” sur le drapeau rappelle que l’Asie est déjà un théâtre d’engagement avant le Tonkin.",
    note: "Un repère sur le drapeau = une mémoire transmise."
  },
  mainKeyPoints: [
    "Le XIXe siècle installe une présence française durable en Asie.",
    "Le Tonkin est stratégique : frontière, ressources, fleuves, routes.",
    "Les bandes armées et l’insécurité transfrontalière rendent les opérations longues.",
    "Les compagnies de Marine se regroupent et se stabilisent.",
    "10 mars 1890 : naissance du 9 autonome au Tonkin."
  ],
  detailedSections: [
    {
      id: "tonkin_detail",
      title: "Le Tonkin en détail : géographie, fleuves, climat, populations",
      content: [
        "Pourquoi le Tonkin ? Un enjeu économique : voie d’accès vers la Chine, ressources minières et agricoles. Un enjeu politique : rivalités entre puissances européennes. Un enjeu stratégique : contrôler des axes, des deltas, des vallées, et sécuriser les communications.",
        "Ressources (fin XIXe) : On attribue au Tonkin de nombreuses ressources : mines (or, argent, cuivre, fer), mais aussi sel, zinc, étain, plomb, charbon, etc. Sur le plan agricole : riz, coton, chanvre, tabac, poivre, bois.",
        "Relief (3 grandes zones) : 1) Le delta : vaste plaine alluviale, canaux et arroyos, zone riche et densément peuplée. 2) Le moyen pays : collines et reliefs intermédiaires. 3) Le haut pays : montagnes vers la Chine, zones difficiles, favorables aux replis et aux sanctuaires.",
        "Hydrographie (repère majeur) : Le Fleuve Rouge (Song Hong) est l'axe central. Deux affluents cités comme structurants : la Rivière Noire et la Rivière Claire. Dans le delta, des canaux relient les cours d’eau : l’eau dicte le mouvement, la logistique et les points de contrôle.",
        "Climat (lecture “terrain”) : Le Tonkin alterne saisons fraîches, humidité, brumes, puis chaleur et mousson. Les opérations se mènent souvent quand le climat est plus “supportable”, mais la boue, la chaleur, et l’humidité compliquent tout.",
        "Populations (mosaïque) : Le Tonkin rassemble diverses populations (delta, montagnes, vallées). Les structures locales et les loyautés ne sont pas uniformes, ce qui pèse sur le renseignement, la sécurité et la “pacification”."
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
