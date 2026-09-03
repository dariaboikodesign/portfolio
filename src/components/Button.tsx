import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "text" | "pill";
  className?: string;
  external?: boolean;
};

export function Button({ children, href, to, variant = "text", className = "", external }: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
}
