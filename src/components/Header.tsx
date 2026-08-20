import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/lavori", label: "Lavori" },
  { to: "/servizi", label: "Lavorazioni" },
  { to: "/atelier", label: "Laboratorio" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${scrolled ? "border-border bg-carbone/95 text-avorio backdrop-blur" : "border-transparent bg-carbone text-avorio"}`}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="shrink-0" aria-label="C.F. Ferrobattuto - Home">
          <span className="font-serif text-xl tracking-wide text-avorio md:text-2xl">
            C.F. <span className="text-rame">Ferrobattuto</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-rame" }}
              className="text-[13px] uppercase tracking-[0.18em] text-avorio/80 transition-colors hover:text-rame"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            className="inline-flex items-center border border-rame px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-avorio transition-colors hover:bg-rame"
          >
            Raccontaci il progetto
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 text-avorio md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-white/10 bg-carbone md:hidden">
          <nav
            className="container mx-auto flex flex-col gap-1 px-5 py-6"
            aria-label="Navigazione mobile"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-rame" }}
                className="py-3 font-serif text-2xl text-avorio hover:text-rame"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center border border-rame px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:bg-rame"
            >
              Raccontaci il progetto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
