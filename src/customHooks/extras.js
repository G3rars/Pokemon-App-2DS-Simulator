import { useEffect, useState } from "react";

function useExtra () 
{
	const [batteryLevel, setBatteryLevel] = useState(null);
	const [currentHour, setCurrentHour] = useState('');


	// la hora no funciona bien 
	// const updateTime = () => {
	// 	const currentTime = new Date();
	// 	const formattedHour = currentTime.toLocaleTimeString();
	// 	setCurrentHour(formattedHour);
	// 	requestAnimationFrame(updateTime);
	//   };
	
	//   useEffect(() => {
	// 	updateTime();
	//   }, []);

	useEffect(() => {
		function updateBatteryStatus(battery) {
		  setBatteryLevel((battery.level * 100) + "%");
		}
		navigator.getBattery().then(updateBatteryStatus);
		navigator.getBattery().then(function (battery) {
		  battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
		});
	  }, []);

	return { batteryLevel }
}

export { useExtra }