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

// No.3
// Opsi 1: Menggunakan perulangan for
function sumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; // Menambahkan setiap angka ke variabel sum
  }
  return sum;
}

console.log(sumLoop(5)); // Output: 15
console.log(sumLoop(3)); // Output: 6

// Opsi 2: Menggunakan formula matematika
function sumFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumFormula(5)); // Output: 15
console.log(sumFormula(3)); // Output: 6

// No.4
function factorial2(n) {
  // Base case: kondisi berhenti untuk rekursi
  if (n === 0 || n === 1) {
    return 1;
  }

  // Periksa untuk angka negatif
  if (n < 0) {
    return 'Faktorial tidak didefinisikan untuk angka negatif.';
  }

  // Recursive case: fungsi memanggil dirinya sendiri
  return n * factorial2(n - 1);
}

// Contoh penggunaan
console.log(factorial2(4)); // Output: 24
console.log(factorial2(6)); // Output: 720
console.log(factorial2(0)); // Output: 1
console.log(factorial2(-3)); // Output: Faktorial tidak didefinisikan untuk angka negatif.

// No.5
function angkaFibonacci(N) {
  if (N <= 0) return [];

  const fib = [0, 1]; // Inisialisasi dua angka pertama

  // Generate angka Fibonacci hingga indeks N-1
  for (let i = 2; i <= N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Kembalikan array Fibonacci
  return fib;
}

const N = 15;
const hasilFib = angkaFibonacci(N);
console.log(hasilFib); // Cetak array Fibonacci
console.log(hasilFib[N]); // Cetak angka Fibonacci ke-N (610 untuk N=15)
console.log(`N = ${N} → Deret Fibonacci: ${hasilFib.join(', ')}`);
console.log(`Angka Fibonacci ke-${N} adalah: ${hasilFib[N]}`); // Menampilkan angka Fibonacci ke-n
