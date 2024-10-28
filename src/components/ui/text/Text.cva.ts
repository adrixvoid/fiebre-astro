import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Text.module.css";

export const textVariants = cva(styles.text, {
  variants: {
    variant: {
      default: styles.textDefault,
    },
    size: {
      xl: styles.xl,
      lg: styles.lg,
      md: styles.md,
      sm: styles.sm,
    },
    align: {
      left: styles.left,
      center: styles.center,
      right: styles.right,
    },
    fontStyle: {
      italic: styles.italic,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const titleVariants = cva(styles.title, {
  variants: {
    variant: {
      default: styles.titleDefault,
      primary: styles.titlePrimary,
    },
    size: {
      xl: styles.titleXLarge,
      lg: styles.titleLarge,
      md: styles.titleMedium,
      sm: styles.titleSmall,
    },
    align: {
      left: styles.left,
      center: styles.center,
      right: styles.right,
    },
    fontStyle: {
      italic: styles.italic,
    },
    baseline: {
      adjust: styles.adjustBaseline,
    },
  },
  compoundVariants: [
    { variant: "primary", size: "lg", className: styles.titlePrimaryLarge },
    { variant: "primary", size: "md", className: styles.titlePrimaryMedium },
    { variant: "primary", size: "sm", className: styles.titlePrimarySmall },
  ],
  defaultVariants: {
    variant: "default",
  },
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
