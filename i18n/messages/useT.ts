// i18n/messages/useT.ts
"use client";
import { useI18n } from "./I18nProvider";

export default function useT() {
  const { t } = useI18n();
  return t;
}
