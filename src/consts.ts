// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { iconPaths } from "~/components/ui/icon/IconPaths";

export const SITE_TITLE = "F I E B R E ®";
export const SITE_DESCRIPTION = "Fiebre Design Studio - Buenos Aires Argentina";

/** Main menu items */
export const navigationLinks: { label: string; href: string }[] = [
  { label: "Servicios", href: "/#services" },
  { label: "Sobre mi", href: "/#about" },
  { label: "Recursos", href: "/#resources" },
  { label: "Portfolio", href: "/portfolio" },
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
    label: "fiebredg@hotmail.com",
    href: "mailto:fiebredg@hotmail.com",
    icon: "paper-plane-tilt",
    title: "Contact me fiebredg@hotmail.com",
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
    href: "https://ar.pinterest.com/fiebrecreativa/",
    icon: "pinterest-logo",
    rel: "noopener noreferrer",
  },
  {
    title: "My Instagram",
    href: "https://www.instagram.com/fiebre.creativa/",
    icon: "instagram-logo",
    rel: "noopener noreferrer",
  },
  {
    title: "My Behance portfolio",
    href: "https://www.behance.net/fiebre_creativa",
    rel: "noopener noreferrer",
    icon: "behance-logo",
  },
];
