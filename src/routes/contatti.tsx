import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const WHATSAPP = "https://wa.me/393804668154";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Richiedi una lavorazione | C.F. Ferrobattuto" },
      { name: "description", content: "Richiedi un preventivo per una lavorazione in ferro battuto su misura. Cuneo e Nord Italia. Telefono, WhatsApp, email." },
      { property: "og:title", content: "Contatti — C.F. Ferrobattuto" },
      { property: "og:description", content: "Raccontaci il tuo progetto in ferro battuto." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: ContattiPage,
});

const richiestaSchema = z.object({
  nome: z.string().trim().min(2, "Nome troppo breve").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().max(30).optional(),
  localita: z.string().trim().max(100).optional(),
  tipo: z.string().min(1, "Seleziona una tipologia"),
  messaggio: z.string().trim().min(10, "Descrivi almeno brevemente il progetto").max(2000),
});

const tipi = [
  "Cancello",
  "Ringhiera / scala",
  "Inferriata",
  "Componente forgiato",
  "Elemento decorativo",
  "Restauro / recupero",
  "Lavorazione personalizzata",
  "Altro",
];

const invia = [
  "Foto del contesto",
  "Misure indicative",
  "Tipo di intervento",
  "Stile desiderato",
  "Eventuali disegni o riferimenti",
  "Località del lavoro",
];

function ContattiPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = richiestaSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Compila i campi obbligatori");
      return;
    }
    setSending(true);
    // Componi WhatsApp con i dati raccolti
    const d = parsed.data;
    const body =
      `Nuova richiesta da: ${d.nome}\n` +
      `Email: ${d.email}\n` +
      (d.telefono ? `Telefono: ${d.telefono}\n` : "") +
      (d.localita ? `Località: ${d.localita}\n` : "") +
      `Tipo: ${d.tipo}\n\n${d.messaggio}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank");
    toast.success("Richiesta pronta: continua su WhatsApp o inviaci una email.");
    (e.target as HTMLFormElement).reset();
    setSending(false);
  };

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Raccontaci il tuo progetto
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Puoi inviarci una richiesta per una lavorazione su misura, un componente in ferro battuto realizzato su disegno o un intervento da valutare.
          </p>
        </div>
      </section>

      {/* FORM + CONTATTI */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto grid gap-16 px-6 md:grid-cols-[1.2fr_1fr] md:px-10 md:gap-20">
          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome e cognome *">
                <input name="nome" required maxLength={100} className={inputCls} />
              </Field>
              <Field label="Email *">
                <input name="email" type="email" required maxLength={255} className={inputCls} />
              </Field>
              <Field label="Telefono">
                <input name="telefono" type="tel" maxLength={30} className={inputCls} />
              </Field>
              <Field label="Località del progetto">
                <input name="localita" maxLength={100} className={inputCls} />
              </Field>
            </div>

            <Field label="Tipo di richiesta *">
              <select name="tipo" required className={inputCls} defaultValue="">
                <option value="" disabled>Seleziona una tipologia</option>
                {tipi.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>

            <Field label="Descrizione del lavoro *">
              <textarea
                name="messaggio"
                required
                rows={6}
                maxLength={2000}
                placeholder="Descrivi brevemente il lavoro, il contesto, le misure indicative o eventuali esigenze particolari."
                className={inputCls + " resize-none"}
              />
            </Field>

            <p className="text-xs text-muted-foreground">
              Per inviare foto, disegni o misure puoi contattarci direttamente via WhatsApp o email.
            </p>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:bg-ruggine disabled:opacity-60 md:w-auto"
            >
              Invia richiesta
            </button>
          </form>

          {/* CONTATTI DIRETTI */}
          <aside className="space-y-8">
            <div className="border-l-2 border-rame pl-6">
              <p className="eyebrow">Scrivici direttamente</p>
              <h2 className="mt-3 font-serif text-3xl">Contatti diretti</h2>
            </div>

            <ContactRow icon={<Phone className="h-4 w-4" />} label="Telefono" value="380 466 8154" href="tel:3804668154" />
            <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Scrivi su WhatsApp" href={WHATSAPP} external />
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="Info@CFFerrobattuto.com" href="mailto:Info@CFFerrobattuto.com" />
            <ContactRow icon={<Instagram className="h-4 w-4" />} label="Instagram" value="@CFFerrobattuto" href="https://instagram.com/CFFerrobattuto" external />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Laboratorio" value={<>Via del Molino 10, 12060<br />Provincia di Cuneo</>} />

            <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
              C.F. Ferrobattuto opera principalmente in provincia di Cuneo e nel Nord Italia, valutando anche interventi fuori zona in base alla tipologia del lavoro.
            </p>
          </aside>
        </div>
      </section>

      {/* COSA INVIARE */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="eyebrow">Primo contatto</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Cosa inviare per una prima valutazione
            </h2>
            <p className="mt-6 text-avorio/70">
              Anche una semplice foto può essere il primo passo per capire come intervenire.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {invia.map((v, i) => (
              <li key={v} className="flex items-start gap-4 border-t border-white/15 pt-4">
                <span className="font-serif text-rame">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-avorio/85">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Ogni progetto inizia da una <span className="italic text-rame">conversazione</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Raccontaci cosa vorresti realizzare: ti aiuteremo a capire quale soluzione può essere più adatta.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:3804668154" className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.2em] hover:border-rame hover:text-rame">
              <Phone className="h-4 w-4" /> Chiama ora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-rame px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-avorio hover:bg-ruggine">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="mailto:Info@CFFerrobattuto.com" className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.2em] hover:border-rame hover:text-rame">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "w-full border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-rame focus:ring-1 focus:ring-rame";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-rame/50 text-rame">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-serif text-lg">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="block transition-colors hover:text-rame">
      {content}
    </a>
  ) : (
    content
  );
}
