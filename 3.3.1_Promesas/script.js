let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida. :D");
    }, 2000);

    setTimeout(() => {
        reject("La promesa fue rechazada. :(");
    }, 1000);
});

console.log(`Estado de la promesa: ${promesa}`);

promesa.then((valorPromesaCumplida) => {
    console.log("Promesa cumplida");
    console.log(valorPromesaCumplida);
}).catch((valorDePromesaRechazada) => {
    console.log("Promesa rechazada");
    console.log(valorDePromesaRechazada);
});
