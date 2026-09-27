import { CategoryBar } from "@/components/category-bar";
import { ShortsRow, VideoGrid } from "@/components/home-feed";
import {
  emptyCopy,
  isLibraryId,
  libraries,
  normalizeTopic,
  readParam,
  selectClips,
} from "@/lib/catalog";

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const q = readParam(searchParams, "q");
  const topic = normalizeTopic(readParam(searchParams, "topic"));
  const library = readParam(searchParams, "library");

  if (isLibraryId(library)) {
    const shelf = libraries[library];

    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{shelf.title}</h1>
        <p className="mt-2 max-w-md text-muted">{shelf.body}</p>
      </div>
    );
  }

  const { videos, shorts } = selectClips(topic, q);
  const isEmpty = videos.length === 0 && shorts.length === 0;

  return (
    <>
      <h1 className="sr-only">Home</h1>
      <CategoryBar topic={topic} q={q} />
      {isEmpty ? (
        <p className="px-6 py-24 text-center text-muted">{emptyCopy(topic, q)}</p>
      ) : (
        <>
          {videos.length > 0 ? (
            <div className={shorts.length === 0 ? "pb-12" : undefined}>
              <VideoGrid videos={videos} />
            </div>
          ) : null}
          {shorts.length > 0 ? <ShortsRow shorts={shorts} /> : null}
        </>
      )}
    </>
  );
}
