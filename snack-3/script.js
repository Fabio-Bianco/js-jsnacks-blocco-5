const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

console.log(numbers);

console.log("==========");

//versione estesa

const NumbersNew = numbers.map(function (num) {
  return num + 1;
});

console.log(NumbersNew);

console.log("==========");

// arrow function
const newNumbers = numbers.map((num) => num + 1);

console.log(newNumbers);





console.log("==========");

// ciclo for

let result = []

for(let i = 0; i < numbers.length; i++){
  const currenNumber= number [i] + 1;
  result.push(currenNumber);
}

console.log(numbers);
console.log(result)
