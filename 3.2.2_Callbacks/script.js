function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function saludoAlien(nombre){
    console.log(`Blublublu ${nombre}`);
}

function saludarConEdad(nombre, edad, callback){
    const nombreConEdad = `${nombre} de ${edad} años`;
    callback(nombreConEdad);
}

function delay(ms) {
    const date = Date.now();
    let currentDate = null;
 
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

saludarConEdad('Alfredo', 24, saludar);
saludarConEdad('Alfredo', 24, saludoAlien);


console.log("Esperando a ser saludado");
setTimeout(function saludar(){
    console.log("Hola");
}, 2000);
delay(3000);
console.log("Ya fui saludado");

