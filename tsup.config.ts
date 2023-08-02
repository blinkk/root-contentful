/* eslint-disable node/no-unpublished-import */

import {defineConfig} from 'tsup';

export default defineConfig({
  entry: {
    cli: './cli/cli.ts',
    core: './core/core.ts',
  },
  sourcemap: 'inline',
  target: 'node16',
  dts: {
    entry: [
      './core/core.ts',
    ],
  },
  format: ['esm'],
  splitting: false,
  platform: 'node',
  esbuildOptions(options) {
    options.tsconfig = './tsconfig.json';
  },
});
