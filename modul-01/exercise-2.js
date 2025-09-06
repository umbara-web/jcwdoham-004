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
