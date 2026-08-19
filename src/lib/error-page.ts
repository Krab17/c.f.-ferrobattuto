export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <title>Pagina non disponibile — C.F. Ferrobattuto</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #FAF7F0; color: #2B2B2B; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font: 500 2rem/1.2 Georgia, serif; margin: 0 0 0.75rem; }
      p { color: #5A5650; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.75rem 1rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #A4633C; color: #FAF7F0; }
      .secondary { background: transparent; color: #2B2B2B; border-color: #E3DAC8; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>La pagina non si è caricata</h1>
      <p>Puoi riprovare oppure tornare alla pagina iniziale.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Riprova</button>
        <a class="secondary" href="/">Torna alla home</a>
      </div>
    </div>
  </body>
</html>`;
}
