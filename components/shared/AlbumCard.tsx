// components/shared/AlbumCard.tsx
import Link from "next/link";
import useT from "@/i18n/messages/useT";

interface AlbumCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  isComingSoon?: boolean;
}

export default function AlbumCard({
  title,
  description,
  link,
  image,
  isComingSoon = false,
}: AlbumCardProps) {
  const t = useT();

  const cardContent = (
    <div
      className="relative text-white rounded-xl p-4 min-h-[150px] flex flex-col justify-end"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay when trip is not available yet */}
      {isComingSoon && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
          <p className="text-white text-xl font-semibold">
            {t("card.comingSoon")}
          </p>
        </div>
      )}

      <div className={isComingSoon ? "opacity-40 pointer-events-none" : ""}>
        <h3 className="text-lg font-semibold text-lime-400 drop-shadow">
          {title}
        </h3>
        <p className="text-sm drop-shadow">{description}</p>
      </div>
    </div>
  );

  return isComingSoon ? (
    <div className="shadow-md rounded-xl">{cardContent}</div>
  ) : (
    <Link href={link} className="shadow-md hover:shadow-lg transition duration-200 rounded-xl">
      {cardContent}
    </Link>
  );
}
