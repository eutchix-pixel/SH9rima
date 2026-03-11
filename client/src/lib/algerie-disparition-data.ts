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
  reponse: string;
}

export interface AlgerieDisparitionContent {
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

export const algerieDisparitionData: AlgerieDisparitionContent = {
  title: "Disparition",
  subtitle: "Après des années de guerre, la France choisit de laisser le peuple algérien décider de son avenir. Le plan Challe s'essouffle, De Gaulle parle d'autodétermination, les négociations s'ouvrent puis la souveraineté est proclamée. Pour le 9e RIC, c'est la fin d'une longue présence outre‑mer.",
  questionDirectrice: "Comment la combinaison de victoires militaires et d'évolutions politiques aboutit‑elle à l'indépendance de l'Algérie, et comment le 9e RIC vit‑il cette transition ?",
  reperes: "1960 : fin de l'opération Jumelles • 16 septembre 1959 : De Gaulle propose l'autodétermination • Janvier 1961 : référendum d'autodétermination • 21–26 avril 1961 : putsch des généraux • 18 mars 1962 : accords d'Évian • 1er juillet 1962 : référendum sur l'indépendance.",
  resume: "À partir de 1960, la guerre d'Algérie change de visage. L'opération Jumelles prend fin et le plan Challe montre ses limites. De Gaulle, conscient que la victoire militaire ne suffira pas, propose le droit à l'autodétermination. Les tensions internes culminent avec le putsch des généraux en avril 1961, mais le pouvoir civil tient. Les négociations d'Évian aboutissent le 18 mars 1962 à un cessez-le-feu. Le 1er juillet 1962, les Algériens votent massivement pour l'indépendance (99 %). Le 9e RIC se retire progressivement durant l'été 1962, tournant la page d'une présence qui avait commencé six ans plus tôt.",
  timeline: [
    { date: "1960", description: "Fin de l'opération Jumelles et essoufflement du plan Challe." },
    { date: "16 septembre 1959", description: "Discours de De Gaulle pour l'autodétermination." },
    { date: "6–8 janvier 1961", description: "Référendum d'autodétermination (70 % pour en Algérie)." },
    { date: "21–26 avril 1961", description: "Putsch des généraux à Alger." },
    { date: "18 mars 1962", description: "Accords d'Évian : cessez-le-feu." },
    { date: "1er juillet 1962", description: "Référendum sur l'indépendance ; 99 % pour." },
    { date: "Été 1962", description: "Départ du 9e RIC ; dissolution progressive des SAS." },
  ],
  blocs: [
    {
      titre: "L'usure du plan Challe",
      texte: "À partir de 1960, l'offensive du plan Challe perd en intensité. Les victoires tactiques n'ont pas réduit l'ALN à néant. La guerre est devenue politique ; chaque succès militaire se traduit par une radicalisation de l'opinion internationale. Les commandos de chasse sont dissous ou réaffectés. Pour le 9e RIC, cette période est marquée par la routine des patrouilles, les embuscades ponctuelles et une lassitude croissante.",
      aRetenir: [
        "Le plan Challe obtient des résultats militaires mais ne résout pas le problème politique.",
        "L'opinion internationale et métropolitaine pèse de plus en plus dans la balance.",
      ],
    },
    {
      titre: "Vers l'autodétermination",
      texte: "Le 16 septembre 1959, De Gaulle prononce un discours proposant l'autodétermination. Un référendum organisé du 6 au 8 janvier 1961 confirme l'option d'un choix algérien : environ 70 % des votants en Algérie l'approuvent. Cette reconnaissance officielle du droit des Algériens à décider de leur avenir change la donne. Le 9e RIC, comme le reste de l'armée, reçoit l'ordre de maintenir la sécurité tout en acceptant cette évolution.",
      aRetenir: [
        "L'autodétermination est approuvée par référendum en France comme en Algérie.",
        "L'armée doit s'adapter à une réalité politique qui contredit ses succès sur le terrain.",
      ],
    },
    {
      titre: "Négociations et tensions",
      texte: "Les négociations d'Évian se déroulent en plusieurs sessions entre 1961 et 1962. Pendant ce temps, des actions terroristes de l'OAS (Organisation de l'armée secrète) et l'insurrection continue de l'ALN rendent la situation explosive. En avril 1961, un groupe de généraux tente un putsch à Alger. Il échoue en quelques jours, mais révèle la fracture au sein de l'armée. Le 9e RIC reste loyal au pouvoir civil.",
      aRetenir: [
        "Le putsch des généraux échoue mais montre la profondeur de la crise.",
        "L'OAS et l'ALN continuent de semer la violence pendant les négociations.",
      ],
    },
    {
      titre: "Indépendance et départ du 9e RIC",
      texte: "Les accords d'Évian sont signés le 18 mars 1962. Ils prévoient le cessez‑le‑feu, un référendum et l'organisation d'une période de transition. Le 1er juillet 1962, plus de 99 % des électeurs algériens votent en faveur de l'indépendance. En métropole, le référendum est également approuvé. L'indépendance est proclamée le 5 juillet 1962. Le 9e RIC se retire progressivement ; ses unités embarquent pour la France durant l'été. Certaines installations sont transférées aux nouvelles autorités algériennes.",
      aRetenir: [
        "Les accords d'Évian mettent fin à huit années de guerre.",
        "Le 9e RIC quitte l'Algérie durant l'été 1962, clôturant un chapitre majeur de son histoire.",
      ],
    },
  ],
  glossaire: [
    { terme: "Putsch des généraux", definition: "Tentative de coup d'État menée par des officiers opposés à l'indépendance en avril 1961." },
    { terme: "OAS", definition: "Organisation de l'armée secrète, groupe clandestin de colons et de militaires ultra." },
    { terme: "Accords d'Évian", definition: "Accords de cessez‑le‑feu et de transition signés le 18 mars 1962." },
    { terme: "Référendum de juillet 1962", definition: "Vote massif pour l'indépendance de l'Algérie." },
  ],
  quiz: [
    { question: "Quel plan militaire s'essouffle en 1960 ?", reponse: "Le plan Challe" },
    { question: "Que propose De Gaulle dans son discours du 16 septembre 1959 ?", reponse: "L'autodétermination pour l'Algérie" },
    { question: "Quel événement de 1961 oppose une fraction de l'armée au pouvoir civil ?", reponse: "Le putsch des généraux d'avril 1961" },
    { question: "Quel est le résultat du référendum d'autodétermination en janvier 1961 ?", reponse: "Environ 70 % des votants en Algérie (et 75 % en France) approuvent la politique de De Gaulle" },
    { question: "Quand l'indépendance de l'Algérie est-elle proclamée ?", reponse: "Le 5 juillet 1962, après le référendum du 1er juillet" },
  ],
};
