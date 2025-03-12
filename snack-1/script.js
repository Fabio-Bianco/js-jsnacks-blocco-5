const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// Versione estesa
names.forEach(function(name){
    console.log(name)
})

console.log ('=========')

// Versione con arrow function
names.forEach(name => {
    console.log(name);
});

console.log ('=========')


// Versione con ciclo for

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}