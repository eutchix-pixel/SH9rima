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

export interface TraditionsDrapeauContent {
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

export const traditionsDrapeauData: TraditionsDrapeauContent = {
  title: "Drapeau",
  subtitle: "Symbole du régiment, le drapeau du 9e RIMa porte en lui l'histoire du 9e RIC et des marsouins qui se sont illustrés de la Crimée à la Guyane.",
  questionDirectrice: "Quelles batailles et quelles valeurs le drapeau du 9e RIMa rappelle‑t‑il et comment perpétue‑t‑il la mémoire des anciens marsouins ?",
  reperes: "1831 : création du 9e RIC, combats en Crimée, Cochinchine et Bazeilles • 1870 : bataille de Bazeilles, les marsouins se couvrent de gloire • 1914–1918 : citations et croix de guerre • 1992 : transfert du drapeau au 9e RIMa en Guyane, noms de Carli, Berthelin et Journet associés au drapeau.",
  resume: "Le drapeau du 9e RIMa est le dépositaire d'une longue histoire. Conçu au XIXᵉ siècle pour le 9e Régiment d'infanterie de marine, il porte les noms des campagnes où les marsouins se sont illustrés : Crimée, Cochinchine, Bazeilles, mais aussi Tonkin, Madagascar et les combats de la Première Guerre mondiale. Couvert de la croix de guerre 1914‑1918 et de citations, il symbolise la bravoure et l'abnégation des soldats coloniaux. En 1992, lors de la transformation du 9e BIMa en régiment, ce drapeau chargé d'histoire est transféré en Guyane. Les noms des capitaines Carli, Berthelin et Journet, héros tombés au combat, y sont désormais associés, rappelant que le sacrifice continue de nourrir l'identité du 9e RIMa.",
  timeline: [
    { date: "1831", description: "Création du 9e RIC — naissance du drapeau." },
    { date: "1870", description: "Bataille de Bazeilles — inscription du nom sur le drapeau." },
    { date: "1914–1918", description: "Première Guerre mondiale — obtention de la croix de guerre et de palmes pour citations." },
    { date: "1992", description: "Transfert du drapeau au 9e RIMa — adoption en Guyane et ajout des noms Carli, Berthelin, Journet." },
  ],
  blocs: [
    {
      titre: "Origines et décorations du drapeau",
      texte: "Le drapeau actuel du 9e RIMa est hérité du 9e régiment d'infanterie de marine, créé en 1831. Ses plis portent en lettres d'or les noms des grandes campagnes coloniales : Crimée (1854‑1856), Cochinchine (1859‑1862), Bazeilles (1870). Au fil des décennies, d'autres batailles s'y ajoutent, notamment celles de Tonkin et de Madagascar. Durant la Première Guerre mondiale, le régiment s'illustre sur la Somme et à Verdun ; il reçoit la croix de guerre 1914‑1918 avec palmes. Le drapeau porte également la devise « Au‑delà des mers » et l'ancre de la marine, rappelant l'appartenance du régiment à l'infanterie de marine et sa vocation d'outre‑mer.",
      aRetenir: [
        "Le drapeau est le témoin des campagnes coloniales et mondiales du 9e RIC.",
        "La croix de guerre et les palmes rappellent les citations obtenues au combat.",
        "L'ancre symbolise l'appartenance à l'infanterie de marine et la devise souligne l'engagement lointain.",
      ],
    },
    {
      titre: "Bazeilles : une mémoire vive",
      texte: "Parmi toutes les inscriptions, Bazeilles occupe une place particulière. En août 1870, lors de la guerre contre la Prusse, les marsouins du 9e RIC défendent le village de Bazeilles, près de Sedan. Ils se battent maison par maison, contre une force supérieure en nombre. Le sacrifice des officiers et des soldats retarde l'ennemi et permet au reste de l'armée de se replier. Chaque année, le 9e RIMa commémore Bazeilles en Guyane par une prise d'armes et une lecture de l'ordre du jour, rappelant à chaque marsouin le courage de ses aînés.",
      aRetenir: [
        "Bazeilles est un symbole de bravoure et de sacrifice.",
        "La commémoration annuelle perpétue l'esprit des combattants de 1870.",
        "Le drapeau est au centre de la cérémonie, rappelant la continuité historique.",
      ],
    },
    {
      titre: "Le transfert du drapeau en Guyane et les héros de la France libre",
      texte: "Lorsque le 9e BIMa devient régiment d'infanterie de marine en 1992, il reçoit officiellement le drapeau du 9e RIC. Ce transfert marque la continuité entre les régiments métropolitains et guyanais. Trois noms sont liés à ce drapeau : Jean Carli, capitaine tué en Indochine en 1946 ; Bernard Berthelin, capitaine tombé en Algérie en 1957 ; Robert Journet, capitaine disparu lors d'une patrouille en Kabylie en 1959. Leur mémoire est entretenue par des plaques commémoratives au quartier Loubère et par les cérémonies régimentaires.",
      aRetenir: [
        "Le drapeau du 9e RIMa est transféré en Guyane en 1992.",
        "Les noms de Carli, Berthelin et Journet symbolisent l'engagement des officiers de la France libre.",
        "Les plaques commémoratives au quartier Loubère perpétuent leur mémoire.",
      ],
    },
  ],
  glossaire: [
    { terme: "Drapeau", definition: "Emblème porté par un régiment, sur lequel sont inscrits ses titres de gloire et ses décorations." },
    { terme: "Croix de guerre", definition: "Décoration française attribuée pour faits d'armes pendant les conflits mondiaux, accompagnée de palmes ou d'étoiles selon le nombre de citations." },
    { terme: "Bazeilles", definition: "Village des Ardennes où les marsouins se battirent héroïquement le 31 août 1870." },
    { terme: "Carli, Berthelin, Journet", definition: "Capitaines du 9e RIC/9e RIMa morts au combat, dont la mémoire est associée au drapeau." },
  ],
  quiz: [
    {
      question: "De quel régiment le 9e RIMa a‑t‑il hérité son drapeau ?",
      options: ["1er RIC", "9e RIC", "3e REI", "2e RIMa"],
      correctIndex: 1,
    },
    {
      question: "Quelle bataille emblématique est inscrite en lettres d'or sur le drapeau du régiment ?",
      options: ["Verdun", "Bazeilles", "Trafalgar", "Valmy"],
      correctIndex: 1,
    },
    {
      question: "En quelle année le drapeau a‑t‑il été transféré en Guyane au 9e RIMa ?",
      options: ["1962", "1976", "1992", "2008"],
      correctIndex: 2,
    },
  ],
};
