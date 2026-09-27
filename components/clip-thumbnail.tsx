import Image from "next/image";

export function ClipThumbnail({ id, tall = false }: { id: string; tall?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-black ${
        tall ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <Image
        src={`/thumbnails/${id}.png`}
        alt=""
        fill
        unoptimized
        className="object-cover transition duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}
