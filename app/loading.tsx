export default function Loading() {
  return (
    <div
      className="flex flex-1 items-center justify-center px-6 py-24"
      role="status"
      aria-live="polite"
    >
      <p className="text-zinc-600 dark:text-zinc-400">Loading…</p>
    </div>
  );
}
