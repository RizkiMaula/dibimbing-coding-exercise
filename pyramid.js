// const pyramid = (n) => {
//   let str = '';
//   for (let i = 1; i < n; i++) {
//     // buat spasi
//     for (let j = 1; j <= n - i; j++) {
//       str += ' ';
//     }
//     // buat bintang
//     for (let k = 0; k < 2 * i - 1; k++) {
//       str += '*';
//     }
//     str += '\n'; //buat enter
//   }
//   return str; //kembalikan str
// };
// const pyramid = (n) => {
//   let str = '';
//   for (let i = 1; i < n; i++) {
//     // buat bintang
//     for (let j = 0; j < 2 * i - 1; j++) {
//       str += '*';
//     }
//     str += '\n'; //buat enter
//   }
//   return str; //kembalikan str
// };
function createTrianglePattern(rows) {
  // Create an empty array to store the triangle pattern
  var triangle = [];

  // Iterate through each row
  for (var i = 0; i < rows; i++) {
    // Create an empty string to build the current row
    var row = '';

    // Add stars to the row based on the current row number
    for (var j = 0; j <= i; j++) {
      row += '*';
    }

    // Push the completed row to the triangle array
    triangle.push(row);
  }

  return triangle;
}

// Example usage:
var rows = 5;
var trianglePattern = createTrianglePattern(rows);

// Print the triangle pattern
for (var i = 0; i < rows; i++) {
  console.log(trianglePattern[i]);
}

// console.log(pyramid(3));

// *
// ***
// *****

// *
// ***
// *****

function createTriangle(rows) {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push('*');
    }
    triangle.push(row);
  }

  for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(''));
  }
}

// Example usage:
createTriangle(5);
