"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/messages/I18nProvider";

type LangCode = "no" | "en" | "es" | "zh-Hant";

const LANGS: { code: LangCode; label: string; flag: string }[] = [
  { code: "no", label: "Norsk", flag: "/images/flags/no.png" },
  { code: "en", label: "English", flag: "/images/flags/gb.png" },
  { code: "es", label: "Español", flag: "/images/flags/es.png" },
  { code: "zh-Hant", label: "繁體中文", flag: "/images/flags/tw.png" }, // ⬅️ Taiwan
];

export default function LanguageSwitcher({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-2">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`flex items-center gap-2 px-2 py-1 rounded transition ${
            lang === l.code ? "bg-zinc-800" : "hover:bg-zinc-800/60"
          }`}
          title={l.label}
        >
          <Image
            src={l.flag}
            alt={l.label}
            width={20}
            height={20}
            className="rounded-sm"
          />
          {!compact && <span className="text-sm">{l.label}</span>}
        </button>
      ))}
    </div>
  );
}
