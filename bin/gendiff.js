#!/usr/bin/env node

import genDiff from '../src/index.js';
import { Command } from 'commander/esm.mjs';

const program = new Command();

program.version('0.0.1');
program.description('Compares two configuration files and shows a difference.');
program.option('-f, --format <type>', 'output format');
program.argument('<filepath1>');
program.argument('<filepath2>');
program.action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse(process.argv);
