import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Text.module.css";

export const cvaVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.default,
      primary: styles.primary,
      secondary: styles.secondary,
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
  compoundVariants: [
    { variant: "primary", size: "lg", className: styles["primary-large"] },
    { variant: "primary", size: "md", className: styles["primary-medium"] },
    { variant: "primary", size: "sm", className: styles["primary-small"] },
  ],
  defaultVariants: {
    variant: "default",
  },
});

export type PropsParagraph = HTMLAttributes<"div"> &
  VariantProps<typeof cvaVariants> & {
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    asChild?: boolean;
    weight?: number;
  };

export type PropsTitle = HTMLAttributes<"div"> &
  VariantProps<typeof cvaVariants> & {
    element?: "p" | "span";
    asChild?: boolean;
    weight?: number;
  };
