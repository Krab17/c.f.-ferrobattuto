import { Link } from "@tanstack/react-router";
import { Hammer, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <Hammer className="h-5 w-5" />
              <span className="font-serif text-lg font-semibold">C.F. Ferrobattuto</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Laboratorio artigiano di ferro battuto su misura. Lavorazioni personalizzate, tradizione e qualità made in Italy.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">Collegamenti</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Chi siamo
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Servizi
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Realizzazioni
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contatti
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Via dell&apos;Artigianato, 1<br />00000 Città (Provincia)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+39 000 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@cfferrobattuto.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {year} C.F. Ferrobattuto. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
