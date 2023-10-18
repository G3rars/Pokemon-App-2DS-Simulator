import { useEffect, useState } from "react";
import Buttons from "./components/buttons";
import { DownScreen } from "./components/downScreen";
import { UpScreen } from "./components/upScreen";
import { List_pokemon } from "./components/list-pokemon";
import { usePokemonsData } from "./core/api";
import { useExtra } from "./customHooks/extras"
import { useGlobal } from "./customHooks/global";
import { useSounds } from "./extras/sounds";
import ShowPokemon from "./components/showPokemon";

function App() {
  const {
		isOn, 
		setIsOn,
		showList,
		setShowList,
		selectIndex,
		setSelectIndex,
		index,
		setIndex,
    startSystem,
		setStartSystem,
    icons,
    setIcons,
    select,
		setSelect,
    detailPokemon,
		setdetailPokemon,
	} = useGlobal()
  
  const { soundButton1, soundButtonStart } = useSounds();
  const {batteryLevel} = useExtra() 
  const { 
    pokemonsData, 
    setPokemonsData,  
    activePokemon,
    setActivePokemon,
    requestOnePokemons
  } = usePokemonsData(index)

  useEffect(() => {
		if (pokemonsData && pokemonsData.results)
		  setSelect(Object.values(pokemonsData.results)); // revisar porque no funciona en global
			console.log(select);
	  }, [pokemonsData]);

  return (
    <>
      <div className="items-center justify-center flex min-h-screen min-w-screen">
      <img
          className="w-[350px] sm:min-w-[640px]"
          src="/pngwing.com.png"
          alt="ds"
        />
       
        <UpScreen
        startSystem={startSystem}
       
        isOn={isOn}
        batteryLevel={batteryLevel}
        />
        {
          detailPokemon && <ShowPokemon activePokemon={activePokemon}/>
        }
        <Buttons 
        requestOnePokemons={requestOnePokemons}
        setdetailPokemon={setdetailPokemon}
        soundButtonStart={soundButtonStart}
        soundButton1={soundButton1}
        setStartSystem={setStartSystem}
        setIndex={setIndex}
        index={index}
        setSelectIndex={setSelectIndex}
        selectIndex={selectIndex}
        setPokemonData={usePokemonsData}
        pokemonsData={pokemonsData}
        setIsOn = {setIsOn}
        isOn={isOn}
        showList={showList}
        setShowList={setShowList}
        select={select}
        />
        {
          showList && <List_pokemon selectIndex={selectIndex} pokemonsData={pokemonsData}/>
        }
         <DownScreen
          soundButton1={soundButton1}
          startSystem={startSystem}
          setIsOn = {setIsOn}
          isOn={isOn}
          icons={icons}
          setShowList={setShowList}
          />     
      </div>

    </>
  );
}

export default App;
