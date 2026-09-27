"use client";

import { useEffect } from "react";

export default function Error({
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
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        This page could not be loaded. Try again.
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
    </div>
  );
}
