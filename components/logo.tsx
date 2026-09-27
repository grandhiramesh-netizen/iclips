import Link from "next/link";
import { PlayIcon } from "@/components/icons";

export function LogoMark({ className = "size-8 rounded-[10px]" }: { className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center bg-accent text-white ${className}`}>
      <PlayIcon className="ml-0.5 size-4" />
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="iclips, home">
      <LogoMark />
      <span className="hidden text-[1.35rem] leading-none font-bold tracking-tight sm:inline">
        iclips
      </span>
    </Link>
  );
}
