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
  options: string[];
  correctIndex: number;
}

export interface GuyaneDebutsContent {
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

export const guyaneDebutsData: GuyaneDebutsContent = {
  title: "Guyane — Débuts",
  subtitle: "Au confluent de l'Amérique du Sud et de l'Europe, l'histoire de Cayenne mêle légende amérindienne, colonisation et renaissance d'un bataillon. Des origines mythiques à la recréation du 9e BIMa en 1976, cette page raconte la genèse du régiment en Guyane.",
  questionDirectrice: "Comment la légende de Cépérou et l'histoire coloniale de Cayenne ont‑elles préparé le terrain pour la renaissance du 9e BIMa en Guyane en 1976 ?",
  reperes: "1638 : les Européens achètent le terrain à Cépérou et construisent un fort en bois • 1870 : le quartier Loubère devient la nouvelle caserne de Cayenne • 1962 : dissolution du centre d'instruction du 9e RIMa à Nantes • 1er septembre 1976 : recréation du 9e BIMa en Guyane • Octobre 1976 : première mission de présence sur le Maroni • 1976 : conception du nouvel insigne (ancre et chiffre 9).",
  resume: "La Guyane militaire trouve ses racines dans une légende amérindienne : Cépérou, roi d'un petit peuple, aurait vendu la colline qui porte son nom aux Européens en 1638. Les colons y construisent un fort en bois puis en pierre, autour duquel naît Cayenne. Au XIXᵉ siècle, le quartier Loubère devient la caserne principale et les marsouins y perpétuent la tradition marine. Dissous en 1962, le centre d'instruction du 9e RIMa renaît en Guyane le 1ᵉʳ septembre 1976 sous la forme du 9e BIMa. Dès octobre, le bataillon envoie un détachement permanent à Saint‑Jean du Maroni et lance sa première mission de présence sur le fleuve. L'insigne est redessiné : une ancre dorée, le chiffre 9 et la forêt guyanaise.",
  timeline: [
    { date: "1638", description: "Vente de la colline de Cépérou aux colons — les Européens construisent un fort en bois." },
    { date: "1870", description: "Quartier Loubère — construction de la nouvelle caserne à Cayenne." },
    { date: "1962", description: "Dissolution du centre d'instruction du 9e RIMa — fin temporaire du régiment." },
    { date: "1er septembre 1976", description: "Création du 9e BIMa — le bataillon renaît à Cayenne." },
    { date: "Octobre 1976", description: "Première mission sur le Maroni — installation du détachement permanent à Saint‑Jean et patrouille fluviale." },
    { date: "1976–1977", description: "Adoption du nouvel insigne — combinaison de l'ancre dorée et du chiffre 9." },
  ],
  blocs: [
    {
      titre: "La légende de Cépérou et la naissance de Cayenne",
      texte: "Au cœur de la colline surplombant Cayenne, une légende amérindienne raconte l'histoire du roi Cépérou. Dans les années 1630, ce chef autochtone aurait vendu aux Européens le terrain où s'élèvera un fort en bois. Rapidement remplacé par une forteresse en pierre, le fort Cépérou devient le pivot de la défense de la colonie. Autour de lui, la ville de Cayenne se développe, et la présence militaire s'ancre durablement sur l'île : les troupes de la marine y tiennent garnison pendant deux siècles. En 1870, le quartier Loubère est construit pour abriter les troupes de marine ; il restera en service jusqu'au XXᵉ siècle.",
      aRetenir: [
        "La légende de Cépérou symbolise la rencontre entre peuples autochtones et colons.",
        "Le fort Cépérou assure la défense de Cayenne et attire une garnison permanente.",
        "La caserne Loubère incarne la continuité des troupes de marine en Guyane.",
      ],
    },
    {
      titre: "La recréation du 9e BIMa en 1976",
      texte: "Après la dissolution du centre d'instruction du 9e RIMa à Nantes en 1962, seul subsiste un détachement chargé de maintenir la tradition du régiment. Au milieu des années 1970, les autorités civiles et militaires lancent le « plan vert » et le développement du Centre Spatial Guyanais. Pour soutenir ces projets et protéger la frontière, la France décide de recréer un bataillon d'infanterie en Guyane. Le 1ᵉʳ septembre 1976, le 9e BIMa renaît à Cayenne. Son insigne est redessiné : une ancre dorée, le chiffre 9 et la forêt guyanaise rappellent à la fois les traditions de la marine et l'ancrage amazonien du bataillon.",
      aRetenir: [
        "La recréation du 9e BIMa répond aux besoins stratégiques du plan vert et du Centre Spatial.",
        "Le choix du 9e perpétue la mémoire du bataillon de la France libre.",
        "L'insigne combine tradition (ancre) et identité guyanaise (forêt, fleuve).",
      ],
    },
    {
      titre: "Premières missions sur le Maroni",
      texte: "Quelques semaines après sa création, le bataillon s'installe sur la rive occidentale. En octobre 1976, le commandant Desmottes envoie un détachement permanent à Saint‑Jean du Maroni, l'ancienne base du camp de déportation. Aux ordres du lieutenant Leszczynsky, quatre sous‑officiers et 37 marsouins occupent le site et prennent possession de 12 pirogues. Le 15 octobre, ils lancent la première mission de présence sur le Maroni, qui dure vingt jours. Leur objectif : reconnaître le fleuve, nouer des contacts avec les populations riveraines et apprendre les gestes de survie en milieu équatorial.",
      aRetenir: [
        "La mission de présence d'octobre 1976 marque l'entrée du 9e BIMa dans la jungle.",
        "Saint‑Jean du Maroni devient la base avancée du régiment sur la frontière.",
        "Les pirogues symbolisent l'adaptation du bataillon à l'environnement fluvial.",
      ],
    },
    {
      titre: "Transmission et traditions",
      texte: "En recréant un bataillon en Guyane, les autorités entendent aussi transmettre un patrimoine immatériel. Le 9e BIMa reprend le flambeau des troupes coloniales et se souvient des marsouins qui ont écrit son histoire : Jean Carli, Berthelin et Journet, tombés pour la France libre. L'Amicale des Anciens du 9e perpétue cette mémoire et participe à la remise du nouvel insigne aux recrues lors de la première cérémonie des couleurs. Dès les premières années, le bataillon participe aux défilés de Cayenne, aux cérémonies du 14 juillet et aux festivités du carnaval, créant un lien fort avec la population locale.",
      aRetenir: [
        "La mémoire des anciens relie le 9e RIMa métropolitain à son homologue guyanais.",
        "Cérémonies et symboles (insigne, pagode) renforcent l'identité régimentaire.",
        "L'ancrage local (défilés, carnaval) ouvre le régiment à la société guyanaise.",
      ],
    },
  ],
  glossaire: [
    { terme: "Cépérou", definition: "Colline dominant Cayenne où les colons bâtissent un fort au XVIIᵉ siècle." },
    { terme: "Quartier Loubère", definition: "Caserne historique de Cayenne, construite en 1870 pour abriter les troupes de marine." },
    { terme: "Plan vert", definition: "Programme de développement lancé dans les années 1970 pour moderniser la Guyane et soutenir le Centre Spatial." },
    { terme: "Pirogue", definition: "Embarcation légère utilisée pour naviguer sur le Maroni et ses affluents." },
    { terme: "Détachement de Saint‑Jean du Maroni", definition: "Base avancée du 9e BIMa sur la frontière avec le Suriname." },
  ],
  quiz: [
    {
      question: "Quelle légende est à l'origine du nom « Cépérou » ?",
      options: ["La bataille de Bazeilles", "Un roi amérindien vendant une colline aux colons", "Un chef harki", "Le commandant Desmottes"],
      correctIndex: 1,
    },
    {
      question: "En quelle année le 9e BIMa a‑t‑il été recréé en Guyane ?",
      options: ["1962", "1970", "1976", "1982"],
      correctIndex: 2,
    },
    {
      question: "Quelle est la principale mission des premières patrouilles sur le Maroni en 1976 ?",
      options: ["Construire le Centre Spatial", "Installer des bases de mines d'or", "Recenser le fleuve et établir une présence", "Combattre la guérilla bushinengué"],
      correctIndex: 2,
    },
    {
      question: "Quel symbole domine le nouvel insigne du 9e BIMa créé en 1976 ?",
      options: ["Une étoile rouge", "Une ancre dorée et le chiffre 9", "Une fusée spatiale", "Un jaguar noir"],
      correctIndex: 1,
    },
  ],
};
