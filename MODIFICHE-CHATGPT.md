# Revisione C.F. Ferrobattuto — 19 agosto 2026

## Cosa è stato modificato

- Homepage accorciata: 4 lavorazioni, 4 lavori selezionati, 4 fasi del processo; rimossa la sezione ripetitiva “Perché scegliere”.
- Pagina Lavori: eliminati i filtri non funzionanti e i progetti duplicati; unita la scala in marmo in un unico progetto raccontato con tre fotografie.
- Pagina Servizi: ridotta da 7 servizi molto simili a 4 gruppi più concreti e leggibili.
- Pagina Atelier: testo reso più personale e concreto, presentando Franco e riducendo gallery e concetti ripetuti.
- Pagina Contatti: il form ora dichiara correttamente che prepara un messaggio WhatsApp; non resetta i dati e mostra errori vicino ai campi.
- Header/Footer: navigazione semplificata e rimossi i riferimenti a file logo mancanti.
- SEO: title e description riscritti, canonical e og:url assoluti, sitemap corretta, robots.txt aggiornato.
- SEO locale: aggiunto JSON-LD LocalBusiness con i soli dati aziendali disponibili.
- Social: creata immagine Open Graph 1200x630 e collegata a Open Graph/Twitter Card.
- Immagini: hero caricata con priorità; su mobile usa il crop verticale già disponibile; ridotte le ripetizioni fotografiche.
- Performance: ridotti i pesi Google Fonts caricati.
- Accessibilità: menu mobile con aria-expanded/aria-controls, focus visibile, reduced motion, errori form associati ai campi.
- Errori 404/500: testi tradotti e resi coerenti col brand.

## Da completare manualmente

1. **Logo ufficiale**: non era presente nello ZIP. Il sito usa temporaneamente il wordmark testuale “C.F. Ferrobattuto”.
2. **Favicon**: è stato creato un favicon provvisorio CF coerente con la palette; sostituirlo con il marchio ufficiale quando disponibile.
3. **Privacy e Cookie Policy**: sono state corrette solo le URL canonical; il contenuto legale non è stato riscritto e va verificato prima della pubblicazione definitiva.
4. **Build**: nell'ambiente di modifica non erano disponibili le dipendenze npm del progetto, quindi è stato eseguito un controllo sintattico TypeScript ma non un build Vite completo.
