import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — C.F. Ferrobattuto" },
      {
        name: "description",
        content: "Informativa relativa all'utilizzo dei cookie sul sito di C.F. Ferrobattuto.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "https://cfferrobattuto.it/cookie" },
    ],
    links: [{ rel: "canonical", href: "https://cfferrobattuto.it/cookie" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <p className="eyebrow">Legale</p>
      <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">Cookie Policy</h1>
      <div className="prose prose-lg mt-10 space-y-6 text-foreground/80">
        <p>
          Il sito di C.F. Ferrobattuto utilizza esclusivamente cookie tecnici necessari al corretto
          funzionamento delle pagine.
        </p>
        <h2 className="font-serif text-3xl">Cookie tecnici</h2>
        <p>
          Sono cookie utilizzati per garantire la navigazione e l'erogazione dei servizi del sito.
          Per il loro utilizzo non è richiesto il consenso dell'utente.
        </p>
        <h2 className="font-serif text-3xl">Cookie di terze parti</h2>
        <p>
          Il sito può caricare contenuti da servizi esterni (es. font tipografici) che potrebbero
          rilasciare cookie propri. In caso di attivazione di strumenti di analisi o profilazione,
          sarà richiesto il consenso preventivo dell'utente.
        </p>
        <h2 className="font-serif text-3xl">Gestione dei cookie</h2>
        <p>
          È possibile gestire e disabilitare i cookie direttamente dalle impostazioni del proprio
          browser.
        </p>
        <p className="text-sm italic text-muted-foreground">
          Testo provvisorio — sarà completato con l'informativa definitiva.
        </p>
      </div>
    </div>
  );
}
