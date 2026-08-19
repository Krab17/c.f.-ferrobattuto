import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const BASE_URL = "https://cfferrobattuto.it";
const IMG_PORTFOLIO = "/images/portfolio";
const IMG_PROCESSO = "/images/processo";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Lavorazioni in ferro battuto su misura | C.F. Ferrobattuto" },
      {
        name: "description",
        content:
          "Cancelli, ringhiere, inferriate, componenti forgiati ed elementi decorativi in ferro battuto, realizzati su misura in provincia di Cuneo.",
      },
      {
        property: "og:title",
        content: "Lavorazioni in ferro battuto su misura | C.F. Ferrobattuto",
      },
      {
        property: "og:description",
        content:
          "Opere architettoniche, componenti forgiati e lavorazioni speciali realizzate su richiesta.",
      },
      { property: "og:url", content: `${BASE_URL}/servizi` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/servizi` }],
  }),
  component: ServiziPage,
});

const services = [
  {
    id: "opere-architettoniche",
    title: "Opere architettoniche in ferro battuto",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`,
    text: "Cancelli, ringhiere, parapetti, inferriate e recinzioni vengono dimensionati sulle misure reali e sul carattere dell'edificio. Forma e decorazione vengono definite in funzione del luogo, evitando soluzioni standard quando il progetto richiede proporzioni specifiche.",
    bullets: ["Cancelli e ingressi", "Ringhiere e parapetti", "Inferriate e recinzioni"],
  },
  {
    id: "componenti-forgiati",
    title: "Componenti forgiati per edilizia",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-mensole-balcone-1.webp`,
    text: "Realizziamo componenti che non si trovano normalmente a catalogo: mensole, coprichiave, elementi decorativi e parti metalliche sviluppate da un disegno, da un modello esistente o da una richiesta tecnica.",
    bullets: ["Coprichiave e mensole", "Parti su disegno", "Riproduzione di elementi esistenti"],
  },
  {
    id: "elementi-decorativi",
    title: "Elementi decorativi",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`,
    text: "Il ferro può diventare anche un elemento grafico e decorativo. Realizziamo composizioni, dettagli e applicazioni pensati per dialogare con facciate, ingressi, interni e spazi esterni.",
    bullets: ["Composizioni ornamentali", "Dettagli architettonici", "Elementi personalizzati"],
  },
  {
    id: "lavorazioni-speciali",
    title: "Lavorazioni speciali su richiesta",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-BA-1.webp`,
    text: "Quando il lavoro non rientra in una categoria standard, partiamo direttamente dall'esigenza: un pezzo unico, una parte da integrare, un elemento da riprodurre o una soluzione da sviluppare insieme.",
    bullets: [
      "Pezzi unici",
      "Lavori da disegno o modello",
      "Integrazione e recupero di parti esistenti",
    ],
  },
];

function ServiziPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Lavorazioni</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Ferro battuto realizzato per il progetto
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Lavoriamo per privati, professionisti e imprese quando servono misure, forme o
            componenti che richiedono una realizzazione dedicata.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto space-y-20 px-6 md:px-10 md:space-y-28">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`scroll-mt-28 grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <MImage src={s.img} alt={s.title} ratio="4/5" />
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-7 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-px w-5 bg-rame" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-[1fr_auto] md:items-center md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Richieste particolari</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Non trovi la tua lavorazione nell'elenco?
            </h2>
            <p className="mt-5 text-lg text-avorio/70">
              Inviaci una foto, un disegno o una breve descrizione: molte lavorazioni nascono
              proprio da richieste fuori standard.
            </p>
          </div>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine"
          >
            Raccontaci il progetto <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
