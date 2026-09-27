"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CloseIcon, MicIcon, SearchIcon } from "@/components/icons";
import { homeHref } from "@/lib/catalog";

export function SearchForm() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const topic = params.get("topic") ?? "";

  return (
    <form action="/" role="search" className="flex w-full items-center gap-2">
      {topic ? <input type="hidden" name="topic" value={topic} /> : null}
      <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-full border border-white/15 bg-[#121212] focus-within:border-[#3ea6ff]">
        <label className="sr-only" htmlFor="search">
          Search clips, creators, topics
        </label>
        <input
          id="search"
          name="q"
          key={q}
          defaultValue={q}
          placeholder="Search clips, creators, topics"
          enterKeyHint="search"
          className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[#888]"
        />
        {q ? (
          <Link
            href={homeHref({ topic })}
            aria-label="Clear search"
            className="grid size-8 place-items-center text-[#aaa] hover:text-white"
          >
            <CloseIcon className="size-4" />
          </Link>
        ) : null}
        <button
          type="submit"
          aria-label="Search"
          className="grid h-10 w-14 shrink-0 place-items-center border-l border-white/10 bg-[#222] hover:bg-[#303030]"
        >
          <SearchIcon className="size-5" />
        </button>
      </div>
      <button
        type="button"
        aria-label="Voice search"
        className="hidden size-10 shrink-0 place-items-center rounded-full bg-[#181818] hover:bg-[#272727] sm:grid"
      >
        <MicIcon className="size-5" />
      </button>
    </form>
  );
}

export function SearchFormFallback() {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-10 min-w-0 flex-1 rounded-full border border-white/15 bg-[#121212]" />
      <div className="hidden size-10 rounded-full bg-[#181818] sm:block" />
    </div>
  );
}
