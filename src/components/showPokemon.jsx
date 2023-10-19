import React from "react";

function ShowPokemon({ activePokemon }) {
  let image;
  if (activePokemon && activePokemon.sprites && activePokemon.sprites.other) {
    image = activePokemon.sprites.other['official-artwork'];
  }
  return (
    <>
    {
      activePokemon && activePokemon.stats && activePokemon.types &&
      <div className="show-back flex justify-center items-center opacity-80 absolute w-[190px] sm:w-[346px] h-[113px] sm:h-[211px] translate-y-[-61px] sm:translate-y-[-110px]">
        <p className="text-white text-[8px] sm:text-sm absolute font-bold top-0 start-1">HP: {activePokemon.stats[0] ? activePokemon.stats[0].base_stat : 0 }</p>
        <p className="text-white text-[8px] sm:text-sm uppercase absolute font-bold top-0 end-1">{activePokemon.types[0] ? activePokemon.types[0].type.name : 0}</p>
      <div className=" flex justify-center items-center">
            <img className="w-[100px] sm:w-[200px]" src={image.front_default} alt="pokemonimage" />
      </div>
      </div>
    }
    </>
  );
}

export default ShowPokemon;