// components/shared/PhotoGrid.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import useT from "@/i18n/messages/useT";
import { useI18n } from "@/i18n/messages/I18nProvider";

type ImageData = {
  filename: string;
  caption: string;
};

type Props = {
  basePath: string;    // e.g. "/images/destinations/amsterdam-2025/"
  captionFile: string; // e.g. "/data/captions/amsterdam-2025.json"
};

export default function PhotoGrid({ basePath, captionFile }: Props) {
  const t = useT();
  const { lang } = useI18n();
  const [images, setImages] = useState<ImageData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const load = async () => {
      try {
        // 1) Try localized file: e.g. amsterdam-2025.no.json
        const localized = captionFile.replace(".json", `.${lang}.json`);
        const resLoc = await fetch(localized);
        if (!isCancelled && resLoc.ok) {
          setImages(await resLoc.json());
          return;
        }

        // 2) Fallback to default file (your current one)
        const resDef = await fetch(captionFile);
        if (!isCancelled && resDef.ok) {
          setImages(await resDef.json());
          return;
        }

        if (!isCancelled) setImages([]);
      } catch {
        if (!isCancelled) {
          console.warn(t("grid.loadError"));
          setImages([]);
        }
      }
    };

    load();
    return () => {
      isCancelled = true;
    };
  }, [captionFile, lang, t]);

  const handleClose = () => setActiveIndex(null);
  const handleNext  = () => setActiveIndex(i => (i !== null ? (i + 1) % images.length : null));
  const handlePrev  = () => setActiveIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null));

  if (images.length === 0) {
    return <p className="text-zinc-400">{t("grid.empty")}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map(({ filename, caption }, index) => (
          <div
            key={filename}
            className="cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative aspect-video rounded overflow-hidden">
              <Image
                src={`${basePath}${filename}`}
                alt={caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="mt-1 text-xs text-zinc-300 text-center">{caption}</p>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          src={`${basePath}${images[activeIndex].filename}`}
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
