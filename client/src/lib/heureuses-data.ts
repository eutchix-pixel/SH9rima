export interface SceneCard {
  title: string;
  parenthese: string;
}

export interface ArchiveDoc {
  title: string;
  type: 'accordeon' | 'texte';
  content: string;
}

export interface HeureusesContent {
  title: string;
  subtitle: string;
  accroche: string;
  resume: string;
  aRetenir: string[];
  albumScenes: SceneCard[];
  hanoiReperes: SceneCard[];
  traditionsVisages: SceneCard[];
  musique: {
    texte: string;
    documents: string[];
    parenthese: string;
  };
  tonkin1934: {
    cartes: string[];
    texte: string;
    legende: string;
    parenthese: string;
  };
  archives: {
    subtitle: string;
    officiers: string;
    introFrech: string;
    discours1932: string;
    postFrech: string;
    insigne1939: string;
  };
  nextStep: string;
}

export const heureusesData: HeureusesContent = {
  title: "Les Années Heureuses (1920–1939)",
  subtitle: "Une période de « présence » : routines, ville, traditions, musique — le Tonkin se raconte aussi par le quotidien.",
  accroche: "Ici, pas de grandes batailles : un album de scènes pour sentir l'époque.",
  resume: "Dans l'entre‑deux‑guerres, la vie du régiment au Tonkin s'inscrit dans une présence durable : garnisons, ville, campagnes, visages, cérémonies, concerts. C'est une histoire de rythme et d'environnement — Hanoï, les marchés, les rizières, les pagodes — qui nourrit aussi l'identité du 9, jusqu'à des repères comme le discours de 1932 et la création d'un premier insigne en 1939.",
  aRetenir: [
    "Une « présence » plus qu'une « campagne ».",
    "Le quotidien (ville, marchés, campagnes) façonne l'expérience.",
    "La musique et les traditions participent à l'identité.",
  ],
  albumScenes: [
    { title: "La vie aux champs, le repiquage du riz", parenthese: "Une scène qui rappelle que le Tonkin, c'est d'abord un territoire vécu par ses habitants." },
    { title: "Labours en rizière", parenthese: "Le paysage agricole explique aussi les contraintes de déplacement et de terrain." },
    { title: "Fabrication du papier « Le pressage »", parenthese: "Une économie locale, des savoir‑faire, et un quotidien très concret." },
    { title: "Marché de Dong Dang", parenthese: "Carrefour d'échanges — et parfois de tensions — dans une région de circulation." },
    { title: "Enseignement traditionnel par le Ong Do (maître des caractères chinois) — 1931", parenthese: "Transmission, langue, autorités : une société structurée par ses repères." },
    { title: "École élémentaire de Thái Binh — 1931", parenthese: "Modernité et continuités se côtoient dans le quotidien." },
    { title: "Sontay — Pont couvert", parenthese: "Un point de passage, un repère de circulation." },
    { title: "Dans l'arrière‑pays, franchissement en pirogue", parenthese: "Ici, l'eau est une route — et parfois une frontière." },
  ],
  hanoiReperes: [
    { title: "Boulevard Dong Khanh", parenthese: "Une capitale coloniale, vitrine administrative et urbaine." },
    { title: "La gare", parenthese: "La mobilité, le contrôle et la logistique commencent souvent ici." },
    { title: "Boulevard Henri Rivière", parenthese: "Les noms de lieux racontent aussi une mémoire." },
  ],
  traditionsVisages: [
    { title: "Pagode de Kinh Loc", parenthese: "Un repère spirituel et architectural, ancré dans le quotidien." },
    { title: "Médecin aux grands ongles à Hanoï", parenthese: "Une figure sociale ; les détails disent parfois la hiérarchie et les codes." },
    { title: "Procession du Dragon et de la Licorne", parenthese: "Fête, rituel, spectacle : une autre façon de « tenir » une société." },
    { title: "Jardin botanique, kiosque de la musique", parenthese: "La musique comme scène publique, et la ville comme décor." },
  ],
  musique: {
    texte: "Le 9e RIC possédait à Hanoï une musique réputée. Il donna de nombreux concerts en ville dès sa création comme l'attestent les affiches à l'époque.",
    documents: [],
    parenthese: "Même sans visuel, ces titres montrent une présence culturelle et une communication publique.",
  },
  tonkin1934: {
    cartes: [
      "Au bivouac",
      "La compagnie de mitrailleuses (Hotchkiss sur les mulets)",
      "Halte prolongée à Phu Lang Huang",
      "Pause dans le Day",
    ],
    texte: "11 novembre 1934 à Tong. Les hommes qui portent le long fusil (dit 07/15) sont les voltigeurs chargés du service du fusil mitrailleur.",
    legende: "Le marsouin Groupette est à l'extrême droite.",
    parenthese: "Quelques lignes suffisent parfois à faire surgir le terrain, l'armement et l'organisation.",
  },
  archives: {
    subtitle: "Deux repères d'identité : la parole (1932) et le symbole (1939).",
    officiers: "Les officiers du 9e RIC à Hanoï en 1930. Au centre, portant la cravate de la Légion d'honneur, le chef de corps, le colonel Frech. À sa droite, le lieutenant‑colonel Coudert.",
    introFrech: "Sous un esprit bonhomme, le colonel Frech possédait une éloquence et un verbe hors du commun qui furent célèbres en leur temps. Voici la fin de la harangue historique qu'il adressa au régiment le 1er mars 1932 à Hanoï.",
    discours1932: `« Et maintenant, Marsouin du 9e de l'Arme de 1932, encore un mot.
Tu as toujours répondu à nos espérances quelque effort que nous t'ayons demandés au delà des exigences courantes, au delà de ce qu'on t'avait demandé antérieurement.
Souvent de toi-même, tu nous a plus donné que nous ne t'avons demandé.
Nous avons vu comment tu répondis aux appels pour Yen-Bay et pour Lang Son en 1930, aux appels récents pour la Chine en 1932.

Tu nous a donné toutes raisons de croire fermement que tu es digne de tes Anciens.
"Toujours Prêt", au gré des circonstances, à faire revivre, soit le "Marsouin Intégral" de 1890, soit l'admirable Marsouin de ce Glorieux RICM de 1918, prototype durant la Grande Guerre, du Régiment de Marsouins de tous les temps de Guerre qu'a vécus l'Arme, et qui en ramena le Drapeau le plus surchargé des plus Glorieux insignes de la Valeur Militaire Française.

Mais, Marsouin de 1932, ne t'impatiente pas en voyant de temps en temps les tiens ou encore de tes Emules de la Coloniale et de la vieille et Héroïque Légion te précéder dans la voie de l'Aventure, du Sacrifice et de l'Honneur.

Reste patient et digne du rôle "d'Ultime Réserve et de Garde" que t'a assigné ici le Grand Chef qui, actuellement, préside aux destinées Militaires de la Colonie.

Marsouin, attends ton heure. Reste Marsouin, "Toujours Prêt",
"MARSOUIN TOUJOURS" »`,
    postFrech: `Le colonel Frech terminait ses décisions du corps en écrivant sous sa signature et sous son nom : « la terreur des méchants ».

Il fut à l'origine du premier historique du régiment réalisé par le lieutenant‑colonel Coudert, et paru le 11 avril 1930.`,
    insigne1939: `En 1939, le lieutenant‑colonel Marc décide de créer l'insigne de corps du 9e RIC.

Fabriqué au Tonkin, les exemplaires sont rares.

Le marsouin (Phoecena communis) et la devise symbolisent l'infanterie de marine. Ce mammifère cétacé, carnivore, de petite taille est un cousin des dauphins dont il se distingue par son bec court. L'origine de ce surnom est, bien entendu, difficile à établir. Pour les uns, il s'agit d'un terme de mépris donné par les matelots à l'infanterie de marine qui, n'assurant plus le service à bord, suivait les navires comme les bandes de marsouins. Ce terme serait alors postérieur à 1856. Pour d'autres, le terme vient de la tente que l'on dressait sur le gaillard d'avant et qui servait de campement aux fantassins. Enfin, ce surnom aurait existé dès la monarchie de Juillet parce que les fantassins de marine réclamaient sans cesse à manger (allusion aux vrais marsouins qui se nourrissent des déchets des cuisines de bord).`,
  },
  nextStep: "Continuer vers : ASIE — 1939–1946",
};
