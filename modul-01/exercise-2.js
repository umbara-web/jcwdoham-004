// No.1
// Tulis kode untuk memeriksa apakah bilangan tersebut ganjil atau genap
// Contoh: 25 → bilangan ganjil, 2 → bilangan genap

// Menggunakan IF ELSE
function cekGanjilGenap(bilangan) {
  if (bilangan % 2 === 0) {
    return 'Bilangan genap';
  } else {
    return 'Bilangan ganjil';
  }
}

console.log(cekGanjilGenap(25)); // Output: "Bilangan ganjil"
console.log(cekGanjilGenap(2)); // Output: "Bilangan genap"
console.log(cekGanjilGenap(0)); // Output: "Bilangan genap"

// Menggunkan Ternary Operator
function cekGanjilGenapTernary(bilangan) {
  return bilangan % 2 === 0 ? 'Bilangan genap' : 'Bilangan ganjil';
}

console.log(cekGanjilGenapTernary(25)); // Output: "Bilangan ganjil"
console.log(cekGanjilGenapTernary(2)); // Output: "Bilangan genap"

// No.2
// Tulis kode untuk memeriksa apakah bilangan tersebut bilangan prima atau bukan
// Contoh: 7 → 7 adalah bilangan prima
// Contoh: 6 → 6 bukan bilangan prima
function bilPrima(angka) {
  // Bilangan kurang dari atau sama dengan 1 bukanlah bilangan prima
  if (angka <= 1) {
    return 'bukan bilangan prima';
  }

  // Bilangan 2 adalah bilangan prima
  if (angka === 2) {
    return 'bilangan prima';
  }

  // Jika bilangan genap selain 2, maka bukan prima
  if (angka % 2 === 0) {
    return 'bukan bilangan prima';
  }

  // Cek pembagi dari 3 hingga akar kuadrat dari angka tersebut
  // Hanya perlu memeriksa bilangan ganjil
  for (let i = 3; i <= Math.sqrt(angka); i += 2) {
    if (angka % i === 0) {
      return 'bukan bilangan prima'; // Ditemukan pembagi, jadi bukan prima
    }
  }

  // Jika tidak ditemukan pembagi, maka bilangan tersebut adalah prima
  return 'bilangan prima';
}

// Contoh penggunaan
console.log(bilPrima(7)); //Output : bilangan prima
console.log(bilPrima(6)); //Output : bukan bilangan prima
