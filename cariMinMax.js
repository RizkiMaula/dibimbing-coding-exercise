// cari min max dari array terus bikin kek gini
//
// {min: 2, max: 100}

const minMax = (arr) => {
  let swapped = Boolean; // inisialisasi swapped sebagai boolean
  let obj = {};

  // bubble sort
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      swapped = true;
    }
  }
  console.log(arr);

  // guna sort
  let useSort = arr.sort((a, b) => a - b);
  console.log(useSort);
  return (obj = { min: arr[0], max: arr[arr.length - 1] });
};

let array1 = [100, 43, 20, 34, 11, 3, 32, 2];

console.log(minMax(array1));
