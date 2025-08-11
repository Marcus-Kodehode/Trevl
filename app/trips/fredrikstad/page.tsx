import PhotoGrid from "@/components/shared/PhotoGrid";

export default function FredrikstadTripPage() {
  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        Fredrikstad – Juli 2025
      </h1>
      <p className="mb-4">Her er bilder og opplevelser fra turen min til Fredrikstad!</p>

      <PhotoGrid
        basePath="/images/destinations/fredrikstad-2025/"
        captionFile="/data/captions/fredrikstad-2025.json"
      />
    </main>
  );
}
