import PhotoGrid from "@/components/shared/PhotoGrid";

export default function ThailandTripPage() {
  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        Thailand – 2015
      </h1>
      <p className="mb-4">Her er bilder og opplevelser fra turen min til Thailand!</p>

      <PhotoGrid
        basePath="/images/destinations/thailand-2015/"
        captionFile="/data/captions/thailand-2015.json"
      />
    </main>
  );
}
