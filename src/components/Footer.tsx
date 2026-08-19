import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/393804668154";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/5">
      <div className="container mx-auto px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <p className="font-serif text-2xl leading-snug text-avorio">
              C.F. <span className="text-rame">Ferrobattuto</span>
            </p>
            <p className="text-sm leading-relaxed text-avorio/60">
              Ferro battuto e componenti forgiati realizzati su misura in provincia di Cuneo.
            </p>
            <div className="flex gap-3 pt-2">
              <IconLink href="tel:3804668154" label="Chiama">
                <Phone className="h-4 w-4" />
              </IconLink>
              <IconLink href={WHATSAPP} label="WhatsApp" external>
                <MessageCircle className="h-4 w-4" />
              </IconLink>
              <IconLink href="mailto:Info@CFFerrobattuto.com" label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://instagram.com/CFFerrobattuto" label="Instagram" external>
                <Instagram className="h-4 w-4" />
              </IconLink>
            </div>
          </div>

          <FooterCol title="Navigazione">
            <FLink to="/">Home</FLink>
            <FLink to="/lavori">Lavori</FLink>
            <FLink to="/servizi">Lavorazioni</FLink>
            <FLink to="/atelier">Laboratorio</FLink>
            <FLink to="/contatti">Contatti</FLink>
          </FooterCol>

          <FooterCol title="Lavorazioni">
            <A href="/servizi#opere-architettoniche">Opere architettoniche</A>
            <A href="/servizi#componenti-forgiati">Componenti forgiati</A>
            <A href="/servizi#elementi-decorativi">Elementi decorativi</A>
            <A href="/servizi#lavorazioni-speciali">Lavorazioni speciali</A>
          </FooterCol>

          <FooterCol title="Contatti">
            <li className="flex items-start gap-2.5 text-sm text-avorio/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rame" />
              <span>
                Via del Molino 10, 12060
                <br />
                Provincia di Cuneo
              </span>
            </li>
            <li>
              <a href="tel:3804668154" className="text-sm text-avorio/70 hover:text-rame">
                380 466 8154
              </a>
            </li>
            <li>
              <a
                href="mailto:Info@CFFerrobattuto.com"
                className="break-all text-sm text-avorio/70 hover:text-rame"
              >
                Info@CFFerrobattuto.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-avorio/70 hover:text-rame"
              >
                WhatsApp
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-avorio/50 md:flex-row">
          <p>© {year} C.F. Ferrobattuto — Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-rame">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="hover:text-rame">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-rame">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-avorio/70 transition-colors hover:text-rame">
        {children}
      </Link>
    </li>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-avorio/70 transition-colors hover:text-rame">
        {children}
      </a>
    </li>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center border border-white/15 text-avorio hover:border-rame hover:text-rame"
    >
      {children}
    </a>
  );
}
