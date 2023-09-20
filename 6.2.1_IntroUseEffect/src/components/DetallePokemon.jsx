import { useState } from "react";
import { useEffect } from "react";

const DetallePokemon = ({urlPokemon}) => {

    const [nombre, setNombre] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const [altura, setAltura] = useState('');

    useEffect(() => {
        fetch(urlPokemon)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            setNombre(jsonData.name);
            setAltura(jsonData.height);
            setHabilidad(jsonData.abilities[0].ability.name);
        })
        .catch(error => console.log('Ocurrió un error en la consulta'));
    })

    return (
        <>
            <h2>{nombre}</h2>
            <p>Habilidad: {habilidad}</p>
            <p>Altura: {altura} cm</p>
        </>
    )
}

export default DetallePokemon;