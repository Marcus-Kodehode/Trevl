"use client";

import PhotoGrid from "@/components/shared/PhotoGrid";
import useT from "@/i18n/messages/useT";

export default function ThailandTripPage() {
  const t = useT();

  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        {t("trip.thailand2015.title")}
      </h1>
      <p className="mb-4">
        {t("trip.thailand2015.intro")}
      </p>

      <PhotoGrid
        basePath="/images/destinations/thailand-2015/"
        captionFile="/data/captions/thailand-2015.json"  // behold én fil
      />
    </main>
  );
}
