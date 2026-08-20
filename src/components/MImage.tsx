import { useEffect, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  mobileSrc?: string;
  priority?: boolean;
}

/**
 * Immagine materica con fallback elegante.
 * Le immagini above-the-fold possono usare `priority` per evitare lazy loading.
 * `mobileSrc` permette di usare un crop verticale dedicato sui piccoli schermi.
 */
export function MImage({
  src,
  alt,
  caption,
  ratio = "4/3",
  mobileSrc,
  priority = false,
  className = "",
  ...rest
}: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src, mobileSrc]);

  const image = (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
      {...rest}
    />
  );

  return (
    <figure
      className={`relative overflow-hidden bg-carbone ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed ? (
        mobileSrc ? (
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet={mobileSrc} />
            {image}
          </picture>
        ) : (
          image
        )
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
            <p className="font-serif text-lg italic text-avorio/90 md:text-xl">{alt}</p>
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
