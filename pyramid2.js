function buildPyramid(n) {
  let pyramid = [];
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    pyramid.push(spaces + stars + spaces);
  }
  return pyramid.join('\n');
}

console.log(buildPyramid(3));
console.log(buildPyramid(6));
