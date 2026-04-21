import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/stories", label: "Patient Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-background/0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary shadow-soft">
            <Heart className="h-4.5 w-4.5 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-foreground">Dr. Mehta</span>
            <span className="text-[11px] tracking-widest uppercase text-muted-foreground">
              Cardiology · Pune
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+912012345678"
            className="flex items-center gap-1.5 text-sm text-foreground/75 hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 20 1234 5678
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elevated transition-all"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-md p-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-foreground/80 hover:bg-muted"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
