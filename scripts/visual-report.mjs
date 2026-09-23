import { readdir, writeFile } from 'node:fs/promises';

const localFiles = (await readdir('local-screenshots')).filter((file) => file.endsWith('.png')).sort();
const rows = localFiles.map((local) => {
  const size = local.replace(/^local-/, '').replace(/\.png$/, '');
  const reference = `reference-${size}.png`;
  return `<section><h2>${size}</h2><figure><img src="../reference-screenshots/${reference}" alt="Referencia ${size}"><figcaption>Referencia</figcaption></figure><figure><img src="../local-screenshots/${local}" alt="Implementación ${size}"><figcaption>Local</figcaption></figure></section>`;
}).join('');

const html = `<!doctype html><html lang="es"><meta charset="utf-8"><title>Visual comparison</title><style>body{margin:0;background:#222;color:#fff;font:14px system-ui}section{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:24px;border-bottom:1px solid #555}h2{grid-column:1/-1}figure{margin:0}img{display:block;width:100%;background:#fff}figcaption{padding:8px 0}</style><body>${rows}</body></html>`;
await writeFile('local-screenshots/comparison.html', html);
console.log('Wrote local-screenshots/comparison.html');
