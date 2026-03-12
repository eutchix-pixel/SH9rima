export interface TimelineEvent { date: string; description: string; }
export interface ContentBloc { titre: string; texte: string; aRetenir: string[]; }
export interface GlossaryEntry { terme: string; definition: string; }
export interface QuizQuestion { question: string; options: string[]; correctIndex: number; }

export const traditionsInsignesData = {
  title: "Insignes",
  subtitle: "À travers ses insignes successifs, le 9e régiment d'infanterie de marine raconte son histoire, mêlant traditions d'outre‑mer et ancrage amazonien.",
  questionDirectrice: "Comment les insignes du 9e RIMa ont‑ils évolué et que disent‑ils de l'identité du régiment entre mer et forêt ?",
  reperes: "1956 : insigne du 9e RIC en Algérie, ancre dorée surmontée du chiffre 9 avec croissant et étoile • 1976 : le commandant Desmottes conçoit un insigne combinant ancre et « 9 » stylisé avec la forêt amazonienne • 1992 : reprise de l'insigne de 1976 avec ajout du nom « Guyane ».",
  resume: "L'insigne est l'identité visuelle du régiment. Il change au gré des théâtres d'opérations et des mutations. Dans les années 1950, le 9e RIC d'Algérie arbore une ancre dorée entourée d'un croissant et d'une étoile. Avec la recréation du 9e BIMa en 1976, le commandant Desmottes crée un insigne original : une ancre stylisée, le chiffre 9 en forme de pirogue et une pointe évoquant la forêt amazonienne. Lorsque le régiment devient 9e RIMa en 1992, l'insigne est conservé et complété par la mention « Guyane ». Aujourd'hui, chaque recrue reçoit cet insigne lors de sa première prise d'armes.",
  timeline: [
    { date: "1956", description: "Insigne du 9e RIC — ancre, croissant et étoile." },
    { date: "1976", description: "Création du 9e BIMa — insigne avec ancre et 9 stylisé en pirogue et forêt." },
    { date: "1992", description: "Transformation en 9e RIMa — ajout de « Guyane » et modernisation des couleurs." },
  ] as TimelineEvent[],
  blocs: [
    {
      titre: "L'insigne du 9e RIC (1956)",
      texte: "Lors de la guerre d'Algérie, le 9e RIC adopte un insigne en forme d'écusson. Sur fond bleu marine se détache une ancre d'or, emblème des troupes de marine. Au centre de l'ancre se trouve le chiffre 9 stylisé. Un croissant et une étoile en émail blanc et vert rappellent la présence en Afrique du Nord. L'insigne porte la devise « Il est de tradition de se battre jusqu'au bout », soulignant l'esprit de sacrifice des marsouins. Cet insigne est porté jusqu'à la dissolution du régiment en 1962.",
      aRetenir: [
        "L'insigne de 1956 associe l'ancre de marine à des symboles nord‑africains.",
        "Il témoigne de la présence du 9e RIC en Algérie.",
        "La devise rappelle la détermination des marsouins.",
      ],
    },
    {
      titre: "Création de l'insigne du 9e BIMa (1976)",
      texte: "Avec la recréation du 9e BIMa en Guyane, il faut un insigne qui reflète ce nouvel environnement. Le commandant Desmottes, chef de corps, dessine un motif original. Une ancre de marine en métal doré occupe le centre. Le chiffre 9 y est intégré de manière stylisée : sa courbe évoque une pirogue et sa barre supérieure s'allonge pour dessiner la ligne horizontale d'une forêt. À la pointe, un triangle vert rappelle le sommet des arbres de la canopée. L'insigne est réalisé par un artisan local et porte la devise « Et au besoin… au bout du monde ».",
      aRetenir: [
        "L'insigne de 1976 est conçu par le commandant Desmottes.",
        "Le chiffre 9 stylisé évoque une pirogue et la forêt.",
        "La devise souligne la disponibilité des marsouins à servir loin.",
      ],
    },
    {
      titre: "Adaptation et continuité (1992 et après)",
      texte: "En 1992, le 9e BIMa devient le 9e RIMa. L'insigne de 1976 est conservé, mais la banderole porte désormais le mot « Guyane ». Les couleurs sont légèrement modernisées et la fabrication est confiée à la Monnaie de Paris. L'insigne est distribué aux recrues lors de leur première prise d'armes et reste porté sur la poitrine gauche de la tenue de combat et sur la casquette de la tenue de sortie. Il rappelle aux marsouins leurs racines marines et leur mission guyanaise. Des déclinaisons existent pour les compagnies et les unités spécialisées, reprenant les mêmes codes visuels.",
      aRetenir: [
        "L'insigne de 1976 est adapté en 1992 avec la mention « Guyane ».",
        "Il est distribué à chaque nouvelle recrue.",
        "Les déclinaisons pour les unités reprennent les mêmes codes (ancre, chiffre 9).",
      ],
    },
  ] as ContentBloc[],
  glossaire: [
    { terme: "Insigne", definition: "Symbole métallique porté sur l'uniforme, représentant l'identité d'un régiment ou d'une unité." },
    { terme: "Ancre", definition: "Symbole des troupes de marine, héritage de leur origine navale." },
    { terme: "Pirogue", definition: "Embarcation traditionnelle utilisée sur les fleuves de Guyane, évoquée par le chiffre 9 stylisé." },
    { terme: "Devise", definition: "Phrase courte exprimant l'esprit du régiment (« Et au besoin… au bout du monde »)." },
  ] as GlossaryEntry[],
  quiz: [
    { question: "Quel symbole figure au centre de l'insigne du 9e RIMa ?", options: ["Un coq", "Une ancre", "Une grenade", "Un palmier"], correctIndex: 1 },
    { question: "Quel élément du nouvel insigne créé en 1976 évoque la forêt amazonienne ?", options: ["Le croissant", "La courbe du chiffre 9 stylisée", "La croix de guerre", "Le soleil"], correctIndex: 1 },
    { question: "Lors de la transformation du 9e BIMa en 9e RIMa, quel mot est ajouté à l'insigne ?", options: ["France", "Marine", "Guyane", "Bazeilles"], correctIndex: 2 },
  ] as QuizQuestion[],
};
