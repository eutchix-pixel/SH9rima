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

export interface GuyaneJungleContent {
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

export const guyaneJungleData: GuyaneJungleContent = {
  title: "Jungle",
  subtitle: "Sous la canopée, la jungle guyanaise est à la fois majestueuse et hostile. La mission des marsouins : arpenter cette forêt pour baliser la frontière, rencontrer les populations et maintenir la souveraineté française.",
  questionDirectrice: "Comment les soldats du 9e RIMa se repèrent‑ils et survivent‑ils en forêt équatoriale tout en assurant le contrôle des bornes frontières et la relation avec les communautés locales ?",
  reperes: "Climat équatorial : deux saisons sèches et deux saisons des pluies, 25–30 °C, 2,5 à 3 m de pluie par an • 1977 : mission vers les bornes 2 et 5 à la frontière brésilienne • 1994–1995 : missions de reconnaissance avec l'ethnologue Hurault • 1996 : réoccupation du camp de Maripasoula • 2023 : expédition Maufrais, quatre sous‑lieutenants de Saint‑Cyr traversent la Guyane en 21 jours.",
  resume: "Au sud du Maroni s'étend une jungle dense et humide. Les marsouins y opèrent pour repérer et entretenir les bornes frontières, surveiller les activités clandestines et maintenir le contact avec les peuples amérindiens et bushinengue. Les conditions y sont difficiles : chaleur, humidité, moustiques, serpents et distances immenses. En 1977, une mission tente de rejoindre les bornes 5 et 2 : après des jours de marche et de navigation, la borne 2 est atteinte mais la borne 5 reste inaccessible. Dans les années 1990, l'ethnologue Hurault accompagne les marsouins pour revisiter les bornes et étudier les peuples Boni et Wayana. En 2023, quatre sous‑lieutenants de Saint‑Cyr traversent la Guyane en vingt‑et‑un jours, de Maripasoula à Camopi, avec l'appui du 9e RIMa.",
  timeline: [
    { date: "1977", description: "Missions vers les bornes 5 et 2 — première tentative de balisage de la frontière." },
    { date: "1980", description: "Ouverture de pistes vers les bornes — début des travaux de débroussaillage et d'installation de BOA." },
    { date: "1994–1995", description: "Missions Hurault — accompagnement de l'ethnologue pour revisiter les bornes et étudier les peuples Boni et Wayana." },
    { date: "1996", description: "Réoccupation de Maripasoula — relance des expéditions dans le sud profond." },
    { date: "Années 2000", description: "Intégration de la lutte contre l'orpaillage — missions combinées avec le CRAJ et les gendarmes." },
    { date: "Années 2010", description: "Coopérations transfrontalières — patrouilles conjointes avec le Brésil et le Suriname pour entretenir les bornes." },
    { date: "2023", description: "Expédition Maufrais — quatre sous‑lieutenants de Saint‑Cyr traversent la Guyane en 21 jours, posant une plaque en hommage à Raymond Maufrais." },
  ],
  blocs: [
    {
      titre: "Un climat et un milieu extrêmes",
      texte: "La Guyane possède un climat équatorial marqué par deux saisons humides et deux saisons sèches. Les pluies annuelles dépassent 2,5 mètres et la température oscille entre 25 et 30 °C. Sous les arbres géants, l'humidité et la moiteur règnent. Le sol est souvent boueux ou parsemé de racines, rendant la progression pénible. Les insectes, les serpents et la densité de la végétation exigent une vigilance permanente. Pour se protéger, les marsouins portent des filets à moustiques, des gourdes filtrantes et des vêtements légers mais couvrants. Chaque sortie en forêt est planifiée avec soin : itinéraire, rations, matériel médical et moyens de communication.",
      aRetenir: [
        "Climat équatorial : chaleur, humidité et pluies abondantes.",
        "Terrain difficile : boue, racines et végétation dense.",
        "Adaptation : équipements spécifiques et connaissance de la faune et de la flore.",
      ],
    },
    {
      titre: "Repérage des bornes et missions de balisage",
      texte: "Après la mise en place du détachement de Saint‑Jean, l'une des priorités est de contrôler la frontière franco‑brésilienne. Celle‑ci est matérialisée par des bornes numérotées installées en pleine forêt. En 1977, deux missions distinctes partent de Saint‑Jean pour atteindre les bornes 5 et 2. La progression se fait à pied et en pirogue. Les hommes utilisent un topofil pour mesurer la distance parcourue et conserver la direction. La borne 2 est atteinte avec succès, mais la borne 5 reste inaccessible en raison du terrain et de la végétation. Ces missions fondatrices démontrent la difficulté du balisage en milieu amazonien et posent les bases des expéditions futures.",
      aRetenir: [
        "La frontière est jalonnée de bornes numérotées difficilement accessibles.",
        "Le topofil et la machette sont indispensables pour progresser et mesurer la distance.",
        "Les missions de balisage demandent endurance et précision.",
      ],
    },
    {
      titre: "Tracer, défricher, construire",
      texte: "Pour avancer en forêt, il faut souvent ouvrir un chemin. Les sections de jungle utilisent des machettes, des tronçonneuses et parfois des explosifs pour abattre les arbres morts, dégager les troncs et aménager des passages. Par endroits, la progression n'est possible qu'en suivant le lit asséché d'une crique ou en escaladant des contreforts rocheux. Une fois la piste ouverte, les marsouins installent un BOA (base opérationnelle avancée) où ils peuvent se reposer, stocker du matériel et planifier la suite de l'expédition. Les habitants locaux — Amérindiens et Bushinengue — apportent un savoir indispensable sur les sentiers, les points d'eau et les dangers du milieu.",
      aRetenir: [
        "Ouvrir une piste demande des outils (machette, tronçonneuse, explosifs).",
        "Les BOA servent de bases temporaires au cœur de la forêt.",
        "Les habitants locaux apportent un savoir indispensable pour la progression.",
      ],
    },
    {
      titre: "Rencontre avec les peuples de la forêt",
      texte: "La jungle n'est pas un désert : elle abrite des peuples bushinengue (descendants d'esclaves fugitifs), des Amérindiens (Wayana, Wayampi, Teko…) et des migrants brésiliens appelés garimpeiros lorsqu'ils pratiquent l'orpaillage. Les marsouins tissent des relations de confiance avec ces populations. Ils organisent des consultations médicales, transportent des familles en pirogue, participent à des fêtes et partagent des connaissances sur les dangers de la forêt. En 1994–1995, l'ethnologue Hurault accompagne les marsouins pour revisiter les bornes et étudier les modes de vie des Boni et des Wayana. Cette collaboration enrichit la connaissance du territoire et renforce le lien entre l'armée et les communautés.",
      aRetenir: [
        "La jungle est habitée par des communautés diverses et attachantes.",
        "La mission militaire inclut l'aide médicale, le transport et le dialogue culturel.",
        "La collaboration avec les chercheurs renforce la connaissance du territoire.",
      ],
    },
    {
      titre: "Expédition Maufrais (2023)",
      texte: "En 2023, quatre sous‑lieutenants de l'École spéciale militaire de Saint‑Cyr ont décidé de rendre hommage à l'explorateur Raymond Maufrais, disparu en 1950. Sans autre expérience que leur stage de survie, ils ont traversé la Guyane d'ouest en est, de Maripasoula à Camopi, en vingt‑et‑un jours. Leur périple combinait pirogue, marche et kayak gonflable et fut réalisé avec l'appui du 9e RIMa. Sur le sentier des Émerillons, ils ont posé une plaque commémorative en hommage à Maufrais. Cette expédition témoigne de la continuité entre le passé et le présent : les jeunes officiers d'aujourd'hui affrontent les mêmes défis que les pionniers du régiment.",
      aRetenir: [
        "Quatre sous‑lieutenants de Saint‑Cyr traversent la Guyane en 21 jours en 2023.",
        "Le trajet, de Maripasoula à Camopi, combine pirogue, marche et kayak.",
        "Une plaque est posée en hommage à Raymond Maufrais sur le sentier des Émerillons.",
        "Le 9e RIMa appuie l'expédition, témoignant de la continuité entre passé et présent.",
      ],
    },
  ],
  glossaire: [
    { terme: "Carbet", definition: "Abri en bois sur pilotis utilisé comme logement ou lieu de repos dans la forêt." },
    { terme: "Topofil", definition: "Fil de nylon enroulé sur une bobine utilisé pour mesurer des distances et conserver un azimut." },
    { terme: "BOA", definition: "Base opérationnelle avancée : campement temporaire aménagé en forêt lors des expéditions." },
    { terme: "Borne frontière", definition: "Repère matérialisant la limite territoriale entre la Guyane et le Brésil, numéroté et entretenu par les forces françaises." },
    { terme: "Hurault", definition: "Ethnologue spécialiste des peuples amérindiens qui collabora avec le 9e RIMa pour revisiter certaines bornes dans les années 1990." },
  ],
  quiz: [
    {
      question: "Quel instrument simple les marsouins utilisent‑ils pour mesurer la distance parcourue en forêt ?",
      options: ["Un podomètre GPS", "Un topofil", "Une corde d'escalade", "Une boussole solaire"],
      correctIndex: 1,
    },
    {
      question: "Quelle mission de 1977 a partiellement réussi en atteignant la borne 2 mais pas la borne 5 ?",
      options: ["Expédition Hurault", "Mission de la CRAJ", "Mission de balisage vers les bornes frontière", "Patrouille fluviale vers Charvein"],
      correctIndex: 2,
    },
    {
      question: "Comment appelle‑t‑on les abris temporaires construits en forêt par les marsouins ?",
      options: ["BOA", "Pagodes", "Burettes", "Carbets"],
      correctIndex: 0,
    },
    {
      question: "Quelle communauté figure parmi les peuples rencontrés par les marsouins en jungle ?",
      options: ["Les Touaregs", "Les Bushinengue", "Les Samis", "Les Masaï"],
      correctIndex: 1,
    },
  ],
};
