import { useState, useEffect } from 'react'
import DetallePokemon from './DetallePokemon';

const Pokedex = () => {
    const [pokemones, setPokemones] = useState([]);
    const [limite, setLimite] = useState(20);
    const [filtroNombre] = useState('');
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(0);
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${limite}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        setPokemones(jsonData.results);
      })
      .catch(error => {
        alert('No se pudo establecer conexión a la API. ');
      })
    //}, [limite, pokemones]); // Dependencia circular. useEffect se va a llamar "a sí mismo" ya que
    //pokemones se modifica todo el tiempo.
    }, [limite]);
  
    const capturarLimite = (event) => {
      setLimite(event.target.value);
    }
  
    const capturarFiltroNombre = (event) => {
      setFiltroNombre(event.target.value);
    }

    const seleccionarPokemon = (idPokemon) => {
        setPokemonSeleccionado(idPokemon);
    }
  
    return (
      <>
        <h1>Pokedex</h1>
        <label>Límite de Pokemones: </label>
        <input 
          value={limite}
          onChange={capturarLimite}
        />
  
        <br/>
        <label>Búsqueda por nombre: </label>
        <input 
          value={filtroNombre}
          onChange={capturarFiltroNombre}
        />

        {
        pokemones.map((pokemon, index) => {
            return (
                <button 
                    key={index} 
                    onClick={() => seleccionarPokemon(pokemon.url)}
                >{pokemon.name}
                </button>
            )
        })
        }
        <DetallePokemon urlPokemon={pokemonSeleccionado}/>
      </>
      
    )
}

export default Pokedex;