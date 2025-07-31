"use client";
import AlbumCard from "@/components/shared/AlbumCard";
import { Trip } from "@/types/trip";

const trips: Trip[] = [
  { id: "amsterdam", title: "Amsterdam – Juni 2025", isComingSoon: false },
  { id: "fredrikstad", title: "Fredrikstad – Juni 2025", isComingSoon: false },
  { id: "praha", title: "Praha – Oktober 2025", isComingSoon: true },
];

export default function HomePage() {
  return (
    <section>
      <h1 className="mb-10 text-4xl font-bold text-center text-lime-600">
        Feriedagboken min
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <AlbumCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
