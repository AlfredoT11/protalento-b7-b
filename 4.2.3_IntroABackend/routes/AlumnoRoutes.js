const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
    res.status(200);
    res.send(alumnos);
});

router.get('/:idAlumno', (req, res) => {
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

router.post('/', (req, res) => {
    const body = req.body;
    if(!('id' in body)){
        res.status(400);
        res.send({
            mensaje: 'La información no contiene el id.'
        });
    }

    if(typeof(body.id) != 'number'){
        res.status(400);
        res.send({
            mensaje: 'El tipo de dato del id es incorrecto.'
        });
    }

    if(!(body.hasOwnProperty('nombre'))){
        res.status(400);
        res.send({
            mensaje: 'La información no contiene el nombre.'
        });
    }

    if(!(body.hasOwnProperty('apellido'))){
        res.status(400);
        res.send({
            mensaje: 'La información no contiene el apellido.'
        });
    }

    alumnos.push({
        id: body.id,
        nombre: body.nombre,
        apellido: body.apellido
    });

    res.status(201);
    res.send({
        mensaje: 'Alumno creado'
    });

});

module.exports = router;
