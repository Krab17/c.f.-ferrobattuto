import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Realizzazioni — C.F. Ferrobattuto" },
      { name: "description", content: "Galleria delle realizzazioni in ferro battuto di C.F. Ferrobattuto: cancelletti, ringhiere, portoni, arredi e lavorazioni su misura." },
      { property: "og:title", content: "Realizzazioni — C.F. Ferrobattuto" },
      { property: "og:description", content: "Galleria delle realizzazioni in ferro battuto di C.F. Ferrobattuto: cancelletti, ringhiere, portoni, arredi e lavorazioni su misura." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["Tutte", "Cancelli", "Ringhiere", "Portoni", "Arredi"];

const projects = [
  { title: "Cancello classico", category: "Cancelli" },
  { title: "Ringhiera moderna", category: "Ringhiere" },
  { title: "Portone d'ingresso", category: "Portoni" },
  { title: "Arredo giardino", category: "Arredi" },
  { title: "Inferriata decorata", category: "Cancelli" },
  { title: "Scala interna", category: "Ringhiere" },
];

function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-sm font-medium uppercase tracking-widest text-primary">Portfolio</p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">Realizzazioni</h1>
        <p className="mt-4 text-muted-foreground">
          Una selezione dei nostri lavori. Ogni immagine racconta una storia di manualità, precisione e cura del dettaglio.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.title + index}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">Immagine in arrivo</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/80 to-transparent p-6 text-background transition-transform group-hover:translate-y-0">
              <h3 className="font-serif text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-background/80">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
