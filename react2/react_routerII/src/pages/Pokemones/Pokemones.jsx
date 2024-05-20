import { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Pokemon.css'

function Pokemones() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  const handleSelect = (eventKey) => {
    const selectedPokemon = pokemons[eventKey];
    navigate(`/pokemones/${selectedPokemon.name}`)
  }

  return (
    <div id="PokemonContainer">
      <h1>Selecciona un pokemon</h1>
      <DropdownButton data-bs-theme="dark" variant='secondary 'id="dropdown-basic-button" title="Pokemones" onSelect={handleSelect}>
        {pokemons.map((pokemon, idx) => {
          const name =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          return (
            <Dropdown.Item eventKey={idx} key={idx}>
              {name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}

export default Pokemones;
