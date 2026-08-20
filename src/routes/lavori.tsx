import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const BASE_URL = "https://cfferrobattuto.it";
const IMG_PORTFOLIO = "/images/portfolio";

export const Route = createFileRoute("/lavori")({
  head: () => ({
    meta: [
      { title: "Lavori in ferro battuto su misura | C.F. Ferrobattuto" },
      {
        name: "description",
        content:
          "Una selezione di ringhiere, componenti per edilizia, elementi decorativi e lavorazioni speciali in ferro battuto realizzate da C.F. Ferrobattuto.",
      },
      { property: "og:title", content: "Lavori in ferro battuto su misura | C.F. Ferrobattuto" },
      {
        property: "og:description",
        content:
          "Realizzazioni in ferro battuto mostrate attraverso opere finite e dettagli di lavorazione.",
      },
      { property: "og:url", content: `${BASE_URL}/lavori` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/lavori` }],
  }),
  component: LavoriPage,
});

const works = [
  {
    title: "Ringhiera per scala in marmo.",
    cat: "Scale e ringhiere",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`,
    desc: "Ringhiera in ferro battuto inserita in una scala interna in marmo.",
  },
  {
    title: "Ringhiera semplice esterna",
    cat: "Ringhiere",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-ringhiera-1.webp`,
    desc: "Lavorazione decorativa per esterno, realizzata sulle proporzioni del contesto.",
  },
  {
    title: "Mensole per balcone",
    cat: "Componenti per edilizia",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-mensole-balcone-1.webp`,
    desc: "Mensole in ferro con funzione strutturale e decorativa sotto un balcone in pietra.",
  },
  {
    title: "Albero forgiato",
    cat: "Elementi decorativi",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`,
    desc: "Composizione in ferro ispirata a forme naturali, lavorata come pezzo decorativo.",
  },
  {
    title: "Opera personalizzata",
    cat: "Lavorazioni speciali",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-BA-1.webp`,
    desc: "Elemento realizzato su richiesta, sviluppato come pezzo unico.",
  },
];

function LavoriPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`}
          alt="Scala in marmo con ringhiera decorativa in ferro battuto"
          ratio="16/9"
          priority
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-70"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbone via-carbone/55 to-carbone/30" />
        <div className="relative z-10 container mx-auto px-6 py-28 md:px-10 md:py-40">
          <p className="eyebrow text-rame">Lavori</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            I nostri lavori finiti
          </h1>
          <p className="mt-6 max-w-xl text-lg text-avorio/80">
            Una selezione di opere realizzate. Esempi scelti per mostrare come lavoriamo.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-7 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
          {works.map((w) => (
            <article key={w.title} className="group flex flex-col bg-card">
              <MImage src={w.img} alt={w.title} ratio="4/5" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-rame">{w.cat}</span>
                <h2 className="mt-3 font-serif text-2xl">{w.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Un progetto da vicino</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Scala in marmo e ringhiera decorativa
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-avorio/70">
              La ringhiera segue l'andamento della scala e diventa parte dell'interno. Le viste
              d'insieme e i dettagli mostrano il rapporto tra ferro, marmo, volute e finitura.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <MImage
              src={`${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`}
              alt="Vista della scala in marmo con ringhiera decorativa"
              ratio="4/5"
            />
            <MImage
              src={`${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-11.webp`}
              alt="Vista superiore della scala e della ringhiera"
              ratio="4/5"
            />
            <MImage
              src={`${IMG_PORTFOLIO}/CFFerrobattuto-scala-dettaglio-1.webp`}
              alt="Dettaglio delle volute della ringhiera in ferro battuto"
              ratio="4/5"
            />
          </div>
          <div className="mt-12">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 border border-avorio/40 px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:border-rame hover:text-rame"
            >
              Hai un progetto da valutare? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
