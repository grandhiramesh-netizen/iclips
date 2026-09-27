export const chipTopics = [
  "All",
  "Travel",
  "Music",
  "Gaming",
  "Science",
  "Cooking",
  "Outdoors",
  "Space",
  "Lo-fi",
  "Tech",
  "Live",
] as const;

export const browseTopics = [
  "Trending",
  "Music",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Learning",
  "Travel",
] as const;

const namedTopics = [
  ...new Set<string>([
    ...chipTopics.filter((topic) => topic !== "All"),
    ...browseTopics,
  ]),
];

export const libraries = {
  subscriptions: {
    title: "Subscriptions",
    body: "Channels you follow will show up here.",
  },
  history: {
    title: "History",
    body: "Clips you watch will show up here.",
  },
  later: {
    title: "Watch later",
    body: "Save clips to watch them later.",
  },
  liked: {
    title: "Liked clips",
    body: "Clips you like will show up here.",
  },
  playlists: {
    title: "Playlists",
    body: "Playlists you create will show up here.",
  },
} as const;

export type LibraryId = keyof typeof libraries;
export type Align = "start" | "center" | "end";
export type Scene =
  | "night-city"
  | "islands"
  | "saturn"
  | "desert"
  | "cabin"
  | "volcano"
  | "aurora"
  | "retro"
  | "peaks"
  | "reef"
  | "lake"
  | "red-sunset"
  | "rooftop"
  | "moonrise"
  | "dunes"
  | "hike"
  | "aurora-short"
  | "canyon";

export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  published: string;
  duration: string;
  topics: string[];
  avatar: string;
  scene: Scene;
  label: string;
  align: Align;
};

export type Short = {
  id: string;
  title: string;
  views: string;
  topics: string[];
  scene: Scene;
  label: string;
  align: Align;
};

export const videos: Video[] = [
  {
    id: "night-shift",
    title: "I Spent 24 Hours in a City That Never Sleeps",
    channel: "Urban Drift",
    views: "2.4M",
    published: "3 days ago",
    duration: "16:42",
    topics: ["Travel"],
    avatar: "#f06292",
    scene: "night-city",
    label: "Night Shift",
    align: "start",
  },
  {
    id: "golden-hour",
    title: "Chasing the Perfect Sunset Across 5 Islands",
    channel: "Wander Lens",
    views: "1.1M",
    published: "1 week ago",
    duration: "12:07",
    topics: ["Travel"],
    avatar: "#5c6bc0",
    scene: "islands",
    label: "Golden Hour Hunt",
    align: "center",
  },
  {
    id: "ringside-seat",
    title: "What Would You Actually See Flying Past Saturn?",
    channel: "Orbit Lab",
    views: "2.7M",
    published: "1 week ago",
    duration: "16:05",
    topics: ["Space", "Science"],
    avatar: "#66bb6a",
    scene: "saturn",
    label: "Ringside Seat",
    align: "start",
  },
  {
    id: "no-shade",
    title: "Crossing the Desert With Only a Backpack",
    channel: "Far Trails",
    views: "5.8M",
    published: "2 weeks ago",
    duration: "27:15",
    topics: ["Outdoors", "Travel"],
    avatar: "#ff8a3d",
    scene: "desert",
    label: "100 km. No shade.",
    align: "end",
  },
  {
    id: "day-one",
    title: "Building a Cabin in the Woods From Scratch",
    channel: "Timber & Moss",
    views: "5.2M",
    published: "1 month ago",
    duration: "34:50",
    topics: ["Outdoors"],
    avatar: "#7e57c2",
    scene: "cabin",
    label: "Day 1 of 60",
    align: "start",
  },
  {
    id: "hot-take",
    title: "I Tried Cooking Pizza Next to an Active Volcano",
    channel: "Extreme Kitchen",
    views: "6.3M",
    published: "2 weeks ago",
    duration: "11:39",
    topics: ["Cooking"],
    avatar: "#26a69a",
    scene: "volcano",
    label: "Hot Take",
    align: "center",
  },
  {
    id: "green-sky",
    title: "The Night the Sky Turned Green (Real Footage)",
    channel: "Skyward",
    views: "4.8M",
    published: "5 days ago",
    duration: "9:48",
    topics: ["Science"],
    avatar: "#ec407a",
    scene: "aurora",
    label: "Is this real?",
    align: "start",
  },
  {
    id: "no-looking",
    title: "Speedrunning a Retro Game Blindfolded",
    channel: "Pixel Pilot",
    views: "3.3M",
    published: "1 month ago",
    duration: "8:14",
    topics: ["Gaming", "Tech"],
    avatar: "#ff7043",
    scene: "retro",
    label: "No looking!",
    align: "end",
  },
  {
    id: "thin-air",
    title: "Summit Day: What Nobody Tells You About Altitude",
    channel: "Peak Journal",
    views: "890K",
    published: "3 weeks ago",
    duration: "21:33",
    topics: ["Outdoors"],
    avatar: "#43a047",
    scene: "peaks",
    label: "Thin Air",
    align: "start",
  },
  {
    id: "visibility",
    title: "Diving Into the Clearest Water on Earth",
    channel: "Blue Depth",
    views: "1.4M",
    published: "6 days ago",
    duration: "19:57",
    topics: ["Science", "Outdoors"],
    avatar: "#ff8a3d",
    scene: "reef",
    label: "100 ft visibility",
    align: "center",
  },
  {
    id: "study-with-me",
    title: "Lo-fi Beats by the Lake — 2 Hours of Deep Focus",
    channel: "Quiet Tape",
    views: "7.3M",
    published: "2 months ago",
    duration: "2:00:00",
    topics: ["Lo-fi", "Music"],
    avatar: "#8e24aa",
    scene: "lake",
    label: "Study with me",
    align: "start",
  },
  {
    id: "why-red",
    title: "The Science of Why Sunsets Turn Red, Explained",
    channel: "Curious Minds",
    views: "1.9M",
    published: "4 days ago",
    duration: "14:22",
    topics: ["Science"],
    avatar: "#26c6da",
    scene: "red-sunset",
    label: "Why red?",
    align: "end",
  },
];

