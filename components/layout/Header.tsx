"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import useT from "@/i18n/messages/useT";
import LanguageSwitcher from "./LanguageSwitcher";

const DESTS = [
  { key: "thailand", href: "/trips/thailand" },
  { key: "oslo", href: "/trips/oslo" },
  { key: "amsterdam", href: "/trips/amsterdam" },
  { key: "fredrikstad", href: "/trips/fredrikstad" },
  // { key: "prague", href: "/trips/praha" }, // legg til når siden er klar
];

export default function Header() {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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

        <nav className="hidden sm:flex items-center gap-6 text-sm relative" ref={dropdownRef}>
          <Link href="/" className="hover:text-lime-400 transition">
            {t("header.home")}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-lime-400 transition"
            aria-haspopup="menu"
            aria-expanded={isOpen}
          >
            {t("header.destinations")} ▾
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-zinc-800 rounded shadow-lg py-2 w-48">
              {DESTS.map(d => (
                <Link
                  key={d.key}
                  href={d.href}
                  className="block px-4 py-2 text-sm hover:bg-zinc-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${d.key}`)}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>

        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
