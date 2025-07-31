"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = {
  basePath: string;
  count: number;
  altPrefix?: string;
};

export default function PhotoGrid({ basePath, count, altPrefix = "Bilde" }: Props) {
  const images = Array.from({ length: count }, (_, i) => ({
    src: `${basePath}${i + 1}.webp`,
    caption: `${altPrefix} ${i + 1}`,
  }));

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = () => setActiveIndex(null);
  const handleNext = () =>
    setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
  const handlePrev = () =>
    setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={img.src}
            className="relative aspect-video rounded overflow-hidden cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          src={images[activeIndex].src}
          alt={images[activeIndex].caption}
          caption={images[activeIndex].caption}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
