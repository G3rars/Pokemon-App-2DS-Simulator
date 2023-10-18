import { useState } from "react";
import { useGlobal } from "../customHooks/global";
 
const sounds = 
{
	start: '/start.mp3',
	button1: '/button.mp3'
}

function useSounds()
{
	const [sound, setSound] = useState('')
	
	const soundButton1 = (isOn) => 
	{
		setSound(sounds.button1)
		const audio = new Audio(sounds.button1);
	 	if (isOn)
			audio.play();
	}
	
	const soundButtonStart = (isOn) => 
	{
		setSound(sounds.start)
		const audio = new Audio(sounds.start);
		if (!isOn)
			audio.play();
	}

	return { soundButton1, soundButtonStart, sound }
}



export { useSounds }