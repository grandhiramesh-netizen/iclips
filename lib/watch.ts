import { videos, type Video } from "@/lib/catalog";

export type Comment = {
  id: string;
  author: string;
  avatar: string;
  when: string;
  text: string;
  likes: string;
};

export type WatchCopy = {
  subscribers: string;
  likes: string;
  tags: string[];
  description: string;
  commentsCount: string;
  elapsed: string;
  length: string;
  chapter?: string;
  comments: Comment[];
  filters: string[];
};

const queueOrder = [
  "ringside-seat",
  "golden-hour",
  "no-looking",
  "hot-take",
  "green-sky",
  "no-shade",
  "day-one",
  "visibility",
  "study-with-me",
  "thin-air",
  "why-red",
  "night-shift",
];

const nightShiftComments: Comment[] = [
  {
    id: "night-owl",
    author: "NightOwlHera",
    avatar: "#f06292",
    when: "2 days ago",
    text: "The ramen cook at 9:20 deserves his own series. Pure calm at 2 AM.",
    likes: "1.1K",
  },
  {
    id: "trackside",
    author: "TrackSideTom",
    avatar: "#5c6bc0",
    when: "5 days ago",
    text: "As a night-shift train driver, this is the first video that gets our world right. Thank you.",
    likes: "2.1K",
  },
  {
    id: "pixel",
    author: "PixelPilot",
    avatar: "#ff7043",
    when: "3 days ago",
    text: "Watching this at 4 AM felt like being there with you.",
    likes: "860",
  },
  {
    id: "wander",
    author: "WanderLens",
    avatar: "#7e57c2",
    when: "2 days ago",
    text: "That rooftop sunset shot at the start. How long did you wait for it?",
    likes: "640",
  },
  {
    id: "sleepy",
    author: "SleepyStudent",
    avatar: "#26a69a",
    when: "1 day ago",
    text: "Came for the city, stayed for the bakery at the end. Now I'm hungry.",
    likes: "510",
  },
];

export function getVideo(id: string) {
  return videos.find((video) => video.id === id);
}

export function watchCopy(video: Video): WatchCopy {
  if (video.id === "night-shift") {
    return {
      subscribers: "1.8M",
      likes: "88K",
      tags: ["citylife", "nightlife", "travelvlog"],
      description:
        "No sleep, no plan, one camera. I stayed out from sunset to sunrise to see who keeps the city running while everyone else is asleep: the ramen cook, the bridge painter, the last train driver and the first baker.",
      commentsCount: "3,518",
      elapsed: "6:12",
      length: "18:42",
      chapter: "Chapter 2: The late shift",
      comments: nightShiftComments,
      filters: ["All", "From Urban Drift", "City life", "Travel", "Relax"],
    };
  }

  return {
    subscribers: "240K",
    likes: "12K",
    tags: video.topics.map((topic) => topic.toLowerCase().replace(/[^a-z0-9]/g, "")),
    description: `${video.channel} follows this one from the first frame to the last. ${video.title}.`,
    commentsCount: "128",
    elapsed: "0:00",
    length: video.duration,
    comments: [
      {
        id: `${video.id}-note`,
        author: "ClipNotes",
        avatar: "#26c6da",
        when: "1 week ago",
        text: `Came back to this one from ${video.channel}. The pacing still holds up.`,
        likes: "86",
      },
    ],
    filters: ["All", `From ${video.channel}`, ...video.topics],
  };
}

export function upNext(video: Video, filter: string) {
  const ranked = [...videos].sort((a, b) => queueOrder.indexOf(a.id) - queueOrder.indexOf(b.id));
  const others = ranked.filter((item) => item.id !== video.id);

  if (filter === "All" || filter === "") {
    return others;
  }

  if (filter.startsWith("From ")) {
    const channel = filter.slice("From ".length);
    return others.filter((item) => item.channel === channel);
  }

  const topics =
    filter === "City life" ? ["Travel"] : filter === "Relax" ? ["Lo-fi", "Music"] : [filter];

  return others.filter((item) => item.topics.some((topic) => topics.includes(topic)));
}

export function clockToSeconds(value: string) {
  const parts = value.split(":").map((part) => Number(part));

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  return parts[0] * 60 + parts[1];
}

export function formatClock(total: number) {
  const safe = Math.max(0, Math.floor(total));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  const paddedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${paddedSeconds}`;
  }

  return `${minutes}:${paddedSeconds}`;
}
