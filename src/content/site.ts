export const profile = {
  name: "Gansaikhan Shur",
  firstName: "Gansaikhan",
  github: "https://github.com/gansaikhanshur",
  linkedin: "https://www.linkedin.com/in/gansaikhanshur/",
  email: "gansaikhanshur@gmail.com",
} satisfies {
  name: string;
  firstName: string;
  github: string | null;
  linkedin: string | null;
  email: string | null;
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Personal Projects" },
  { href: "/rankings", label: "Rankings" },
  { href: "/contact", label: "Contact" },
] as const;

export type ProjectTool = {
  name: string;
  description: string;
  href: string | null;
  status: string;
};
export type Project = {
  name: string;
  category: string;
  description: string | null;
  motto?: string;
  tools: readonly ProjectTool[];
  href: string | null;
};
export const projects: readonly Project[] = [
  {
    name: "Neural Edge AI",
    category: "01 / AI COACHING",
    description:
      "AI Coaching for competitive eSports games. Connect Steam, choose a match, and get phase-by-phase feedback on what to improve in your next game",
    motto: "Great Players Aren’t Born, They’re Made.",
    tools: [],
    href: "https://neuraledge.coach/dota-dashboard",
  },
  {
    name: "AI skills & tools",
    category: "02 / HUMAN + AGENT",
    description:
      "Experiments in making working with AI agents more human-first.",
    tools: [
      {
        name: "Planorama",
        description:
          "A skill for interactively reviewing the plan.md files that agents create.",
        href: null,
        status: "Repository coming soon",
      },
      {
        name: "Forklore",
        description:
          "A local-first progression layer for human–agent coding, with XP, levels, and activity history.",
        href: "https://github.com/gansaikhanshur/Forklore",
        status: "In development",
      },
    ],
    href: null,
  },
];

