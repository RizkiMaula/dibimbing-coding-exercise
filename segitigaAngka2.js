function generatePyramid(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
      if (j !== i) {
        result += '  '; // Double space
      }
    }

    if (i !== n) {
      result += '\n';
    }
  }
  return result;
}

console.log(generatePyramid(5));
