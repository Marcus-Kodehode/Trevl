"use client";

import PhotoGrid from "@/components/shared/PhotoGrid";
import useT from "@/i18n/messages/useT";

export default function FredrikstadTripPage() {
  const t = useT();

  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        {t("trip.fredrikstad2025.title")}
      </h1>
      <p className="mb-4">
        {t("trip.fredrikstad2025.intro")}
      </p>

      <PhotoGrid
        basePath="/images/destinations/fredrikstad-2025/"
        captionFile="/data/captions/fredrikstad-2025.json"
      />
    </main>
  );
}
