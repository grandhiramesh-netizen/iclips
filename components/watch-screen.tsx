"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  CaptionsIcon,
  ClipIcon,
  FullscreenIcon,
  LikeIcon,
  MiniplayerIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  SaveIcon,
  SettingsIcon,
  ShareIcon,
  ThumbDownIcon,
  UserIcon,
  VerifiedIcon,
  VolumeIcon,
} from "@/components/icons";
import { homeHref, type Video } from "@/lib/catalog";
import {
  clockToSeconds,
  formatClock,
  upNext,
  type Comment,
  type WatchCopy,
} from "@/lib/watch";

export function WatchScreen({ video, copy }: { video: Video; copy: WatchCopy }) {
  const [filter, setFilter] = useState(copy.filters[0] ?? "All");
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [newestFirst, setNewestFirst] = useState(false);
  const [draft, setDraft] = useState("");
  const [comments, setComments] = useState<Comment[]>(copy.comments);
  const queue = upNext(video, filter);
  const visibleComments = newestFirst ? [...comments].reverse() : comments;

  return (
    <div className="grid items-start gap-6 px-4 py-4 xl:grid-cols-[minmax(0,1fr)_400px] xl:px-6">
      <div className="min-w-0">
        <Player
          id={video.id}
          title={video.title}
          elapsed={copy.elapsed}
          length={copy.length}
          chapter={copy.chapter}
        />
        <h1 className="mt-3 text-xl font-semibold tracking-tight">{video.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-full text-white"
            style={{ backgroundColor: video.avatar }}
          >
            <UserIcon className="size-5" />
            <span className="sr-only">{video.channel}</span>
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-1 font-medium">
              {video.channel}
              <VerifiedIcon className="size-3.5 text-[#aaa]" />
              <span className="sr-only">Verified</span>
            </p>
            <p className="text-xs text-muted">{copy.subscribers} subscribers</p>
          </div>
          <button
            type="button"
            aria-pressed={subscribed}
            onClick={() => setSubscribed((value) => !value)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              subscribed ? "bg-[#272727] text-white" : "bg-white text-black"
            }`}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
          <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
            <div className="flex overflow-hidden rounded-full bg-[#272727]">
              <button
                type="button"
                aria-pressed={liked}
                onClick={() => {
                  setLiked((value) => !value);
                  setDisliked(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-sm ${liked ? "text-white" : ""}`}
              >
                <LikeIcon className="size-5" />
                {copy.likes}
              </button>
              <button
                type="button"
                aria-pressed={disliked}
                aria-label="Dislike"
                onClick={() => {
                  setDisliked((value) => !value);
                  setLiked(false);
                }}
                className={`border-l border-white/15 px-3 py-2 ${disliked ? "text-white" : ""}`}
              >
                <ThumbDownIcon className="size-5" />
              </button>
            </div>
            <ActionButton label="Share">
              <ShareIcon className="size-5" />
              Share
            </ActionButton>
            <ActionButton label="Clip">
              <ClipIcon className="size-5" />
              Clip
            </ActionButton>
            <ActionButton label={saved ? "Saved" : "Save"} pressed={saved} onClick={() => setSaved((value) => !value)}>
              <SaveIcon className="size-5" />
              {saved ? "Saved" : "Save"}
            </ActionButton>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#272727] px-3 py-3 text-sm">
          <p className="font-medium">
            {video.views} views · {video.published}{" "}
            {copy.tags.map((tag) => (
              <Link key={tag} href={homeHref({ q: tag })} className="text-[#3ea6ff]">
                #{tag}{" "}
              </Link>
            ))}
          </p>
          <p className={`mt-2 leading-6 text-white/90 ${expanded ? "" : "line-clamp-2"}`}>
            {copy.description}
          </p>
          <button
            type="button"
            className="mt-1 font-medium"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>

        <section className="mt-6" aria-labelledby="comments-heading">
          <div className="flex flex-wrap items-center gap-4">
            <h2 id="comments-heading" className="text-lg font-semibold">
              {copy.commentsCount} Comments
            </h2>
            <button
              type="button"
              className="text-sm font-medium"
              onClick={() => setNewestFirst((value) => !value)}
            >
              Sort by: {newestFirst ? "Newest" : "Top comments"}
            </button>
          </div>
          <form
            className="mt-4 flex gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const text = draft.trim();
              if (!text) {
                return;
              }
              setComments((current) => [
                {
                  id: `you-${current.length}`,
                  author: "You",
                  avatar: "#e040a0",
                  when: "Just now",
                  text,
                  likes: "0",
                },
                ...current,
              ]);
              setDraft("");
              setNewestFirst(true);
            }}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e040a0] text-white">
              <UserIcon className="size-5" />
            </span>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Add a comment..."
              aria-label="Add a comment"
              className="h-10 min-w-0 flex-1 border-b border-white/20 bg-transparent text-sm outline-none placeholder:text-[#888] focus:border-white"
            />
          </form>
          <ul className="mt-6 flex flex-col gap-5">
            {visibleComments.map((comment) => (
              <li key={comment.id} className="flex gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full text-white"
                  style={{ backgroundColor: comment.avatar }}
                >
                  <UserIcon className="size-5" />
                  <span className="sr-only">{comment.author}</span>
                </span>
                <div className="min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{comment.author}</span>{" "}
                    <span className="text-muted">{comment.when}</span>
                  </p>
                  <p className="mt-1 text-sm leading-6">{comment.text}</p>
                  <p className="mt-1 flex items-center gap-3 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <LikeIcon className="size-4" />
                      {comment.likes}
                    </span>
                    <button type="button" className="font-medium text-white">
                      Reply
                    </button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside aria-label="Up next">
        <div className="chip-row flex gap-2 overflow-x-auto pb-3">
          {copy.filters.map((name) => {
            const active = name === filter;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(name)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-sm ${
                  active ? "bg-white font-medium text-black" : "bg-[#272727] hover:bg-[#3f3f3f]"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
        {queue.length === 0 ? (
          <p className="px-1 py-6 text-sm text-muted">No more clips in {filter}.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {queue.map((item) => (
              <li key={item.id}>
                <Link href={`/watch/${item.id}`} className="group grid grid-cols-[168px_minmax(0,1fr)] gap-2">
                  <span className="relative block aspect-video overflow-hidden rounded-lg bg-black">
                    <Image
                      src={`/thumbnails/${item.id}.png`}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="line-clamp-2 text-sm leading-5 font-medium">{item.title}</span>
                    <span className="mt-1 block truncate text-xs text-muted">{item.channel}</span>
                    <span className="block text-xs text-muted">
                      {item.views} views · {item.published}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

function ActionButton({
  label,
  pressed,
  onClick,
  children,
}: {
  label: string;
  pressed?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-[#272727] px-3 py-2 text-sm hover:bg-[#3a3a3a]"
    >
      {children}
    </button>
  );
}

function Player({
  id,
  title,
  elapsed,
  length,
  chapter,
}: {
  id: string;
  title: string;
  elapsed: string;
  length: string;
  chapter?: string;
}) {
  const duration = clockToSeconds(length);
  const [seconds, setSeconds] = useState(() => Math.min(clockToSeconds(elapsed), duration));
  const [playing, setPlaying] = useState(false);
  const progress = duration === 0 ? 0 : Math.min(100, (seconds / duration) * 100);

  useEffect(() => {
    if (!playing) {
      return;
    }

    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current >= duration) {
          setPlaying(false);
          return duration;
        }
        return current + 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [duration, playing]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
      <Image
        src={`/thumbnails/${id}.png`}
        alt=""
        fill
        unoptimized
        className="origin-top object-cover"
        style={{ transform: "scaleY(1.22)" }}
      />
      <button
        type="button"
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        aria-pressed={playing}
        onClick={() => setPlaying((value) => !value)}
        className="absolute inset-x-0 top-0 bottom-16 grid place-items-center"
      >
        <span className="grid size-16 place-items-center rounded-full bg-black/50 text-white">
          {playing ? <PauseIcon className="size-8" /> : <PlayIcon className="ml-1 size-8" />}
        </span>
      </button>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-3 pt-10 pb-2">
        <button
          type="button"
          aria-label="Seek"
          className="mb-2 block h-1 w-full rounded-full bg-white/30"
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
            setSeconds(Math.round(ratio * duration));
          }}
        >
          <span className="block h-full rounded-full bg-accent" style={{ width: `${progress}%` }} />
        </button>
        <div className="flex items-center gap-1.5 text-xs sm:gap-2">
          <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((value) => !value)}>
            {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
          </button>
          <button type="button" aria-label="Next clip">
            <NextIcon className="size-5" />
          </button>
          <button type="button" aria-label="Mute">
            <VolumeIcon className="size-5" />
          </button>
          <span className="tabular-nums">
            {formatClock(seconds)} / {length}
          </span>
          {chapter ? <span className="hidden truncate text-white/80 sm:inline">{chapter}</span> : null}
          <span className="ml-auto flex items-center gap-1.5">
            <button type="button" aria-label="Captions">
              <CaptionsIcon className="size-5" />
            </button>
            <button type="button" aria-label="Settings">
              <SettingsIcon className="size-5" />
            </button>
            <button type="button" aria-label="Miniplayer" className="hidden sm:inline-flex">
              <MiniplayerIcon className="size-5" />
            </button>
            <button type="button" aria-label="Fullscreen">
              <FullscreenIcon className="size-5" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
