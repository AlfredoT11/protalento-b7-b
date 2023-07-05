/*
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida. :D");
    }, 1000);

    setTimeout(() => {
        reject("La promesa fue rechazada. :(");
    }, 2000);
});

console.log(`Estado de la promesa: ${promesa}`);

//Código que se ejecuta cuando la promesa se cumple.
promesa.then((valorPromesaCumplida) => {
    console.log("Promesa cumplida");
    console.log(valorPromesaCumplida);

    // Dentro tenemos otra promesa.
    let promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa cumplida. :D");
        }, 1000);
    });

    // Código que se ejecuta cuando la promesa anterior se cumple.
    promesa1.then((valorPromesaCumplida) => {
        console.log("Promesa cumplida");
        console.log(valorPromesaCumplida);
        //Si quisiéramos tener otra promesa después de esta, tendríamos 
        // que meterla aquí.
        //El código comenzaría a complicarse si empezamos a anidar promesas así.

    // Código que se ejecuta cuando la promesa anterior no se cumple.
    }).catch((promesaRechazada) => {
        console.log("Promesa fallida");
    });
    
//Código que se ejecuta cuando la promesa falla.
}).catch((valorDePromesaRechazada) => {
    console.log("Promesa rechazada");
    console.log(valorDePromesaRechazada);
});
*/

let promesaAnidada1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida. :D");
    }, 1000);
});

promesaAnidada1.then((value) => {
    console.log("Promesa anidada 1 cumplida");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cronometro de promesa anidada");
            resolve("Promesa anidada 2 cumplida");
        }, 1000);
    });
}).then((value) => {
    console.log(value);
    console.log("Promesa anidada 2 cumplida");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cronometro de promesa anidada");
            resolve("Promesa anidada 3 cumplida");
        }, 1000);
    });
}).then((value) => {
    console.log(value);
})
.catch(() => {
    console.log("Ocurrió un error con alguna promesa");
})
