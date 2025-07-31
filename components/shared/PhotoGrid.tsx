// app/trips/amsterdam/components/PhotoGrid.tsx
"use client";
import Image from "next/image";

const imageCount = 32;
const basePath = "/images/destinations/amsterdam-2025";

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: imageCount }).map((_, index) => {
        const imgNum = index + 1;
        const src = `${basePath}/amsterdam${imgNum}.webp`;
        return (
          <div key={src} className="relative aspect-video rounded overflow-hidden">
            <Image
              src={src}
              alt={`Amsterdam bilde ${imgNum}`}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
