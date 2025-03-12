const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Versione estesa
people.forEach(function (person) {
  console.log(person.name);
});

console.log("=========");

// Versione con arrow function
people.forEach((person) => {
  console.log(person.name);
});

console.log("=========");

// Versione con ciclo for

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
