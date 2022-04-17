import _ from 'lodash';
import fileData from './data.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = fileData(filepath1);
  const file2 = fileData(filepath2);
  const keys = Object.keys({ ...file1, ...file2 }).sort();

  const getDistinction = keys
    .map((key) => {
      if (!_.has(file2, key)) {
        return `- ${key}: ${file1[key]}`;
      }
      if (!_.has(file1, key)) {
        return `+ ${key}: ${file2[key]}`;
      }
      if (file1[key] === file2[key]) {
        return `  ${key}: ${file1[key]}`;
      }
      return `- ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
    })
    .join('\n  ');
  return `{\n  ${getDistinction}\n}`;
};

export default genDiff;
