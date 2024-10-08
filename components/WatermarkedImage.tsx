import Image from 'next/image';
import { useState } from 'react';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function WatermarkedImage({ src, alt, width, height, className }: WatermarkedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={() => setImageLoaded(true)}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
      />
      {imageLoaded && (
        <Image
          src="/watermark.png"
          alt="Watermark"
          layout="fill"
          objectFit="contain"
          className="pointer-events-none opacity-50"
        />
      )}
    </div>
  );
}