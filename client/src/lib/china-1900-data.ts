export interface China1900Content {
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
  heritage: {
    text: string;
    inscriptions: string[];
  };
  ordre: {
    intro: string;
    text: string;
    signature: string;
    note: string;
  };
  gallery: { caption: string; alt: string }[];
  glossary: { term: string; def: string }[];
  quiz: { question: string; answer: string }[];
  conclusion: string;
  nextStep: string;
}

export const china1900Data: China1900Content = {
  title: "Chine (1900) — Expédition de Chine",
  subtitle: "Une crise géopolitique : puissances étrangères, souveraineté contestée, violences anti\u2011occidentales. Et, au milieu, un bataillon du 9 engagé de Tien Tsin à Pékin.",
  question: "Pourquoi, en 1900, des soldats venus d'Indochine se retrouvent-ils à combattre aux portes de Pékin ?",
  reperes: [
    { date: "17 juin", label: "Début des attaques" },
    { date: "24–25 juin", label: "Départ d'Hanoï" },
    { date: "7 juillet", label: "Ta Kou" },
    { date: "11–14 juil.", label: "Tien Tsin" },
    { date: "30 juil.–13 août", label: "Marche sur Pékin" },
    { date: "14–17 août", label: "Prise de Pékin" },
    { date: "Retour", label: "Hanoï" },
    { date: "Drapeau", label: "\"Tien Tsin 1900\" & \"Pékin 1900\"" },
  ],
  blocs: [
    {
      id: "geopolitique",
      title: "Pourquoi ça explose ?",
      mode: 'comprendre',
      content: [
        "Pendant qu'il pacifiait le Tonkin, d'autres Français représentaient la France dans cet immense empire que l'occident voulait se partager. Mais au fil des années, la réticence chinoise devient résistance, avec des flambées populaires manigancées par les \"sociétés\", qui véhiculent un fort sentiment anti-occidental.",
        "L'empereur, au milieu de ce choc entre deux mondes, chancelle. En 1898, l'impératrice douairière Tseu Hi a repris les rênes du pouvoir. Elle a chassé les réformistes et tente de réaffirmer son trône. Tout naturellement, elle s'appuie sur les sociétés.",
        "En 1900, la plus importante et la plus virulente est celle des Boxers. Les accrochages sont fréquents, les nerfs des protagonistes sont à vif."
      ],
      keyPoints: [
        "Une crise de souveraineté : influence étrangère, rejet, violence.",
        "Un pouvoir impérial fragilisé qui s'appuie sur des \"sociétés\".",
        "Les Boxers cristallisent l'explosion de 1900."
      ]
    },
    {
      id: "acteurs",
      title: "Qui agit ?",
      mode: 'comprendre',
      content: [
        "En mai la situation devient critique, car non seulement les bandes armées sillonnent le pays, mais l'armée républicaine chinoise part en campagne. Elle a été réorganisée par l'impératrice dès sa prise de pouvoir : forte de 57 000 hommes répartis en cinq divisions, elle est renforcée par quelques 50 000 Mandchous et 10 000 Mongols. L'entraînement qu'elle a repris lui a redonné un excellent moral.",
        "Dès le 17 juin, les attaques systématiques contre tout ce qui est occidental débutent. Les légations dans Pékin sont attaquées et assiégées, ainsi que les légations de Tien Tsin.",
        "INFO:Qu'est-ce qu'une légation ? Une légation est la résidence officielle d'un diplomate étranger et de son personnel dans un pays. À Pékin, le quartier des Légations regroupait les ambassades des puissances occidentales et du Japon, protégées par de petites garnisons. C'est ce quartier fortifié que les Boxers et l'armée impériale assiègent pendant 55 jours.",
        "Les Boxers attaquent la colonne du général Seymour, qui a 70 tués et 200 blessés : elle arrive éprouvée à Tien Tsin le 25. La situation devient si grave que des renforts sont appelés de toutes parts."
      ],
      keyPoints: [
        "Deux niveaux : violence \"populaire\" + intervention de l'armée régulière.",
        "Les légations : symbole et enjeu politique majeur.",
        "L'appel aux renforts transforme une crise locale en affaire internationale."
      ]
    },
    {
      id: "recit",
      title: "Que se passe-t-il ?",
      mode: 'comprendre',
      content: [
        "Le général Borgnis-Desbordes désigne le colonel de Pelacot pour partir avec un de ses bataillons et un du 11e de Marine.",
        "Le 1er bataillon du commandant Brenot est désigné, composé de la 1re compagnie du capitaine Genty, de la 2e compagnie du capitaine Bunnabocce, de la 4e compagnie du capitaine Poch, et de la 4e compagnie du capitaine Verdant. Le 1er bataillon du 11e de Marine est dirigé par le commandant Roux.",
        "\"Je vous souhaite bon voyage mon cher colonel, je compte sur vous pour tenir haut le drapeau de la France\" (général Borgnis Debordes au chef de corps du 9e RIMa).",
        "Le bataillon quitte Hanoï dans la nuit du 24 au 25 juin à bord du vapeur l'Eridan. Le 7 juillet, l'Eridan arrive en rade de Ta Kou. Le corps français, fort de 1 500 hommes (2 bataillons et 1 batterie), débarque et le lendemain, entre dans Tien-Tsin où la situation s'est un peu calmée.",
        "SECTION:La bataille de Tien Tsin (11–14 juillet)",
        "Le 11 juillet, à trois heures du matin, la 1re compagnie du capitaine Genty subit à la gare où elle est installée, une violente attaque chinoise. Elle défend le secteur avec une compagnie japonaise, soit 300 hommes en tout. Rapidement, Genty s'aperçoit qu'au milieu de Boxers, l'armée régulière chinoise intervient. Un violent bombardement d'artillerie s'abat sur les positions.",
        "Les Chinois n'étaient plus qu'à 100 mètres de nos tranchées. C'est à la baïonnette qu'ils furent délogés, mais leur artillerie ouvrit un feu nourri sur les défenses. Les Chinois laissent sur le terrain 300 de leurs hommes ; de notre côté 10 tués et 34 blessés sont à déplorer, dont le commandant Brenot.",
        "Le 14 juillet à 3 h 30 du matin, après un tir d'artillerie, les Japonais font sauter la porte sud. Japonais et Français s'engouffrent, et, baïonnette au canon, délogent les Chinois. La ville est ratissée, les derniers défenseurs se rendent, la majorité a déjà fui. L'aube de ce jour de fête nationale, Tien Sin est prise.",
        "SECTION:La marche sur Pékin (30 juillet – 13 août)",
        "Elle-ci débute le 30 juillet. La bataille de Pei Tsang s'engage le 5 août. Après une manœuvre de contournement, à 9 h 00 du matin, les Chinois battent en retraite.",
        "Le 8 août, les alliés sont à Nan Tsai Tsoun, le 9 à Moutchang, le 10 à Malou, le 11 à Tchan Kai Wan, le 12 à Toung Tchéou, le 13 soir chaque détachement campe à environ trois kilomètres de Pékin, sans avoir rencontré une seule résistance. Les marsouins de Frey bivouaquent à Toung Tchéou.",
        "SECTION:La prise de Pékin (14–17 août)",
        "Les Anglais arrivent à 11 h 00 devant la porte est (Kuang Kiu Men). Les Chinois, à cause des combats, l'ont dégarnie. Les Anglais la font sauter, s'en emparent à 14 h 00 et conquièrent la ville chinoise, où se situent les légations assiégées depuis près de deux mois.",
        "Les alliés n'ayant pas respecté l'accord, les français furent donc floués. Frey apprend les combats de Pékin dans l'après-midi seulement. Il décide de partir sur le champ avec deux compagnies, celle de Verdont (9e) et celle de Marty (11e) et la 13e batterie de Julien. C'est à marche forcée qu'il arrive sous les murailles de la ville tartare, franchit l'enceinte sans combat et atteint la légation française à minuit.",
        "Dès le lendemain, le ratissage de la ville est entrepris, quartier par quartier. Au petit matin, toute la colonne française et le bataillon Brenot sont au complet dans Pékin, où les combats durent jusqu'au 17. Le 17 matin, toute résistance cesse."
      ],
      keyPoints: [
        "Tien Tsin : la clé opérationnelle (porte de la capitale).",
        "Pékin : l'enjeu politique (légations assiégées).",
        "Une campagne courte, mais lourde de symbole."
      ]
    },
    {
      id: "heritage",
      title: "Pourquoi c'est important pour le 9 ?",
      mode: 'comprendre',
      content: [
        "Il fut relevé et rapatrié sur Hanoï. Cette prestigieuse campagne où il laissa nombre de marsouins morts vaillamment valut au drapeau du régiment l'inscription de deux nouvelles batailles :",
        "— Tien Tsin 1900 ;",
        "— Pékin 1900."
      ],
      keyPoints: []
    }
  ],
  heritage: {
    text: "Il fut relevé et rapatrié sur Hanoï. Cette prestigieuse campagne où il laissa nombre de marsouins morts vaillamment valut au drapeau du régiment l'inscription de deux nouvelles batailles :",
    inscriptions: ["Tien Tsin 1900", "Pékin 1900"]
  },
  ordre: {
    intro: "Dès son arrivée, le colonel de Pelacot a rédigé son ordre général numéro un :",
    text: "Officiers, sous-officiers, caporaux, brigadiers et soldats, au moment de prendre le commandement du corps expéditionnaire du Pei Chi Li qui m'a été confié par le général commandant en chef des troupes de l'Indochine, je tiens à vous dire combien je suis fier de l'honneur qui m'est fait et à vous exprimer toute la confiance que j'ai dans votre valeur. Vous êtes appelés à combattre avec les troupes des principales armées du monde entier. N'oubliez pas que vous représentez la France et que par conséquent tous les yeux seront fixés sur vous.\n\nVous vous devez à vous-mêmes de jeter un dernier reflet d'héroïsme au moment où vont disparaître les noms d'infanterie et d'artillerie de marine qui se sont illustrés dans toutes les parties du monde.\n\nLes vertus du soldat sont le courage, la fermeté de caractère, la discipline, la tenue, la confiance en ses chefs. Le courage et la fermeté de caractère sont l'apanage du soldat français, nous n'en parlerons donc pas.\n\nJe ne saurais trop vous recommander la discipline et la tenue.\n\nNous allons nous trouver sous les yeux des soldats étrangers renommés pour ces vertus. Je suis sûr que vous tiendrez à l'honneur de les imiter. La confiance dans les chefs ne s'impose pas - vous les verrez à l'œuvre et vous les imiterez.\n\nJe compte sur vous d'une façon absolue ; de votre côté soyez certains que toute ma sollicitude vous est acquise.",
    signature: "Rade de Ta Kou le 7 juillet 1900\nLe colonel commandant le corps expéditionnaire du Pei Tchi Li.\nSigné : De Pelacot.",
    note: "Le 1er janvier 1900, les troupes de marine quittent la tutelle du Ministère de la Marine pour celle du Ministère de la Guerre. Les régiments d'Infanterie de Marine deviennent Régiment d'Infanterie Coloniale le 1er juillet 1900."
  },
  gallery: [
    { caption: "Carte des opérations en Chine — 1900.", alt: "Carte des opérations en Chine 1900" },
    { caption: "Plan de Tien Tsin — 1900.", alt: "Plan de Tien Tsin 1900" },
    { caption: "Plan de Pékin — portes, ville chinoise, ville tartare, légations.", alt: "Plan de Pékin 1900" },
    { caption: "Prise de Pékin par les Alliés (15 août 1900).", alt: "Prise de Pékin par les Alliés" },
    { caption: "Médaille commémorative de Chine.", alt: "Médaille commémorative de Chine" }
  ],
  glossary: [
    { term: "Boxers", def: "\"Sociétés\" hostiles aux occidentaux, protagonistes majeurs de la crise de 1900." },
    { term: "Légations", def: "Représentations diplomatiques étrangères (Pékin / Tien Tsin) assiégées en 1900." },
    { term: "Tien Tsin", def: "Ville-clef, rempart de la capitale impériale, important arsenal." },
    { term: "Ta Kou", def: "Rade/point d'arrivée du corps expéditionnaire." },
    { term: "Pei Ho", def: "Cours d'eau mentionné lors des manœuvres autour de la gare et des concessions." },
    { term: "Concessions", def: "Secteurs \"étrangers\" à protéger pendant l'opération." },
    { term: "Mélinite", def: "Munition demandée pour tenter d'agir sur les murailles." },
    { term: "Ratissage", def: "Action de fouille et de sécurisation, quartier par quartier." },
    { term: "Marche forcée", def: "Progression accélérée pour rejoindre la légation française à minuit." }
  ],
  quiz: [
    { question: "Quel mouvement cristallise l'explosion anti-occidentale ?", answer: "Les Boxers" },
    { question: "Quel symbole politique est attaqué et assiégé ?", answer: "Les légations" },
    { question: "Quand part le bataillon d'Hanoï ?", answer: "Nuit du 24 au 25 juin" },
    { question: "Quel événement marque le sommet de la campagne sur le plan opérationnel et politique ?", answer: "La chute de Tien Tsin" },
    { question: "Quel est l'enjeu politique à Pékin ?", answer: "Rejoindre et dégager les légations assiégées" },
    { question: "Quelles inscriptions sont ajoutées au drapeau ?", answer: "\"Tien Tsin 1900\" et \"Pékin 1900\"" }
  ],
  conclusion: "1900, c'est une crise internationale : la politique, les légations, puis l'intervention armée. Pour le 9, la trace est directe et durable : deux noms s'inscrivent au drapeau — Tien Tsin 1900 et Pékin 1900.",
  nextStep: "Continuer vers : \"ASIE — Stabilisation & troubles (1901–1914)\""
};
