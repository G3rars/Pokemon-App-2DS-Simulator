import { useEffect } from "react";
import Buttons from "./components/buttons";
import { DownScreen } from "./components/downScreen";
import { UpScreen } from "./components/upScreen";
import { List_pokemon } from "./components/list-pokemon";
import { usePokemonsData } from "./core/api";
import { useExtra } from "./customHooks/extras";
import { useGlobal } from "./customHooks/global";
import { useSounds } from "./extras/sounds";
import ShowPokemon from "./components/showPokemon";
import DetailsPokemon from "./components/detailsPokemon";

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
    select,
    setSelect,
    detailPokemon,
    setdetailPokemon,
    pageIndex,
    setPageIndex,
    statsAnimation,
  } = useGlobal();

  const { soundButton1, soundButtonStart, soundButtonSelect, soundButtonBack } =
    useSounds();
  const { batteryLevel } = useExtra();
  const {
    pokemonsData,
    activePokemon,
    setActivePokemon,
    requestOnePokemons,
    setPokemonsData,
  } = usePokemonsData(index);

  useEffect(() => {
    if (pokemonsData && pokemonsData.results)
      setSelect(Object.values(pokemonsData.results)); // revisar porque no funciona en global
  }, [pokemonsData]);
  return (
    <>
      <div className="items-center justify-center flex min-h-screen min-w-screen">
        <div className="flex absolute mt-3 sm:mt-1 text-white text-sm rounded-lg capitalize bg-black bg-opacity-40 w-[300px] top-0 sm:left-1 sm:top-0">
          <div className="flex flex-col ml-5 mt-2 mb-2">
            <img
              className="w-9 brightness-150 rounded-xl mb-1"
              src="/arrows.png"
              alt="arrows.png"
            />
            <img
              className="w-9 brightness-150 rounded-xl mb-1"
              src="/buttons.png"
              alt="buttons.png"
            />
            <img
              className="w-9 brightness-150 rounded-xl mb-1"
              src="/home.png"
              alt="home.png"
            />
            <img
              className="w-9 brightness-150 rounded-xl mb-1"
              src="/on.png"
              alt="on.png"
            />
          </div>
          <div className="ml-10 flex flex-col justify-center">
            <p className="mb-5 translate-y-[8px]">Arrows </p>
            <p className="mb-5 translate-y-[8px]">Button A - Button B </p>
            <p className="mb-5 translate-y-[8px]">Buttom home</p>
            <p className="mb-5 translate-y-[8px]">Button Turn on</p>
          </div>
        </div>
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
        {detailPokemon && activePokemon && (
          <>
            <ShowPokemon
              activePokemon={activePokemon}
              statsAnimation={statsAnimation}
            />
            <DetailsPokemon
              statsAnimation={statsAnimation}
              detailPokemon={detailPokemon}
              activePokemon={activePokemon}
            />
          </>
        )}
        <Buttons
          detailPokemon={detailPokemon}
          setActivePokemon={setActivePokemon}
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
          setIsOn={setIsOn}
          isOn={isOn}
          showList={showList}
          setShowList={setShowList}
          select={select}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          soundButtonSelect={soundButtonSelect}
          soundButtonBack={soundButtonBack}
          setPokemonsData={setPokemonsData}
        />
        {showList && !detailPokemon && (
          <List_pokemon
            pageIndex={pageIndex}
            selectIndex={selectIndex}
            select={select}
            pokemonsData={pokemonsData}
          />
        )}
        <DownScreen
          soundButton1={soundButton1}
          startSystem={startSystem}
          setIsOn={setIsOn}
          isOn={isOn}
          icons={icons}
          setShowList={setShowList}
          soundButtonSelect={soundButtonSelect}
          soundButtonBack={soundButtonBack}
        />
      </div>
    </>
  );
}

export default App;
