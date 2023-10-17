import { useEffect, useState } from "react";
import Buttons from "./components/buttons";
import { DownScreen } from "./components/downScreen";
import { UpScreen } from "./components/upScreen";
import { List_pokemon } from "./components/list-pokemon";

function App() {
  const [isOn, setIsOn]= useState(false)
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [pokemonsData, setPokemonData] = useState({});
  const [showList, setShowList] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() =>{requestPokemons()},[index])
  
  function requestPokemons() 
  {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${index}`)
    .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    setPokemonData(data);
  })
  .catch(error => {
    console.error('Hubo un error en la solicitud:', error);
  });
  }

  const soundButton = () => 
	{
		const audio = new Audio('/button.mp3');
    if (isOn)
		  audio.play();
	}
  
  useEffect(() => {
    function updateBatteryStatus(battery) {
      setBatteryLevel((battery.level * 100) + "%");
    }
    navigator.getBattery().then(updateBatteryStatus);
    navigator.getBattery().then(function (battery) {
      battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
    });
  }, []);


  return (
    <>
      <div className="items-center justify-center flex min-h-screen min-w-screen">
        <UpScreen isOn={isOn}
        batteryLevel={batteryLevel}
        />
        <img
          className="w-[350px] sm:min-w-[640px]"
          src="/pngwing.com.png"
          alt="ds"
        />
        <Buttons 
        setIndex={setIndex}
        index={index}
        setSelectIndex={setSelectIndex}
        selectIndex={selectIndex}
        setPokemonData={setPokemonData}
        setIsOn = {setIsOn}
        isOn={isOn}
        setShowList={setShowList}
        soundButton={soundButton}
        />
        {
          showList && <List_pokemon selectIndex={selectIndex}  pokemonsData={pokemonsData}/>
        }
         <DownScreen
          setIsOn = {setIsOn}
          isOn={isOn}
          soundButton={soundButton}
          requestPokemons={requestPokemons}
          setShowList={setShowList}
          />     
      </div>
    </>
  );
}

export default App;
