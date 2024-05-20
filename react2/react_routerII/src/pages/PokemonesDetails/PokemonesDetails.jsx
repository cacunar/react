import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './PokemonDetails.css'

function PokemonDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/notfound');
    }, 10000); 

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        return response.json();
      })
      .then((data) => {
        clearTimeout(timeoutId);
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        navigate('/notfound');
      });

    return () => clearTimeout(timeoutId);
  }, [name, navigate]);

  const goToPokemones = () => {
    navigate('/pokemones')
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <div className="pokemon-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="pokemon-stats">
          <ul>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <p>{pokemon.types[0].type.name}</p>
        </div>
      </div>
      <Button variant='danger' onClick={goToPokemones} id="backButton">Volver</Button>
    </div>
  );
}

export default PokemonDetails;
