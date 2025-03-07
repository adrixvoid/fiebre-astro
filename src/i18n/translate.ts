import enUS from "./translations/en-US";
import esAR from "./translations/es-AR";

interface TranslationObject {
  [key: string]: TranslationObject;
}

interface TranslationItem {
  [key: string]: string | TranslationItem;
}

type Translations = {
  [key: string]: TranslationItem;
};

export const translations: Translations = {
  "en-US": enUS,
  "es-AR": esAR,
};

export function t(key: string): string {
  const lang = "en-US";
  const keys = key.split(".");
  let translation: TranslationItem | string | undefined = translations[lang];
  for (const k of keys) {
    if (
      typeof translation === "object" &&
      translation !== null &&
      translation[k]
    ) {
      translation = (translation as TranslationItem)[k];
    } else {
      return key;
    }
  }
  return typeof translation === "string" ? translation : key;
}

export function tObject(key: string) {
  const lang = "en-US";
  const keys = key.split(".");
  let translation: TranslationObject = translations[lang] as TranslationObject;
  for (const k of keys) {
    if (
      typeof translation === "object" &&
      translation !== null &&
      translation[k]
    ) {
      translation = translation[k];
    } else {
      return {};
    }
  }
  return translation;
}