export const shorts: Short[] = [
  {
    id: "rooftop-party",
    title: "The view from the 60th floor at midnight",
    views: "980K",
    topics: ["Travel"],
    scene: "rooftop",
    label: "Rooftop party POV",
    align: "start",
  },
  {
    id: "moonrise",
    title: "Wait for the reflection...",
    views: "2.2M",
    topics: ["Travel"],
    scene: "moonrise",
    label: "Moonrise over the bay",
    align: "center",
  },
  {
    id: "dune-sledding",
    title: "Sand is faster than snow??",
    views: "1.5M",
    topics: ["Outdoors"],
    scene: "dunes",
    label: "Dune sledding!",
    align: "center",
  },
  {
    id: "five-am-hike",
    title: "Worth the alarm. Every time.",
    views: "640K",
    topics: ["Outdoors"],
    scene: "hike",
    label: "5 AM hike",
    align: "start",
  },
  {
    id: "aurora-fifteen",
    title: "Time-lapse from the Arctic",
    views: "3.9M",
    topics: ["Science"],
    scene: "aurora-short",
    label: "Aurora in 15 sec",
    align: "center",
  },
  {
    id: "canyon-sunset",
    title: "One minute of pure orange",
    views: "1.2M",
    topics: ["Travel"],
    scene: "canyon",
    label: "Canyon sunset",
    align: "center",
  },
];

export function isLibraryId(value: string): value is LibraryId {
  return Object.prototype.hasOwnProperty.call(libraries, value);
}

export function normalizeTopic(value: string) {
  if (!value || value.toLowerCase() === "all") {
    return "";
  }

  return (
    namedTopics.find((topic) => topic.toLowerCase() === value.toLowerCase()) ??
    value
  );
}

export function readParam(
  searchParams: { [key: string]: string | string[] | undefined },
  key: string,
) {
  const value = searchParams[key];
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

export function homeHref(options: {
  q?: string;
  topic?: string;
  library?: string;
  hash?: string;
}) {
  const params = new URLSearchParams();

  if (options.q) {
    params.set("q", options.q);
  }

  if (options.topic && options.topic !== "All") {
    params.set("topic", options.topic);
  }

  if (options.library) {
    params.set("library", options.library);
  }

  const query = params.toString();
  const hash = options.hash ? `#${options.hash}` : "";
  return `/${query ? `?${query}` : ""}${hash}`;
}

export function selectClips(topic: string, q: string) {
  const query = q.toLowerCase();
  const showAll = topic === "" || topic === "Trending";

  function matches(item: { title: string; topics: string[]; channel?: string; label: string }) {
    const topicOk = showAll || item.topics.some((name) => name.toLowerCase() === topic.toLowerCase());

    if (!topicOk) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [item.title, item.channel ?? "", item.label, ...item.topics]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  }

  return {
    videos: videos.filter(matches),
    shorts: shorts.filter(matches),
  };
}

export function emptyCopy(topic: string, q: string) {
  if (q && topic && topic !== "Trending") {
    return `No ${topic} clips match “${q}”.`;
  }

  if (q) {
    return `No clips match “${q}”.`;
  }

  if (topic === "Live") {
    return "No live clips right now.";
  }

  return `No ${topic} clips yet.`;
}
