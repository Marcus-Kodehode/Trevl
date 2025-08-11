// components/layout/MobileMenu.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import useT from "@/i18n/messages/useT";

export default function MobileMenu() {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative sm:hidden" ref={menuRef}>
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950 text-white flex flex-col items-center justify-center gap-6 px-6 py-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold">
            {t("header.home")}
          </Link>

          <div className="flex flex-col items-center gap-2">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-2xl font-semibold">
              {t("header.destinations")} ▾
            </button>

            {dropdownOpen && (
              <div className="flex flex-col items-center gap-2 mt-2 text-lg text-zinc-300">
                <Link href="/trips/thailand" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Thailand
                </Link>
                <Link href="/trips/oslo" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Oslo
                </Link>
                <Link href="/trips/amsterdam" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Amsterdam
                </Link>
                <Link href="/trips/fredrikstad" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Fredrikstad
                </Link>
              </div>
            )}
          </div>

          {/* Språkvalg (kompakt) */}
          <LanguageSwitcher compact />
        </div>
      )}
    </div>
  );
}
