// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { iconPaths } from "~/components/ui/icon/IconPaths";
import { t } from "./i18n/translate";

export const SITE_TITLE = "F I E B R E ®";
export const SITE_DESCRIPTION = "Fiebre Design Studio - Buenos Aires Argentina";

/** Main menu items */
export const navigationLinks: { label: string; href: string }[] = [
  { label: t("NAV.SERVICES"), href: "/#services" },
  { label: t("NAV.ABOUT"), href: "/#about" },
  { label: t("NAV.RESOURCES"), href: "/#resources" },
  { label: t("NAV.PORTFOLIO"), href: "/portfolio" },
];

/** Icon links to social media — edit these with links to your profiles! */
export const socialLinks: {
  label?: string;
  href: string;
  icon: keyof typeof iconPaths;
  title?: string;
  rel?: string;
}[] = [
  {
    // label: "hello.fevercosmic@gmail.com",
    href: "mailto:hello.fevercosmic@gmail.com",
    icon: "paper-plane-tilt",
    title: "Contact me hello.fevercosmic@gmail.com",
    rel: "noopener noreferrer",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/desi-fiebre-creativa/",
    icon: "linkedin-logo",
    rel: "noopener noreferrer",
  },
  {
    title: "Pinterest",
    href: "https://ar.pinterest.com/fiebrecreativa/_created",
    icon: "pinterest-logo",
    rel: "noopener noreferrer",
  },
  {
    title: "My Fever-Cosmic Instagram",
    href: "https://www.instagram.com/fever.cosmic/",
    icon: "instagram-logo",
    rel: "noopener noreferrer",
  },
  {
    title: "My Behance Fever-Cosmic portfolio",
    href: "https://www.behance.net/fevercosmic",
    rel: "noopener noreferrer",
    icon: "behance-logo",
  },
];

export const PORTFOLIO_FILTERS = [
  {
    label: t("FILTERS.ILLUSTRATIONS"),
    category: "illustration",
  },
  {
    label: t("FILTERS.BRANDING"),
    category: "branding",
  },
  {
    label: t("FILTERS.ALL"),
    category: "",
    active: true,
  },
];
