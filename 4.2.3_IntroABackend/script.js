const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

app.post('/', (req, res) => {
    const body = req.body;
    body.mensaje = 'Petición atendida';
    res.send(body);
});


app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});
