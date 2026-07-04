import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contatti — C.F. Ferrobattuto" },
      { name: "description", content: "Contatta C.F. Ferrobattuto per preventivi, consulenze e informazioni su lavorazioni in ferro battuto su misura." },
      { property: "og:title", content: "Contatti — C.F. Ferrobattuto" },
      { property: "og:description", content: "Contatta C.F. Ferrobattuto per preventivi, consulenze e informazioni su lavorazioni in ferro battuto su misura." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-sm font-medium uppercase tracking-widest text-primary">Contattaci</p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">Richiedi un preventivo</h1>
        <p className="mt-4 text-muted-foreground">
          Scrivici per raccontarci il tuo progetto. Ti risponderemo al più presto con una proposta personalizzata.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome e cognome</Label>
              <Input id="name" name="name" placeholder="Mario Rossi" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="mario@email.it" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefono</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+39 000 000 0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Messaggio</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Descrivi brevemente il tuo progetto..."
            />
          </div>
          <Button type="submit" className="w-full">
            Invia richiesta
          </Button>
          <p className="text-xs text-muted-foreground">
            Il modulo è momentaneamente in configurazione. Per urgenze, scrivici direttamente via email o telefono.
          </p>
        </form>

        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Dove trovarci</h2>
            <p className="mt-2 text-muted-foreground">
              Vieni a trovarci in laboratorio per conoscerci e vedere dal vivo le nostre lavorazioni.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Indirizzo</h3>
                <p className="text-sm text-muted-foreground">
                  Via dell&apos;Artigianato, 1<br />
                  00000 Città (Provincia)
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Telefono</h3>
                <p className="text-sm text-muted-foreground">+39 000 000 0000</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">info@cfferrobattuto.it</p>
              </div>
            </li>
          </ul>

          <div className="rounded-xl border border-border bg-muted p-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Orari di apertura</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Lunedì — Venerdì</dt>
                <dd className="font-medium text-foreground">08:00 — 12:30 / 14:30 — 18:30</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Sabato</dt>
                <dd className="font-medium text-foreground">08:00 — 12:30</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Domenica</dt>
                <dd className="font-medium text-foreground">Chiuso</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
