// Opción para que ese archivo sólo exporte lo que hay luego de la asignación
// mala práctica
// module.exports = edad;
// Opción para una variable

/* 
module.exports = {
    edad: edad
};



module: {
    exports: {
        edad: 5
    }
}
 
*/

const edad = 5;
function saludar(nombre) {
    console.log("Holi ", nombre);
}

module.exports.edad = edad;
module.exports.saludarEnConsola = saludar;