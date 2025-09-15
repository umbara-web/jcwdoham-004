// No.1
const calculateStudentData = (students) => {
  if (!students || students.length === 0) {
    return {
      score: { highest: 0, lowest: 0, average: 0 },
      age: { highest: 0, lowest: 0, average: 0 },
    };
  }

  const scores = students.map((student) => student.score);
  const ages = students.map((student) => {
    const today = new Date();
    const birthDate = student.age;
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  });

  const calculateStats = (data) => {
    if (data.length === 0) {
      return { highest: 0, lowest: 0, average: 0 };
    }
    const highest = Math.max(...data);
    const lowest = Math.min(...data);
    const sum = data.reduce((total, current) => total + current, 0);
    const average = sum / data.length;
    return { highest, lowest, average };
  };

  return {
    score: calculateStats(scores),
    age: calculateStats(ages),
  };
};

// Example usage:
const studentDataArray = [
  {
    name: 'John',
    email: 'john@example.com',
    age: new Date('1999-05-10'),
    score: 95,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    age: new Date('2000-01-20'),
    score: 88,
  },
  {
    name: 'Peter',
    email: 'peter@example.com',
    age: new Date('1998-11-05'),
    score: 76,
  },
  {
    name: 'Mary',
    email: 'mary@example.com',
    age: new Date('2001-08-15'),
    score: 92,
  },
  {
    name: 'David',
    email: 'david@example.com',
    age: new Date('1999-02-28'),
    score: 85,
  },
];

const stats = calculateStudentData(studentDataArray);
console.log(stats);

// No.2
// Kelas Produk
class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
}

// Kelas Transaksi
class Transaksi {
  constructor() {
    this.total = 0;
    this.produk = []; // Array untuk menyimpan produk dan jumlahnya
  }

  // Metode Tambahkan ke Keranjang
  tambahkanKeKeranjang(produk, jumlah = 1) {
    // Cek apakah produk sudah ada di keranjang
    const produkIndex = this.produk.findIndex(
      (item) => item.produk.nama === produk.nama
    );

    if (produkIndex !== -1) {
      // Jika produk sudah ada, update jumlahnya
      this.produk[produkIndex].jumlah += jumlah;
    } else {
      // Jika produk belum ada, tambahkan baru
      this.produk.push({
        produk: produk,
        jumlah: jumlah,
      });
    }

    // Update total transaksi
    this.total += produk.harga * jumlah;

    console.log(`${jumlah} ${produk.nama} berhasil ditambahkan ke keranjang`);
  }

  // Metode Tampilkan Total
  tampilkanTotal() {
    console.log('\n=== RINCIAN TRANSAKSI ===');
    if (this.produk.length === 0) {
      console.log('Keranjang masih kosong');
    } else {
      this.produk.forEach((item, index) => {
        const subtotal = item.produk.harga * item.jumlah;
        console.log(
          `${index + 1}. ${
            item.produk.nama
          } - Rp ${item.produk.harga.toLocaleString('id-ID')} x ${
            item.jumlah
          } = Rp ${subtotal.toLocaleString('id-ID')}`
        );
      });
    }
    console.log(`\nTOTAL: Rp ${this.total.toLocaleString('id-ID')}`);
    console.log('========================\n');
  }

  // Metode Pembayaran
  pembayaran() {
    if (this.produk.length === 0) {
      console.log('Tidak ada transaksi untuk diselesaikan');
      return null;
    }

    const dataTransaksi = {
      timestamp: new Date().toISOString(),
      produk: this.produk.map((item) => ({
        nama: item.produk.nama,
        harga: item.produk.harga,
        jumlah: item.jumlah,
        subtotal: item.produk.harga * item.jumlah,
      })),
      total: this.total,
    };

    // Reset transaksi setelah pembayaran
    this.total = 0;
    this.produk = [];

    console.log('Transaksi berhasil diselesaikan!');
    return dataTransaksi;
  }
}

// Contoh Penggunaan Program
console.log('=== PROGRAM KASIR SEDERHANA ===\n');

// Membuat produk
const produk1 = new Produk('Laptop', 15000000);
const produk2 = new Produk('Mouse', 250000);
const produk3 = new Produk('Keyboard', 500000);

// Membuat transaksi baru
const transaksi = new Transaksi();

// Menambahkan produk ke keranjang
transaksi.tambahkanKeKeranjang(produk1, 1);
transaksi.tambahkanKeKeranjang(produk2, 2);
transaksi.tambahkanKeKeranjang(produk3, 1);

// Menampilkan total transaksi
transaksi.tampilkanTotal();

// Menambahkan produk lagi
transaksi.tambahkanKeKeranjang(produk2, 1);

// Menampilkan total transaksi setelah penambahan
transaksi.tampilkanTotal();

// Melakukan pembayaran
const hasilTransaksi = transaksi.pembayaran();
console.log('\nData Transaksi yang Diselesaikan:');
console.log(JSON.stringify(hasilTransaksi, null, 2));

// Mencoba menampilkan total setelah pembayaran
transaksi.tampilkanTotal();
