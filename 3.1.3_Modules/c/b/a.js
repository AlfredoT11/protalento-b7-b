// archivo trae todo lo que hay en module.exports
const archivo = require("../../index");
// module.exports.edad = edad;
const { edad } = require("../../index");

const { saludarEnConsola } = require("../../index");

console.log("Holi ->", archivo, edad);

archivo.saludarEnConsola("Mali");

console.log(saludarEnConsola);


