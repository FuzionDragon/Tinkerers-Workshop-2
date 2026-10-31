import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import { defineConfig } from 'vite';

const projectPages = Object.fromEntries(
  readdirSync(resolve(import.meta.dirname, 'projects'))
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), resolve(import.meta.dirname, 'projects', f)]),
);

console.log(projectPages);

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...projectPages,
      },
    },
  },
});
