import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = resolve(projectRoot, 'dist', 'index.html');
const ssrBuildPath = resolve(projectRoot, '.ssr-build');
const rootElement = '<div id="root"></div>';

try {
  const html = await readFile(htmlPath, 'utf8');
  const rootElementCount = html.split(rootElement).length - 1;

  if (rootElementCount !== 1) {
    throw new Error(`Expected exactly one empty root element; found ${rootElementCount}`);
  }

  const serverEntry = pathToFileURL(resolve(ssrBuildPath, 'entry-server.js')).href;
  const { render } = await import(serverEntry);
  const renderedApp = render();

  await writeFile(htmlPath, html.replace(rootElement, `<div id="root">${renderedApp}</div>`), 'utf8');
} finally {
  await rm(ssrBuildPath, { recursive: true, force: true });
}