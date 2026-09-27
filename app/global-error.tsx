"use client";

import { useEffect } from "react";
import { fontVariables } from "@/app/fonts";
import "./globals.css";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            iClips hit an unexpected error. Try again.
          </p>
          {error.digest ? (
            <p className="font-mono text-xs text-zinc-500">
              Error ID: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => retry()}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
