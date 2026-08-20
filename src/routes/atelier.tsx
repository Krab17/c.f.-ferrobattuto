import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MImage } from "@/components/MImage";

const BASE_URL = "https://cfferrobattuto.it";
const IMG_CHI = "/images/chi-siamo";
const IMG_PROCESSO = "/images/processo";
const IMG_HERO = "/images/hero";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Laboratorio artigiano di ferro battuto | C.F. Ferrobattuto" },
      {
        name: "description",
        content:
          "Dentro il laboratorio C.F. Ferrobattuto: forgia, incudine, maglio e lavorazione manuale del ferro, con oltre 20 anni di esperienza.",
      },
      {
        property: "og:title",
        content: "Laboratorio artigiano di ferro battuto | C.F. Ferrobattuto",
      },
      {
        property: "og:description",
        content:
          "Il luogo in cui il ferro viene progettato, forgiato, assemblato e rifinito a mano.",
      },
      { property: "og:url", content: `${BASE_URL}/atelier` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/atelier` }],
  }),
  component: AtelierPage,
});

const metodo = [
  {
    n: "01",
    t: "Misure e contesto",
    d: "Si parte da ciò che deve essere realizzato e dal luogo in cui andrà inserito.",
  },
  {
    n: "02",
    t: "Forma e proporzioni",
    d: "Si definiscono ingombri, ritmo e dettagli prima di lavorare il materiale.",
  },
  {
    n: "03",
    t: "Lavorazione",
    d: "Forgiatura, battitura e assemblaggio vengono eseguiti in laboratorio.",
  },
  {
    n: "04",
    t: "Finitura",
    d: "Protezione e resa finale vengono scelte in funzione dell'opera e del suo utilizzo.",
  },
];

function AtelierPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-carbone text-avorio">
        <MImage
          src={`${IMG_CHI}/CFFerrobattuto-Franco-1.webp`}
          alt="Franco nel laboratorio C.F. Ferrobattuto"
          ratio="16/9"
          priority
          className="!absolute inset-0 h-full w-full !aspect-auto opacity-70"
          style={{ objectPosition: "center 32%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbone via-carbone/65 to-carbone/25" />
        <div className="relative z-10 container mx-auto px-6 py-28 md:px-10 md:py-40">
          <p className="eyebrow text-rame">Il laboratorio</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] md:text-6xl">
            Ferro, strumenti e lavoro manuale
          </h1>
          <p className="mt-6 max-w-xl text-lg text-avorio/80">
            Qui ogni pezzo passa dalle mani di chi lo progetta e lo lavora, una fase alla volta.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div>
            <p className="eyebrow">Franco e C.F. Ferrobattuto</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Oltre vent'anni di lavoro sul ferro
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Franco lavora il ferro partendo dalla funzione e dalle proporzioni dell'opera. Nel
              laboratorio convivono strumenti tradizionali e attrezzature da officina: forgia,
              incudine, maglio e banco servono a trasformare un disegno o una richiesta concreta in
              un pezzo finito.
            </p>
          </div>
          <MImage
            src={`${IMG_CHI}/CFFerrobattuto-banco-1.webp`}
            alt="Banco e strumenti del laboratorio C.F. Ferrobattuto"
            ratio="4/5"
          />
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Metodo</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-avorio md:text-5xl">
            Quattro passaggi, senza sovrastrutture
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {metodo.map((m) => (
              <div key={m.n} className="border-t border-white/15 pt-6">
                <span className="font-serif text-3xl text-rame">{m.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-avorio">{m.t}</h3>
                <p className="mt-3 text-avorio/65">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <MImage
              src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-11.webp`}
              alt="Forgia accesa durante la lavorazione"
              ratio="4/5"
            />
            <MImage
              src={`${IMG_CHI}/CFFerrobattuto-incudine-1.webp`}
              alt="Incudine e martello nel laboratorio"
              ratio="4/5"
            />
            <MImage
              src={`${IMG_HERO}/CFFerrobattuto-lavoro-maglio-2.webp`}
              alt="Lavorazione del ferro al maglio"
              ratio="4/5"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
          <div className="grid grid-cols-2 gap-4">
            <MImage
              src={`${IMG_PROCESSO}/CFFerrobattuto-forgia-31.webp`}
              alt="Ferro caldo nella forgia"
              ratio="1/1"
            />
            <MImage
              src={`${IMG_PROCESSO}/CFFerrobattuto-componente-forgiato-1.webp`}
              alt="Componente in ferro durante la lavorazione"
              ratio="1/1"
            />
          </div>
          <div>
            <p className="eyebrow">La materia</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              I segni della lavorazione restano nel pezzo
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Battitura, piega, assemblaggio e finitura lasciano tracce leggibili. È questa
              lavorazione, più delle parole, a distinguere un elemento realizzato in laboratorio da
              un prodotto seriale.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-serif text-4xl leading-tight text-avorio md:text-5xl">
            Hai un'idea da trasformare in ferro?
          </h2>
          <Link
            to="/contatti"
            className="mt-9 inline-flex items-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine"
          >
            Parliamone <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
