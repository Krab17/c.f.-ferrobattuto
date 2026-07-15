import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const IMG_CHI = "/images/chi-siamo";
const IMG_PROCESSO = "/images/processo";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Atelier — Il laboratorio C.F. Ferrobattuto" },
      { name: "description", content: "Il laboratorio di C.F. Ferrobattuto: forgia, incudine e banco. Un modo di lavorare fatto di ascolto, progetto, lavorazione a mano e finitura." },
      { property: "og:title", content: "Atelier — C.F. Ferrobattuto" },
      { property: "og:description", content: "Un laboratorio dove il ferro prende forma a mano, un'opera alla volta." },
      { property: "og:url", content: "/atelier" },
    ],
    links: [{ rel: "canonical", href: "/atelier" }],
  }),
  component: AtelierPage,
});

const metodo = [
  { n: "01", t: "Ascolto", d: "Capire richiesta, contesto e necessità." },
  { n: "02", t: "Progetto", d: "Definire forma, proporzioni e dettagli." },
  { n: "03", t: "Lavorazione", d: "Realizzare a mano ogni elemento." },
  { n: "04", t: "Finitura", d: "Curare protezione, resa estetica e durata." },
];

const gallery = [
  `${IMG}/CFFerrobattuto-forgia-1.webp`,
  `${IMG}/CFFerrobattuto-forgia-11.webp`,
  `${IMG}/CFFerrobattuto-forgia-21.webp`,
  `${IMG}/CFFerrobattuto-incudine-1.webp`,
  `${IMG}/CFFerrobattuto-banco-1.webp`,
];

function AtelierPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG}/CFFerrobattuto-Franco-1.webp`}
          alt="Franco al lavoro nell'atelier C.F. Ferrobattuto"
          ratio="16/9"
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbone via-carbone/60 to-carbone/20" />
        <div className="relative z-10 container mx-auto px-6 py-28 md:px-10 md:py-40">
          <p className="eyebrow text-rame">L'atelier</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] md:text-6xl">
            Un laboratorio dove il ferro <span className="italic text-rame">prende forma a mano</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-avorio/80">
            C.F. Ferrobattuto nasce dalla conoscenza del materiale, dalla lavorazione manuale e dalla volontà di mantenere vivo un mestiere sempre più raro.
          </p>
        </div>
      </section>

      {/* IDENTITÀ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div>
            <p className="eyebrow">Identità</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Artigianalità, esperienza e attenzione al dettaglio
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ogni opera viene pensata e lavorata con cura, seguendo le esigenze del cliente e rispettando il carattere del ferro battuto. Non si tratta di produzione in serie, ma di lavorazioni realizzate una alla volta, con attenzione alla funzione, alla forma e alla durata.
            </p>
          </div>
          <MImage src={`${IMG}/CFFerrobattuto-banco-1.webp`} alt="Il banco di lavoro dell'atelier" ratio="4/5" />
        </div>
      </section>

      {/* METODO */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Metodo</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Il nostro modo di lavorare
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {metodo.map((m) => (
              <div key={m.n} className="border-t border-white/15 pt-6">
                <span className="font-serif text-3xl text-rame">{m.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-avorio">{m.t}</h3>
                <p className="mt-3 text-avorio/65">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            <MImage src={`${IMG}/CFFerrobattuto-incudine-1.webp`} alt="Incudine del laboratorio" ratio="4/5" />
            <MImage src={`${IMG}/CFFerrobattuto-banco-1.webp`} alt="Banco di lavoro" ratio="4/5" />
            <MImage src={`${IMG}/CFFerrobattuto-lavoro-incudine-1.webp`} alt="Battitura sull'incudine" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* MATERIA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
            <div>
              <p className="eyebrow">Materia</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Il ferro come <span className="italic text-rame">materia viva</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Il ferro battuto conserva tracce del gesto, della lavorazione e della finitura. Ogni dettaglio racconta il modo in cui è stato realizzato.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <MImage src={`${IMG}/CFFerrobattuto-forgia-11.webp`} alt="Forgia accesa" ratio="1/1" />
              <MImage src={`${IMG}/CFFerrobattuto-componenti-1.webp`} alt="Componenti in ferro" ratio="1/1" />
              <MImage src={`${IMG}/CFFerrobattuto-componente-forgiato-11.webp`} alt="Componente forgiato" ratio="1/1" className="col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-border pb-24 pt-16 md:pt-24">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Dentro il laboratorio</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Forgia, incudine, banco
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {gallery.map((src, i) => (
              <MImage key={src} src={src} alt={`Dettaglio laboratorio ${i + 1}`} ratio="3/4" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-serif text-4xl leading-tight text-avorio md:text-5xl">
            Vuoi realizzare un'opera su misura?
          </h2>
          <Link to="/contatti" className="mt-10 inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
            Parlaci della tua idea <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
