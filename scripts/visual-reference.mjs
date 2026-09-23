import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const REFERENCE_URL = 'https://www.pirelli.com/tyres/es-mx/carro/homepage';
const LOCAL_URL = process.env.LOCAL_URL ?? 'http://localhost:4321/';
const quick = process.argv.includes('--quick');
const review = process.argv.includes('--review');
const onlyReference = process.argv.includes('--reference');
const onlyLocal = process.argv.includes('--local');

const allViewports = [
  [1920, 1080], [1600, 900], [1440, 900], [1366, 768], [1280, 800],
  [1024, 768], [834, 1194], [768, 1024], [430, 932], [412, 915],
  [390, 844], [375, 812], [360, 800],
];
const viewports = quick ? [[1440, 900], [390, 844]] : allViewports;
const targets = onlyReference && !onlyLocal
  ? [{ name: 'reference', url: REFERENCE_URL, directory: 'reference-screenshots' }]
  : onlyLocal && !onlyReference
    ? [{ name: 'local', url: LOCAL_URL, directory: 'local-screenshots' }]
    : [
        { name: 'reference', url: REFERENCE_URL, directory: 'reference-screenshots' },
        { name: 'local', url: LOCAL_URL, directory: 'local-screenshots' },
      ];

const browser = await chromium.launch({ channel: 'chrome', headless: true });

for (const target of targets) {
  await mkdir(target.directory, { recursive: true });
  for (const [width, height] of viewports) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForTimeout(target.name === 'reference' ? 3_500 : 900);

    if (review && target.name === 'local') {
      await mkdir('.impeccable/review', { recursive: true });
      const reviewName = width > 767 ? 'desktop.png' : 'mobile.png';
      await page.screenshot({ path: path.join('.impeccable/review', reviewName), animations: 'disabled' });
    }

    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < scrollHeight; y += Math.max(500, height - 100)) {
      await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
      await page.waitForTimeout(45);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);

    const output = path.join(target.directory, `${target.name}-${width}x${height}.png`);
    await page.screenshot({ path: output, fullPage: true, animations: 'disabled' });
    console.log(`Captured ${output}`);
    await page.close();
  }
}

await browser.close();
