import { cn } from "@/utils/cn";
import { ButtonProps } from "@/utils/types";
import Link from "next/link";

export const Button = ({
  children,
  onClick,
  className,
  icon,
  iconPosition,
  href,
  buttonType,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "flex items-center justify-center group cursor-pointer bg-primary text-background font-medium text-center w-auto gap-2 rounded-xl px-4 py-4 disabled:cursor-not-allowed active:scale-105 hover:scale-95 transition-all duration-100 hover:brightness-90 disabled:opacity-50";

  const buttonContent = (
    <>
      {iconPosition === "left" && icon && (
        <span className="transition-transform duration-100 group-hover:-translate-x-1 group-active:-translate-x-1">
          {icon}
        </span>
      )}
      {children}
      {iconPosition === "right" && icon && (
        <span className="transition-transform duration-100 group-hover:translate-x-1 group-active:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyle, className)}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={cn(baseStyle, className)}
      {...props}
    >
      {buttonContent}
    </button>
  );
};
