export interface NavPage {
  path: string;
  label: string;
}

export interface SectionNav {
  sectionLabel: string;
  sectionAnchor: string;
  pages: NavPage[];
}

const sections: SectionNav[] = [
  {
    sectionLabel: "Asie",
    sectionAnchor: "/#tonkin",
    pages: [
      { path: "/asie/naissance-du-9-tonkin", label: "Naissance" },
      { path: "/asie/chine-1900-expedition", label: "Chine 1900" },
      { path: "/asie/tonkin-1901-1914", label: "1900–1914" },
      { path: "/asie/siberie-ww1", label: "Sibérie" },
      { path: "/asie/annees-heureuses", label: "Années Heureuses" },
      { path: "/asie/tourmente-1940", label: "La Tourmente" },
    ],
  },
  {
    sectionLabel: "Algérie",
    sectionAnchor: "/#algerie",
    pages: [
      { path: "/algerie/renaissance", label: "Renaissance" },
      { path: "/algerie/palestro", label: "Palestro" },
      { path: "/algerie/contre-insurrection", label: "Contre-insurrection" },
      { path: "/algerie/kj25", label: "KJ 25" },
      { path: "/algerie/commandos-chasse", label: "Commandos" },
      { path: "/algerie/disparition", label: "Disparition" },
    ],
  },
  {
    sectionLabel: "Guyane",
    sectionAnchor: "/#guyane",
    pages: [
      { path: "/guyane/debuts", label: "Débuts" },
      { path: "/guyane/emprises", label: "Emprises" },
      { path: "/guyane/fluvial", label: "Fluvial" },
      { path: "/guyane/craj", label: "CRAJ" },
      { path: "/guyane/jungle", label: "Jungle" },
      { path: "/guyane/international", label: "International" },
      { path: "/guyane/harpie", label: "Harpie" },
      { path: "/guyane/titan", label: "Titan" },
    ],
  },
  {
    sectionLabel: "Traditions",
    sectionAnchor: "/#traditions",
    pages: [
      { path: "/traditions/drapeau", label: "Drapeau" },
      { path: "/traditions/insignes", label: "Insignes" },
      { path: "/traditions/pagode", label: "Pagode" },
      { path: "/traditions/chant", label: "Chant" },
      { path: "/traditions/esprit", label: "Esprit du 9" },
    ],
  },
];

export function getPageNav(currentPath: string) {
  for (const section of sections) {
    const idx = section.pages.findIndex((p) => p.path === currentPath);
    if (idx === -1) continue;

    const prev = idx > 0 ? section.pages[idx - 1] : null;
    const next = idx < section.pages.length - 1 ? section.pages[idx + 1] : null;

    return {
      sectionLabel: section.sectionLabel,
      sectionAnchor: section.sectionAnchor,
      prevLink: prev?.path ?? section.sectionAnchor,
      prevLabel: prev?.label ?? section.sectionLabel,
      nextLink: next?.path ?? section.sectionAnchor,
      nextLabel: next?.label ?? section.sectionLabel,
      hasNext: !!next,
      hasPrev: !!prev,
    };
  }
  return null;
}
