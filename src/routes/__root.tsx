import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Toaster } from "@/components/ui/sonner";

const BASE_URL = "https://cfferrobattuto.it";
const SOCIAL_IMAGE = `${BASE_URL}/og/cf-ferrobattuto-social.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "C.F. Ferrobattuto",
  url: BASE_URL,
  telephone: "+393804668154",
  email: "Info@CFFerrobattuto.com",
  image: SOCIAL_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via del Molino 10",
    postalCode: "12060",
    addressRegion: "Cuneo",
    addressCountry: "IT",
  },
  areaServed: ["Provincia di Cuneo", "Nord Italia"],
  sameAs: ["https://instagram.com/CFFerrobattuto"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-3xl text-foreground">Pagina non trovata</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          La pagina che cerchi non esiste oppure è stata spostata.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center bg-rame px-6 py-3 text-sm text-avorio transition-colors hover:bg-ruggine"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">La pagina non si è caricata</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Puoi riprovare oppure tornare alla pagina iniziale.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-rame px-5 py-3 text-sm text-avorio transition-colors hover:bg-ruggine"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-rame hover:text-rame"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "C.F. Ferrobattuto — Ferro battuto artigianale su misura" },
      {
        name: "description",
        content:
          "C.F. Ferrobattuto realizza opere e componenti in ferro battuto su misura in provincia di Cuneo e nel Nord Italia.",
      },
      { name: "author", content: "C.F. Ferrobattuto" },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:site_name", content: "C.F. Ferrobattuto" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Lavorazione del ferro nel laboratorio C.F. Ferrobattuto",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pb-14 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <MobileStickyBar />
        <Toaster position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
