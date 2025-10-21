"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/messages/I18nProvider";
import useT from "@/i18n/messages/useT";

type LangCode = "no" | "en" | "es-MX" | "zh-Hant" | "tr" | "sw";

const DESTS = [
  { key: "thailand", href: "/trips/thailand" },
  { key: "oslo", href: "/trips/oslo" },
  { key: "amsterdam", href: "/trips/amsterdam" },
  { key: "fredrikstad", href: "/trips/fredrikstad" },
  { key: "prague", href: "/trips/praha" },
];

const LANGS: { code: LangCode; label: string; flag: string }[] = [
  { code: "no", label: "Norsk", flag: "/images/flags/no.png" },
  { code: "en", label: "English", flag: "/images/flags/gb.png" },
  { code: "es-MX", label: "Español (MX)", flag: "/images/flags/mx.png" },
  { code: "zh-Hant", label: "繁體中文", flag: "/images/flags/tw.png" },
  { code: "tr", label: "Türkçe", flag: "/images/flags/tr.png" },
  { code: "sw", label: "Kiswahili", flag: "/images/flags/tz.png" },
];

export default function MobileMenu() {
  const t = useT();
  const { lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGS.find((l) => l.code === lang) || LANGS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setDestDropdownOpen(false);
        setLangDropdownOpen(false);
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
            <button onClick={() => setDestDropdownOpen(!destDropdownOpen)} className="text-2xl font-semibold">
              {t("header.destinations")} ▾
            </button>

            {destDropdownOpen && (
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

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 text-2xl font-semibold"
            >
              <Image
                src={currentLang.flag}
                alt={currentLang.label}
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span>{currentLang.label}</span>
              <span className="text-lg">▾</span>
            </button>

            {langDropdownOpen && (
              <div className="flex flex-col items-center gap-2 mt-2 text-lg text-zinc-300">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2 hover:text-white ${
                      lang === l.code ? "text-lime-400" : ""
                    }`}
                  >
                    <Image
                      src={l.flag}
                      alt={l.label}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
