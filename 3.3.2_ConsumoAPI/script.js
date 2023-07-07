alert("API");

let response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');

response.then((value) => {
    return value.json();
}).then((valueJson) => {
    document.write(valueJson.id);
    document.write(valueJson.name);
    document.write(valueJson.height);
}).catch((err) => {
    document.write(err);
    document.write("Ocurrió un error. :(");
});
