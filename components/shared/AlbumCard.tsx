import Link from "next/link";

interface AlbumCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function AlbumCard({ title, description, link, image }: AlbumCardProps) {
  return (
    <Link
      href={link}
      className="text-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-200 min-h-[150px] flex flex-col justify-end"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-lg font-semibold text-lime-400 drop-shadow">{title}</h3>
      <p className="text-sm drop-shadow">{description}</p>
    </Link>
  );
}
