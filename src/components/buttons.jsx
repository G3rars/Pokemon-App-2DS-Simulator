import React, { useEffect, useState } from "react";
import Sound_util from "../extras/sound_util";

function Buttons({
  setIsOn,
  isOn,
  setShowList,
  index,
  setIndex,
  setSelectIndex,
  selectIndex,
  pokemonsData,
  setStartSystem,
  soundButtonStart,
  soundButton1,
  showList
}) {
  
  const [select, setSelect] = useState(showList &&
    pokemonsData ? Object.values(pokemonsData.results) : {}
  );
  useEffect(() => {
    if (pokemonsData && pokemonsData.results)
      setSelect(Object.values(pokemonsData.results));
  }, [pokemonsData]);

  const HandleSelectButton = () => {
    console.log(select[selectIndex].url);
  };
  return (
    <div className="z-10">
      <Sound_util />
      <button
        onClick={() => {
          soundButtonStart(isOn), setIsOn(true), setStartSystem(true)
        }}
        className="absolute w-6 rounded-xl translate-x-[-64px] sm:translate-x-[-112px] translate-y-[103px] sm:translate-y-[203px]"
      >
        .
      </button>
      <button
        onClick={() => {
          soundButton1(isOn), HandleSelectButton();
        }}
        className="text-white absolute translate-x-[-30px] sm:translate-x-[-40px] translate-y-[-56px] sm:translate-y-[-90px]"
      >
        sel
      </button>
      <button
        onClick={() => {
			setShowList(false), soundButton1(isOn);
		  }}
        className="text-white absolute translate-x-[-50px] sm:translate-x-[-87px] translate-y-[-30px] sm:translate-y-[-60px]"
      >
        back
      </button>
      <button
        onClick={() => {if (showList){if (selectIndex > 0) {
            setSelectIndex(selectIndex - 1);
          }}
          
        }}
        className="text-white absolute translate-x-[-320px] sm:translate-x-[-580px] translate-y-[-18px] sm:translate-y-[-7px]"
      >
        UP
      </button>
      <button
        onClick={() => {
          if (showList){if (selectIndex < 4) {
            setSelectIndex(selectIndex + 1);
          }}
          
        }}
        className="text-white absolute translate-x-[-330px] sm:translate-x-[-590px] translate-y-[30px] sm:translate-y-[50px]"
      >
        down
      </button>
      <button
        onClick={() => {
          if (showList){if (index > 0) {
            setIndex(index - 5), setSelectIndex(0);
          }}
          
        }}
        className="text-white absolute translate-x-[-345px] sm:translate-x-[-610px] translate-y-[2px] sm:translate-y-[18px]"
      >
        left
      </button>
      <button
        onClick={() => {
          if (showList){setIndex(index + 5), setSelectIndex(0)} ;
        }}
        className="text-white absolute translate-x-[-300px] sm:translate-x-[-550px] translate-y-[2px] sm:translate-y-[18px]"
      >
        right
      </button>
      <button
        onClick={() => {
          setShowList(false), soundButton1(isOn);
        }}
        className="text-white absolute translate-x-[-194px] sm:translate-x-[-340px] translate-y-[123px] sm:translate-y-[239px]"
      >
        home
      </button>
    </div>
  );
}
export default Buttons;
