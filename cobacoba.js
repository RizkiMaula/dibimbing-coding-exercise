function customJoin(arr, delimiter) {
  var result = '';

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += delimiter; // Add the delimiter between elements (except for the last one)
    }
  }

  return result;
}

// Example usage:
var myArray = ['Hello', 'world', 'how', 'are', 'you'];
var myDelimiter = '-';
var joinedString = customJoin(myArray, myDelimiter);

console.log(joinedString); // Output: 'Hello, world, how, are, you'
