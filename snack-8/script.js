const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// ciclo for ...of

let studentClass = null;

for (const student of students) {
  if (student.name === "Marco Lanci") {
    studentClass = student.class;
    break; // Interrompe il ciclo una volta trovato lo studente
  }
}

console.log(studentClass); // Risultato: '3C'

console.log("=============");

// versione con ciclo for

let classStudent = "";

for (let i = 0; i < students.lengt; i++) {
  if (student[i].name === "Marco Lanci") {
    classStudent = students[i].class;
    break;
  }
}

console.log(studentClass);
