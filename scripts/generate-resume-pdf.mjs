import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright';

const PORT = 4322;
const HOST = '127.0.0.1';
const URL = `http://${HOST}:${PORT}/resume`;
const OUTPUT_PATH = 'dist/Christian Bloch Thomsen _ Resume.pdf';

const server = spawn('npx', ['astro', 'preview', '--host', HOST, '--port', String(PORT)], {
  stdio: 'inherit',
  detached: true,
});

let serverExited = false;
server.once('exit', () => {
  serverExited = true;
});

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt++) {
    if (serverExited) {
      throw new Error('Preview server exited before it started responding');
    }
    try {
      const res = await fetch(URL);
      if (res.ok) return;
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

  browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', bottom: '0.5in', left: '0.3in', right: '0.3in' },
  });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  stopServer();
}
