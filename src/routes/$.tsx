import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Pagina non trovata — C.F. Ferrobattuto" },
      { name: "description", content: "La pagina che cerchi non esiste o è stata spostata." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-carbone px-6 py-24 text-avorio">
      <div className="max-w-xl text-center">
        <p className="eyebrow text-rame">404</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">Pagina non trovata</h1>
        <p className="mt-6 text-avorio/70">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 bg-rame px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
            Torna alla Home
          </Link>
          <Link to="/lavori" className="inline-flex items-center gap-2 border border-avorio/40 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:border-rame hover:text-rame">
            Guarda i lavori
          </Link>
        </div>
      </div>
    </div>
  );
}
