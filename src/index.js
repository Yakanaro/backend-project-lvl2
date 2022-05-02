import parserFile from './parsers.js';
import getTreeDifference from './getTreeDifference.js';
import showForm from './formatters/index.js';

const genDiff = (filepath1, filepath2, format) => {
  const data1 = parserFile(filepath1);
  const data2 = parserFile(filepath2);

  const diff = getTreeDifference(data1, data2);
  return showForm(diff, format);
};

export default genDiff;
