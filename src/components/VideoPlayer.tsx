"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

type Props = {
  youtubeId: string;
  thumbnail: string;
};

export default function VideoPlayer({ youtubeId, thumbnail }: Props) {
  return (
    <ReactPlayer
      src={`https://www.youtube.com/watch?v=${youtubeId}`}
      width="100%"
      height="100%"
      controls
      light={thumbnail}
    />
  );
}
