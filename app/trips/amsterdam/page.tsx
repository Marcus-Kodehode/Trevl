import PhotoGrid from "@/components/shared/PhotoGrid";

export default function AmsterdamTripPage() {
  return (
    <main className="min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-lime-500 mb-6">
        Amsterdam – Juni 2025
      </h1>
      <p className="mb-4">Her kommer bilder og opplevelser fra turen min til Amsterdam!</p>

      <PhotoGrid
        basePath="/images/destinations/amsterdam-2025/amsterdam"
        count={32}
        altPrefix="Amsterdam bilde"
      />
    </main>
  );
}
