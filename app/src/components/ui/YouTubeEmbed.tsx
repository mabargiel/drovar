"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  );

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative h-full w-full cursor-pointer"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={thumbSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        onError={() =>
          setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
        }
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110">
          <Play className="h-8 w-8 fill-white text-white" />
        </div>
      </div>
    </button>
  );
}
