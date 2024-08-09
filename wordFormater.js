function wordFormatter(word) {
  // buat split sendiri yang parameternya str untuk nampung string dan delimeter yang nampung pemisah
  const cusSplit = (str, delimeter) => {
    let result = []; // array result yang nanti functionnya berbentuk array
    let currentWord = ''; // variabel yang tipe datanya string dan berisi string kosong

    // looping yang ngitung berapa isi string yang dimasukin
    for (let i = 0; i < str.length; i++) {
      // kalo string ke-i ada delimeternya
      if (str[i] === delimeter) {
        result.push(currentWord); // push currentWord ke dalam array result
        currentWord = ''; // reset currentWord ke string kosong
      } else {
        currentWord += str[i]; // kalo engga masukin semua karakter str ke dalam currentWord
      }
    }

    // kalo masih ada kata, masukan ke array result
    if (currentWord) {
      result.push(currentWord);
    }
    return result; // kembalikan nilai result yang bentuknya array
  };

  let splited = cusSplit(word, ' ');

  let arrChange = [];
  let result = '';

  // ganti huruf depan dari setiap string di array
  for (let i = 0; i < splited.length; i++) {
    const char = splited[i]; // untuk inisialisasi isi string yang ada di array
    let formatted = ''; // buat nanti isi string baru

    // kalo misal string ke-0 itu huruf a-z tapi kecil
    if (char[0] >= 'a' && char[0] <= 'z') {
      formatted += char[0].toUpperCase(); // ganti pake huruf gede
    } else {
      formatted += char[0]; // kalo hurup gede ya masukin aja string ke-0
    }

    // nested loop untuk masukin huruf kecil ke string ke-n yang lebih besar dari 0
    for (let j = 1; j < char.length; j++) {
      formatted += char[j].toLowerCase(); // string ke-n yang lebih besar dari 0
    }

    arrChange.push(formatted); // yang sudah diganti di push ke array arrChange
  }

  // join dari array arrChange yang dimasukin ke variabel result
  for (let i = 0; i < arrChange.length; i++) {
    result += arrChange[i]; // masukin tiap isi array
    // buat masukin pemisah (misal spasi), kalo i lebih kecil dari panjang array arrChange yang dikurang 1
    if (i < arrChange.length - 1) {
      result += ' '; // result ditambah pemisah, kecuali yang terakhir
    }
  }

  return result; //kembalikan nilai result
}

const str1 = 'biJI MataLo meleDaKkK';
const str2 = 'yAhaHa HAyUk wahyu';

console.log(wordFormatter(str2));

// function wordFormatter1(word) {
//   let arr = [];
//   if (word[0] >= 'a' && word[0] <= 'z') {
//     arr.push(word[0].toUpperCase());
//   } else {
//     arr.push(word[0]);
//   }

//   for (let i = 1; i < word.length; i++) {
//     arr.push(word[i].toLowerCase());
//   }

//   return arr.join('');
// }

// console.log(wordFormatter1('yAhaH'));
