import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const IMG = "/images";

export const Route = createFileRoute("/lavori")({
  head: () => ({
    meta: [
      { title: "Lavori realizzati — C.F. Ferrobattuto" },
      { name: "description", content: "Portfolio di opere in ferro battuto realizzate a mano: scale, ringhiere, componenti forgiati, elementi decorativi e lavori speciali su misura." },
      { property: "og:title", content: "Lavori realizzati — C.F. Ferrobattuto" },
      { property: "og:description", content: "Una selezione di opere in ferro battuto, componenti forgiati e lavorazioni su misura." },
      { property: "og:url", content: "/lavori" },
    ],
    links: [{ rel: "canonical", href: "/lavori" }],
  }),
  component: LavoriPage,
});

const filters = [
  "Tutti",
  "Scale e ringhiere",
  "Componenti forgiati",
  "Elementi decorativi",
  "Componenti edilizi",
  "Lavori speciali",
];

const projects = [
  { id: "scala-marmo", title: "Scala in marmo con ringhiera decorativa", cat: "Scale e ringhiere", img: `${IMG}/CFFerrobattuto-scala-marmo-1.webp`, desc: "Ringhiera decorativa in ferro battuto realizzata su misura per scala in marmo." },
  { id: "ringhiera-dettaglio", title: "Dettaglio ringhiera decorativa", cat: "Scale e ringhiere", img: `${IMG}/CFFerrobattuto-scala-dettaglio-1.webp`, desc: "Cura del dettaglio nelle volute e nella finitura del ferro." },
  { id: "ringhiera-esterna", title: "Ringhiera esterna su misura", cat: "Scale e ringhiere", img: `${IMG}/CFFerrobattuto-ringhiera-1.webp`, desc: "Ringhiera per esterno dimensionata sul contesto architettonico." },
  { id: "mensole-balcone", title: "Mensole decorative per balcone", cat: "Componenti edilizi", img: `${IMG}/CFFerrobattuto-mensole-balcone-1.webp`, desc: "Mensole forgiate a sostegno di un balcone in pietra." },
  { id: "albero-forgiato", title: "Elemento decorativo forgiato", cat: "Elementi decorativi", img: `${IMG}/CFFerrobattuto-albero-forgiato-1.webp`, desc: "Composizione decorativa ispirata alle forme naturali." },
  { id: "opera-ba", title: "Opera personalizzata in ferro", cat: "Lavori speciali", img: `${IMG}/CFFerrobattuto-BA-1.webp`, desc: "Realizzazione speciale su richiesta del committente." },
  { id: "componenti-banco", title: "Componenti forgiati su banco", cat: "Componenti forgiati", img: `${IMG}/CFFerrobattuto-componenti-1.webp`, desc: "Serie di componenti forgiati pronti per la finitura." },
  { id: "componente-lavorazione", title: "Componente forgiato in lavorazione", cat: "Componenti forgiati", img: `${IMG}/CFFerrobattuto-componente-forgiato-1.webp`, desc: "Fase intermedia della lavorazione di un componente." },
  { id: "composizione", title: "Composizione decorativa in ferro", cat: "Elementi decorativi", img: `${IMG}/CFFerrobattuto-composizione-componenti-11.webp`, desc: "Composizione di elementi decorativi assemblati a mano." },
  { id: "maglio", title: "Lavorazione al maglio", cat: "Lavori speciali", img: `${IMG}/CFFerrobattuto-lavoro-maglio-11.webp`, desc: "Il gesto artigianale della forgiatura al maglio." },
];

const schede = [
  {
    title: "Scala in marmo con ringhiera decorativa",
    img: `${IMG}/CFFerrobattuto-scala-marmo-1.webp`,
    contesto: "Interno residenziale con scala in marmo che richiedeva una ringhiera dal carattere elegante e discreto.",
    soluzione: "Ringhiera in ferro battuto realizzata su misura, con volute decorative studiate per accompagnare il ritmo della scala.",
    dettagli: "Finiture curate a mano, patina calda in accordo con il tono del marmo.",
  },
  {
    title: "Mensole decorative per balcone",
    img: `${IMG}/CFFerrobattuto-mensole-balcone-1.webp`,
    contesto: "Sostegno decorativo per un balcone in pietra in un contesto storico.",
    soluzione: "Mensole forgiate su disegno, dimensionate per unire funzione portante e valore decorativo.",
    dettagli: "Lavorazione con volute morbide, finitura protetta per esterno.",
  },
  {
    title: "Opera personalizzata in ferro",
    img: `${IMG}/CFFerrobattuto-BA-1.webp`,
    contesto: "Richiesta speciale del committente, sviluppata a partire da un'idea condivisa in laboratorio.",
    soluzione: "Realizzazione unica, studiata nelle proporzioni e nei dettagli per il contesto di destinazione.",
    dettagli: "Ogni parte lavorata a mano, con particolare cura nell'assemblaggio.",
  },
];

function LavoriPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG}/CFFerrobattuto-scala-marmo-1.webp`}
          alt="Scala in marmo con ringhiera in ferro battuto"
          ratio="16/9"
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbone via-carbone/50 to-carbone/30" />
        <div className="relative z-10 container mx-auto px-6 py-28 md:px-10 md:py-40">
          <p className="eyebrow text-rame">Portfolio</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Lavori realizzati
          </h1>
          <p className="mt-6 max-w-xl text-lg text-avorio/80">
            Una selezione di opere in ferro battuto, componenti forgiati e lavorazioni su misura realizzate artigianalmente.
          </p>
        </div>
      </section>

      {/* FILTRI */}
      <section className="border-b border-border">
        <div className="container mx-auto flex flex-wrap gap-2 px-6 py-6 md:px-10">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`border px-5 py-2 text-[12px] uppercase tracking-[0.18em] transition-colors ${
                i === 0
                  ? "border-rame bg-rame text-avorio"
                  : "border-border text-muted-foreground hover:border-rame hover:text-rame"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRIGLIA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
          {projects.map((p) => (
            <article key={p.id} className="group flex flex-col bg-card">
              <MImage src={p.img} alt={p.title} ratio="4/5" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-rame">{p.cat}</span>
                <h3 className="mt-3 font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SCHEDE */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Progetti in dettaglio</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl text-avorio md:text-5xl">
            Alcune lavorazioni raccontate da vicino
          </h2>

          <div className="mt-16 space-y-24">
            {schede.map((s, i) => (
              <div key={s.title} className={`grid gap-12 md:grid-cols-2 md:items-center md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <MImage src={s.img} alt={s.title} ratio="4/5" />
                <div>
                  <h3 className="font-serif text-3xl text-avorio md:text-4xl">{s.title}</h3>
                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-rame">Contesto</dt>
                      <dd className="mt-2 text-avorio/75">{s.contesto}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-rame">Soluzione</dt>
                      <dd className="mt-2 text-avorio/75">{s.soluzione}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-rame">Dettagli artigianali</dt>
                      <dd className="mt-2 text-avorio/75">{s.dettagli}</dd>
                    </div>
                  </dl>
                  <Link to="/contatti" className="mt-10 inline-flex items-center gap-2 border border-avorio/40 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:border-rame hover:text-rame">
                    Hai un progetto simile? Contattaci <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
