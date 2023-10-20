import React from "react";

function ShowPokemon({ activePokemon, statsAnimation }) {
  let image;
  if (activePokemon && activePokemon.sprites && activePokemon.sprites.other) {
    image = activePokemon.sprites.other["official-artwork"];
  }
  return (
    <>
      {activePokemon && activePokemon.stats && activePokemon.types && (
        <div
          className={`${
            statsAnimation ? "show-pokemon" : 'hidden'
          } flex justify-center items-center absolute w-[190px] sm:w-[346px] translate-y-[-61px] sm:translate-y-[-111px]`}
        >
          <p className="text-white text-[8px] sm:text-sm absolute font-bold top-0 start-1 capitalize">{activePokemon.name}</p>
          <p className="text-white text-[8px] sm:text-sm uppercase absolute font-bold top-0 end-1">
            {activePokemon.types[0] ? activePokemon.types[0].type.name : 0}
          </p>
          <img
              className="w-[50%] h-[80%] sm:h-[85%] sm:w-[200px]"
              src={image.front_default}
              alt="pokemonimage"
            />
        </div>
      )}
    </>
  );
}

export default ShowPokemon;
