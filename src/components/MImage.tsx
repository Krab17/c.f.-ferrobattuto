import { useEffect, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
}

/**
 * Immagine materica con fallback elegante.
 * Se il file in /public/images non esiste ancora, mostra un blocco scuro texturizzato.
 */
export function MImage({ src, alt, caption, ratio = "4/3", className = "", ...rest }: Props) {
  const [failed, setFailed] = useState(false);

  // Reset on src change
  useEffect(() => setFailed(false), [src]);

  return (
    <figure
      className={`relative overflow-hidden bg-carbone ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-[1.03]"
          {...rest}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, #3a2f24 0%, #1a1613 55%, #0d0b09 100%)",
          }}
        >
          <div className="px-6">
            <div className="mx-auto mb-3 h-px w-10 bg-rame/60" />
            <p className="font-serif text-avorio/90 text-lg md:text-xl italic">{alt}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-avorio/40">
              Immagine in arrivo
            </p>
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbone/85 via-carbone/40 to-transparent p-5 text-avorio">
          <p className="font-serif text-base md:text-lg">{caption}</p>
        </figcaption>
      )}
    </figure>
  );
}
