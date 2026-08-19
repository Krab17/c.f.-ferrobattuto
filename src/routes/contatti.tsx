import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const BASE_URL = "https://cfferrobattuto.it";
const WHATSAPP = "https://wa.me/393804668154";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti C.F. Ferrobattuto | Cuneo e Nord Italia" },
      {
        name: "description",
        content:
          "Contatta C.F. Ferrobattuto per una lavorazione in ferro battuto su misura. Telefono, WhatsApp ed email per progetti in provincia di Cuneo e Nord Italia.",
      },
      { property: "og:title", content: "Contatti C.F. Ferrobattuto | Cuneo e Nord Italia" },
      {
        property: "og:description",
        content:
          "Invia una descrizione, alcune misure o una foto del contesto per una prima valutazione.",
      },
      { property: "og:url", content: `${BASE_URL}/contatti` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/contatti` }],
  }),
  component: ContattiPage,
});

const richiestaSchema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  email: z.union([z.literal(""), z.string().trim().email("Email non valida").max(255)]),
  telefono: z.string().trim().max(30),
  localita: z.string().trim().max(100),
  tipo: z.string().min(1, "Seleziona una tipologia"),
  messaggio: z.string().trim().min(10, "Descrivi brevemente il progetto").max(2000),
});

const tipi = [
  "Cancello / ingresso",
  "Ringhiera / scala",
  "Inferriata / recinzione",
  "Componente forgiato",
  "Elemento decorativo",
  "Lavorazione speciale",
  "Recupero / integrazione",
  "Altro",
];

const invia = [
  "Una foto del contesto",
  "Misure indicative",
  "Località del lavoro",
  "Un disegno o riferimento, se disponibile",
];

type FormErrors = Record<string, string>;

function ContattiPage() {
  const [errors, setErrors] = useState<FormErrors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = richiestaSchema.safeParse(data);

    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      toast.error(parsed.error.issues[0]?.message ?? "Controlla i campi indicati");
      return;
    }

    setErrors({});
    const d = parsed.data;
    const body =
      `Ciao, sono ${d.nome}. Vorrei chiedere una prima valutazione.\n\n` +
      `Tipo di lavoro: ${d.tipo}\n` +
      (d.localita ? `Località: ${d.localita}\n` : "") +
      (d.telefono ? `Telefono: ${d.telefono}\n` : "") +
      (d.email ? `Email: ${d.email}\n` : "") +
      `\n${d.messaggio}`;

    const url = `${WHATSAPP}?text=${encodeURIComponent(body)}`;
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    else window.location.href = url;
    toast.success("Messaggio preparato: completa l'invio su WhatsApp.");
  };

  return (
    <div>
      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Raccontaci cosa vuoi realizzare
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Per una prima valutazione bastano una descrizione, la località e, se possibile, una foto
            o alcune misure indicative.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid gap-16 px-6 md:grid-cols-[1.2fr_1fr] md:px-10 md:gap-20">
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome *" id="nome-error" error={errors.nome}>
                <input
                  name="nome"
                  required
                  maxLength={100}
                  className={inputCls}
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
              </Field>
              <Field label="Email" id="email-error" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  className={inputCls}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
              <Field label="Telefono" id="telefono-error" error={errors.telefono}>
                <input
                  name="telefono"
                  type="tel"
                  maxLength={30}
                  className={inputCls}
                  aria-invalid={Boolean(errors.telefono)}
                  aria-describedby={errors.telefono ? "telefono-error" : undefined}
                />
              </Field>
              <Field label="Località del progetto" id="localita-error" error={errors.localita}>
                <input
                  name="localita"
                  maxLength={100}
                  className={inputCls}
                  aria-invalid={Boolean(errors.localita)}
                  aria-describedby={errors.localita ? "localita-error" : undefined}
                />
              </Field>
            </div>

            <Field label="Tipo di richiesta *" id="tipo-error" error={errors.tipo}>
              <select
                name="tipo"
                required
                className={inputCls}
                defaultValue=""
                aria-invalid={Boolean(errors.tipo)}
                aria-describedby={errors.tipo ? "tipo-error" : undefined}
              >
                <option value="" disabled>
                  Seleziona una tipologia
                </option>
                {tipi.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Descrizione *" id="messaggio-error" error={errors.messaggio}>
              <textarea
                name="messaggio"
                required
                rows={6}
                maxLength={2000}
                placeholder="Descrivi il lavoro, il contesto e ciò che vorresti ottenere."
                className={`${inputCls} resize-none`}
                aria-invalid={Boolean(errors.messaggio)}
                aria-describedby={errors.messaggio ? "messaggio-error" : undefined}
              />
            </Field>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Il pulsante prepara il messaggio e apre WhatsApp. Foto e disegni possono essere
              allegati direttamente nella chat prima dell'invio.
            </p>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-rame px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-avorio transition-colors hover:bg-ruggine md:w-auto"
            >
              <MessageCircle className="h-4 w-4" /> Continua su WhatsApp
            </button>
          </form>

          <aside className="space-y-8">
            <div className="border-l-2 border-rame pl-6">
              <p className="eyebrow">Contatti diretti</p>
              <h2 className="mt-3 font-serif text-3xl">Scegli il canale più comodo</h2>
            </div>

            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="Telefono"
              value="380 466 8154"
              href="tel:3804668154"
            />
            <ContactRow
              icon={<MessageCircle className="h-4 w-4" />}
              label="WhatsApp"
              value="Scrivi su WhatsApp"
              href={WHATSAPP}
              external
            />
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="Info@CFFerrobattuto.com"
              href="mailto:Info@CFFerrobattuto.com"
            />
            <ContactRow
              icon={<Instagram className="h-4 w-4" />}
              label="Instagram"
              value="@CFFerrobattuto"
              href="https://instagram.com/CFFerrobattuto"
              external
            />
            <ContactRow
              icon={<MapPin className="h-4 w-4" />}
              label="Laboratorio"
              value={
                <>
                  Via del Molino 10, 12060
                  <br />
                  Provincia di Cuneo
                </>
              }
            />

            <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
              Operiamo principalmente in provincia di Cuneo e nel Nord Italia; i lavori fuori zona
              vengono valutati in base al progetto.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-dark py-20 md:py-24">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="eyebrow">Prima valutazione</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-avorio md:text-5xl">
              Cosa è utile inviare
            </h2>
            <p className="mt-5 text-avorio/70">
              Non serve avere già un progetto completo: poche informazioni concrete aiutano a capire
              subito la richiesta.
            </p>
          </div>
          <ul className="space-y-4">
            {invia.map((v, i) => (
              <li key={v} className="flex items-start gap-4 border-t border-white/15 pt-4">
                <span className="font-serif text-rame">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-avorio/85">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "w-full border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-rame focus:ring-2 focus:ring-rame/30 aria-[invalid=true]:border-ruggine";

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && (
        <span id={id} className="mt-2 block text-sm text-ruggine">
          {error}
        </span>
      )}
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
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block transition-colors hover:text-rame"
    >
      {content}
    </a>
  ) : (
    content
  );
}
