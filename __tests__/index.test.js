import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import stylish from '../src/formatters/stylish.js';
import plain from '../src/formatters/plain.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getExpectedPath = (filename) => path.join(__dirname, filename);
const readFile = (filename) => fs.readFileSync(getExpectedPath(filename), 'utf-8');

test('genDiff', () => {
  const tree1 = getFixturePath('file6.json');
  const tree2 = getFixturePath('file7.json');
  expect(stylish(genDiff(tree1, tree2))).toStrictEqual(readFile('tree.test.txt'));
});

test('genDiff plain', () => {
  const result = readFile('../__tests__/plain.test.txt');
  const tree1 = getFixturePath('file6.json');
  const tree2 = getFixturePath('file7.json');
  expect(genDiff(tree1, tree2, 'plain')).toEqual(result);
});
