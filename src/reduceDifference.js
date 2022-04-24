import _ from 'lodash';

// const reduceDifference = (file1, file2) => {
//   const keys1 = Object.keys(file1);
//   const keys2 = Object.keys(file2);
//   const unionKeys = _.union(keys1, keys2);

//   const sortKeys = _.sortBy(unionKeys);

//   const result = sortKeys.reduce((acc, key) => {
//     const valueFile1 = file1[key];
//     const valueFile2 = file2[key];

//     if (_.has(file1, key) && _.has(file2, key)) {
//       if (_.isObject(valueFile1) && _.isObject(valueFile2)) {
//         return { ...acc, [`${key}`]: reduceDifference(valueFile1, valueFile2) };
//       }
//       if (valueFile1 === valueFile2) {
//         return { ...acc, [`  ${key}`]: valueFile1 };
//       }
//       return { ...acc, [`- ${key}`]: valueFile1, [`+ ${key}`]: valueFile2 };
//     }
//     if (_.has(file1, key) && !_.has(file2.key)) {
//       return { ...acc, [`- ${key}`]: valueFile1 };
//     }
//     return { ...acc, [`+ ${key}`]: valueFile2 };
//   }, {});
//   return result;
// };

// export default reduceDifference;

const reduceDifference = (data1, data2) => {
  const unionKeys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedUnionKeys = _.sortBy(unionKeys);

  const result = sortedUnionKeys.reduce((acc, key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { ...acc, [`${key}`]: { type: 'nested', value: reduceDifference(data1[key], data2[key]) } };
    }
    if (!_.has(data1, key)) {
      return { ...acc, [`${key}`]: { type: 'added', value: data2[key] } };
    }
    if (!_.has(data2, key)) {
      return { ...acc, [`${key}`]: { type: 'deleted', value: data1[key] } };
    }
    if (data1[key] !== data2[key]) {
      return { ...acc, [`${key}`]: { type: 'changed', previusValue: data1[key], currentValue: data2[key] } };
    }
    return { ...acc, [`${key}`]: { type: 'unchanged', value: data1[key] } };
  }, {});

  return result;
};

export default reduceDifference;
