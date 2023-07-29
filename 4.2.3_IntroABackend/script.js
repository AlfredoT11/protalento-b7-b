const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// CRUD
// C -> Create -> HTTP POST
// R -> Read   -> HTTP GET
// U -> Update -> HTTP PUT / HTTP PATCH
// D -> Delete -> HTTP DELETE

const alumnos = [
    {
        id: 1,
        nombre: 'Héctor',
        apellido: 'Robayo',
    },
    {
        id: 2,
        nombre: '   Marco',
        apellido: 'Quijano',
    },
    {
        id: 3,
        nombre: 'David',
        apellido: 'Ballesteros',
    }
]

app.get('/alumnos', (req, res) => {
    res.status(200);
    res.send(alumnos);
});

app.get('/alumnos/:idAlumno', (req, res) => {
    const id = req.params.idAlumno;
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].id == id){
            res.status(200);
            res.send(alumnos[i]);
        }
    }
    res.status(404);
    res.send({
        mensaje: 'Alumno no encontrado'
    });
});

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

app.post('/', (req, res) => {
    const body = req.body;
    body.mensaje = 'Petición atendida';
    res.send(body);
});

app.put('/', (req, res) => {
    res.status(400);
    res.send({
        mensaje: 'Error del cliente'
    });
});

app.delete('/', (req, res) => {
    res.statusCode = 500;
    res.send({
        mensaje: 'Error del servidor'
    })
})


app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});
