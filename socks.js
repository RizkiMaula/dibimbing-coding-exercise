// Pada suatu toko terdapat beberapa kaos kaki dengan warna-warna yang dinyatakan sebagai berikut:

// Warna biru dinyatakan dengan angka 1
// Warna hijau dinyatakan dengan angka 3
// Warna hitam dinyatakan dengan angka 5
// Warna merah dinyatakan dengan angka 8

// Koleksi kaos kaki pada toko tersebut dinyatakan dalam array:

// 1,1,3,3

// Definisi sepasang kaos kaki:

// Sepasang kaos kaki adalah dua kaos kaki dengan warna yang sama.

// Contoh:

// Array 1,3,3,3 berarti ada:

// 1 kaos kaki biru
// 3 kaos kaki hijau

// Maka hasilnya adalah:

// 1 pasang kaos kaki hijau
// 1 kaos kaki biru yang tidak memiliki pasangan
// 1 kaos kaki hijau yang tidak memiliki pasangan

// Format Jawaban :

// [Total jumlah pasangan kaos kaki, Total jumlah kaos kaki yang tidak memiliki pasangan ]

// Expected Output:

// [ 1, 2 ]

// NOTE:

// Untuk menampilkan output silahkan menggunakan return
// berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
// Tidak Boleh Langsung Print Expected Output

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function accepts ARRAY n as parameter.
 */

function sockMerchant(word) {
  // Write your code here
  let socks = [];
  let countSocks = [[], [], [], []];
  let unpairedSocks = [];
  let pair = [];
  let totalPaired = 0;
  let totalUnpaired = 0;

  for (let i = 1; i < word.length; i++) {
    socks.push(word[i]);
  }

  for (let i = 0; i < socks.length; i++) {
    if (socks[i] === 1) {
      countSocks[0].push(socks[i]);
    } else if (socks[i] === 3) {
      countSocks[1].push(socks[i]);
    } else if (socks[i] === 5) {
      countSocks[2].push(socks[i]);
    } else if (socks[i] === 8) {
      countSocks[3].push(socks[i]);
    }
  }

  for (let i = 0; i < countSocks.length; i++) {
    if (countSocks[i].length % 2 === 1) {
      unpairedSocks.push(countSocks[i].pop());
    }
    for (let j = 0; j < countSocks[i].length; j++) {
      pair.push(countSocks[i][j]);
    }
  }

  totalPaired = pair.length / 2;
  totalUnpaired = unpairedSocks.length;

  return [totalPaired, totalUnpaired];
}

console.log(sockMerchant([7, 1, 8, 3, 3, 5, 5, 5]));
