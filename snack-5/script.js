const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// versione estesa
const evenNumbers = nums.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

console.log("=========");

// versione Arrow function

const numbersEven = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

console.log("=========");

// Versione utilizzando ciclo for

const evenNumb = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNumb.push(nums[i]);
  }
}

console.log(evenNumb);
