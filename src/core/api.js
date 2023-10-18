import { useState, useEffect } from "react";

// Custom hook para obtener datos de Pokémon
function usePokemonsData(index) {
  const [pokemonsData, setPokemonsData] = useState({}  );

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
        })
        .catch((error) => {
          console.error("Hubo un error en la solicitud:", error);
        });
    }
    requestPokemons();
  }, [index]);

  return {pokemonsData, setPokemonsData};
}

export { usePokemonsData };
