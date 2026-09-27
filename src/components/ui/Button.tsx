import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  style,
  children,
  ...props
}: ButtonProps) {
  const isText = variant === "text";

  // Map variant → global CSS class
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
      ? "btn-secondary" // outline uses secondary clay style
      : ""; // text buttons: no clay class

  // Small modifier
  const sizeClass = size === "sm" ? "btn-sm" : "";

  const textClasses =
    isText
      ? "group/btn inline-flex items-center gap-1.5 font-bold text-[14px] text-ink transition-colors duration-180 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 cursor-pointer select-none"
      : "";

  const commonClasses = cn(
    isText ? textClasses : cn("group", variantClass, sizeClass),
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className={cn(
            "btn-arrow shrink-0",
            isText ? "h-4 w-4 ml-0.5 group-hover/btn:translate-x-[3px] transition-transform duration-180" : "h-4 w-4"
          )}
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={commonClasses} style={style} {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      style={style}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
