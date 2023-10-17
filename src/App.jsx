import { useEffect, useState } from "react";
import Buttons from "./components/buttons";
import { DownScreen } from "./components/downScreen";
import { UpScreen } from "./components/upScreen";

function App() {
  const [isOn, setIsOn]= useState(false)
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [currentHour, setCurrentHour] = useState('');
  const [pokemonsData, setPokemonData] = useState(null);

  const soundButton = () => 
	{
		const audio = new Audio('src/assets/button.mp3');
		audio.play();
	}

  useEffect(() => {
    const updateHour = () => {
      const currentTime = new Date();
      const formattedHour = currentTime.toLocaleTimeString();
      setCurrentHour(formattedHour);
    };
    updateHour();
    const interval = setInterval(updateHour, 1000);
  }, []);
  
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
        currentHour={currentHour}/>
        <img
          className="w-[350px] sm:min-w-[640px]"
          src="src/assets/pngwing.com.png"
          alt="ds"
        />
        <Buttons 
        setIsOn = {setIsOn}
        isOn={isOn}
        />
        <DownScreen
        setIsOn = {setIsOn}
        isOn={isOn}
        soundButton={soundButton}/>
      </div>
    </>
  );
}

export default App;
