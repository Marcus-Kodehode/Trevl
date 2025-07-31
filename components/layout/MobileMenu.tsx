"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative sm:hidden" ref={menuRef}>
      {/* Kebabmeny-ikon */}
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Fullskjermsmeny */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950 text-white flex flex-col items-center justify-center gap-6 px-6 py-8">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold"
          >
            Hjem
          </Link>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-2xl font-semibold"
            >
              Destinasjoner ▾
            </button>

            {dropdownOpen && (
              <div className="flex flex-col items-center gap-2 mt-2 text-lg text-zinc-300">
                <Link
                  href="/trips/amsterdam"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-white"
                >
                  Amsterdam
                </Link>
                <Link
                  href="/trips/fredrikstad"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-white"
                >
                  Fredrikstad
                </Link>
                {/* Flere destinasjoner her */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
