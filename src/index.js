const { test } = require("mocha");

module.exports = function reverse (n) {
 let str = Math.abs(n).toString();
 let i = 0;
  let result = '';
  while (i < str.length) {
  result = `${str[i]}${result}`;
   i = i + 1;
  }
return result;
}
