#!/usr/bin/env node

import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Command} from 'commander';
import {bgGreen, black} from 'kleur/colors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const packageJson = require(path.join(__dirname, '../package.json'));

async function main() {
  console.log(`🌱 ${bgGreen(black(' root-contentful '))} v${packageJson.version}`);

  const program = new Command('root-contentful');
  program.version(packageJson.version);
  await program.parseAsync(process.argv);
}

main();
