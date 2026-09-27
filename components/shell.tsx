"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ShellState = {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
};

const ShellContext = createContext<ShellState | null>(null);

export function Shell({ children }: { children: ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <ShellContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </ShellContext.Provider>
  );
}

export function useShell() {
  const value = useContext(ShellContext);

  if (!value) {
    throw new Error("useShell must be used within Shell.");
  }

  return value;
}
