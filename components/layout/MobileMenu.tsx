"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import useT from "@/i18n/messages/useT";

const DESTS = [
  { key: "thailand", href: "/trips/thailand" },
  { key: "oslo", href: "/trips/oslo" },
  { key: "amsterdam", href: "/trips/amsterdam" },
  { key: "fredrikstad", href: "/trips/fredrikstad" },
  // { key: "prague", href: "/trips/praha" },
];

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
                {DESTS.map(d => (
                  <Link
                    key={d.key}
                    href={d.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    {t(`nav.${d.key}`)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <LanguageSwitcher compact />
        </div>
      )}
    </div>
  );
}
