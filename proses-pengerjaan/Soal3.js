// Soal No 3
// Buatlah sebuah function yang dapat menerima sebuah array deret bilangan (arr) yang sudah
// diurutkan dari yang terkecil – terbesar dan sebuah bilangan (n). Function tersebut akan
// memeriksa (arr) untuk setiap pasangan dari bilangan didalam (arr). Jika ditemukan ada pasangan
// bilangan jika dijumlah hasilnya sama dengan bilangan (n), maka function tersebut akan
// mengembalikan TRUE. Jika tidak ditemukan maka function mengembalikan FALSE.

function pasanganSama(Arr, hasil) {
  let sama = false;
  let numSama = [];
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i; j < Arr.length; j++) {
      if (i != j && Arr[i] == Arr[j]) {
        numSama.push(Arr[i]);
      }
    }
  }
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i; j < Arr.length; j++) {
      if (i != j) {
        if (numSama[i]+numSama[j] == hasil) {
          sama = true;
        }
      }
    }
  }
  return sama;
}

console.log(pasanganSama([1, 2, 4, 4, 5, 6, 7, 7, 8, 8], 12)) // True (karena 8 + 4 = 12)
console.log(pasanganSama([1, 2, 4, 4, 5, 8, 9, 9, 12, 19], 4)) // False ( tidak ada pasangan yang dijumlah = 4)
console.log(pasanganSama([-9.3, -0.5, 0.25, 0.3, 1.34], -7.96)) // True (karena 1.34 + (-9.3) = -7.96)
