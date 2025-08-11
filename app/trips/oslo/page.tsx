"use client";

import PhotoGrid from "@/components/shared/PhotoGrid";
import useT from "@/i18n/messages/useT";

export default function OsloTripPage() {
  const t = useT();

  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        {t("trip.oslo2024.title")}
      </h1>
      <p className="mb-4">
        {t("trip.oslo2024.intro")}
      </p>

      <PhotoGrid
        basePath="/images/destinations/oslo-2024/"
        captionFile="/data/captions/oslo-2024.json"
      />
    </main>
  );
}