export type RankingArtwork = { src: string; alt: string; sourceUrl: string };
export type RankingNoteSection = { heading: string; body: string };
export type RankedPick = {
  title: string;
  note?: string;
  artwork: readonly RankingArtwork[];
  notes?: readonly RankingNoteSection[];
  notesLabel?: string;
};
export type RankingCategory = {
  id: string;
  label: string;
  shortLabel: string;
  notesPrompt: { linkLabel: string; sections: readonly RankingNoteSection[] };
  picks: readonly [RankedPick | null, RankedPick | null, RankedPick | null];
};
export const rankings: readonly RankingCategory[] = [
  {
    id: "books",
    label: "Books",
    shortLabel: "READ",
    notesPrompt: {
      linkLabel: "Review",
      sections: [
        {
          heading: "Favorite quotes",
          body: "A passage worth keeping, and the thoughts it sparked. Coming soon.",
        },
        {
          heading: "What stayed with me",
          body: "Personal reflections on this book will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Zen and the Art of Motorcycle Maintenance",
        note: "Robert M. Pirsig",
        artwork: [
          {
            src: "/images/rankings/zen-thriftbooks.webp",
            alt: "Zen and the Art of Motorcycle Maintenance cover artwork",
            sourceUrl:
              "https://i.thriftbooks.com/api/imagehandler/m/6FB8828B575D03B57A4C55F7E9799E96FECCA43F.jpeg",
          },
        ],
      },
      {
        title: "Lila: An Inquiry into Morals",
        note: "Robert M. Pirsig",
        artwork: [
          {
            src: "/images/rankings/lila.webp",
            alt: "Lila: An Inquiry into Morals cover artwork",
            sourceUrl:
              "https://en.wikipedia.org/wiki/Lila%3A_An_Inquiry_into_Morals",
          },
        ],
      },
      {
        title: "Why We Sleep",
        note: "Matthew Walker",
        artwork: [
          {
            src: "/images/rankings/why-we-sleep.webp",
            alt: "Why We Sleep cover artwork",
            sourceUrl:
              "https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325",
          },
        ],
      },
    ],
  },
  {
    id: "games",
    label: "Video Games",
    shortLabel: "PLAY",
    notesPrompt: {
      linkLabel: "Press X to Expand",
      sections: [
        {
          heading: "The pull of the game",
          body: "What makes this game a favorite. Personal notes coming soon.",
        },
        {
          heading: "Worth knowing",
          body: "Interesting details, mechanics, and memorable moments will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Dota 2",
        note: "",
        artwork: [
          {
            src: "/images/rankings/dota-2.webp",
            alt: "Dota 2 cover artwork",
            sourceUrl: "https://en.wikipedia.org/wiki/Dota_2",
          },
        ],
      },
      {
        title: "Clair Obscur: Expedition 33",
        note: "",
        artwork: [
          {
            src: "/images/rankings/expedition-33.webp",
            alt: "Clair Obscur: Expedition 33 cover artwork",
            sourceUrl:
              "https://en.wikipedia.org/wiki/Clair_Obscur%3A_Expedition_33",
          },
        ],
      },
      {
        title: "The Last of Us Parts I & II",
        note: "",
        artwork: [
          {
            src: "/images/rankings/last-of-us-1.webp",
            alt: "The Last of Us Part I cover artwork",
            sourceUrl: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_I",
          },
          {
            src: "/images/rankings/last-of-us-2.webp",
            alt: "The Last of Us Part II cover artwork",
            sourceUrl: "https://en.wikipedia.org/wiki/The_Last_of_Us_Part_II",
          },
        ],
      },
    ],
  },
  {
    id: "movies",
    label: "Movies",
    shortLabel: "WATCH",
    notesPrompt: {
      linkLabel: "Spoilers Ahead",
      sections: [
        {
          heading: "Why it stayed with me",
          body: "What this film means to me. Personal notes coming soon.",
        },
        {
          heading: "A scene to remember",
          body: "A favorite scene and the reason it stands out will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Perfect Days",
        note: "",
        artwork: [
          {
            src: "/images/rankings/perfect-days.webp",
            alt: "Perfect Days cover artwork",
            sourceUrl: "https://en.wikipedia.org/wiki/Perfect_Days",
          },
        ],
      },
      {
        title: "Joker",
        note: "2019",
        artwork: [
          {
            src: "/images/rankings/joker.webp",
            alt: "Joker cover artwork",
            sourceUrl: "https://www.impawards.com/2019/joker.html",
          },
        ],
      },
      {
        title: "Interstellar",
        note: "",
        artwork: [
          {
            src: "/images/rankings/interstellar.webp",
            alt: "Interstellar (film) cover artwork",
            sourceUrl: "https://en.wikipedia.org/wiki/Interstellar_(film)",
          },
        ],
      },
    ],
  },
  {
    id: "tv",
    label: "TV Shows",
    shortLabel: "WATCH",
    notesPrompt: {
      linkLabel: "The Recap",
      sections: [
        {
          heading: "What kept me watching",
          body: "The reasons this series made the list. Personal notes coming soon.",
        },
        {
          heading: "Characters & moments",
          body: "Standout characters, episodes, and moments will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Better Call Saul",
        note: "",
        artwork: [
          {
            src: "/images/rankings/better-call-saul.webp",
            alt: "Better Call Saul cover artwork",
            sourceUrl: "https://www.tvmaze.com/shows/618/better-call-saul",
          },
        ],
      },
      {
        title: "The Penguin",
        note: "",
        artwork: [
          {
            src: "/images/rankings/penguin.webp",
            alt: "The Penguin cover artwork",
            sourceUrl: "https://www.tvmaze.com/shows/60920/the-penguin",
          },
        ],
      },
      {
        title: "Breaking Bad",
        note: "",
        artwork: [
          {
            src: "/images/rankings/breaking-bad-selected.webp",
            alt: "Breaking Bad poster selected by Gansaikhan",
            sourceUrl:
              "https://i.ebayimg.com/images/g/Y8gAAOSwq79kBnnW/s-l1200.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "anime",
    label: "Anime",
    shortLabel: "WATCH",
    notesPrompt: {
      linkLabel: "Personal notes",
      sections: [
        {
          heading: "What draws me in",
          body: "The ideas, characters, or artistry that make this a favorite. Notes coming soon.",
        },
        {
          heading: "Moments that stay",
          body: "Favorite moments and personal reflections will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Frieren: Beyond Journey’s End",
        note: "",
        artwork: [
          {
            src: "/images/rankings/frieren.webp",
            alt: "Frieren: Beyond Journey's End cover artwork",
            sourceUrl:
              "https://www.tvmaze.com/shows/69956/frieren-beyond-journeys-end",
          },
        ],
        notesLabel: "The Detour",
      },
      {
        title: "JoJo’s Bizarre Adventure",
        note: "Stardust Crusaders",
        artwork: [
          {
            src: "/images/rankings/jojo.webp",
            alt: "Jotaro Kujo and Star Platinum in the Stardust Crusaders key visual",
            sourceUrl: "https://natalie.mu/comic/gallery/news/106280/209251",
          },
        ],
        notesLabel: "Bizarre Notes",
      },
      {
        title: "Orb: On the Movements of the Earth",
        note: "",
        artwork: [
          {
            src: "/images/rankings/orb.webp",
            alt: "Orb: On the Movements of the Earth anime poster",
            sourceUrl:
              "https://www.themoviedb.org/tv/204635-chi-chikyuu-no-undou-ni-tsuite/images/posters",
          },
        ],
        notesLabel: "Observations",
      },
    ],
  },
  {
    id: "animation",
    label: "Animated Films",
    shortLabel: "WATCH",
    notesPrompt: {
      linkLabel: "Hand-Drawn Opinions",
      sections: [
        {
          heading: "The art of it",
          body: "The visual details and creative choices I love. Notes coming soon.",
        },
        {
          heading: "Why it matters to me",
          body: "The story, feeling, or memory behind this pick will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Your Name",
        note: "",
        artwork: [
          {
            src: "/images/rankings/your-name.webp",
            alt: "Your Name cover artwork",
            sourceUrl:
              "https://www.impawards.com/intl/japan/2016/kimi_no_na_wa.html",
          },
        ],
      },
      {
        title: "Coraline",
        note: "",
        artwork: [
          {
            src: "/images/rankings/coraline.webp",
            alt: "Coraline cover artwork",
            sourceUrl: "https://www.impawards.com/2009/coraline.html",
          },
        ],
      },
      {
        title: "Kiki’s Delivery Service",
        note: "",
        artwork: [
          {
            src: "/images/rankings/kiki.webp",
            alt: "Kiki’s Delivery Service cover artwork",
            sourceUrl:
              "https://www.movieposters.com/products/kikis-delivery-service-mpw-128737",
          },
        ],
      },
    ],
  },
  {
    id: "animated-shows",
    label: "Animated Shows",
    shortLabel: "WATCH",
    notesPrompt: {
      linkLabel: "Episode Notes",
      sections: [
        {
          heading: "Stories that stay",
          body: "Why this series belongs on my list. Personal notes coming soon.",
        },
        {
          heading: "Worlds & characters",
          body: "Favorite characters, world-building details, and moments will go here.",
        },
      ],
    },
    picks: [
      {
        title: "Cyberpunk: Edgerunners",
        note: "",
        artwork: [
          {
            src: "/images/rankings/edgerunners.webp",
            alt: "Cyberpunk: Edgerunners cover artwork",
            sourceUrl:
              "https://www.tvmaze.com/shows/48945/cyberpunk-edgerunners",
          },
        ],
      },
      {
        title: "Arcane",
        note: "Seasons 1 & 2",
        artwork: [
          {
            src: "/images/rankings/arcane-season-1.webp",
            alt: "Arcane Season 1 poster",
            sourceUrl:
              "https://www.tvmaze.com/shows/55138/arcane-league-of-legends/seasons",
          },
          {
            src: "/images/rankings/arcane.webp",
            alt: "Arcane Season 2 poster",
            sourceUrl:
              "https://www.tvmaze.com/shows/55138/arcane-league-of-legends",
          },
        ],
      },
      {
        title: "Love, Death & Robots",
        note: "",
        artwork: [
          {
            src: "/images/rankings/love-death-robots.webp",
            alt: "Love, Death & Robots cover artwork",
            sourceUrl: "https://www.tvmaze.com/shows/40329/love-death-robots",
          },
        ],
      },
    ],
  },
];
