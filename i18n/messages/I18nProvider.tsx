"use client";

import React, { createContext, useMemo, useState } from "react";
import no from "./no.json";
import en from "./en.json";
import esMX from "./es-MX.json";
import zhHant from "./zh-Hant.json";
import tr from "./tr.json";
import sw from "./sw.json";

type Lang = "no" | "en" | "es-MX" | "zh-Hant" | "tr" | "sw";
type Dict = Record<string, unknown>;

// Simple dot-path getter
function get(obj: Dict, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (
      acc &&
      typeof acc === "object" &&
      key in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

const DICTS: Record<Lang, Dict> = { no, en, "es-MX": esMX, "zh-Hant": zhHant, tr, sw };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({
  children,
  defaultLang = "no",
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  // Persist choice locally
  React.useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang | null)
        : null;
    if (
      stored === "no" ||
      stored === "en" ||
      stored === "es-MX" ||
      stored === "zh-Hant" ||
      stored === "tr" ||
      stored === "sw"
    ) {
      setLangState(stored);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const dict = DICTS[lang];
  const setLang = (l: Lang) => setLangState(l);

  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const raw = get(dict, key);
      if (typeof raw !== "string") return key; // fallback
      if (!vars) return raw;
      return raw.replace(/\{\{(\w+)\}\}/g, (_, k) =>
        String(vars[k] ?? `{{${k}}}`)
      );
    },
    [dict]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
