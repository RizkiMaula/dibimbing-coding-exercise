// generate pyramid
function generatePyramid(n) {
  let result = '';
  // Write your code here
  for (let i = 0; i <= n; i++) {
    let str = '';

    for (let j = 1; j <= i; j++) {
      str += j + '  ';
      if (i === j) {
        str += '\n';
      }
    }
    result += str;
  }
  return result;
}

console.log(generatePyramid(5));
