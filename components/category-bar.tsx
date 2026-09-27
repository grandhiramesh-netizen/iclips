"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { chipTopics, homeHref } from "@/lib/catalog";

export function CategoryBar({ topic, q }: { topic: string; q: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const activeTopic = topic === "" || topic === "Trending" ? "All" : topic;

  return (
    <div className="sticky top-14 z-20 bg-background">
      <div className="flex items-center gap-2 px-4 py-3 sm:px-6">
        <div
          ref={scroller}
          className="chip-row flex min-w-0 flex-1 gap-3 overflow-x-auto"
        >
          {chipTopics.map((chip) => {
            const active = chip === activeTopic;

            return (
              <Link
                key={chip}
                href={homeHref({ q, topic: chip === "All" ? undefined : chip })}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-sm ${
                  active
                    ? "bg-white font-medium text-black"
                    : "bg-[#272727] hover:bg-[#3f3f3f]"
                }`}
              >
                {chip}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Show more topics"
          className="grid size-9 shrink-0 place-items-center rounded-full hover:bg-white/10"
          onClick={() => scroller.current?.scrollBy({ left: 220, behavior: "smooth" })}
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
