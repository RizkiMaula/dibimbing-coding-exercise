const segitiga = (n) => {
  let str = '';

  // outer: perulangan yang kebawah sebanyak n dan dimulai dari 0
  for (let i = 1; i <= n; i++) {
    // inner: perulangan yang hitung banyaknya angka sesuai dari perulangan sebanyak i dan dimulai dari 1
    for (let j = 1; j <= i; j++) {
      str += j + '  '; //tambah j ke str dan tambah spasi
    }
    str += '\n'; // tambah '\n': '\n' berfungsi untuk membuat baris baru
  }

  return str.trim(); // menghilangkan spasi di belakang dan '\n' di depan
};

console.log(segitiga(5));

/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */
