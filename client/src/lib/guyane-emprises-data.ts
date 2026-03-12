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

export interface GuyaneEmprisesContent {
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

export const guyaneEmprisesData: GuyaneEmprisesContent = {
  title: "Emprises",
  subtitle: "Du camp de déportation de Saint‑Jean au poste isolé de Nasson, les marsouins ont construit et occupé des emprises pour contrôler la frontière, aider les populations et gérer les crises. Cette page décrit ces lieux et les hommes qui les ont faits vivre.",
  questionDirectrice: "Comment les postes et les camps du 9e BIMa/RIMa ont‑ils assuré la présence de la France sur le Maroni tout en faisant face à la crise surinamaise et à l'afflux de réfugiés ?",
  reperes: "20 septembre 1976 : installation du détachement permanent à Saint‑Jean du Maroni • 15 octobre 1976 : première mission de présence sur le Maroni • 1980 : soulèvement militaire au Suriname • 3 septembre 1986 : lancement du Plan Maroni • 1er octobre 1990 : Plan Alizé • 14 janvier 1993 : fin du Plan Maroni et début du Plan Alizé bis.",
  resume: "À peine créé, le 9e BIMa reçoit l'ordre de s'implanter à Saint‑Jean du Maroni, réhabilitant les maisons abandonnées du camp de déportation et s'équipant de pirogues. Cette présence devient permanente et s'étend avec la création de nouvelles sections et d'une école d'instruction. En 1980, une crise ébranle le Suriname voisin : putsch militaires, guérilla des Busshnégros, et arrivée massive de réfugiés. Pour y faire face, le Plan Maroni est déclenché en 1986 : camps d'accueil, postes de surveillance et patrouilles renforcées. En 1990, le Plan Alizé prend le relais : de nouveaux postes (Nasson, Aéroplane‑Condé, Les Hattes) sont créés et les camps progressivement fermés. Le 9e BIMa, devenu 9e RIMa en 1992, assume alors la pleine responsabilité de la frontière.",
  timeline: [
    { date: "20 septembre 1976", description: "Installation à Saint‑Jean — premier détachement permanent." },
    { date: "15 octobre 1976", description: "Première mission sur le Maroni — recensement et remise de drapeaux." },
    { date: "Septembre 1986", description: "Début du Plan Maroni — création des camps A, PK9 et Charvein." },
    { date: "1987", description: "Fermeture du camp d'Apatou — transferts de réfugiés à Saint‑Laurent." },
    { date: "1er octobre 1990", description: "Plan Alizé — création des postes de Nasson, Aéroplane‑Condé et Les Hattes." },
    { date: "Août 1992", description: "Réorganisation du bataillon en régiment — le 9e BIMa devient 9e RIMa." },
    { date: "Janvier 1993", description: "Début du Plan Alizé‑bis — lutte contre l'immigration clandestine et soutien aux négociations." },
  ],
  blocs: [
    {
      titre: "Saint‑Jean du Maroni : la base historique",
      texte: "Le 20 septembre 1976, à peine quinze jours après la recréation du bataillon, le commandant Desmottes ordonne l'installation d'un détachement permanent à Saint‑Jean du Maroni. L'ancienne colonie pénitentiaire, envahie par la végétation, est réinvestie par 37 marsouins et 12 pirogues. Des maisons abandonnées sont remises en état, un héliport est dégagé et un premier recensement du fleuve est lancé. En 1978, la section d'instruction vient renforcer le poste et professionnaliser la formation des hommes au combat en forêt.",
      aRetenir: [
        "Saint‑Jean du Maroni est la première emprise et sert de base arrière à toutes les opérations.",
        "Les marsouins transforment un camp de déportation en place d'armes et en lieu de vie.",
        "La section d'instruction de 1978 marque la professionnalisation de la présence.",
      ],
    },
    {
      titre: "La crise surinamaise et le Plan Maroni",
      texte: "Au début des années 1980, le Suriname, ex‑colonie hollandaise devenue indépendante en 1975, sombre dans l'instabilité. En juillet 1986, le sergent Ronie Brunswijk lance la guérilla des Busshnégros contre le régime militaire. Les exactions provoquent un exode de plusieurs milliers de réfugiés vers la Guyane française, qui s'installent sur les berges du Maroni. Le 3 septembre 1986, le Plan Maroni est déclenché. Ses trois objectifs : maintenir la souveraineté sur le fleuve, accueillir les réfugiés et empêcher les incursions armées. Des camps sont ouverts : camp A, PK9, Charvein, Acarouany. Les patrouilles s'intensifient et le bataillon coopère avec la 3e REI, le RSMA et le GSMA.",
      aRetenir: [
        "Le Plan Maroni répond à une crise humanitaire et sécuritaire due à la guerre civile surinamaise.",
        "Les camps A, PK9 et Charvein servent à l'accueil et à la protection des réfugiés.",
        "La coopération avec d'autres unités (3e REI, RSMA, GSMA) illustre la dimension interarmées de la mission.",
      ],
    },
    {
      titre: "Du Plan Maroni au Plan Alizé",
      texte: "Avec la stabilisation progressive au Suriname, l'objectif évolue. Le 1er octobre 1990, le 9e BIMa lance le Plan Alizé, qui prévoit la création de postes permanents sur le fleuve et la fermeture progressive des camps. De nouvelles emprises voient le jour : Nasson, Aéroplane‑Condé et Les Hattes. Le 9e BIMa prend alors le contrôle de tous les postes du Maroni et assure la sécurité de la frontière jusqu'à Maripasoula. En janvier 1993, le Plan Alizé‑bis recentre la mission sur la lutte contre l'immigration clandestine et le soutien aux négociations de paix au Suriname.",
      aRetenir: [
        "Le Plan Alizé marque la transition d'une mission humanitaire vers une mission de souveraineté.",
        "Les postes de Nasson, Aéroplane‑Condé et Les Hattes illustrent la surveillance fine du fleuve.",
        "L'immigration clandestine devient un défi majeur à partir de 1993.",
      ],
    },
    {
      titre: "Organigramme et vie quotidienne",
      texte: "Pour gérer l'ensemble des postes et des camps, le Groupement Maroni s'organise autour de trois entités : un détachement de base (commandement, service général, atelier auto, section fluviale et groupe transmissions), la 3e compagnie qui assure la présence sur les postes, et la 4e compagnie responsable des camps. Les marsouins y vivent dans des conditions parfois spartiates : constructions en bois, alimentation par pirogue et liaison radio permanente. Malgré l'isolement, les postes deviennent des lieux de cohésion où les traditions du régiment se transmettent autour du drapeau et de la pagode.",
      aRetenir: [
        "Le Groupement Maroni comprend un détachement de base et deux compagnies de renfort, chacune avec des missions distinctes.",
        "La vie quotidienne dans les postes repose sur l'autonomie et l'entraide avec les populations.",
        "Les emprises participent à la cohésion et à la transmission des traditions.",
      ],
    },
  ],
  glossaire: [
    { terme: "Plan Maroni", definition: "Dispositif de 1986 visant à sécuriser le fleuve, accueillir les réfugiés surinamais et créer des camps." },
    { terme: "Busshnégros", definition: "Guérilla menée par Ronie Brunswijk au Suriname dans les années 1980." },
    { terme: "Plan Alizé", definition: "Plan de 1990 qui remplace le Plan Maroni et confie au 9e BIMa la responsabilité de nouveaux postes tout en fermant les camps." },
    { terme: "Plan Alizé‑bis", definition: "Dispositif de 1993 recentrant la mission sur la lutte contre l'immigration clandestine." },
    { terme: "Groupement Maroni", definition: "Structure du 9e RIMa chargée de gérer les postes et les camps sur le fleuve, composée d'un détachement de base et de deux compagnies de renfort." },
  ],
  quiz: [
    {
      question: "Quel poste constitue la première implantation permanente du 9e BIMa sur le Maroni ?",
      options: ["Nasson", "Saint‑Jean du Maroni", "Charvein", "Mana"],
      correctIndex: 1,
    },
    {
      question: "Quel événement déclenche la mise en place du Plan Maroni en 1986 ?",
      options: ["La construction du Centre Spatial", "La dissolution du 9e RIMa", "La crise politique et les exactions au Suriname", "L'ouverture du camp de Maripasoula"],
      correctIndex: 2,
    },
    {
      question: "Quel plan prévoit la création des postes de Nasson, Aéroplane‑Condé et Les Hattes ?",
      options: ["Plan Maroni", "Plan Alizé", "Plan Alizé‑bis", "Plan Vert"],
      correctIndex: 1,
    },
    {
      question: "La 4e compagnie du Groupement Maroni est principalement chargée :",
      options: ["De l'instruction des recrues", "Du service général et des transmissions", "De la tenue des camps et du renfort sur les postes", "De la protection du Centre Spatial"],
      correctIndex: 2,
    },
  ],
};
