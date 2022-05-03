import path from 'path';
import parsers from './parsers.js';
import getTreeDifference from './getTreeDifference.js';
import format from './formatters/index.js';
import readFile from './readFile.js';

const getParsingData = (file) => {
  const data = readFile(file);
  const extension = path.extname(file).substring(1);
  return parsers(data, extension);
};

const genDiff = (filepath1, filepath2, formatName) => {
  const data1 = getParsingData(filepath1);
  const data2 = getParsingData(filepath2);

  const diff = getTreeDifference(data1, data2);
  return format(diff, formatName);
};

export default genDiff;
