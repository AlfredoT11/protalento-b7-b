import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../style.css';

const DetallePokemon = () => {

    const {id} = useParams();
    const [detallesPokemon, setDetallesPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            setDetallesPokemon(jsonData);
        })
        .catch(error => console.log('Ocurrió un error en la consulta'));
    }, []);

    return (
        <>
            <p><Link to={'/'}>Home </Link></p>
            <h2>{detallesPokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detallesPokemon.id}.png`} 
                        className='card-image-top' 
                        alt='Imagen de un Pokémon' 
                    />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Estadística</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        detallesPokemon.stats?.map((stat, index) => {
                            return (<tr key={index}>
                                <td>{stat.stat.name}</td>
                                <td>{stat.base_stat}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default DetallePokemon;