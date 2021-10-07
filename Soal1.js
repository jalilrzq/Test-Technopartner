// Soal No 1
// Buatlah sebuah function yang dapat menerima array deret bilangan
// dan mengembalikan bilangan kedua terbesar dari array deret bilangan tersebut

function angkaTerbesar(Arr) {
  let max = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > max) {
      max = Arr[i];
    } 
  }
  
  let max2 = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > max2 && Arr[i] < max) {
      max2 = Arr[i];
    }
  }
  return max2;
}

console.log(angkaTerbesar([1, 12, 31, 5, 3, 23, 4, 5, 22])) // 23
console.log(angkaTerbesar([-0.5, -0.76, 0.45, -0.2, 4.5, 3.5])) // 3.5
console.log(angkaTerbesar([98, 12, 42, 13, 13, 56, 100, 99])) // 99