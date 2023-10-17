import React from 'react'
import { useState } from 'react';
import { UpScreen } from './upScreen';

function Buttons({ setIsOn, isOn, setShowList, soundButton, index, setIndex, setSelectIndex , selectIndex}) {
	const handleButton = () => 
	{
		const audio = new Audio('/start.mp3');
		if (!isOn)
			audio.play();
		setIsOn(true);
	}
  return (
	<div className='z-10'>
		<button onClick={ handleButton } className='absolute w-6 rounded-xl translate-x-[-64px] sm:translate-x-[-112px] translate-y-[103px] sm:translate-y-[203px]'>.</button>
		<audio id='myAudio' style={{ display: 'none' }}>
        	<source src='/start.mp3' type='audio/mpeg' />
      	</audio>
		<button onClick={() => {if(selectIndex > 0){setSelectIndex(selectIndex - 1)}}} className='text-white absolute translate-x-[-320px] sm:translate-x-[-580px] translate-y-[-18px] sm:translate-y-[-7px]'>UP</button>
		<button onClick={() => {if(selectIndex < 4){setSelectIndex(selectIndex + 1)}}} className='text-white absolute translate-x-[-330px] sm:translate-x-[-590px] translate-y-[30px] sm:translate-y-[50px]'>down</button>
		<button onClick={() => { if (index > 0){setIndex(index - 5), setSelectIndex(0)}}} className='text-white absolute translate-x-[-345px] sm:translate-x-[-610px] translate-y-[2px] sm:translate-y-[18px]'>left</button>
		<button onClick={() => {setIndex(index + 5), setSelectIndex(0)}} className='text-white absolute translate-x-[-300px] sm:translate-x-[-550px] translate-y-[2px] sm:translate-y-[18px]'>right</button>
		<button onClick={ () => { setShowList(false), soundButton() }} className='text-white absolute translate-x-[-194px] sm:translate-x-[-340px] translate-y-[123px] sm:translate-y-[239px]'>home</button>
		<audio id="myAudio" style={{ display: "none" }}>
              <source src="/button.mp3" type="audio/mpeg" />
            </audio>
	</div>
  )
}

export default Buttons