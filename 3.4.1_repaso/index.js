const senseis = require('./senseis.json');

class Persona {

    constructor(nombre, edad, noID = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.noID = noID;
    }
     
    leer(literatura){
        return `Shhhh, estyo leyendo ${literatura}`;
    }

    obtenerDatos() {
        return this.noID.split("-");
    }
}

const objectSenseis = senseis.map(({nombre, edad}) => new Persona(nombre, edad));
const objectSenseis1 = senseis.map((e) => new Persona( e.nombre, e.edad, e.noID));

console.log(objectSenseis);
console.log(objectSenseis1[0].obtenerDatos());
/* const id = objectSenseis1[0].obtenerDatos()[1];
const clave = objectSenseis1[0].obtenerDatos()[0]; */
const [clave, id] = objectSenseis1[0].obtenerDatos();
console.log(id, clave);
