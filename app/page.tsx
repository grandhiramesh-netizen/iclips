export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Video platform
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">iClips</h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Watch and share short video clips.
        </p>
      </div>
    </div>
  );
}
