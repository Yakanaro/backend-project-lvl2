import _ from 'lodash';
import { resolve, extname } from 'path';
import { readFileSync } from 'fs';
import parserFile from './parsers.js';
import reduceDifference from './reduceDifference.js';

// const genDiff = (filepath1, filepath2) => {
//   const ext1 = extname(filepath1);
//   const ext2 = extname(filepath2);
//   const readFile = (filepath) => readFileSync(resolve(filepath), 'utf-8');
//   const fileData1 = parserFile(readFile(filepath1), ext1);
//   const fileData2 = parserFile(readFile(filepath2), ext2);
//   // const keys = Object.keys({ ...fileData1, ...fileData2 });

//   // console.log(fileData1, fileData2);

//   // const result = _.sortBy(keys, (key) => key)
//   //   .map((key) => {
//   //     if (!_.has(fileData2, key)) {
//   //       return `- ${key}: ${fileData1[key]}`;
//   //     }
//   //     if (!_.has(fileData1, key)) {
//   //       return `+ ${key}: ${fileData2[key]}`;
//   //     }
//   //     if (fileData1[key] === fileData2[key]) {
//   //       return `  ${key}: ${fileData1[key]}`;
//   //     }
//   //     return `- ${key}: ${fileData1[key]}\n  + ${key}: ${fileData2[key]}`;
//   //   })
//   //   .join('\n  ');

//   // return `{\n  ${result}\n}`;

//   const keys1 = Object.keys(fileData1);
//   const keys2 = Object.keys(fileData2);
//   const unionKeys = _.union(keys1, keys2);

//   const sortKeys = _.sortBy(unionKeys);

//   const result = sortKeys.reduce((acc, key) => {
//     const valueFile1 = fileData1[key];
//     const valueFile2 = fileData2[key];

//     if (_.has(fileData1, key) && _.has(fileData2, key)) {
//       if (_.isObject(valueFile1) && _.isObject(valueFile2)) {
//         return { ...acc, [`${key}`]: genDiff(valueFile1, valueFile2) };
//       }
//       if (valueFile1 === valueFile2) {
//         return { ...acc, [`  ${key}`]: valueFile1 };
//       }
//       return { ...acc, [`- ${key}`]: valueFile1, [`+ ${key}`]: valueFile2 };
//     }
//     if (_.has(fileData1, key) && !_.has(fileData2.key)) {
//       return { ...acc, [`- ${key}`]: valueFile1 };
//     }
//     return { ...acc, [`+ ${key}`]: valueFile2 };
//   }, {});

//   return `{\n  ${result}\n}`;
// };

// export default genDiff;

const genDiff = (filepath1, filepath2) => {
  const data1 = parserFile(filepath1);
  const data2 = parserFile(filepath2);

  const diff = reduceDifference(data1, data2);
  return diff;
};

export default genDiff;
