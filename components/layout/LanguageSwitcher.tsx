"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/messages/I18nProvider";

type LangCode = "no" | "en" | "es-MX" | "zh-Hant" | "tr" | "sw";

const LANGS: { code: LangCode; label: string; flag: string }[] = [
  { code: "no", label: "Norsk", flag: "/images/flags/no.png" },
  { code: "en", label: "English", flag: "/images/flags/gb.png" },
  { code: "es-MX", label: "Español (MX)", flag: "/images/flags/mx.png" },
  { code: "zh-Hant", label: "繁體中文", flag: "/images/flags/tw.png" },
  { code: "tr", label: "Türkçe", flag: "/images/flags/tr.png" },
  { code: "sw", label: "Kiswahili", flag: "/images/flags/tz.png" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGS.find((l) => l.code === lang) || LANGS[0];

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-lime-400 transition"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.label}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="text-sm">{currentLang.label}</span>
        <span className="text-xs">▾</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-zinc-800 rounded shadow-lg py-2 w-40">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-700 transition ${
                lang === l.code ? "bg-zinc-700" : ""
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
  );
}
