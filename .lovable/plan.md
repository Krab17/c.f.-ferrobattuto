# Verifica testi Home e allineamento terminologia

## Stato attuale (verificato)

Ho letto la pagina realmente caricata nella tua preview: contiene già i testi nuovi
- "Hai un'idea di ferro battuto?" presente
- "Hai un progetto in ferro" (vecchio) assente
- "il progetto guida il processo di produzione" presente
- "realizzati artigianalmente" presente

L'unica dicitura "vecchia" ancora visibile in Home è **"Opere architettoniche"**, ma non appartiene alle sezioni modificate: si trova nel **Footer** (link "Opere architettoniche" verso `/servizi#opere-architettoniche`) e nella pagina **Servizi**.

Quindi le modifiche sono applicate; quello che vedi è terminologia rimasta in altri componenti.

## Cosa propongo di fare

1. Allineare il Footer: il link diventa "Opere" (ancora invariata, così non si rompe la navigazione).
2. Allineare la pagina Servizi:
   - titolo scheda "Opere architettoniche in ferro battuto" → "Opere in ferro battuto"
   - description SEO della pagina aggiornata con "Opere, componenti forgiati e lavorazioni speciali realizzate su richiesta."
3. Nessun'altra modifica a layout, immagini o struttura.

## Note tecniche

- File toccati: `src/components/Footer.tsx`, `src/routes/servizi.tsx`.
- L'ancora `#opere-architettoniche` resta invariata per non rompere i link esistenti.
- Se invece continui a vedere davvero la Home vecchia, la causa è cache del browser/preview: un ricaricamento forzato (Cmd/Ctrl+Shift+R) la risolve, il codice sorgente è già aggiornato.
