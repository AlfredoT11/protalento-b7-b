import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [limite, setLimite] = useState(20);
  const [filtroNombre, setFiltroNombre] = useState('');
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

  const pokemonesFiltrados = pokemones.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filtroNombre.toLocaleLowerCase());
  })

  return (
    <div className='container'>

      <p><Link to={'/about'}>Acerca de </Link></p>
      <p><Link to={'/pokemon/2'}>Detalle Pokémon </Link></p>

      <h1>Pokedex</h1>
      <div className='row'>
        <div className='col-6'>
          <label>Límite de Pokemones: </label>
          <input
            value={limite}
            onChange={capturarLimite}
          />
        </div>

        <div className="col-6">
          <label>Búsqueda por nombre: </label>
          <input
            value={filtroNombre}
            onChange={capturarFiltroNombre}
          />
        </div>
      </div>

      <div className='row'>
        {
          pokemonesFiltrados.map((pokemon, index) => {
            return (
              <div className='col-6 col-sm-6 col-md-3'>
                <div className='card' key={index}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    className='card-image-top'
                    alt='Imagen de un Pokémon'
                  />
                  <div className='card-body'>
                    <Link
                      to={`/pokemon/${pokemon.url.split('/')[6]}`}
                      className='card-title'
                    >
                      {pokemon.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      { /*<DetallePokemon urlPokemon={pokemonSeleccionado}/> */}
    </div>

  )
}

export default Home;