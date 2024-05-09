import Image from "next/image";

export default function YouTubeVideo(video: any) {
  return (
    <div className="thumbnail bg-gray-200">
      <div className="relative h-48 w-full bg-white">
        <Image
          src={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
      </div>
      <div className="h-28 bg-white px-4 -mt-4">
        <h3 className="pt-4">{video?.snippet?.title}</h3>
      </div>
    </div>
  )
}