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
        href: "https://github.com/gansaikhanshur/planorama",
        status: "View on GitHub",
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
      linkLabel: "Book Review",
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
        notes: [
          {
            heading: "Book Review",
            body: "I came across Zen and the Art of Motorcycle Maintenance through Richer, Wiser, Happier, where it was described as a book about quality. I went into it expecting something closer to a dense philosophy text. Instead, I found a beautifully written motorcycle road trip, with Pirsig weaving his ideas into the journey so naturally that the philosophy never feels separate from the story. More than anything, the book changed the way I think about quality itself. I used to think of it mostly as a measure of how well something was made. Pirsig made me see it as something broader: the care, attention, and judgment you bring to whatever is in front of you. Since reading it, I’ve found myself noticing that distinction everywhere: in the work I produce, the activities I spend time on, the way people practice their craft, and even in small everyday choices. It made me less interested in simply finishing things and more interested in doing them well. One of my favorite quotes from the book is: “When you want to hurry something, that means you no longer care about it.\"",
          },
        ],
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
        notes: [
          {
            heading: "Book Review",
            body: "Lila takes the ideas that first drew me into Zen and the Art of Motorcycle Maintenance and pushes them much further. It is a stranger and darker book, built around another journey—this time by sailboat—but underneath the story Pirsig is trying to construct an entire philosophy around Quality. One idea that stayed with me was his division of the world into different levels of value: inorganic, biological, social, and intellectual. It gave me a way to understand why questions about what is “good,” “right,” or even “true” can become so complicated. Something that makes sense from the perspective of biology might conflict with what is good for a society, while the values of a society can themselves come into conflict with intellectual freedom. Instead of expecting every question to have a single answer that works from every perspective, I started thinking more about the level from which a judgment is being made. I also loved the distinction between static and Dynamic Quality—the tension between the patterns that give life structure and the forces that push those patterns to change. That idea has stayed with me because it applies to so many things: traditions, institutions, personal habits, technology, and even the way our own beliefs evolve. Zen first made me think seriously about what Quality means. Lila gave that idea a much larger structure. Together, the two books have probably influenced the way I interpret the world more than anything else I’ve read.",
          },
        ],
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
        notes: [
          {
            heading: "Book Review",
            body: "I read Why We Sleep in college, at a time when sleep felt almost optional. Staying up late was normal, drinking here and there was part of the social routine, and getting by on too little sleep was often treated as something to be proud of. I had never really thought about sleep as an active biological process that’s critical to how we live and age. This book completely changed that for me. Walker explains what is happening during deep sleep and REM sleep, how the different stages affect memory, learning, emotional regulation, and physical health, and how surprisingly easy it is to interfere with them. What stayed with me beyond the science was the broader realization that health is shaped by ordinary decisions repeated over years. Sleep, exercise, alcohol, and daily routines can seem insignificant in isolation, but together they determine a great deal about how you feel and function. Reading this book was one of the first things that pushed me toward taking those choices more seriously, and it helped set me on a path toward a healthier life that I actually enjoy living. There is some irony in talking about it now. I recently became a parent, so after years of respecting the importance of sleep, a full uninterrupted night has become something of a luxury.",
          },
        ],
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
        notes: [
          {
            heading: "The pull of the game",
            body: "Dota 2 is one of the hardest games I have ever played, and that is exactly what keeps me coming back to it. Even after thousands of hours, there is always more to understand. Every match is shaped by an enormous number of small decisions: how you position, when you fight, what you buy, how you use your abilities, where you place vision, how you communicate, and how quickly you recognize what the other team is trying to do. What I love most is how little the game gives you for free. Mechanical skill matters, but so do patience, judgment, timing, teamwork, and the ability to stay calm when everything starts going wrong. A single mistake can change a fight, and a single good decision can turn an entire game around. That makes the best moments incredibly satisfying: winning a lane through small advantages, predicting what an opponent is about to do, surviving a fight you had no business surviving, or finding the one play that wins the game. There is also something rare about a game that can remain this interesting after so much time. The more you learn, the more you become aware of how much you still do not know. No two matches ever feel exactly the same, because the heroes, players, strategies, and decisions constantly create new problems to solve. And beneath all of that complexity, you can feel that the game was made by people who care deeply about the details. Its systems interact in ways that are thoughtful, demanding, and often beautiful. To borrow the language of one of my favorite books: Dota 2 has Quality.",
          },
        ],
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
        notes: [
          {
            heading: "The pull of the game",
            body: "If you haven’t played Clair Obscur: Expedition 33, I’d genuinely recommend going in as blind as possible. It has some of the most memorable world-building, storytelling, and endings of any game I’ve played. The world is beautiful without feeling empty, the combat feels fresh, and the writing constantly gives you ideas and one liners that linger long after you stop playing. My favorite comes from Renoir: “We paint the bars of our own prisons.” It captures so much of what the game is about, and honestly, a lot about life too.",
          },
        ],
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
        notes: [
          {
            heading: "The pull of the game",
            body: "The Last of Us blends tense survival, genuine horror, and some of the best storytelling I’ve experienced in a game. There are genuine horror moments where it makes you uncomfortable to play (IYKYK: Abby in the abandoned skyscraper). But what stays with me most is the way the story forces you to see the world through different people’s eyes. Characters who seem unforgivable from one perspective become understandable from another. The game rarely gives you the comfort of a simple hero or villain; instead, it shows people shaped by love, grief, fear, and loyalty, making choices that feel right to them even when those choices hurt someone else. That willingness to make you sit with conflicting perspectives is what makes the story so memorable to me.",
          },
        ],
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
        notes: [
          {
            heading: "Why it stayed with me",
            body: "Have you ever finished a movie and felt completely at peace? I hadn’t until Perfect Days. Films have inspired me, thrilled me, and moved me deeply, but none had ever made me feel quite this still. The story follows a man who cleans public restrooms in Tokyo. His life is simple, but never empty. He notices music, books, trees, light, routine, and the people who briefly pass through his days, even while carrying emotions he rarely puts into words. At the heart of the film is komorebi—sunlight filtering through leaves as they move in the wind. It is beautiful partly because it can never happen in exactly the same way twice. That idea feels inseparable from the film itself: life is fleeting, imperfect, and still worth noticing.",
          },
        ],
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
        notes: [
          {
            heading: "Why it stayed with me",
            body: "A haunting, heartbreaking take on an iconic character. Joaquin Phoenix gives an extraordinary performance, and the eerie score pulls you into another world. You see Gotham through Arthur's eyes and understand how he became the Joker: who he was, and who the world around him turned him into. \"If it was me dying on the sidewalk you'd walk right over me. I pass you every day and you don't notice me.\"",
          },
        ],
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
        notes: [
          {
            heading: "Why it stayed with me",
            body: "Interstellar is one of those movies I never seem to get tired of. What I love most is how it takes enormous ideas about space, time, gravity, and our place in the universe and grounds them in something deeply human. Beneath all the science and spectacle, it is a story about love, sacrifice, curiosity, and the lengths we will go for the people who matter to us. Few movies make the universe feel so impossibly vast while making the human experience feel just as important.",
          },
        ],
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
        notes: [
          {
            heading: "What kept me watching",
            body: "After Breaking Bad, I didn’t expect its prequel to surpass it, but for me, Better Call Saul did. Saul’s quick wit, creativity, and completely unorthodox approach to the law make the show as funny as it is compelling, but the real strength is how much depth sits underneath all of that humor. The character development is exceptional. You slowly watch people change through dozens of small choices rather than a few dramatic turning points, which makes everything feel earned. The pacing is patient, but never feels boring, and the performances are consistently excellent. What impresses me most is how complete the show feels. I genuinely can’t think of a weak stretch, let alone a weak season. So many great series lose momentum near the end, but Better Call Saul somehow keeps building all the way through and finishes as confidently as it began. I’m just as surprised as you how Better Call Saul never won at Emmy’s but it’s not anywhere relevant to how excellent a show is anyway.",
          },
        ],
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
        notes: [
          {
            heading: "What kept me watching",
            body: "I’d never felt the urge to replay a scene from a television show over and over until The Penguin. In the episode “Bliss,” Oz confronts Victor in a bathroom after Vic admits that he wants a different life. Oz reminds him that he was always free to walk away, then slowly reveals how he truly sees the world—not as a place divided neatly between good and evil, but as one where people make choices and live with what those choices make them. It’s a gripping scene because it strips away so much of Oz’s charm and humor and gives you a glimpse of the philosophy underneath everything he does. The writing is sharp, the tension never lets up, and Colin Farrell’s performance makes every line feel deliberate. At this point I can’t recall how many times I’ve just replayed that scene over and over again. Phenomenal.",
          },
        ],
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
        notes: [
          {
            heading: "What kept me watching",
            body: "Breaking Bad is a masterclass in character transformation. Watching Walter White slowly become Heisenberg, and then something even harder to define by the final episode is what makes the show so compelling. The acting is incredible, the pacing is remarkably controlled, and the tension keeps building without feeling forced. I enjoyed the ending a lot as well. Walter is not simply defeated or caught. He regains a degree of control and chooses how his story ends. After everything that came before, that feels exactly right for the character.",
          },
        ],
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
        notes: [
          {
            heading: "What draws me in",
            body: "Frieren: Beyond Journey’s End begins where most fantasy stories finish: the great quest is already over. From there, it becomes a story about memory, mortality, friendship, and how differently time can feel depending on who is living it. No other anime has made me reflect on my own life quite like this one. Watching Frieren slowly understand the value of moments she once let pass by made me think more seriously about how I spend my own time. At times, the series feels almost like a meditation on what makes a life meaningful, but it never forgets that it is also a fantasy adventure. And when it decides to deliver a great fight, it absolutely can: Frieren’s confrontation with Aura is still one of my favorite moments in the series.",
          },
        ],
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
        notes: [
          {
            heading: "What draws me in",
            body: "Bizarre to the roots, completely over-the-top, and somehow impossible not to love. Honestly, I wish I could give JoJo’s Bizarre Adventure a shared number one spot. It’s stylish, ridiculous, endlessly memorable, and completely committed to being itself. Also, how could someone combine so many different art styles or character themes and still make the story connected and feel whole? It’s absolutely bizarre.",
          },
        ],
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
        notes: [
          {
            heading: "What draws me in",
            body: "I had heard the phrase “Copernican revolution” countless times in books or movies and shows, but I had never really stopped to think about what it meant to challenge an entire understanding of the world and what experience one must go through when faced such challenge. Orb made that struggle feel immediate. It takes something that can seem abstract—the idea that the Earth moves—and turns it into the center of a tense, deeply human story about curiosity, conviction, and the cost of pursuing truth. The historical setting, philosophical questions, and constant battle between reason and religious authority give the series a weight that few anime attempt. It is also packed with one liners and ideas that linger long after an episode ends.",
          },
        ],
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
        notes: [
          {
            heading: "The art of it",
            body: "Your Name takes an already original premise and turns it into something much bigger—a story about connection, time, fate, and the strange ways people can leave an imprint on each other even when they barely understand why. Visually, it is stunning. Every frame feels carefully composed, from the crowded streets of Tokyo to the skies, changing weather, and small details in the background. RADWIMPS feels inseparable from the movie; the soundtrack gives some of its most important moments an energy and emotion that would be hard to imagine with anything else. There isn’t a dull stretch, and by the end, all of those seemingly small moments come together in a way that feels completely earned. The year I watched the film, I spent the entire summer listening to RADWIMPS and wishing there were more to the main story.",
          },
        ],
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
        notes: [
          {
            heading: "The art of it",
            body: "Coraline is one of the few animated films that leaves me with a feeling I can’t quite get from anything else: unsettled, fascinated, and completely drawn in. Every Laika film is a treat, but Coraline still stands above the rest for me. The stop-motion is incredibly meticulous and the gothic fairy-tale atmosphere is unforgettable. ParaNorman is a very close second.",
          },
        ],
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
        notes: [
          {
            heading: "The art of it",
            body: "Every Studio Ghibli film is a gem, but Kiki’s Delivery Service is especially dear to me. It’s gentle, warm, and wonderfully ordinary in the best way. By the end, it leaves you wishing you could spend a little more time with Kiki and Jiji. What stays with me most is Kiki’s internal struggle. When she loses her ability to fly, something she once loved and did effortlessly, it feels like a remarkably honest portrayal of burnout and what can happen when a passion becomes tied to work, expectations, and self-worth. Her journey isn’t about becoming more powerful; it’s about finding her way back to herself.",
          },
        ],
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
        notes: [
          {
            heading: "Stories that stay",
            body: "First, the Sandevistan... what a cool ability. Second, Cyberpunk: Edgerunners paints a future that feels surprisingly believable. If you think about the pace of technological advancement we’re already seeing, it’s easy to imagine looking at 2077 and thinking, “Yeah, the future could actually look something like this.” And third, very few shows have stayed with me as long as this one has. I kept thinking about David, Lucy, Rebecca, and the rest of the crew for months after it ended. There are scenes, songs, and small moments between the characters that still come back to me long after watching it. If you haven’t seen it yet, you’re in for a treat.",
          },
        ],
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
        notes: [
          {
            heading: "Stories that stay",
            body: "Arcane felt unlike anything else when it first came out. The animation alone was enough to make it stand out, blending painterly textures, 3D animation, and hand-drawn effects into a look that has become almost synonymous with Fortiche. The voice acting is excellent, the music fits the world perfectly, and the story gives its characters far more depth than I ever expected from a League of Legends adaptation. Everything feels carefully made, from the smallest facial expressions to the biggest action sequences.",
          },
        ],
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
        notes: [
          {
            heading: "Stories that stay",
            body: "Love, Death & Robots is one of those shows where you never quite know what you’re going to get. Each short has its own visual style, tone, and world, and some of them manage to do more in fifteen minutes than other shows do in an entire season. My favorite is “Zima Blue,” the story of a machine that began as a simple pool-cleaning robot, became a celebrated artist, and spent years searching for meaning through increasingly ambitious work. In the end, he realizes that what he had been looking for was tied to where he began. It’s strange but one of the most memorable short stories I’ve seen in animation.",
          },
        ],
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
