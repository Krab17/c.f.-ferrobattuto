import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Flame, Hammer, Sparkles } from "lucide-react";
import { MImage } from "@/components/MImage";

const BASE_URL = "https://cfferrobattuto.it";
const IMG_HERO = "/images/hero";
const IMG_CHI = "/images/chi-siamo";
const IMG_PORTFOLIO = "/images/portfolio";
const IMG_PROCESSO = "/images/processo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferro battuto artigianale a Cuneo | C.F. Ferrobattuto" },
      {
        name: "description",
        content:
          "C.F. Ferrobattuto realizza opere e componenti in ferro battuto artigianale su misura. Oltre 20 anni di esperienza in provincia di Cuneo, operativi nel Nord Italia.",
      },
      { property: "og:title", content: "Ferro battuto artigianale a Cuneo | C.F. Ferrobattuto" },
      {
        property: "og:description",
        content:
          "Opere e componenti in ferro battuto realizzati su misura, dalla lavorazione in laboratorio alla posa.",
      },
      { property: "og:url", content: `${BASE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/` }],
  }),
  component: HomePage,
});

const lavorazioni = [
  {
    icon: Building2,
    title: "Opere architettoniche",
    desc: "Cancelli, ringhiere, parapetti, inferriate e recinzioni progettati sulle misure e sul contesto.",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`,
  },
  {
    icon: Flame,
    title: "Componenti forgiati",
    desc: "Parti in ferro per edilizia e lavorazioni speciali, realizzate su disegno, modello o richiesta specifica.",
    img: `${IMG_PROCESSO}/CFFerrobattuto-componente-forgiato-1.webp`,
  },
  {
    icon: Sparkles,
    title: "Elementi decorativi",
    desc: "Composizioni e dettagli in ferro lavorati per integrarsi con interni, esterni e architetture esistenti.",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`,
  },
  {
    icon: Hammer,
    title: "Lavorazioni speciali",
    desc: "Pezzi unici e soluzioni sviluppate a partire da un'idea, un disegno o un elemento da riprodurre.",
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-BA-1.webp`,
  },
];

const portfolio = [
  {
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`,
    cap: "Scala in marmo con ringhiera decorativa",
  },
  {
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-ringhiera-1.webp`,
    cap: "Ringhiera esterna in ferro battuto",
  },
  {
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-mensole-balcone-1.webp`,
    cap: "Mensole decorative per balcone",
  },
  {
    img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`,
    cap: "Elemento decorativo forgiato",
  },
];

const processo = [
  {
    n: "01",
    t: "Richiesta e misure",
    d: "Partiamo dal contesto, dalle misure e da ciò che deve fare l'opera.",
  },
  {
    n: "02",
    t: "Disegno e proporzioni",
    d: "Definiamo forma, ingombri e dettagli prima della lavorazione.",
  },
  {
    n: "03",
    t: "Forgiatura e assemblaggio",
    d: "Gli elementi vengono lavorati e assemblati in laboratorio.",
  },
  {
    n: "04",
    t: "Finitura e posa",
    d: "Completiamo protezione, finitura e installazione in base al progetto.",
  },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate min-h-[86vh] overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-1.webp`}
          mobileSrc={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-2.webp`}
          alt="Lavorazione del ferro al maglio nel laboratorio C.F. Ferrobattuto"
          ratio="16/9"
          priority
          className="!absolute inset-0 h-full w-full !aspect-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbone/85 via-carbone/55 to-carbone/20" />
        <div className="relative z-10 container mx-auto flex min-h-[86vh] flex-col justify-center px-6 py-24 md:px-10">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-rame">Laboratorio artigiano · oltre 20 anni di esperienza</p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] md:text-[4.5rem]">
              Ferro battuto artigianale,{" "}
              <span className="italic text-rame">realizzato a mano e su misura</span>.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-avorio/80 md:text-xl">
              Opere e componenti in ferro progettati per il luogo in cui verranno installati e
              lavorati uno alla volta in laboratorio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/lavori"
                className="inline-flex items-center gap-2 bg-rame px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:bg-ruggine"
              >
                Guarda i lavori <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 border border-avorio/40 px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:border-rame hover:text-rame"
              >
                Raccontaci il progetto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div>
            <p className="eyebrow">C.F. Ferrobattuto</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Dal disegno al ferro,{" "}
              <span className="italic text-rame">senza produzione in serie</span>.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              In provincia di Cuneo realizziamo opere, componenti forgiati e dettagli architettonici
              su richiesta. Ogni lavoro viene valutato sulle misure, sulla funzione e sul contesto:
              il progetto guida la lavorazione, non il contrario.
            </p>
          </div>
          <MImage
            src={`${IMG_PROCESSO}/CFFerrobattuto-lavoro-incudine-11.webp`}
            alt="Lavorazione manuale del ferro sull'incudine"
            ratio="4/5"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Lavorazioni</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Cosa realizziamo
              </h2>
            </div>
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-rame hover:text-ruggine"
            >
              Tutte le lavorazioni <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lavorazioni.map((s) => (
              <Link key={s.title} to="/servizi" className="group flex flex-col bg-card">
                <MImage src={s.img} alt={s.title} ratio="4/3" />
                <div className="flex flex-1 flex-col p-6">
                  <s.icon className="h-5 w-5 text-rame" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Lavori</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Una selezione di realizzazioni
              </h2>
            </div>
            <Link
              to="/lavori"
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-rame hover:text-ruggine"
            >
              Vedi tutti i lavori <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((p) => (
              <MImage key={p.cap} src={p.img} alt={p.cap} caption={p.cap} ratio="4/5" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-start md:px-10">
          <div>
            <p className="eyebrow">Processo</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Dal progetto alla posa
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <MImage
                src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`}
                alt="Ferro caldo nella forgia"
                ratio="1/1"
              />
              <MImage
                src={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-2.webp`}
                alt="Lavorazione del ferro al maglio"
                ratio="1/1"
              />
            </div>
          </div>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {processo.map((p) => (
              <li key={p.n} className="grid grid-cols-[auto_1fr] gap-6 py-7">
                <span className="font-serif text-3xl text-rame">{p.n}</span>
                <div>
                  <h3 className="font-serif text-2xl text-avorio">{p.t}</h3>
                  <p className="mt-2 text-avorio/65">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <MImage
            src={`${IMG_CHI}/CFFerrobattuto-Franco-1.webp`}
            alt="Franco nel laboratorio C.F. Ferrobattuto"
            ratio="4/5"
          />
          <div>
            <p className="eyebrow">Il laboratorio</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Il ferro prende forma in officina
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Franco lavora il ferro con forgia, incudine, maglio e banco da oltre vent'anni. Ogni
              pezzo viene seguito in laboratorio, dalla definizione delle proporzioni alla finitura
              finale.
            </p>
            <Link
              to="/atelier"
              className="mt-8 inline-flex items-center gap-2 border border-foreground/30 px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-foreground hover:border-rame hover:text-rame"
            >
              Entra nel laboratorio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`}
          alt=""
          aria-hidden="true"
          ratio="16/6"
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-40"
        />
        <div className="absolute inset-0 bg-carbone/70" />
        <div className="relative z-10 container mx-auto px-6 py-20 text-center md:px-10 md:py-28">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Hai un progetto in ferro?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-avorio/70">
            Inviaci una descrizione, alcune misure o una foto del contesto per una prima
            valutazione.
          </p>
          <Link
            to="/contatti"
            className="mt-9 inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine"
          >
            Contattaci <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
