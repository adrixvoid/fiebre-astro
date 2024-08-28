import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.css";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      base: styles.base,
      primary: styles.primary,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: styles.outline,
      dashed: styles.dashed,
      ghost: styles.ghost,
      link: styles.link,
    },
    size: {
      md: styles.medium,
      sm: styles.small,
      lg: styles.large,
    },
    width: {
      ["full-width"]: styles["full-width"],
    },
  },
  defaultVariants: {
    variant: "base",
    size: "md",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
