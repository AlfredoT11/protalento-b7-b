//const alumnosMali = [];  arreglo vacio

const alumnosMali = ['Willinton','Laura','Jorge','Luis','Rick'];
            //       0          1       2       3      4
alumnosMali // ['Willinton','Laura','Jorge','Luis','Rick'];

// En los arreglos empezamos a contar desde el 0.
// Solo si requiero re-asignar, usaremos variables de tipo let
// let alumnosMali = ['Willinton','Laura','Jorge','Luis','Ricardo','Camila'];

/* métodos: acciones relacionadas a un elemento, no viven sin ese elemento
 log, write
console.log();
document.write();

Los arreglos van a tener metodos que nos permitan interactuar con ellos.

*/

alumnosMali // ['Willinton','Laura','Jorge','Luis','Ricardo','Camila'];

alumnosMali.push('Sandra');

alumnosMali // ['Willinton','Laura','Jorge','Luis','Ricardo','Camila', 'Sandra'];

alumnosMali.push('Moris');

alumnosMali // ['Willinton','Laura','Jorge','Luis','Ricardo','Camila', 'Sandra', 'Moris'];
alumnosMali.pop();
alumnosMali // ['Willinton','Laura','Jorge','Luis','Ricardo','Camila', 'Sandra'];
alumnosMali.shift();
alumnosMali // ['Laura','Jorge','Luis','Ricardo','Camila', 'Sandra'];
