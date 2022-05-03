import yaml from 'js-yaml';

const parsers = (dataFile, dataType) => {
  switch (dataType) {
    case 'yml':
    case 'yaml':
      return yaml.load(dataFile);
    case 'json':
      return JSON.parse(dataFile);
    default:
      throw new Error('This file type is not supported');
  }
};

export default parsers;
