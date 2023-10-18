import { useState, useEffect } from "react";



// Custom hook para obtener datos de Pokémon
function usePokemonsData(index) {
  const [activePokemon, setActivePokemon] = useState({}); // nos guarda 1 solo pokemon para mostrarlo en detalles
  const [pokemonsData, setPokemonsData] = useState({});

  useEffect(() => {
    function requestPokemons() {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${index}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          return response.json();
        })
        .then((data) => {
          setPokemonsData(data);
          console.log(pokemonsData);
        })
        .catch((error) => {
          console.error("Hubo un error en la solicitud:", error);
        });
    }
    requestPokemons();
  }, [index]);

  const requestOnePokemons = async (url) => {

    console.log(url);
    fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("La solicitud no fue exitosa");
            }
            return response.json();
          })
          .then((data) => {
            setActivePokemon(data);
          })
          .catch((error) => {
            console.error("Hubo un error en la solicitud:", error);
          });
  }

  return {
    pokemonsData, 
    setPokemonsData,
    activePokemon,
    setActivePokemon,
    requestOnePokemons
   };
}

export { usePokemonsData };
