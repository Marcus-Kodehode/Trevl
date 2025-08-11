import AlbumCard from "@/components/shared/AlbumCard";

export default function HomePage() {
  return (
    <main className=" text-white p-6">
      <h1 className="text-3xl font-bold text-center text-lime-500 mb-10">
        Feriedagboken min
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        
        <AlbumCard
          title="Thailand – 2015"
          description="Se bilder og opplevelser fra turen min til Thailand."
          link="/trips/thailand"
          image="/images/cards/thailand.png"
        />
        
        <AlbumCard
          title="Oslo – Juni/Juli 2024"
          description="Se bilder og opplevelser fra turen min til Oslo."
          link="/trips/oslo"
          image="/images/cards/oslo.png"
        />

        <AlbumCard
          title="Amsterdam – Juni 2025"
          description="Se bilder og opplevelser fra turen min til Amsterdam."
          link="/trips/amsterdam"
          image="/images/cards/amsterdam.png"
        />
        <AlbumCard
          title="Fredrikstad – Juli 2025"
          description="Se bilder og opplevelser fra turen min til Fredrikstad."
          link="/trips/fredrikstad"
          image="/images/cards/fredrikstad.png"
        />

        <AlbumCard
          title="Praha – Oktober 2025"
          description="Turen er planlagt – bilder og minner kommer snart."
          link="/trips/praha"
          image="/images/cards/praha.png"
          isComingSoon
        />
      </div>
    </main>
  );
}
