"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ComponentType } from "react";
import {
  GamingIcon,
  HistoryIcon,
  HomeIcon,
  LearningIcon,
  LikeIcon,
  LiveIcon,
  MusicIcon,
  NewsIcon,
  PlaylistIcon,
  ShortsIcon,
  SportsIcon,
  SubscriptionsIcon,
  TravelIcon,
  TrendingIcon,
  WatchLaterIcon,
} from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { useShell } from "@/components/shell";
import { browseTopics, homeHref, libraries, normalizeTopic, type LibraryId } from "@/lib/catalog";

type IconComponent = ComponentType<{ className?: string }>;

const exploreIcons: Record<(typeof browseTopics)[number], IconComponent> = {
  Trending: TrendingIcon,
  Music: MusicIcon,
  Live: LiveIcon,
  Gaming: GamingIcon,
  News: NewsIcon,
  Sports: SportsIcon,
  Learning: LearningIcon,
  Travel: TravelIcon,
};

const libraryItems: Array<{ id: LibraryId; icon: IconComponent }> = [
  { id: "history", icon: HistoryIcon },
  { id: "later", icon: WatchLaterIcon },
  { id: "liked", icon: LikeIcon },
  { id: "playlists", icon: PlaylistIcon },
];

function itemClass(active: boolean) {
  return `flex w-full items-center gap-6 rounded-lg px-3 py-2.5 text-sm hover:bg-[#272727] ${
    active ? "bg-[#272727] font-medium" : ""
  }`;
}

export function SidebarNav({ topic, library, q }: { topic: string; library: string; q: string }) {
  const { setNavOpen } = useShell();
  const close = () => setNavOpen(false);
  const homeActive = topic === "" && library === "";

  return (
    <div className="px-3 py-3">
      <ul className="flex flex-col gap-0.5">
        <li>
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={itemClass(homeActive)}
            onClick={close}
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link href={homeHref({ q, hash: "shorts" })} className={itemClass(false)} onClick={close}>
            <ShortsIcon />
            Shorts
          </Link>
        </li>
        <li>
          <Link
            href={homeHref({ q, library: "subscriptions" })}
            aria-current={library === "subscriptions" ? "page" : undefined}
            className={itemClass(library === "subscriptions")}
            onClick={close}
          >
            <SubscriptionsIcon />
            Subscriptions
          </Link>
        </li>
      </ul>

      <div className="mx-3 my-3 border-t border-white/10" />
      <h2 className="px-3 pb-2 text-base font-medium">You</h2>
      <ul className="flex flex-col gap-0.5">
        {libraryItems.map((item) => {
          const Icon = item.icon;
          const active = library === item.id;

          return (
            <li key={item.id}>
              <Link
                href={homeHref({ q, library: item.id })}
                aria-current={active ? "page" : undefined}
                className={itemClass(active)}
                onClick={close}
              >
                <Icon />
                {libraries[item.id].title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mx-3 my-3 border-t border-white/10" />
      <h2 className="px-3 pb-2 text-base font-medium">Explore</h2>
      <ul className="flex flex-col gap-0.5">
        {browseTopics.map((name) => {
          const Icon = exploreIcons[name];
          const active = library === "" && topic === name;

          return (
            <li key={name}>
              <Link
                href={homeHref({ q, topic: name })}
                aria-current={active ? "page" : undefined}
                className={itemClass(active)}
                onClick={close}
              >
                <Icon />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mx-3 my-3 border-t border-white/10" />
      <h2 className="px-3 pb-2 text-base font-medium">More from iclips</h2>
      <div className="flex items-start gap-3 rounded-lg px-3 py-2">
        <LogoMark className="size-9 rounded-lg" />
        <div>
          <p className="text-sm font-semibold">iclips Plus</p>
          <p className="text-xs leading-5 text-muted">No ads. Downloads. All of it.</p>
        </div>
      </div>
    </div>
  );
}

function SidebarFrame({ topic, library, q }: { topic: string; library: string; q: string }) {
  const pathname = usePathname();
  const { navOpen, setNavOpen } = useShell();

  if (pathname.startsWith("/watch/")) {
    return null;
  }

  return (
    <>
      {navOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-14 z-30 bg-black/60 lg:hidden"
          onClick={() => setNavOpen(false)}
        />
      ) : null}
      <aside
        id="sidebar"
        className={`nav-scroll fixed top-14 bottom-0 left-0 z-40 w-60 overflow-y-auto bg-background pb-6 transition-transform lg:translate-x-0 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav aria-label="Primary">
          <SidebarNav topic={topic} library={library} q={q} />
        </nav>
      </aside>
    </>
  );
}

export function Sidebar() {
  const params = useSearchParams();

  return (
    <SidebarFrame
      topic={normalizeTopic(params.get("topic") ?? "")}
      library={params.get("library") ?? ""}
      q={params.get("q") ?? ""}
    />
  );
}

export function SidebarFallback() {
  return <SidebarFrame topic="" library="" q="" />;
}
