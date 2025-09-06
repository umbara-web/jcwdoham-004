// No.1
// Rumus luas persegi panjang :
// Luas = Panjang * Lebar
// Panjang = 5
// Lebar = 3
// Luas = 5 * 3 = 15

const panjang = 5;
const lebar = 3;
const luas = panjang * lebar;

console.log(luas);

// No.2
// Rumus keliling persegi panjang :
// Keliling = 2 * (panjang + lebar)
// Panjang = 5
// Lebar = 3
// Keliling = 2 * (5 + 3) = 16

const panjang1 = 5;
const lebar1 = 3;
const keliling = 2 * (panjang1 + lebar1);

console.log(keliling);

// No.3
// Rumus-rumus Lingkaran
// Diameter (d): Diameter adalah dua kali jari-jari.
// d = 2 x r
// Keliling (K): Keliling adalah panjang garis tepi lingkaran.
// K = 2 x π x r
// K = π x d
// Luas (L): Luas adalah area di dalam lingkaran.
// L = π x r²
// Penjelasan Simbol
// r = jari-jari (jarak dari titik tengah ke tepi lingkaran)
// d = diameter (jarak dari satu sisi ke sisi lain melalui titik tengah)
// π (Pi) = sebuah konstanta matematika yang nilainya kira-kira 3,14 atau 22/7
// Contoh Perhitungan (Jari-jari = 5)
// Hitung Diameter:
// d = 2 x r
// d = 2 x 5
// d = 10
// Hitung Keliling:
// K = 2 x π x r
// K = 2 x 3,14159 x 5
// K = 31,4159
// Hitung Luas:
// L = π x r²
// L = 3,14159 x 5²
// L = 3,14159 x 25
// L = 78,539

const r = 5;
const d = 2 * r;
const pi = 3.14159;
const k = pi * d;
const r2 = r * r;
const l = pi * r2;

console.log('diameter = ', d, ',', 'circumference = ', k, ',', 'area = ', l);

// No.4
// Rumus Sudut Ketiga Segitiga
// Sudut ketiga sebuah segitiga dapat ditemukan dengan menggunakan fakta bahwa jumlah semua sudut dalam sebuah segitiga adalah 180 Derajat
// Langkah-langkah Perhitungan :
// Jumlahkan dua sudut yang diketahui:
// Dua sudut yang diketahui, yaitu a dan b, dijumlahkan.
// Kurangkan dari 180 derajat:
// Hasil penjumlahan dari langkah 1 kemudian dikurangkan dari 180 derajat untuk mendapatkan sudut ketiga.
// Contoh Perhitungan :
// Diberikan dua sudut segitiga: a=80 dan b=65
// Jumlah kedua sudut yang diketahui dihitung: 80 + 65 = 145
// Sudut ketiga dihitung dengan mengurangkan jumlah tersebut dari 180 :
// 180 - 145 = 35
// Jawaban Akhir
// Sudut ketiga segitiga tersebut adalah 35.

const a = 80;
const b = 65;
const c = a + b;
const sudut = 180 - c;

console.log(sudut);

// No.5
// Untuk mengonversi sejumlah hari menjadi tahun, bulan, dan hari (dengan asumsi 1 tahun = 365 hari dan 1 bulan = 30 hari), pertama-tama hitung jumlah tahun penuh dengan membagi jumlah hari dengan 365, lalu hitung sisa hari dari hasil pembagian tersebut. Sisa hari kemudian dibagi dengan 30 untuk mendapatkan jumlah bulan penuh, dan sisa hari terakhir adalah jumlah hari.
// Langkah-langkah konversi:
// 1. Hitung Tahun:
//    Bagi total hari dengan 365.
//    Bagian bilangan bulat (hasil bagi tanpa sisa) adalah jumlah tahun.
//    Sisa dari pembagian ini adalah sisa hari untuk langkah selanjutnya.
// 2. Hitung Bulan:
//    Bagi sisa hari dari langkah pertama dengan 30.
//    Bagian bilangan bulat adalah jumlah bulan.
//    Sisa dari pembagian ini adalah jumlah hari akhir.
// 3. Sisa Hari:
//    Sisa akhir dari pembagian pada langkah 2 adalah jumlah hari yang tersisa.

function konvertHari(totalHari) {
  // Hitung Tahun
  const tahun = Math.floor(totalHari / 365);
  let sisaHari = totalHari % 365;

  // Hitung Bulan
  const bulan = Math.floor(sisaHari / 30);
  sisaHari %= 30;

  // hari adalah jumlah hari yang tersisa
  const hari = sisaHari;

  return {
    tahun: tahun,
    bulan: bulan,
    hari: hari,
  };
}

// Contoh 1 : 400 hari
const Contoh1 = konvertHari(400);
console.log(
  `${400} days → ${Contoh1.tahun} years, ${Contoh1.bulan} month, ${
    Contoh1.hari
  } days`
);

// Contoh 2 : 366 hari
const Contoh2 = konvertHari(366);
console.log(
  `${366} days → ${Contoh2.tahun} year, ${Contoh2.bulan} month, ${
    Contoh2.hari
  } days`
);

// No.6
// Fungsi untuk menghitung selisih hari antara dua tanggal
// function getDayDifference(date1, date2) {
//   // Mengubah input tanggal string menjadi objek Date
//   const d1 = new Date(date1);
//   const d2 = new Date(date2);

//   // Menghitung selisih waktu dalam milidetik
//   const timeDifference = d2.getTime() - d1.getTime();

//   // Mengonversi milidetik menjadi hari (1000ms * 60s * 60m * 24h)
//   const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

//   // Mengembalikan hasil yang dibulatkan
//   return Math.round(dayDifference);
// }

// Contoh penggunaan
// const date1 = '2022-01-20';
// const date2 = '2022-01-22';
// const result = getDayDifference(date1, date2);

// console.log(result); // Output: 2
let date1 = new Date('2022-01-20');
let date2 = new Date('2022-01-22');
let days1 = date1 / (1000 * 60 * 60 * 24);
let days2 = date2 / (1000 * 60 * 60 * 24);

console.log(days2 - days1);
