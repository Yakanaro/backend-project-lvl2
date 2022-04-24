#!/usr/bin/env node

// import { Command } from 'commander/esm.mjs';
// import genDiff from '../src/index.js';

// const program = new Command();

// program.version('0.0.1');
// program.description('Compares two configuration files and shows a difference.');
// program.option('-f, --format <type>', 'output format');
// program.argument('<filepath1>');
// program.argument('<filepath2>');
// program.action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

// program.parse(process.argv);

import { Command } from 'commander';
import genDiff from '../src/index.js';
import stylish from '../src/formatters/stylish.js';

const program = new Command();

program
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => console.log(stylish(genDiff(filepath1, filepath2))));

program.parse();
