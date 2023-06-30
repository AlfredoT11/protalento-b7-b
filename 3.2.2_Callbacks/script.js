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

saludarConEdad('Alfredo', 24, saludar);
saludarConEdad('Alfredo', 24, saludoAlien);


