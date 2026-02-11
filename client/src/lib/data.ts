export interface Artwork {
  id: string;
  title: string;
  titleEn: string;
  artist: string;
  year: string;
  descriptionShort: string;
  descriptionShortEn: string;
  descriptionLong: string;
  descriptionLongEn: string;
  image: string;
  audio: string;
  kidsContent: string;
  kidsContentEn: string;
  location: { x: number; y: number };
  timeToVisit: number;
}

export interface Tour {
  id: string;
  name: string;
  nameEn: string;
  duration: number; // minutes
  artworks: string[]; // ids
  color: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Portrait de la Comtesse",
    titleEn: "Portrait of the Countess",
    artist: "Jean-Baptiste Greuze",
    year: "1778",
    descriptionShort: "Un chef-d'œuvre du portrait rococo français.",
    descriptionShortEn: "A masterpiece of French Rococo portraiture.",
    descriptionLong: "Ce portrait capture l'élégance et la mélancolie subtile de la Comtesse. Remarquez la finesse des dentelles et la lumière douce qui illumine son visage, caractéristiques du style de Greuze à cette époque.",
    descriptionLongEn: "This portrait captures the elegance and subtle melancholy of the Countess. Note the fineness of the lace and the soft light illuminating her face, characteristic of Greuze's style at this time.",
    image: "/images/artwork-1.png",
    audio: "#",
    kidsContent: "Regarde sa robe ! À ton avis, combien de temps il fallait pour s'habiller comme ça ? Le peintre a utilisé des pinceaux très fins pour peindre la dentelle.",
    kidsContentEn: "Look at her dress! How long do you think it took to get dressed like that? The painter used very fine brushes to paint the lace.",
    location: { x: 20, y: 30 },
    timeToVisit: 3
  },
  {
    id: "2",
    title: "L'Envol",
    titleEn: "The Flight",
    artist: "Constantin Brâncuși",
    year: "1923",
    descriptionShort: "Une sculpture abstraite en bronze poli.",
    descriptionShortEn: "An abstract polished bronze sculpture.",
    descriptionLong: "Brâncuși cherche ici à capturer l'essence du vol plutôt que la forme de l'oiseau. La surface polie reflète l'environnement, intégrant l'œuvre dans son espace.",
    descriptionLongEn: "Brâncuși seeks here to capture the essence of flight rather than the form of the bird. The polished surface reflects the environment, integrating the work into its space.",
    image: "/images/artwork-2.png",
    audio: "#",
    kidsContent: "On dirait un oiseau qui s'envole très vite ! Si tu plisses les yeux, tu vois quoi ? Une fusée ? Une plume ?",
    kidsContentEn: "It looks like a bird flying away very fast! If you squint, what do you see? A rocket? A feather?",
    location: { x: 50, y: 20 },
    timeToVisit: 2
  },
  {
    id: "3",
    title: "Champs de Coquelicots",
    titleEn: "Poppy Fields",
    artist: "Claude Monet",
    year: "1873",
    descriptionShort: "Paysage impressionniste vibrant de lumière.",
    descriptionShortEn: "Impressionist landscape vibrant with light.",
    descriptionLong: "Monet ne peint pas les détails des fleurs, mais les touches de couleur qui donnent l'impression de mouvement et de vent dans les herbes hautes.",
    descriptionLongEn: "Monet does not paint the details of the flowers, but the touches of color that give the impression of movement and wind in the tall grass.",
    image: "/images/artwork-3.png",
    audio: "#",
    kidsContent: "Approche-toi un peu... on ne voit que des taches ! Maintenant recule... magie ! On voit un champ de fleurs. C'est ça l'impressionnisme.",
    kidsContentEn: "Come a little closer... we only see spots! Now step back... magic! We see a field of flowers. That's Impressionism.",
    location: { x: 80, y: 30 },
    timeToVisit: 4
  },
  {
    id: "4",
    title: "Amphore à Figures Noires",
    titleEn: "Black-Figure Amphora",
    artist: "Exékias",
    year: "-540",
    descriptionShort: "Céramique grecque antique racontant un mythe.",
    descriptionShortEn: "Ancient Greek pottery telling a myth.",
    descriptionLong: "Cette amphore servait à conserver le vin ou l'huile. Les figures noires sont peintes sur l'argile rouge avant la cuisson. Observez la précision des motifs géométriques.",
    descriptionLongEn: "This amphora was used to store wine or oil. The black figures are painted on the red clay before firing. Observe the precision of the geometric patterns.",
    image: "/images/artwork-4.png",
    audio: "#",
    kidsContent: "C'est un vase très très vieux ! Il a plus de 2500 ans. Les dessins dessus racontent des histoires de héros et de monstres.",
    kidsContentEn: "It's a very very old vase! It is over 2500 years old. The drawings on it tell stories of heroes and monsters.",
    location: { x: 80, y: 70 },
    timeToVisit: 3
  },
  {
    id: "5",
    title: "La Vierge à l'Enfant",
    titleEn: "Madonna and Child",
    artist: "Leonardo da Vinci (Atelier)",
    year: "1510",
    descriptionShort: "Peinture religieuse de la Renaissance.",
    descriptionShortEn: "Renaissance religious painting.",
    descriptionLong: "Notez l'utilisation du sfumato, cette technique de flou artistique qui adoucit les contours et donne une atmosphère mystérieuse à la scène.",
    descriptionLongEn: "Note the use of sfumato, this artistic blurring technique that softens the outlines and gives a mysterious atmosphere to the scene.",
    image: "/images/artwork-5.png",
    audio: "#",
    kidsContent: "Le bébé et sa maman ont l'air très calmes. Le peintre a utilisé des couleurs douces pour qu'on se sente apaisé en regardant le tableau.",
    kidsContentEn: "The baby and his mom look very calm. The painter used soft colors so that we feel soothed looking at the painting.",
    location: { x: 50, y: 80 },
    timeToVisit: 5
  },
  {
    id: "6",
    title: "Néon & Miroirs",
    titleEn: "Neon & Mirrors",
    artist: "Dan Flavin (Inspiré)",
    year: "1980",
    descriptionShort: "Installation contemporaine immersive.",
    descriptionShortEn: "Immersive contemporary installation.",
    descriptionLong: "L'œuvre n'est pas l'objet lui-même, mais la lumière qu'il projette et comment elle transforme l'espace autour de vous.",
    descriptionLongEn: "The work is not the object itself, but the light it projects and how it transforms the space around you.",
    image: "/images/artwork-6.png",
    audio: "#",
    kidsContent: "C'est comme dans un film de science-fiction ! La lumière change la couleur de tes vêtements. Essaie de voir ton reflet !",
    kidsContentEn: "It's like in a sci-fi movie! The light changes the color of your clothes. Try to see your reflection!",
    location: { x: 20, y: 70 },
    timeToVisit: 2
  }
];

export const tours: Tour[] = [
  {
    id: "short",
    name: "L'Essentiel (5 min)",
    nameEn: "The Essentials (5 min)",
    duration: 5,
    artworks: ["1", "3"],
    color: "bg-emerald-500"
  },
  {
    id: "medium",
    name: "Découverte (15 min)",
    nameEn: "Discovery (15 min)",
    duration: 15,
    artworks: ["1", "3", "5", "6"],
    color: "bg-blue-500"
  },
  {
    id: "long",
    name: "Grand Tour (30 min)",
    nameEn: "Grand Tour (30 min)",
    duration: 30,
    artworks: ["1", "2", "3", "4", "5", "6"],
    color: "bg-purple-500"
  }
];
