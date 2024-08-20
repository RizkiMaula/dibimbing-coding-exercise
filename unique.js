/*
 * Complete the 'uniqueInOrder' function below.
 *
 * The function accepts STRING n as parameter.
 */

function uniqueInOrder(iterable) {
  // Write your code here
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    result.push(iterable[i]);
  }

  return result.filter((value, index, array) => value !== array[index - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDaABBB'));
