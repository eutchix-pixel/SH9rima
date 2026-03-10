export interface TimelineEvent {
  date: string;
  titre: string;
  detail: string;
}

export interface QuizQuestion {
  question: string;
  reponse: string;
}

export interface TourmenteContent {
  title: string;
  subtitle: string;
  accroche: string;
  resume: string;
  aRetenir: string[];
  timeline: TimelineEvent[];
  sections: {
    etatDesLieux: {
      titre: string;
      organisation: string[];
      armement: string[];
      dmb: string;
    };
    agression1940: {
      titre: string;
      texte: string;
      naCham: {
        titre: string;
        texte: string;
        bilan: string;
      };
    };
    guerreThai: {
      titre: string;
      texte: string;
      consequences: string;
    };
    coupDeForce: {
      titre: string;
      texte: string;
      pertes: string;
      captivite: string;
    };
    guerilla: {
      titre: string;
      guerillaReul: string;
      colonneAlessandri: string;
    };
    retour: {
      titre: string;
      yenShan: string;
      reconquete: string;
      drapeauSauve: string;
      dissolution: string;
    };
  };
  quiz: QuizQuestion[];
  nextStep: string;
}

export const tourmenteData: TourmenteContent = {
  title: "La Tourmente — 1940–1946",
  subtitle: "Le 9e RIC face au Japon, de la défense du Tonkin à la dissolution du régiment.",
  accroche: "Six ans de guerre, de résistance et de captivité — le chapitre le plus sombre de l'histoire du régiment.",
  resume: `En 1940, le 9e RIC est stationné à Hanoï avec trois bataillons. Le 22 septembre, la 5e Division japonaise envahit la frontière de Lang Son. À Na Cham, la 10e Compagnie du capitaine Carli inflige plus de 1 000 pertes à l'ennemi. En 1941, le régiment combat aussi les Thaïlandais au Cambodge. Le 9 mars 1945, les Japonais lancent un coup de force sur la Citadelle de Hanoï : 200 tués côté français, les survivants sont internés à Hoa Binh. Des éléments mènent la guérilla, d'autres rejoignent la Chine avec la colonne Alessandri. En 1946, le bataillon de marche occupe Dien Bien Phu. Le drapeau enterré sous la Citadelle en 1945 est retrouvé intact et salué par le général Leclerc. Le régiment est dissous en décembre 1946.`,
  aRetenir: [
    "Na Cham (sept. 1940) : plus de 1 000 Japonais hors de combat.",
    "9 mars 1945 : coup de force japonais sur la Citadelle — 200 tués.",
    "Le drapeau, enterré en 1945, est retrouvé intact en 1946.",
    "Avril 1946 : le 9e RIC occupe Dien Bien Phu.",
    "Décembre 1946 : dissolution du régiment.",
  ],
  timeline: [
    { date: "22 sept. 1940", titre: "Invasion japonaise", detail: "La 5e Division japonaise franchit la frontière à Lang Son." },
    { date: "24–25 sept. 1940", titre: "Na Cham", detail: "La 10e Compagnie (capitaine Carli) défend les pitons calcaires. Plus de 1 000 Japonais hors de combat." },
    { date: "Janv. 1941", titre: "Guerre franco-thaïlandaise", detail: "Le 2e Bataillon est envoyé au Cambodge. Combat aéronaval de Koh Chang." },
    { date: "11 mars 1941", titre: "Traité de Tokyo", detail: "La France cède Siem Reap et Battambang sous pression japonaise." },
    { date: "9 mars 1945", titre: "Coup de force japonais", detail: "20h10 — Attaque sur la Citadelle de Hanoï. Combat de nuit urbain." },
    { date: "10 mars 1945", titre: "Reddition", detail: "16h00 — Épuisement total des munitions. 200 tués. Internement à Hoa Binh." },
    { date: "Mars–mai 1945", titre: "Guérilla & retraite", detail: "600 hommes au maquis. La colonne Alessandri rejoint la Chine le 26 mars." },
    { date: "12 août 1945", titre: "Drame d'Yen Shan", detail: "Mutinerie de tirailleurs. Assassinat du lieutenant Mercier et du sergent Bordesoule." },
    { date: "Fév. 1946", titre: "Reconquête", detail: "Prise de Phong To. Mort du lieutenant Duchet-Suchaux." },
    { date: "26 avril 1946", titre: "Dien Bien Phu", detail: "Le bataillon de marche du 9e RIC occupe Dien Bien Phu." },
    { date: "18 mars 1946", titre: "Le drapeau retrouvé", detail: "Enterré sous une dalle de la Citadelle en 1945 par le lieutenant Millaur, il est retrouvé intact et salué par Leclerc." },
    { date: "Déc. 1946", titre: "Dissolution", detail: "Le 9e RIC est dissous après 55 ans de présence au Tonkin." },
  ],
  sections: {
    etatDesLieux: {
      titre: "État des lieux et moyens — 1940",
      organisation: [
        "Division du Tonkin — PC à Hanoï — 3 Bataillons",
        "Par bataillon : 3 compagnies de fusiliers voltigeurs, 1 compagnie de mitrailleuses, 1 compagnie de commandement (CC)",
        "CC : 4 mitrailleuses, 2 mortiers, 2 canons antichar de 25 mm",
        "Moyens régimentaires : compagnie de canons de 25 mm (tractés), section DCA (20 mm)",
      ],
      armement: [
        "Mousqueton 1892, Fusil 1902, Fusil 86/93 avec tromblon V.B.",
        "FM Chauchat (1915) et FM 1924/29. Mitrailleuses Hotchkiss.",
        "Mortiers de 60 mm et 81 mm",
        "Canons de 37 mm (1916) et 75 mm (1897)",
      ],
      dmb: "Détachement Motorisé de Brigade : chars Renault FT 17, automitrailleuses Panhard md 18, peloton de reconnaissance (motos et sides).",
    },
    agression1940: {
      titre: "La première agression — Septembre 1940",
      texte: "Le 22 septembre 1940, la 5e Division japonaise du général Nakamura franchit la frontière à Lang Son. Les 1re, 2e et 11e compagnies du 9e RIC sont rapidement encerclées.",
      naCham: {
        titre: "Le fait d'armes de Na Cham — 24–25 septembre",
        texte: "La 10e Compagnie du capitaine Carli défend le passage vers Lang Son depuis les pitons calcaires. Les sections Seguin et Battaglia sont engagées dans un combat acharné.",
        bilan: "Plus de 1 000 Japonais hors de combat, 30 camions ennemis détruits par le feu. Citation à l'ordre de l'Armée.",
      },
    },
    guerreThai: {
      titre: "La guerre franco-thaïlandaise — 1940–1941",
      texte: "La Thaïlande du colonel Luong Pibol Songram attaque la frontière du Laos et du Cambodge. Le 2e Bataillon du 9e RIC est envoyé en renfort au Cambodge. Le combat aéronaval de Koh Chang (17 janvier 1941) est une victoire française, mais la pression diplomatique japonaise impose ses conditions.",
      consequences: "Traité du 11 mars 1941 : la France est contrainte de céder les provinces de Siem Reap et Battambang.",
    },
    coupDeForce: {
      titre: "Le coup de force du 9 mars 1945",
      texte: "À 20h10, les Japonais attaquent le quartier Brière de l'Isle (la Citadelle de Hanoï). Le commandant Jacobi et le 1er Bataillon mènent une résistance désespérée dans un combat de nuit urbain contre l'artillerie et les blindés japonais. Les troupes coloniales tiennent les bâtiments malgré le surnombre ennemi.",
      pertes: "Reddition le 10 mars à 16h00 après épuisement total des munitions. 200 tués côté français pour le 9e RIC.",
      captivite: "Les survivants sont internés au camp de représailles d'Hoa Binh.",
    },
    guerilla: {
      titre: "Guérilla et retraite — Mars–Mai 1945",
      guerillaReul: "Dans les massifs de Luc Khu et Lung Sung, 600 hommes des 10e et 12e compagnies mènent le harcèlement des lignes japonaises pendant plusieurs mois.",
      colonneAlessandri: "Le détachement motorisé du capitaine Fournier protège les arrières de la colonne Alessandri en retraite vers la Chine. Les véhicules sont sabordés avant le passage en zone montagneuse. Arrivée en Chine le 26 mars 1945.",
    },
    retour: {
      titre: "Le retour au Tonkin et la dissolution — 1945–1946",
      yenShan: "12 août 1945 — Drame d'Yen Shan : mutinerie de tirailleurs. Assassinat du lieutenant Mercier et du sergent Bordesoule.",
      reconquete: "Le Bataillon de Marche (BMM 9e RIC) du commandant Droniou reprend les opérations. En février 1946, prise de Phong To — mort du lieutenant Duchet-Suchaux. Le 26 avril 1946, le bataillon occupe Dien Bien Phu.",
      drapeauSauve: "En mars 1945, le lieutenant Millaur avait enterré le drapeau du régiment sous une dalle de la Citadelle. En 1946, il est déterré intact et salué par le général Leclerc le 18 mars.",
      dissolution: "Le 9e RIC est dissous en décembre 1946, après 55 ans de présence au Tonkin.",
    },
  },
  quiz: [
    { question: "Quel officier a mené la défense de Na Cham ?", reponse: "Le capitaine Carli." },
    { question: "Quel char léger équipait le 9e RIC en 1940 ?", reponse: "Le Renault FT 17." },
    { question: "Où ont été internés les survivants de la Citadelle ?", reponse: "Au camp de Hoa Binh." },
    { question: "Quelle province a été occupée par le 9e RIC en avril 1946 ?", reponse: "Dien Bien Phu." },
  ],
  nextStep: "Suite → L'Algérie et la Guyane",
};
