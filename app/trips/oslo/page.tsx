import PhotoGrid from "@/components/shared/PhotoGrid";

export default function OsloTripPage() {
  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        Oslo – Juli/Juni 2024
      </h1>
      <p className="mb-4">Her kommer bilder og opplevelser fra turen min til Oslo!</p>

      <PhotoGrid
        basePath="/images/destinations/oslo-2024/"
        captionFile="/data/captions/oslo-2024.json"
      />
    </main>
  );
}
