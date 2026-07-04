import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Chi siamo — C.F. Ferrobattuto" },
      { name: "description", content: "Scopri la storia e i valori di C.F. Ferrobattuto, laboratorio artigiano specializzato in ferro battuto su misura." },
      { property: "og:title", content: "Chi siamo — C.F. Ferrobattuto" },
      { property: "og:description", content: "Scopri la storia e i valori di C.F. Ferrobattuto, laboratorio artigiano specializzato in ferro battuto su misura." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-serif text-sm font-medium uppercase tracking-widest text-primary">La nostra storia</p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Chi siamo
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            C.F. Ferrobattuto nasce dalla passione per un mestiere antico: modellare il ferro con le mani, 
            dando vita a pezzi unici che resistono nel tempo. La nostra bottega è un luogo dove la tradizione 
            incontra la ricerca costante della qualità.
          </p>
          <p>
            Da anni realizziamo lavorazioni in ferro battuto per privati, aziende e pubblica amministrazione: 
            cancelletti, ringhiere, scale, portoni, recinzioni, arredi e complementi d&apos;arredo. Ogni progetto 
            è il frutto di un dialogo attento con il cliente e di una progettazione curata nei minimi dettagli.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Tradizione", description: "Tecniche artigianali tramandate e perfezionate nel tempo." },
            { title: "Qualità", description: "Materiali selezionati e finiture pensate per durare nel tempo." },
            { title: "Personalizzazione", description: "Ogni realizzazione è pensata su misura per chi la desidera." },
          ].map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
