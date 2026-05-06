module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  let i = 0;
  let result = '';
  while (i < str.length) {
    result = `${str[i]}${result}`;
    i += 1;
  }
  return result;
};
