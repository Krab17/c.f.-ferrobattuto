import { createFileRoute } from "@tanstack/react-router";
import { DoorOpen, Fence, Grid3X3, Ruler, Sofa, Stairs } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Servizi — C.F. Ferrobattuto" },
      { name: "description", content: "Scopri i servizi di C.F. Ferrobattuto: cancelli, ringhiere, scale, portoni, arredi e lavorazioni personalizzate in ferro battuto." },
      { property: "og:title", content: "Servizi — C.F. Ferrobattuto" },
      { property: "og:description", content: "Scopri i servizi di C.F. Ferrobattuto: cancelli, ringhiere, scale, portoni, arredi e lavorazioni personalizzate in ferro battuto." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Fence,
    title: "Cancelli e recinzioni",
    description: "Progettazione e realizzazione di cancelli pedonali, carrabili, recinzioni e inferriate per esterni e interni.",
  },
  {
    icon: Stairs,
    title: "Scale e ringhiere",
    description: "Scale e ringhiere in ferro battuto, moderne o classiche, su misura per abitazioni e attività commerciali.",
  },
  {
    icon: DoorOpen,
    title: "Portoni e porte",
    description: "Portoni d'ingresso, porte blindate con finitura in ferro battuto e dettagli personalizzati.",
  },
  {
    icon: Grid3X3,
    title: "Inferriate e griglie",
    description: "Inferriate di sicurezza per finestre e porte, griglie per finestre e chiusure personalizzate.",
  },
  {
    icon: Sofa,
    title: "Arredi e complementi",
    description: "Letti, testiere, tavoli, sedie, lampadari, mensole e oggetti di design in ferro battuto su misura.",
  },
  {
    icon: Ruler,
    title: "Progetti su misura",
    description: "Studio e realizzazione di pezzi speciali: dai bozzetti alla finitura, seguendo le esigenze del cliente.",
  },
];

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-sm font-medium uppercase tracking-widest text-primary">Cosa facciamo</p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">Servizi</h1>
        <p className="mt-4 text-muted-foreground">
          Offriamo un servizio completo: dalla progettazione alla realizzazione, fino alla posa in opera dei manufatti in ferro battuto.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
