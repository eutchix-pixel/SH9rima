export interface SiberieContent {
  title: string;
  subtitle: string;
  question: string;
  reperes: { date: string; label: string }[];
  contexte: {
    text: string[];
    keyPoints: string[];
  };
  resume: string;
  recitIntro: string;
  texteSource: string[];
  citation: string;
  binhLieu: {
    title: string;
    subtitle: string;
    resume: string;
    texteSource: string[];
    keyPoints: string[];
  };
  pertes: string;
  glossary: { term: string; def: string }[];
  gallery: { caption: string; alt: string }[];
  quiz: { question: string; answer: string }[];
  conclusion: string;
  nextStep: string;
}

export const siberieData: SiberieContent = {
  title: "Sibérie (1918–1919) — L'épopée du bataillon colonial sibérien",
  subtitle: "Fin de Grande Guerre : révolution, guerre civile, alliances mouvantes. En Extrême‑Orient russe, Vladivostok et le Transsibérien deviennent des leviers géopolitiques.",
  question: "Pourquoi des marsouins quittent-ils Hanoï pour Vladivostok, et comment une opération « loin d'Europe » devient-elle une affaire de logistique, d'alliances et d'influence ?",
  reperes: [
    { date: "24 juil. 1917", label: "Embarquement sur le vapeur « André Lebon » (direction Vladivostok)" },
    { date: "30 juin 1918", label: "Dietrich se saisit de Vladivostok et alerte l'Occident" },
    { date: "9 août 1918", label: "Arrivée à Vladivostok (détachement de 1 136 hommes)" },
    { date: "15–19 août 1918", label: "Offensive bolchévique" },
    { date: "23–24 août 1918", label: "Attaque à Doukoskoïe ; repli, contre‑attaque japonaise" },
    { date: "1er oct. 1918", label: "Début de l'avance vers l'ouest" },
    { date: "21 nov. 1918", label: "Arrivée à Ourfa" },
    { date: "11 janv.–3 mars 1919", label: "Séjour à Tchéliabinsk" },
    { date: "16 juil.–14 sept. 1919", label: "Retour vers Vladivostok" },
    { date: "4 mars 1920", label: "Retour à Tien Tsin ; disparition du bataillon" },
  ],
  contexte: {
    text: [
      "1917–1919 : la Russie bascule. La fin de la guerre mondiale ne signifie pas la fin des crises : révolution, désorganisation de l'État, guerre civile, et compétition d'influences. Dans ce type de choc, les points d'entrée comptent : un port (Vladivostok) et un axe (le Transsibérien) peuvent décider de la capacité à déplacer des hommes, des armes et du pouvoir.",
      "L'intervention alliée en Extrême‑Orient russe se lit donc comme une géopolitique des axes : sécuriser un point d'appui maritime ; contrôler ou protéger une ligne de communication ; gérer des forces en mouvement (dont les troupes tchécoslovaques mentionnées dans le récit ci‑dessous).",
      "(Parenthèse : en Sibérie, « tenir un axe » peut peser autant que « gagner un combat ».)"
    ],
    keyPoints: [
      "Théâtre immense : la logistique devient politique.",
      "Port + rail = capacité d'action.",
      "Alliances : coopération… mais intérêts parfois divergents."
    ]
  },
  resume: "Le récit qui suit raconte une expédition hors‑normes : des marsouins quittent Hanoï pour Vladivostok, dans une mission liée au retour des troupes tchécoslovaques et à la lutte contre le bolchévisme. Le Transsibérien structure tout : les déplacements, la manœuvre, et la tenue du front. L'hiver, l'isolement et les distances imposent une endurance extrême.",
  recitIntro: "Lis cette page comme un « film » en trois actes :\n\nACTE 1 — Départ (Hanoï → Vladivostok)\nACTE 2 — Le front (voie ferrée, positions, attaques)\nACTE 3 — L'axe Transsibérien (avance vers l'ouest, hiver, retour)",
  texteSource: [
    "Qui aurait imaginé quitter sa douce garnison d'Hanoï pour débarquer un beau jour en Sibérie, traverser ses plaines immenses et froides, longer l'Amour puis à partir du Baïkal, se remémorer Jules Vernes contant les aventures de Michel Strogoff au gré des villes de Krasnoïark, Tomsk, Omsk, les monts Oural, Tchéliabink, Ourfa ?",
    "Certes pas les 228 marsouins de la 1re compagnie du lieutenant Desaille ou les 226 marsouins de la 8e compagnie du capitaine Schill qui, un certain 24 juillet 1917, s'embarquèrent sur le vapeur « André Lebon », direction Vladivostok. Car ce sont bien eux qui partirent dans cette lointaine contrée.",
    "Cette intervention a deux buts : faciliter le retour des troupes tchécoslovaques qui combattaient l'Allemand au côté des Russes vers Vladivostok par le transsibérien, et lutter contre le bolchévisme.",
    "Quel est donc cet imbroglio ? En Russie, combattait aux côtés des troupes du Tsar une division tchécoslovaque. En 1917, sous Kerensky, cette division extrêmement soudée et motivée avait eu, sous les ordres du général Broussilov, une conduite héroïque, prenant 35 canons et faisant 6 000 prisonniers. La deuxième division était prête à être engagée, une troisième était en formation. La révolution bolchévique ne sut qu'en faire. La mission militaire française à Moscou entreprit de les rapatrier vers la France pour les réengager contre les Allemands. La voie d'évacuation choisie fut Vladivostok par le Transsibérien. Kerensky, mais aussi les bolchéviks laissèrent faire. Les premières unités atteignirent Vladivostok et furent embarquées.",
    "Mais l'accord de paix de Brest-Litovsk en mars 1918, arrêtant les hostilités entre les Russes et les Allemands, relança l'affaire tchèque. Les Allemands demandèrent en effet le désarmement de ces troupes. Les Tchèques refusèrent et Trotsky ordonna le désarmement par la force. Les Tchèques, habitués à combattre, prirent les armes et s'emparèrent de villes et d'installations situées le long du Transsibérien. Le 30 juin 1918, Dietrich se saisit de Vladivostok.",
    "Entre temps, une intervention internationale a été décidée.",
    "En juillet, le chef de bataillon Mallet regroupe sous ses ordres les deux compagnies du 9e RIC, deux compagnies du 16e RIC (capitaine Desaille et de Vaux), et une compagnie du 3e Zouaves (capitaine Feneurstein). A Shangaï, un détachement serbe de deux officiers et dix-sept hommes est rattaché au bataillon. Le 4 août le vapeur fait escale à Takou (Chine) et embarque les unités du 16e RIC. C'est un détachement de 1136 hommes qui atteint Vladivostock le 9 août.",
    "A peine arrivé, le bataillon reçoit l'ordre de rejoindre le front de l'Oussourik à Kraïevski. Mallet divise ses troupes en deux groupes : le premier aux ordres du capitaine Feneurstein avec les deux compagnies du 16e RIC et une du 3e Zouaves, le second aux ordres du capitaine Schill, avec les deux compagnies du 9e RIC et deux sections de mitrailleuses.",
    "Le 10 août, les groupes partent vers leurs positions, atteintes le 13. A peine installés, ils subissent une offensive bolchévique du 15 au 19, faites de tirs d'artillerie, de manœuvres dilatoires et d'escarmouches. En fait, le bataillon subit son épreuve du feu sans réellement combattre. Dans la nuit, un coup de main bolchévique sur le poste de commandement russe (cosaques du Tsar) gardé entre autres par une douzaine de français provoque la disparition de 4 Zouaves.",
    "Le 20, le groupe Schill prend le train pour la ville de Doukovskoïe afin de stopper l'avance bolchévique. Le groupe Feneurstein le rejoint. La manœuvre générale est articulée autour de la voie ferrée. Les troupes tchèques, japonaises et anglaises prennent position aux côtés des Français. Un prisonnier bolchévik informe le commandant Mallet de l'imminence d'une attaque avec des forces évaluées à 4500 hommes.",
    "Celle-ci se déclenche le 23 août à 5 h 00 du matin. Le groupe Schill reçoit la première vague d'assaut mais il est évident qu'il ne pourra tenir longtemps, sa position de pointe le rend vulnérable. Ordre lui est donné de se replier sur les lisières de Doukoskoïe, sur sa position de rechange. Là, l'ensemble du bataillon a pour mission de défendre. Le 24, la contre-attaque est déclenchée et réalisée avec succès par le détachement japonais. L'affaire nous coûte deux tués et dix blessés.",
    "L'avance vers l'ouest a débuté le 1er octobre. Auparavant, les tirailleurs tonkinois ont été regroupés en une compagnie destinée à garder la zone maritime de Vladivostock.",
    "Le bataillon est rejoint le 9 octobre par une batterie coloniale sibérienne, forte de 175 hommes des 4e et 5e RAC d'Indochine.",
    "Le train traverse Kharbine, Tchita, Irkoutsk, Omsk, Tcheliabinsk, et atteint Ourfa le 21 novembre 1918, sans combat. Le seul incident a lieu à Blelia le 2 novembre où l'explosion d'un train de munitions tue trois zouaves. Le bataillon y demeure jusqu'au 10 janvier 1919.",
    "Il séjourne à Tchéliabinsk du 11 janvier au 3 mars 1919. Pendant cette période, les mesures de démobilisation ont touché 6 officiers et 543 sous-officiers et soldats.",
    "Jusqu'au 15 juillet, le bataillon, du moins ce qu'il en reste, escorte les convois d'armes et de munitions sur le transsibérien. Son retour vers Vladivostok débute le 16 juillet, pour l'atteindre le 14 septembre 1919. Il y demeure jusqu'au 14 février 1920.",
    "Son aventure se termine à son retour à Tien Tsin le 4 mars 1920 où il disparaît. (la dissolution du bataillon avait été décidée le 4 mars 1919 et ses hommes rattachés au 16e RIC).",
    "Au total, le bataillon a subi les pertes suivantes : 5 tués, 16 blessés, 5 disparus, 5 morts à la suite de blessures, 6 morts de maladie et il enregistre 25 cas de gelures de pied.",
    "C'est avec courage et détermination que le bataillon vécut cette épopée, isolé dans l'immensité russe, sous le climat rude d'hiver où les températures vont de - 30 à - 50° C, bien loin des douceurs indochinoises !",
    "L'origine du fanion est inconnue. Ce dernier comporte d'ailleurs une anomalie mystérieuse dans sa mention « 1914 - 1919 »."
  ],
  citation: "Le détachement français de Sibérie a, dès son débarquement en Sibérie orientale (août 1918), sous le commandement du chef de bataillon Mallet, pris une part active et brillante aux opérations des troupes tchécoslovaques et japonaises.\n\nTransporté par le transsibérien sur le front de Russie orientale, a coopéré efficacement avec l'armée sibérienne.\n\nPendant toutes ces opérations exécutées dans des conditions matérielles et morales extrêmement pénibles par suite de la rigueur du climat sibérien et de l'éloignement de la mère patrie, a montré une endurance à toute épreuve et un inébranlable moral. A ainsi représenté dignement l'armée française au milieu des autres contingents étrangers.\n\nHommage aux officiers, sous-officiers et hommes de troupe du bataillon colonial sibérien.",
  pertes: "5 tués, 16 blessés, 5 disparus, 5 morts à la suite de blessures, 6 morts de maladie, 25 cas de gelures de pied.",
  binhLieu: {
    title: "Les révoltés de Binh Lieu (14 novembre 1918 – 20 juin 1919)",
    subtitle: "Une crise de sécurité sur un territoire frontalier : mutinerie, poursuite, et effet d'aimant de la proximité chinoise.",
    resume: "Insurrection de tirailleurs chinois, puis une opération longue (sept mois) rendue plus difficile par la frontière : refuge, soutien et jonction avec des bandes pirates.",
    texteSource: [
      "Dans la nuit du 14 au 15 novembre 1918, le chef de bataillon Averlault, commandant le 1er territoire militaire dont le siège est à Moncay, est averti de l'imminence d'une révolte des tirailleurs chinois des postes de Binh Deu, Ham No, Tien Yen, Ho Coi et Dam Ha. L'arrestation d'un caporal, le meneur, déclenche l'insurrection. Quatre-vingt tirailleurs s'emparent du poste de Binh-Lieu, volent les armes et s'enfuient.",
      "L'enquête mettra en évidence que ce sont des Allemands qui imaginèrent cette rébellion dès septembre 1918. Mais la fin de la guerre prit de court les initiateurs comme les acteurs.",
      "Rapidement, les renforts du Tonkin rejoignent la zone où près de 1 000 hommes se regroupent. Le 9e RIC fournit les 4e, 6e, 7e et 8e compagnies avec des sections de mitrailleuses. Le reste provient des 2e, 3e et 4e RTT, renforcé de miliciens et de sections d'artillerie de montagne.",
      "Sept mois sont nécessaires aux Français pour mettre à genoux les mutins. En effet, la proximité de la Chine leur procure non seulement sécurité et repos, mais aussi un soutien logistique et humain car vont se joindre à eux dans leurs exactions les bandes pirates chinoises.",
      "Le commandant Masse commande les opérations tactiques. Du 25 novembre au 3 décembre, de longues et dures marches sont ponctuées par de violents combats. La 7e compagnie du 9e RIC, du capitaine Mevel, rayonne à partir du col de Long Tu, et accroche les insurgés à Hoang Vau et Mi Dao.",
      "On croit la bande définitivement évanouie lorsqu'elle tombe en embuscade à Ping Ho le 22 décembre, où elle est disloquée.",
      "Le 7 janvier, le colonel Veron prend le commandement des opérations.",
      "Face aux pillages incessants, il réorganise ses forces en cinq groupes mobiles. Le jeu de cache-cache dure jusqu'au 20 février 1919 où la bande est décimée à Duong Ha et dont le reliquat s'enfuit en Chine. Du 1er au 10 mars, le commandant Plailly (ancien du 9e RIMa, lieutenant lors de l'expédition du Siam en 1893) décèle les rebelles devenus pirates à part entière à Than Son. Il les débusque dans les contreforts du massif du Ha Chan Son où ils se sont réfugiés. Appuyés par les mitrailleuses, les marsouins hachent la bande qui se réfugie dans des abrupts imprenables, profitant ensuite de la nuit pour fuir.",
      "Les opérations se poursuivent sous le commandement du général Nogues à compter du 11 mars. A cette date, les unités du 9 ont été retirées à l'exception de la 4e Compagnie, avec 3 pelotons uniquement, sur un effectif total de 2000 hommes. Elle participe au bouclage du massif du Quang Yen le long de la frontière chinoise. Un point final à cette opération est mis le 20 juin 1919."
    ],
    keyPoints: [
      "Frontière : refuge et soutien (logistique/humain).",
      "Opération longue : sept mois.",
      "Le 9e RIC fournit plusieurs compagnies et sections de mitrailleuses."
    ]
  },
  glossary: [
    { term: "Brest‑Litovsk", def: "Traité de 1918 marquant la sortie de la Russie de la guerre." },
    { term: "Bolcheviks", def: "Mouvement politique qui prend le pouvoir en Russie et cherche à consolider l'État." },
    { term: "Transsibérien", def: "Axe ferroviaire structurant la mobilité et l'autorité en Sibérie." },
    { term: "Vladivostok", def: "Port d'entrée et point d'appui en Extrême‑Orient russe." },
    { term: "Légions Tchécoslovaques", def: "Division tchécoslovaque combattant aux côtés des Russes, cherchant à rejoindre la France via Vladivostok." },
    { term: "Dietrich", def: "Commandant tchécoslovaque qui s'empare de Vladivostok le 30 juin 1918." },
    { term: "André Lebon", def: "Vapeur sur lequel le bataillon embarque depuis Hanoï." },
    { term: "Bataillon de marche", def: "Unité constituée spécialement pour l'opération en Sibérie." },
    { term: "Chef de bataillon Mallet", def: "Commandant du bataillon colonial sibérien." },
    { term: "Ourfa", def: "Zone de front et point d'arrêt extrême de la progression vers l'ouest." },
    { term: "Tchéliabinsk", def: "Ville de l'Oural, étape de séjour du bataillon." },
    { term: "Binh Lieu", def: "Poste du 1er territoire militaire (Tonkin), théâtre de l'insurrection de nov. 1918." },
    { term: "RTT", def: "Régiment de Tirailleurs Tonkinois." },
  ],
  gallery: [
    { caption: "Croquis permettant de suivre les déplacements du bataillon en Sibérie.", alt: "Carte / croquis des déplacements du bataillon en Sibérie." },
    { caption: "Tirailleur Tonkinois", alt: "Dessin d'un tirailleur tonkinois." },
    { caption: "Capitaine Front d'Ourfa — Hiver 1918-1919", alt: "Dessin d'un capitaine au front d'Ourfa, hiver 1918-1919." },
    { caption: "Fanion (photo / illustration)", alt: "Image d'un fanion associé au bataillon." },
    { caption: "CITATION (encadré)", alt: "Encadré de citation officielle du bataillon colonial sibérien." },
    { caption: "Région de Binh Lieu", alt: "Carte de la région de Binh Lieu / Binh Lien." },
  ],
  quiz: [
    { question: "L'intervention en Sibérie est présentée comme ayant deux buts : lesquels ?", answer: "Faciliter le retour des troupes tchécoslovaques vers Vladivostok par le transsibérien, et lutter contre le bolchévisme." },
    { question: "Quel axe structure la manœuvre et les déplacements ?", answer: "La voie ferrée / le transsibérien." },
    { question: "À quelle date le détachement atteint‑il Vladivostok (selon le texte) ?", answer: "Le 9 août." },
    { question: "Quelles conditions marquent fortement l'épopée ?", answer: "L'isolement, les distances et le climat sibérien (jusqu'à −30/−50 °C)." },
    { question: "Quel bilan de pertes est donné dans le texte ?", answer: "5 tués, 16 blessés, 5 disparus, 5 morts à la suite de blessures, 6 morts de maladie, 25 cas de gelures de pied." },
    { question: "Qu'obtient le bataillon par ordre du ministre de la guerre (30 avril 1919) ?", answer: "Une citation à l'ordre de l'armée (insérée au J.O.R.F. le 24 juin 1919)." },
  ],
  conclusion: "La Sibérie, à la fin de la Grande Guerre, est un test de puissance : distance, logistique, influence, coalition. Le bataillon colonial sibérien a vécu cette épopée avec courage et détermination, isolé dans l'immensité russe, sous un climat de −30 à −50 °C, bien loin des douceurs indochinoises.",
  nextStep: "Continuer vers : ASIE — Les Années Heureuses"
};
