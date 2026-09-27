import { ShortsIcon } from "@/components/icons";
import { ShortCard, VideoCard } from "@/components/clip-card";
import type { Short, Video } from "@/lib/catalog";

export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  );
}

export function ShortsRow({ shorts }: { shorts: Short[] }) {
  return (
    <section id="shorts" className="scroll-mt-28 px-4 pt-10 pb-12 sm:px-6" aria-labelledby="shorts-heading">
      <h2 id="shorts-heading" className="mb-4 flex items-center gap-2 text-xl font-semibold">
        <ShortsIcon className="size-6 text-white" />
        Shorts
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {shorts.map((item) => (
          <li key={item.id}>
            <ShortCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
