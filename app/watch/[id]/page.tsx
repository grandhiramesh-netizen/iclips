import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WatchScreen } from "@/components/watch-screen";
import { videos } from "@/lib/catalog";
import { getVideo, watchCopy } from "@/lib/watch";

export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export async function generateMetadata(props: PageProps<"/watch/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const video = getVideo(id);

  if (!video) {
    return { title: "Clip" };
  }

  return { title: video.title, description: watchCopy(video).description };
}

export default async function WatchPage(props: PageProps<"/watch/[id]">) {
  const { id } = await props.params;
  const video = getVideo(id);

  if (!video) {
    notFound();
  }

  return <WatchScreen key={video.id} video={video} copy={watchCopy(video)} />;
}
