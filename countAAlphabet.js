const charCount = (word) => {
  const lower = word.toLowerCase(); //biar word lowercase
  let obj = {}; //inisialisasi object
  //iterasi banyaknya lowercase
  for (let i = 0; i < lower.length; i++) {
    let value = lower[i]; // ekstrak index ke-i dari lower yang simpan dalam variabel value
    // jika obj ada entry untuk karakter yang ke-i
    if (obj[value]) {
      obj[value]++; //kalo karakternya ada, obj[value] tambah 1
    } else {
      obj[value] = 1; // kalo engga set itung object untuk karakter ke-i mulai dari 1
    }
  }
  return obj; // kembalikan object obj
};

console.log(charCount('Frontend'));
