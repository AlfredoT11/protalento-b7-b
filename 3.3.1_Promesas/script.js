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

/*
let promesaAnidada1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida. :D");
    }, 1000);
});

// Promesas anidadas
promesaAnidada1.then((value) => {
    console.log("Promesa anidada 1 cumplida");
    // Si quieres anidar promesas, nosotros debemos retornar una promesa
    // dentro del then.
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
// El código del callback del catch se ejecutará en caso de que CUALQUIER
// promesa anidada no se cumpla.
.catch(() => {
    console.log("Ocurrió un error con alguna promesa");
});
*/

let promesa1s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promesa 1s");
        resolve("Promesa 1s");
    }, 1000);
});

let promesa2s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promesa 2s");
        resolve("Promesa 2s");
    }, 2000);
});

let promesa5s = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promesa 5s");
        resolve("Promesa 5s");
    }, 5000);
});

// Este método únicamente va a ejecutar el código en then
// cuando TODAS las promesas se cumplan.
// En caso de que UNA SOLA promesa no se cumpla, se ejecuta el callback del catch.

/*
Promise.all([promesa1s, promesa2s, promesa5s]).then(([valorPromesa1, valorPromesa2, valorPromesa3]) => {
    console.log("Las 3 promesas se han cumplido");
}).catch((error) => {
    console.log("Alguna de las promesas falló");
});

// Este método ejecuta el callback del then cuando TODAS las promesas
// terminen sin importar que se cumplan o no.
Promise.allSettled([promesa1s, promesa2s, promesa5s]).then(([valorPromesa1, valorPromesa2, valorPromesa3]) => {
    console.log("Las 3 promesas se han terminado");
}).catch((error) => {
    console.log("Alguna de las promesas falló");
});
*/

// Este método ejecuta el callback del then cuando UNA PROMESA se cumple.
// En caso de que NINGUNA promesa se cumpla, se ejecutará el callbak del catch.
Promise.any([promesa1s, promesa2s, promesa5s]).then((valorPrimerPromesa) => {
    console.log("Se ha cumplido una promesa");
    console.log(valorPrimerPromesa);
}).catch(() => {
    console.log("Ninguna promesa se cumplió. );");
});

// Este método ejecuta el callback del then cuando UNA PROMESA termina.
Promise.race([promesa1s, promesa2s, promesa5s]).then((valorPrimerPromesa) => {
    console.log("Se ha terminado una promesa");
    console.log(valorPrimerPromesa);
}).catch(() => {
    console.log("Ninguna promesa se cumplió. );");
});

//Paso 1. Preparar ingredientes -> 2 segundos
//Paso 2. Mezclar ingredientes  -> 3 segundos
//Paso 3. Precalentar horno     -> 5 segundos
//Paso 4. Hornear pastel        -> 4 segundos

// Pastel síncrono
/*
let prepararIngredientes = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Ingredientes listos');
        resolve(true);
    } ,2000);
});

prepararIngredientes.then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ingredientes mezclados');
            resolve(true);
        }, 3000);
    });
}).then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Horno precalentado');
            resolve(true);
        }, 5000);
    });
}).then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pastel horneado');
            resolve(true);
        }, 4000);
    });
}).catch((error) => {
    console.log('Algo falló con el pastel :(');
});
*/

//Pastel asíncrono
let prepararIngredientesAsincrono = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Ingredientes listos');
        resolve(true);
    } ,2000);
});

prepararIngredientesAsincrono.then((value) => {
    let ingredientesMezclados = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ingredientes mezclados');
            resolve(true);
        }, 3000);
    });

    let hornoPrecalentado = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Horno precalentado');
            resolve(true);
        }, 5000);
    });
    return Promise.all([ingredientesMezclados, hornoPrecalentado]);
}).then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pastel horneado');
            resolve(true);
        }, 4000);
    });
}).catch((error) => {
    console.log('Algo falló con el pastel :(');
});
