import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Flame, Ruler, Sparkles, Wrench, LeafyGreen } from "lucide-react";
import { MImage } from "@/components/MImage";

const IMG_HERO = "/images/hero";
const IMG_CHI = "/images/chi-siamo";
const IMG_PORTFOLIO = "/images/portfolio";
const IMG_PROCESSO = "/images/processo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C.F. Ferrobattuto — Ferro battuto artigianale su misura | Cuneo" },
      { name: "description", content: "Laboratorio artigiano di ferro battuto in provincia di Cuneo. Cancelli, ringhiere, componenti forgiati ed elementi decorativi realizzati a mano su misura." },
      { property: "og:title", content: "C.F. Ferrobattuto — Ferro battuto artigianale su misura" },
      { property: "og:description", content: "Opere uniche in ferro battuto, lavorate a mano da oltre 20 anni. Cancelli, ringhiere, componenti forgiati e restauro." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const servizi = [
  { icon: Wrench, title: "Cancelli", desc: "Cancelli pedonali e carrabili su misura, disegnati sullo stile dell'abitazione.", img: `${IMG_PROCESSO}/CFFerrobattuto-lavoro-incudine-11.webp` },
  { icon: Ruler, title: "Ringhiere e scale", desc: "Ringhiere, parapetti e scale in ferro battuto per interni ed esterni.", img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp` },
  { icon: Hammer, title: "Inferriate", desc: "Soluzioni di protezione decorativa proporzionate al contesto architettonico.", img: `${IMG_PORTFOLIO}/CFFerrobattuto-ringhiera-1.webp` },
  { icon: Flame, title: "Componenti forgiati", desc: "Elementi forgiati per edilizia, restauro e lavorazioni speciali.", img: `${IMG_PROCESSO}/CFFerrobattuto-componente-forgiato-1.webp` },
  { icon: Sparkles, title: "Elementi decorativi", desc: "Dettagli e composizioni che danno carattere a ingressi, interni ed esterni.", img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp` },
  { icon: LeafyGreen, title: "Restauro e recupero", desc: "Recupero e integrazione di cancelli, ringhiere e opere esistenti in ferro battuto.", img: `${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp` },
];

const portfolio = [
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-marmo-1.webp`, cap: "Scala in marmo con ringhiera decorativa" },
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-scala-dettaglio-1.webp`, cap: "Dettaglio ringhiera in ferro battuto" },
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-ringhiera-1.webp`, cap: "Ringhiera esterna su misura" },
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-mensole-balcone-1.webp`, cap: "Mensole decorative per balcone" },
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-albero-forgiato-1.webp`, cap: "Elemento decorativo forgiato" },
  { img: `${IMG_PORTFOLIO}/CFFerrobattuto-BA-1.webp`, cap: "Opera personalizzata in ferro" },
];

const processo = [
  { n: "01", t: "Ascolto della richiesta", d: "Comprendiamo l'idea, il contesto e le esigenze del cliente." },
  { n: "02", t: "Valutazione tecnica", d: "Analisi delle misure, dei vincoli e delle soluzioni possibili." },
  { n: "03", t: "Progettazione su misura", d: "Definizione di forme, proporzioni e dettagli decorativi." },
  { n: "04", t: "Lavorazione artigianale", d: "Ogni elemento viene forgiato e assemblato a mano in laboratorio." },
  { n: "05", t: "Finitura e posa", d: "Trattamenti protettivi, finiture curate e installazione." },
];

const perche = [
  "Lavorazioni su misura",
  "Oltre 20 anni di esperienza",
  "Opere uniche, non seriali",
  "Attenzione al dettaglio",
  "Componenti realizzati su richiesta",
  "Interventi valutati in base al progetto",
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative isolate min-h-[86vh] overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-1.webp`}
          alt="Fabbro al lavoro con il maglio nel laboratorio C.F. Ferrobattuto"
          ratio="16/9"
          className="!absolute inset-0 h-full w-full !aspect-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbone/85 via-carbone/55 to-carbone/20" />
        <div className="relative z-10 container mx-auto flex min-h-[86vh] flex-col justify-center px-6 py-24 md:px-10">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow text-rame">Laboratorio artigiano · dal 2004</p>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] md:text-[4.5rem]">
              Ferro battuto artigianale, <span className="italic text-rame">realizzato a mano e su misura</span>.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-avorio/80 md:text-xl">
              Opere uniche, componenti forgiati e lavorazioni personalizzate per chi cerca qualità, carattere e durata nel tempo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/lavori" className="inline-flex items-center gap-2 bg-rame px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:bg-ruggine">
                Guarda i lavori <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contatti" className="inline-flex items-center gap-2 border border-avorio/40 px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:border-rame hover:text-rame">
                Richiedi una lavorazione su misura
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div>
            <p className="eyebrow">Posizionamento</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Un lavoro artigianale autentico, <span className="italic text-rame">oggi sempre più raro</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ogni opera nasce dall'ascolto del cliente, dalla conoscenza del materiale e da una lavorazione manuale curata nei dettagli. C.F. Ferrobattuto realizza pezzi unici, pensati per durare e per integrarsi con il contesto in cui verranno installati.
            </p>
            <div className="mt-8 h-px w-16 bg-rame" />
            <p className="mt-8 font-serif text-xl italic text-foreground/80">
              Ferro, mani, tempo. Nient'altro.
            </p>
          </div>
          <MImage
            src={`${IMG_PROCESSO}/CFFerrobattuto-lavoro-incudine-11.webp`}
            alt="Lavorazione manuale sull'incudine"
            ratio="4/5"
          />
        </div>
      </section>

      {/* SERVIZI */}
      <section className="border-y border-border bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Servizi</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Lavorazioni su misura in ferro battuto
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servizi.map((s) => (
              <Link
                key={s.title}
                to="/servizi"
                className="group flex flex-col bg-card"
              >
                <MImage src={s.img} alt={s.title} ratio="4/3" />
                <div className="flex flex-1 flex-col p-7">
                  <s.icon className="h-5 w-5 text-rame" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.2em] text-rame transition-transform group-hover:translate-x-1">
                    Scopri <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Alcuni lavori realizzati
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Una selezione di opere e dettagli che raccontano il lavoro artigianale di C.F. Ferrobattuto.
              </p>
            </div>
            <Link to="/lavori" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-rame hover:text-ruggine">
              Vedi tutti i lavori <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <MImage key={p.cap} src={p.img} alt={p.cap} caption={p.cap} ratio="4/5" />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div>
              <p className="eyebrow">Processo</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
                Dal ferro grezzo all'opera finita
              </h2>
              <p className="mt-6 max-w-md text-lg text-avorio/70">
                Ogni lavorazione segue un processo fatto di ascolto, valutazione tecnica, gesto manuale e cura del dettaglio.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <MImage src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`} alt="Forgia in laboratorio" ratio="1/1" />
                <MImage src={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-2.webp`} alt="Lavorazione al maglio" ratio="1/1" />
                <MImage src={`${IMG_PROCESSO}/CFFerrobattuto-lavoro-incudine-11.webp`} alt="Battitura sull'incudine" ratio="1/1" />
                <MImage src={`${IMG_PROCESSO}/CFFerrobattuto-componente-forgiato-1.webp`} alt="Componente forgiato" ratio="1/1" />
              </div>
            </div>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {processo.map((p) => (
                <li key={p.n} className="grid grid-cols-[auto_1fr] gap-6 py-7">
                  <span className="font-serif text-3xl text-rame">{p.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-avorio">{p.t}</h3>
                    <p className="mt-2 text-avorio/60">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PERCHÉ */}
      <section className="section-dark border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Il nostro valore</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Perché scegliere C.F. Ferrobattuto
            </h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {perche.map((p, i) => (
              <div key={p} className="border-t border-white/10 pt-6">
                <span className="font-serif text-sm text-rame">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-xl text-avorio">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <MImage src={`${IMG_CHI}/CFFerrobattuto-Franco-1.webp`} alt="Franco al lavoro nell'atelier C.F. Ferrobattuto" ratio="4/5" />
          <div>
            <p className="eyebrow">L'atelier</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Un laboratorio dove il ferro <span className="italic text-rame">prende forma a mano</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nel laboratorio C.F. Ferrobattuto ogni elemento viene lavorato con attenzione, rispettando il materiale e la richiesta del cliente. Il risultato non è un prodotto standard, ma un'opera pensata, costruita e rifinita una alla volta.
            </p>
            <Link to="/atelier" className="mt-8 inline-flex items-center gap-2 border border-foreground/30 px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-foreground hover:border-rame hover:text-rame">
              Scopri l'atelier <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`}
          alt=""
          ratio="16/6"
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-40"
        />
        <div className="absolute inset-0 bg-carbone/70" />
        <div className="relative z-10 container mx-auto px-6 py-24 text-center md:px-10 md:py-32">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Hai un progetto in ferro battuto?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-avorio/70">
            Raccontaci la tua idea, inviaci foto o misure e valuteremo insieme la soluzione più adatta.
          </p>
          <Link to="/contatti" className="mt-10 inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
            Richiedi una prima valutazione <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
