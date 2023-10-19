import React from "react";
import Sound_util from "../extras/sound_util";

function Buttons({
  setIsOn,
  isOn,
  setShowList,
  index,
  setIndex,
  setSelectIndex,
  selectIndex,
  setStartSystem,
  soundButtonStart,
  soundButton1,
  showList,
  select,
  setdetailPokemon,
  requestOnePokemons,
  pageIndex,
  setPageIndex,
  setActivePokemon
}) {
  function handlePage(action) {
    if (action === "next" && pageIndex < 100) setPageIndex(pageIndex + 1);
    else if (action === "previuos" && pageIndex >= 0)
      setPageIndex(pageIndex - 1);
  }

  return (
    <div className="z-10">
      <Sound_util />
      <button
        onClick={() => {
          soundButtonStart(isOn), setIsOn(true), setStartSystem(true);
        }}
        className="absolute w-6 rounded-xl translate-x-[-64px] sm:translate-x-[-112px] translate-y-[103px] sm:translate-y-[203px]"
      >
        .
      </button>
      <button
        onClick={() => {
          soundButton1(isOn);
          if (showList) {
            setdetailPokemon(true), requestOnePokemons(select[selectIndex].url);
          }
        }}
        className="text-white absolute translate-x-[-30px] sm:translate-x-[-40px] translate-y-[-56px] sm:translate-y-[-90px]"
      >
        sel
      </button>
      <button
        onClick={() => {
          soundButton1(isOn);
          if (showList) {
            setdetailPokemon(false);
            setActivePokemon({});
          }
        }}
        className="text-white absolute translate-x-[-50px] sm:translate-x-[-87px] translate-y-[-30px] sm:translate-y-[-60px]"
      >
        back
      </button>
      <button
        onClick={() => {
          if (showList) {
            if (selectIndex > 0) {
              setSelectIndex(selectIndex - 1);
            }
          }
        }}
        className="text-white absolute translate-x-[-320px] sm:translate-x-[-580px] translate-y-[-18px] sm:translate-y-[-7px]"
      >
        UP
      </button>
      <button
        onClick={() => {
          if (showList) {
            if (selectIndex < 4) {
              setSelectIndex(selectIndex + 1);
            }
          }
        }}
        className="text-white absolute translate-x-[-330px] sm:translate-x-[-590px] translate-y-[30px] sm:translate-y-[50px]"
      >
        down
      </button>
      <button
        onClick={() => {
          if (showList) {
            if (index > 0) {
              setIndex(index - 5), setSelectIndex(0);
              handlePage("previuos");
            }
          }
        }}
        className="text-white absolute translate-x-[-345px] sm:translate-x-[-610px] translate-y-[2px] sm:translate-y-[18px]"
      >
        left
      </button>
      <button
        onClick={() => {
          if (showList) {
            if (index < 500) {
              setIndex(index + 5), setSelectIndex(0), handlePage("next");
            }
          }
        }}
        className="text-white absolute translate-x-[-300px] sm:translate-x-[-550px] translate-y-[2px] sm:translate-y-[18px]"
      >
        right
      </button>
      <button
        onClick={() => {
          setShowList(false), soundButton1(isOn);
          if (showList) {
            setdetailPokemon(false);
          }
        }}
        className="text-white absolute translate-x-[-194px] sm:translate-x-[-340px] translate-y-[123px] sm:translate-y-[239px]"
      >
        home
      </button>
    </div>
  );
}
export default Buttons;
