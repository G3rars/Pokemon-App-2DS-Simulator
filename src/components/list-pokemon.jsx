import React, { useEffect, useState } from "react";

function List_pokemon({ pokemonsData, selectIndex}) {
	const [select, setSelect] = useState(Object.values(pokemonsData.results))
	useEffect(() => 
	{
		setSelect(Object.values(pokemonsData.results))
	}, [pokemonsData])
  return (
    <>
      <div className="custom-shadow-inset flex flex-col items-center justify-around text-center z-20 bg-white shadow-inset absolute w-[150px] sm:w-[270px] min-h-[113px] sm:h-[201px] translate-y-[69px] sm:translate-y-[122px] ">
	  {pokemonsData && pokemonsData.results ? (
          pokemonsData.results.map((pokemon) => (
            <div
              key={pokemon.name}
              className={`${pokemon.name === select[selectIndex].name ? 'select-list' : null} capitalize box-border w-full h-[21px] sm:h-[47px] flex flex-col justify-center`}
            >
              <p className="text-xs sm:text-sm">{pokemon.name}</p>
            </div>
          ))
        ) : null}
      </div>
    </>
  );
}

export { List_pokemon };
