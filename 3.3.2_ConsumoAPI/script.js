let response = fetch('https://pokeapi.co/api/v2/pokemon');

response.then((value) => {
    return value.json();
}).then((valueJson) => {
    //document.write(JSON.stringify(valueJson));
    const propiedades = Object.keys(valueJson);
    for(let pokemon of valueJson.results){
        document.write(`<h2>Nombre: ${pokemon.name}</h2>`);
        document.write('<hr>');

        let informacionPokemon = fetch(valueJson.url);
        informacionPokemon.then((valor) => {
            return valor.json();
        }).then((json) => {
            document.write(JSON.stringify(json));
        })

    }
}).catch((err) => {
    document.write(err);
    document.write("Ocurrió un error. :(");
});
