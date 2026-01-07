import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  href?: string;
  iconPosition?: "left" | "right";
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type MenuItem = {
  title: string;
  href?: string;
  submenu?: { label: string; href: string }[];
};
