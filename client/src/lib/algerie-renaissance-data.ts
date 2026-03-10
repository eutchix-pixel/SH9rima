export interface Portrait {
  nom: string;
  role: string;
  detail: string;
}

export interface Implantation {
  nom: string;
  role: string;
  detail: string;
  lat: number;
  lng: number;
}

export interface MissionPacification {
  titre: string;
  date: string;
  texte: string;
}

export interface AlgerieRenaissanceContent {
  title: string;
  subtitle: string;
  accroche: string;
  resume: string;
  aRetenir: string[];
  insigne: {
    titre: string;
    colonelViguie: string;
    description: string;
    symbolique: string;
    drapeau: string;
  };
  dispositif: {
    titre: string;
    implantations: Implantation[];
  };
  missions: {
    titre: string;
    intro: string;
    items: MissionPacification[];
  };
  portraits: Portrait[];
  nextStep: string;
}

export const algerieRenaissanceData: AlgerieRenaissanceContent = {
  title: "1956 : Renaissance en Kabylie",
  subtitle: "Le 9e RIC renaît de ses cendres pour la guerre d'Algérie — quadrillage et pacification en montagne.",
  accroche: "Après l'Indochine, le régiment se reconstruit et découvre un nouveau théâtre : les djebels de Kabylie.",
  resume: "Le 18 avril 1956, le colonel Viguié prend le commandement du 9e RIC dans une période « orageuse ». Il impose un nouvel insigne — la pagode Mot Côt sur l'ancre coloniale — pour souder ses bataillons autour du sacrifice indochinois. Le régiment s'installe en Kabylie avec son PC à Dra El Mizan et trois bataillons déployés dans les secteurs montagneux. Les Marsouins ne sont pas que des combattants : ils rouvrent des écoles, protègent les moissons et sécurisent les centres urbains.",
  aRetenir: [
    "18 avril 1956 : le colonel Viguié prend le commandement.",
    "Nouvel insigne agréé le 17 mai 1956 : pagode Mot Côt sur ancre coloniale.",
    "PC régimentaire installé à Dra El Mizan, en Kabylie.",
    "Le sergent Tesch rouvre l'école de Bon Ighzer le 6 juin 1956.",
  ],
  insigne: {
    titre: "L'insigne de la Renaissance",
    colonelViguie: "Le colonel Viguié prend le commandement le 18 avril 1956 dans une période « orageuse » — le régiment sort de l'épreuve de l'Indochine. Il impose un nouvel insigne pour souder ses bataillons et marquer la renaissance du 9e RIC.",
    description: "Pagode Mot Côt d'Hanoï sur une onde d'azur, brochant sur l'ancre coloniale d'or. Agréé le 17 mai 1956.",
    symbolique: "L'ancre pour l'appartenance aux Troupes de Marine. La pagode pour honorer le sacrifice récent en Indochine.",
    drapeau: "Le drapeau du régiment porte les gloires de l'Empire — Alma, Palikao, Tonkin — pour inspirer les nouveaux appelés et rappelés.",
  },
  dispositif: {
    titre: "Dispositif militaire — Mai–Juin 1956",
    implantations: [
      {
        nom: "État-Major (PC)",
        role: "PC Régimentaire",
        detail: "Installé à Dra El Mizan, centre névralgique du dispositif.",
        lat: 36.5472,
        lng: 3.4233,
      },
      {
        nom: "1er Bataillon",
        role: "Zone de Dra El Mizan",
        detail: "Opère dans la zone immédiate autour du PC régimentaire.",
        lat: 36.5572,
        lng: 3.4033,
      },
      {
        nom: "2e Bataillon",
        role: "PC à Beni Amrane",
        detail: "Zones de surveillance : douars de Beni Chemacha, Ouled Chendes, Yaya Mourira.",
        lat: 36.6700,
        lng: 3.5900,
      },
      {
        nom: "3e Bataillon",
        role: "Secteur de Tizi Gheniff",
        detail: "Contrôle des axes et protection du secteur contre l'infiltration des rebelles.",
        lat: 36.5000,
        lng: 3.6500,
      },
      {
        nom: "4e Compagnie",
        role: "Compagnie indépendante",
        detail: "Sous le commandement du lieutenant Preteveille, installée à Rebeval dès mai 1956.",
        lat: 36.6100,
        lng: 3.3500,
      },
    ],
  },
  missions: {
    titre: "Missions de pacification",
    intro: "Les Marsouins ne sont pas que des combattants — ils sont aussi des acteurs sociaux au contact de la population.",
    items: [
      {
        titre: "L'instituteur en uniforme",
        date: "6 juin 1956",
        texte: "À l'école de Bon Ighzer, l'insécurité fait fuir l'instituteur civil le 16 janvier 1956. Le 6 juin, le sergent Tesch rouvre l'école et reprend les cours pour les enfants du village.",
      },
      {
        titre: "La protection des moissons",
        date: "31 juillet 1956",
        texte: "À la ferme Bonnet, à 3 km de Rebeval, les Marsouins Martin et Kaim (rappelés) surveillent et aident aux travaux des champs pour éviter les sabotages.",
      },
      {
        titre: "Le contrôle de zone",
        date: "Juin 1956",
        texte: "Opérations de contrôle d'identité massives à Dra El Mizan pour sécuriser les centres urbains.",
      },
    ],
  },
  portraits: [
    {
      nom: "Colonel Viguié",
      role: "Chef de corps",
      detail: "Prend le commandement le 18 avril 1956. Impose le nouvel insigne et restructure le régiment pour la guerre d'Algérie.",
    },
    {
      nom: "Sergent Tesch",
      role: "Instituteur-soldat",
      detail: "Rouvre l'école de Bon Ighzer le 6 juin 1956 après la fuite de l'instituteur civil. Reprend les cours pour les enfants du village.",
    },
    {
      nom: "Lieutenant Preteveille",
      role: "Commandant de la 4e Compagnie",
      detail: "Commande la compagnie indépendante installée à Rebeval dès mai 1956.",
    },
  ],
  nextStep: "Suite → Palestro",
};
