import { useState } from 'react'
import Image from 'next/image'

export default function BlurImage({ src, width, height, className, style }: { src: string, width: number, height: number, className?: string, style?: any }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 flex w-full items-center justify-center overflow-hidden bg-transparent xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={src}
        layout="raw"
        style={{ objectFit: "cover", ...style }}
        loading="eager"
        width={width}
        height={height}
        className={`
          ${className}
          duration-300 ease-in-out group-hover:opacity-75
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
        onLoadingComplete={() => setLoading(false)}
        priority
      />
    </div>
  );
}