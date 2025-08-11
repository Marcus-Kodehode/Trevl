"use client";
import { useI18n } from "./I18nProvider";

export default function useT() {
  const { t } = useI18n();
  return (key: string, vars?: Record<string, string | number>) => t(key, vars);
}
