"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">Trevl</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Hjem</Link>
          <Link href="/destinations" className="hover:underline">Destinasjoner</Link>
        </nav>
      </div>
    </header>
  );
}
