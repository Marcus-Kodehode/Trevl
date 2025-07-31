"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lukk dropdown om man klikker utenfor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-zinc-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-lime-400 tracking-tight">
          Trevl
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm relative" ref={dropdownRef}>
          <Link href="/" className="hover:text-lime-400 transition">
            Hjem
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-lime-400 transition"
          >
            Destinasjoner ▾
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-zinc-800 rounded shadow-lg py-2 w-48">
              <Link
                href="/trips/amsterdam"
                className="block px-4 py-2 text-sm hover:bg-zinc-700"
                onClick={() => setIsOpen(false)}
              >
                Amsterdam
              </Link>
              <Link
                href="/trips/fredrikstad"
                className="block px-4 py-2 text-sm hover:bg-zinc-700"
                onClick={() => setIsOpen(false)}
              >
                Fredrikstad
              </Link>
            </div>
          )}
        </nav>

        {/* Mobilnavigasjon */}
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
