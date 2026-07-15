import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const IMG_PORTFOLIO = "/images/portfolio";
const IMG_PROCESSO = "/images/processo";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Lavorazioni artigianali in ferro battuto | C.F. Ferrobattuto" },
      { name: "description", content: "Cancelli, ringhiere, inferriate, componenti forgiati, elementi decorativi, restauro: lavorazioni artigianali in ferro battuto su misura." },
      { property: "og:title", content: "Servizi — C.F. Ferrobattuto" },
      { property: "og:description", content: "Lavorazioni artigianali in ferro battuto su misura per abitazioni, edifici storici e professionisti." },
      { property: "og:url", content: "/servizi" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: ServiziPage,
});

const services = [
  {
    id: "cancelli",
    title: "Cancelli in ferro battuto",
    img: `${IMG_PROCESSO}/CFFerrobattuto-lavoro-incudine-11.webp`,
    text: "Cancelli realizzati su misura, progettati in base allo stile dell'abitazione e lavorati artigianalmente per un risultato solido, decorativo e durevole.",
    bullets: ["Ingressi privati", "Ville", "Cortili", "Recinzioni", "Contesti storici"],
  },
  {
    id: "ringhiere",
    title: "Ringhiere, parapetti e scale",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`,
    text: "Ringhiere e parapetti in ferro battuto pensati per integrarsi con il contesto architettonico, valorizzando scale, balconi e spazi interni o esterni.",
    bullets: ["Scale interne", "Balconi", "Parapetti esterni", "Soppalchi"],
  },
  {
    id: "inferriate",
    title: "Inferriate e recinzioni",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-ringhiera-1.webp`,
    text: "Soluzioni su misura per protezione e decoro, realizzate con attenzione alle proporzioni, allo stile dell'edificio e alla qualità costruttiva.",
    bullets: ["Finestre", "Porte-finestre", "Recinzioni decorative"],
  },
  {
    id: "componenti",
    title: "Componenti forgiati",
    img: `${IMG_PROCESSO}/CFFerrobattuto-componente-forgiato-1.webp`,
    text: "Componenti realizzati a mano per edilizia, restauro o lavorazioni speciali: elementi decorativi, parti metalliche, coprichiave e dettagli su richiesta.",
    bullets: ["Elementi per edilizia", "Riproduzioni su modello", "Dettagli decorativi"],
  },
  {
    id: "decorativi",
    title: "Elementi decorativi",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`,
    text: "Elementi decorativi in ferro battuto pensati per dare carattere a ingressi, interni, esterni e dettagli architettonici.",
    bullets: ["Composizioni ornamentali", "Insegne", "Applicazioni decorative"],
  },
  {
    id: "personalizzate",
    title: "Lavorazioni personalizzate",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-BA-1.webp`,
    text: "Realizzazioni speciali su richiesta, sviluppate a partire da un'idea, un disegno, un'esigenza tecnica o un elemento da riprodurre.",
    bullets: ["Pezzi unici su disegno", "Riproduzioni fedeli", "Progetti dedicati"],
  },
  {
    id: "restauro",
    title: "Restauro e recupero",
    img: `${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`,
    text: "C.F. Ferrobattuto può valutare anche interventi di recupero su opere esistenti in ferro battuto, come cancelli, ringhiere, inferriate o elementi decorativi da ripristinare, integrare o completare.",
    bullets: ["Valutazione dello stato", "Integrazione di parti mancanti", "Recupero decorativo"],
    cta: { label: "Invia alcune foto per una valutazione", to: "/contatti" as const },
  },
];

const finiture = [
  "Ferro battuto",
  "Finiture brunite",
  "Verniciature",
  "Trattamenti per esterno",
  "Recupero e integrazione di parti esistenti",
  "Componenti realizzati su richiesta",
];

function ServiziPage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Servizi</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Lavorazioni artigianali in ferro battuto
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Realizziamo opere su misura, componenti forgiati e dettagli architettonici per abitazioni, edifici storici, professionisti e clienti che cercano qualità artigianale.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="font-serif text-2xl leading-relaxed text-foreground/80 md:text-3xl">
            Ogni lavoro viene valutato singolarmente in base alla richiesta, al contesto, allo stile desiderato e alle caratteristiche tecniche necessarie. C.F. Ferrobattuto non lavora in serie: ogni opera viene pensata e realizzata su misura.
          </p>
        </div>
      </section>

      {/* SERVIZI DETTAGLIATI */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto space-y-24 px-6 md:px-10 md:space-y-32">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid gap-12 md:grid-cols-2 md:items-center md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <MImage src={s.img} alt={s.title} ratio="4/5" />
              <div>
                <p className="eyebrow">Servizio 0{i + 1}</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-px w-4 bg-rame" />
                      {b}
                    </li>
                  ))}
                </ul>
                {s.cta && (
                  <Link to={s.cta.to} className="mt-8 inline-flex items-center gap-2 bg-rame px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALI */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="eyebrow">Materiali</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Materiali e finiture
            </h2>
            <p className="mt-6 text-avorio/70">
              La scelta delle finiture viene valutata in base al contesto, all'uso dell'opera e all'effetto estetico desiderato.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {finiture.map((f) => (
              <li key={f} className="flex items-center gap-3 border-t border-white/10 pt-4 font-serif text-lg text-avorio">
                <span className="h-px w-6 bg-rame" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Non hai trovato esattamente quello che cerchi?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ogni lavoro viene valutato singolarmente. Puoi inviarci una foto, un disegno o una descrizione della tua idea.
          </p>
          <Link to="/contatti" className="mt-10 inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
            Raccontaci il tuo progetto <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
