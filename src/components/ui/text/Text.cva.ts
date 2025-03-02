import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Text.module.css";

const commonVariants = {
  size: {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
    h6: styles.h6,
    medium: styles.medium,
    small: styles.small,
    xl: styles.xl,
    lg: styles.lg,
    md: styles.md,
    default: styles.default,
    sm: styles.sm,
    ml: styles.metaLarge,
    meta: styles.meta,
    nav: styles.nav,
  },
  align: {
    left: styles.left,
    center: styles.center,
    right: styles.right,
  },
  italic: {
    true: styles.italic,
  },
  uppercase: {
    true: styles.uppercase,
  },
  fontStyle: {
    italic: styles.italic,
  },
  balanced: {
    true: styles.balanced,
  },
  shrink: {
    true: styles.shrink,
  },
};

export const textVariants = cva(styles.text, {
  variants: commonVariants,
  defaultVariants: {
    size: "default",
  },
});

export const titleVariants = cva(styles.heading, {
  variants: {
    variant: {
      primary: styles.titlePrimary,
    },
    baseline: {
      true: styles.adjustBaseline,
    },
    ...commonVariants,
    defaultVariants: {
      size: "default",
    },
  },
  compoundVariants: [
    { variant: "primary", size: "lg", className: styles.titlePrimaryLarge },
    { variant: "primary", size: "md", className: styles.titlePrimaryMedium },
    { variant: "primary", size: "sm", className: styles.titlePrimarySmall },
  ],
});

export type PropsParagraph = HTMLAttributes<"p" | "span"> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span";
    weight?: number;
  };

export type PropsTitle = HTMLAttributes<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  VariantProps<typeof titleVariants> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight?: number;
  };
