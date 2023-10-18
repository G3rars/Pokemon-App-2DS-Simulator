import React from "react";

function ShowPokemon({ activePokemon }) {
  return (
    <>
      <div className="bg-gray-700 flex justify-center items-center opacity-80 absolute w-[190px] sm:w-[346px] h-[113px] sm:h-[211px] translate-y-[-60px] sm:translate-y-[-110px]">
      </div>
      <div className=" flex justify-center items-center absolute w-[190px] sm:w-[346px] h-[113px] sm:h-[211px] translate-y-[-60px] sm:translate-y-[-110px]">
          {(activePokemon && activePokemon.sprites) ? (
            <img className="w-[200px]" src={activePokemon.sprites.front_default} alt="pokemonimage" />
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </>
  );
}

export default ShowPokemon;