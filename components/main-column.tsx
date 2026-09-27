"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function MainColumn({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const theater = pathname.startsWith("/watch/");

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`flex min-h-dvh min-w-0 flex-col pt-14 outline-none ${theater ? "" : "lg:pl-60"}`}
    >
      {children}
    </main>
  );
}
