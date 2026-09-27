import Link from "next/link";
import { UserIcon, VerifiedIcon } from "@/components/icons";
import { ClipThumbnail } from "@/components/clip-thumbnail";
import type { Short, Video } from "@/lib/catalog";

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="min-w-0">
      <Link href={`/watch/${video.id}`} className="group block">
        <ClipThumbnail id={video.id} />
        <div className="mt-3 flex gap-3">
        <span
          className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-white"
          style={{ backgroundColor: video.avatar }}
        >
          <UserIcon className="size-5" />
          <span className="sr-only">{video.channel}</span>
        </span>
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-[15px] leading-5 font-medium">{video.title}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted">
            <span className="truncate">{video.channel}</span>
            <VerifiedIcon className="size-3.5 shrink-0 text-[#aaa]" />
            <span className="sr-only">Verified</span>
          </p>
          <p className="text-sm text-muted">
            {video.views} views · {video.published}
          </p>
        </div>
        </div>
      </Link>
    </article>
  );
}

export function ShortCard({ item }: { item: Short }) {
  return (
    <article className="group min-w-0">
      <ClipThumbnail id={item.id} tall />
      <h3 className="mt-2 line-clamp-2 text-sm leading-5 font-medium">{item.title}</h3>
      <p className="text-xs text-muted">{item.views} views</p>
    </article>
  );
}
