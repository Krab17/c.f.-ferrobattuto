import { Link } from "@tanstack/react-router";
import { Hammer, Ruler, Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C.F. Ferrobattuto — Ferro battuto su misura" },
      { name: "description", content: "Laboratorio artigiano di ferro battuto su misura. Cancelletti, ringhiere, portoni, arredi e lavorazioni personalizzate in ferro." },
      { property: "og:title", content: "C.F. Ferrobattuto — Ferro battuto su misura" },
      { property: "og:description", content: "Laboratorio artigiano di ferro battuto su misura. Cancelletti, ringhiere, portoni, arredi e lavorazioni personalizzate in ferro." },
    ],
  }),
  component: HomePage,
});

import { createFileRoute } from "@tanstack/react-router";

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative border-b border-border bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-sm font-medium uppercase tracking-widest text-primary">
              Laboratorio artigiano
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Ferro battuto su misura
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Da generazioni trasformiamo il ferro in opere uniche: cancelletti, ringhiere, portoni, arredi e dettagli
              su misura per chi cerca qualità, durata e bellezza artigiana.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/gallery">Vedi le realizzazioni</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Richiedi un preventivo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Perché scegliere C.F. Ferrobattuto</h2>
            <p className="mt-4 text-muted-foreground">
              Ogni progetto nasce dal confronto con il cliente e dalla cura maniacale dei dettagli.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Hammer,
                title: "Lavorazione artigiana",
                description: "Tecniche tradizionali affiancate a strumenti moderni per finiture impeccabili.",
              },
              {
                icon: Ruler,
                title: "Su misura",
                description: "Progettiamo e realizziamo pezzi unici seguendo le vostre esigenze e i vostri spazi.",
              },
              {
                icon: Shield,
                title: "Materiali di qualità",
                description: "Ferro e acciaio selezionati, trattamenti anticorrosione e verniciature durature.",
              },
              {
                icon: Sparkles,
                title: "Design senza tempo",
                description: "Dal classico al contemporaneo, soluzioni che valorizzano ogni ambiente.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold">Hai un progetto in mente?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Contattaci per una consulenza gratuita: insieme troveremo la soluzione migliore per le tue esigenze.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link to="/contact">Scrivici ora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
