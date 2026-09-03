import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "work", href: "/#work" },
  { label: "about", href: "/#about" },
  { label: "approach", href: "/#approach" },
  { label: "contact", href: "/#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <ContainerInner>
        <Link className="site-header__brand" to="/" aria-label="Daria Boiko — home">
          Daria Boiko
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.href} className="site-nav__link" href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="site-nav__link site-nav__link--accent" href="/#contact">
            Get in touch
          </a>
        </nav>
      </ContainerInner>
    </header>
  );
}

function ContainerInner({ children }: { children: React.ReactNode }) {
  return <div className="container site-header__inner">{children}</div>;
}
