"use client";

import { usePathname } from "next/navigation";
import { MenuIcon } from "@/components/icons";
import { useShell } from "@/components/shell";

export function MenuButton() {
  const pathname = usePathname();
  const { navOpen, setNavOpen } = useShell();

  if (pathname.startsWith("/watch/")) {
    return null;
  }

  return (
    <button
      type="button"
      className="grid size-10 place-items-center rounded-full hover:bg-white/10 lg:hidden"
      aria-expanded={navOpen}
      aria-label={navOpen ? "Close menu" : "Open menu"}
      onClick={() => setNavOpen(!navOpen)}
    >
      <MenuIcon />
    </button>
  );
}
