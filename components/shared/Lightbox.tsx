"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};


export default function Lightbox({ src, alt, caption, onClose, onNext, onPrev }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full w-auto h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded"
            sizes="(max-width: 768px) 80vw, 800px"
          />
        </div>
        <p className="text-center text-sm text-zinc-300 mt-2">
            {caption}
        </p>

        {/* ← Pil venstre */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-4xl px-2"
        >
          ‹
        </button>

        {/* → Pil høyre */}
        <button
          onClick={onNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-4xl px-2"
        >
          ›
        </button>

        {/* ✕ Lukk */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl px-3 py-1 bg-zinc-800 rounded"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
