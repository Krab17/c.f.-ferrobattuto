import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — C.F. Ferrobattuto" },
      { name: "description", content: "Informativa sul trattamento dei dati personali di C.F. Ferrobattuto." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <p className="eyebrow">Legale</p>
      <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">Privacy Policy</h1>
      <div className="prose prose-lg mt-10 space-y-6 text-foreground/80">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di C.F. Ferrobattuto e che interagiscono con i canali di contatto messi a disposizione.
        </p>
        <h2 className="font-serif text-3xl">Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento dei dati è C.F. Ferrobattuto, con sede in Via del Molino 10, 12060 (Provincia di Cuneo).
          Email: Info@CFFerrobattuto.com — Tel. 380 466 8154.
        </p>
        <h2 className="font-serif text-3xl">Dati raccolti</h2>
        <p>
          Vengono raccolti unicamente i dati che l'utente fornisce volontariamente tramite il modulo di contatto, l'email, il telefono o WhatsApp: nome, contatti e descrizione del progetto.
        </p>
        <h2 className="font-serif text-3xl">Finalità</h2>
        <p>
          I dati sono utilizzati esclusivamente per rispondere alle richieste ricevute, formulare eventuali preventivi e gestire la relazione con il cliente.
        </p>
        <h2 className="font-serif text-3xl">Conservazione</h2>
        <p>
          I dati vengono conservati per il tempo strettamente necessario alla gestione della richiesta e degli obblighi di legge.
        </p>
        <h2 className="font-serif text-3xl">Diritti dell'interessato</h2>
        <p>
          L'utente può in qualsiasi momento richiedere l'accesso, la rettifica o la cancellazione dei propri dati scrivendo a Info@CFFerrobattuto.com.
        </p>
        <p className="text-sm italic text-muted-foreground">
          Testo provvisorio — sarà completato con l'informativa definitiva.
        </p>
      </div>
    </div>
  );
}
