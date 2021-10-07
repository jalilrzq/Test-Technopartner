// Soal No 2
// Buatlah sebuah function yang dapat menerima array deret huruf (A – Z)
// dan mengembalikan huruf pertama yang recurring / berulang dari array deret huruf tersebut.

function huruf(Arr) {
  let sama = 'false';
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i; j < Arr.length; j++) {
      if (i != j && Arr[i] == Arr[j]) {
        sama = Arr[i];
      }
    }
    
  }
  return sama;
}

console.log(huruf(['A', 'B', 'C', 'B', 'A'])) // B
console.log(huruf(['A', 'B', 'C', 'D', 'E', 'C', 'F', 'Z'])) // C
console.log(huruf(['A', 'B', 'C', 'X', 'Y', 'Z'])) // false