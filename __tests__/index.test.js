import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getExpectedPath = (filename) => path.join(__dirname, filename);
const readFile = (filename) => fs.readFileSync(getExpectedPath(filename), 'utf-8');

test('genDiff', () => {
  const result = readFile('../__fixtures__/tree.test.txt');
  const tree1 = getFixturePath('file1.yml');
  const tree2 = getFixturePath('file2.yml');
  expect(genDiff(tree1, tree2)).toEqual(result);
});

test('genDiff plain', () => {
  const result = readFile('../__fixtures__/plain.test.txt');
  const tree1 = getFixturePath('file6.json');
  const tree2 = getFixturePath('file7.json');
  expect(genDiff(tree1, tree2, 'plain')).toEqual(result);
});

test('genDiff json', () => {
  const result = readFile('../__fixtures__/json.test.txt');
  const tree1 = getFixturePath('file6.json');
  const tree2 = getFixturePath('file7.json');
  expect(genDiff(tree1, tree2, 'json')).toEqual(result);
});

test('genDiff yml', () => {
  const result = readFile('../__fixtures__/tree.test.txt');
  const tree1 = getFixturePath('file1.yml');
  const tree2 = getFixturePath('file2.yml');
  expect(genDiff(tree1, tree2)).toEqual(result);
});

test('genDiff yaml', () => {
  const result = readFile('../__fixtures__/tree.test.txt');
  const tree1 = getFixturePath('file3.yaml');
  const tree2 = getFixturePath('file4.yaml');
  expect(genDiff(tree1, tree2)).toEqual(result);
});
