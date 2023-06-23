const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola mundo! :D');
});

app.listen(port, ()=>{
    console.log(`Servidor iniciado y escuchando el puerto ${port}`);
});
