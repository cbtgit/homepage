import { spawn } from 'node:child_process';
import { rm } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright';

const PORT = 4322;
const HOST = '127.0.0.1';
const URL = `http://${HOST}:${PORT}/resume`;
const OUTPUT_PATH = 'dist/resume.pdf';
const PUBLIC_OUTPUT_PATH = 'public/resume.pdf';

function log(message) {
  console.log('[resume-pdf] ' + new Date().toISOString() + ' ' + message);
}

log('Removing stale public PDF');
await rm(PUBLIC_OUTPUT_PATH, { force: true });
log('Starting Astro preview server');

const server = spawn('npx', ['astro', 'preview', '--host', HOST, '--port', String(PORT)], {
  stdio: 'inherit',
  detached: true,
});

let serverExited = false;
server.once('exit', () => {
  serverExited = true;
  log('Preview server exited');
});

async function waitForServer() {
  log('Waiting for preview server');
  for (let attempt = 0; attempt < 30; attempt++) {
    if (serverExited) {
      throw new Error('Preview server exited before it started responding');
    }
    try {
      const res = await fetch(URL);
      if (res.ok) {
        log('Preview server is ready');
        return;
      }
    } catch {
      // preview server not up yet, keep polling
    }
    await sleep(500);
  }
  throw new Error('Preview server did not start in time');
}

function stopServer() {
  if (!serverExited && server.pid) {
    // negative pid signals the whole detached process group, killing astro's child too
    try {
      process.kill(-server.pid, 'SIGTERM');
    } catch {
      server.kill('SIGTERM');
    }
  }
}

let browser;
try {
  await waitForServer();

  log('Launching Chromium');
  browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('pageerror', (error) => log('Page error: ' + error.message));
  page.on('requestfailed', (request) => log('Request failed: ' + request.url()));

  log('Loading resume page');
  await page.goto(URL, { waitUntil: 'load' });
  await page.locator('main article').waitFor();
  log('Resume page loaded');
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.fonts.ready);
  log('Fonts are ready; writing PDF');
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', bottom: '0.5in', left: '0.3in', right: '0.3in' },
  });
  log('PDF written to dist');
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  log('Closing browser and preview server');
  await browser?.close();
  stopServer();
}
