"use client";
import { Trip } from "@/types/trip";
import { useRouter } from "next/navigation";

export default function AlbumCard({ trip }: { trip: Trip }) {
  const router = useRouter();

  return (
    <div
      onClick={() => !trip.isComingSoon && router.push(`/album/${trip.id}`)}
      className={`rounded-xl p-6 bg-zinc-800 text-white shadow-md transition-all duration-200 ease-in-out 
        ${trip.isComingSoon ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-105 hover:bg-zinc-700"}`}
    >
      <h3 className="text-xl font-bold mb-2 text-lime-400">{trip.title}</h3>
      <p className="text-sm text-zinc-300">
        {trip.isComingSoon
          ? "Turen er planlagt – bilder og minner kommer snart."
          : `Se bilder og opplevelser fra turen min til ${trip.title.split("–")[0]}.`}
      </p>
    </div>
  );
}
