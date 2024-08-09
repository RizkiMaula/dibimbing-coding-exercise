const fibonacci = (num) => {
  let arr = [0, 1]; // mulai array [1,1] karena arr[0] = 0, arr[1] = 1. fibonacci merupakan urutan bilangan yang dihitung dari angka ke-0  sampai ke-n

  //   inisialisasi dari angka 2 karena mulai perhitungannya dari array ke-2 [1, 1, arr[2]]
  console.log(arr[0]);
  console.log(arr[1]);
  for (let i = 2; i <= num; i++) {
    let count = arr[i - 1] + arr[i - 2]; // hitung angka selanjutnya dengan array ke-i dikurang 1 dijumlah dengan array ke-i dikurang
    /**
     * misal num = 10
     * (arr = [1, 1]) = (arr[2 - 1] = arr[1] = 1) (arr[2 - 2] = arr[0] = 1)
     * 1 + 1 = 2. jadi arr[2] push dengan 2
     * arr = [1, 1, 2] = (arr[3 - 1]) = arr[2] = 2) (arr[3 - 2] = arr[1] = 1)
     * 2 + 1 = 3, jadi arr[3] push dengan 3
     * arr = [1, 1, 2, 3] = (arr[4 - 1] = arr[3] = 3 (arr[4 - 2] = arr[2] = 2)
     * 3 + 2 = 5, jadi arr[4] push dengan 5
     * arr = [1, 1, 2, 3, 5] = (arr[5 - 1] = arr[4] = 5 (arr[5 - 2] = arr[3] = 3)
     * 5 + 3 = 8, jadi arr[5] push dengan 8
     * arr = [1, 1, 2, 3, 5, 8] = (arr[6 - 1] = arr[5] = 8 (arr[6 - 2] = arr[4] = 5)
     * 8 + 5 = 13, jadi arr[6] push dengan 13
     * arr = [1, 1, 2, 3, 5, 8, 13] = (arr[7 - 1] = arr[6] = 13 (arr[7 - 2] = arr[5] = 8)
     * 13 + 8 = 21, jadi arr[7] push dengan 21
     * arr = [1, 1, 2, 3, 5, 8, 13, 21] = (arr[8 - 1] = arr[7] = 21 (arr[8 - 2] = arr[6] = 13)
     * 21 + 13 = 34, jadi arr[8] push dengan 34
     * arr = [1, 1, 2, 3, 5, 8, 13, 21, 43] = (arr[9 - 1] = arr[8] = 34 (arr[9 - 2] = arr[7] = 21)
     * 34 + 21 = 55, jadi arr[9] push dengan 55
     * arr = [1, 1, 2, 3, 5, 8, 13, 21, 43, 55]
     */
    arr.push(count); // push ke array arr

    console.log(count);
  }

  return arr; // kembalikan nilai arr
};

console.log(fibonacci(20));
