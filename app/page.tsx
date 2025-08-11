"use client";
import AlbumCard from "@/components/shared/AlbumCard";
import useT from "@/i18n/messages/useT";

export default function HomePage() {
  const t = useT();

  return (
    <main className="text-white p-6">
      <h1 className="text-3xl font-bold text-center text-lime-500 mb-10">
        {t("home.title")}
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">

        <AlbumCard
          title="Thailand – 2015"
          description={t("home.thailand_desc")}
          link="/trips/thailand"
          image="/images/cards/thailand.png"
        />

        <AlbumCard
          title="Oslo – Juni/Juli 2024"
          description={t("home.oslo_desc")}
          link="/trips/oslo"
          image="/images/cards/oslo.png"
        />

        <AlbumCard
          title="Amsterdam – Juni 2025"
          description={t("home.amsterdam_desc")}
          link="/trips/amsterdam"
          image="/images/cards/amsterdam.png"
        />

        <AlbumCard
          title="Fredrikstad – Juli 2025"
          description={t("home.fredrikstad_desc")}
          link="/trips/fredrikstad"
          image="/images/cards/fredrikstad.png"
        />

        <AlbumCard
          title="Praha – Oktober 2025"
          description={t("home.coming_soon")}
          link="/trips/praha"
          image="/images/cards/praha.png"
          isComingSoon
        />
      </div>
    </main>
  );
}
