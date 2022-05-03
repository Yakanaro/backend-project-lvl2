import stylish from './stylish.js';
import plain from './plain.js';

const format = (diff, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error(`Unknown ${formatName} format!`);
  }
};
export default format;
