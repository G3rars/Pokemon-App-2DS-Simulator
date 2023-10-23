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
  setActivePokemon,
  soundButtonSelect,
  soundButtonBack,
  detailPokemon,
  setPokemonsData,
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
          if (!isOn) {
            soundButtonStart(isOn), setIsOn(true), setStartSystem(true);
          }
        }}
        className="opacity-0 absolute w-6 rounded-xl translate-x-[-64px] sm:translate-x-[-112px] translate-y-[103px] sm:translate-y-[203px]"
      >
        on
      </button>
      <button
        onClick={() => {
          soundButtonSelect(isOn);
          if (showList) {
            setdetailPokemon(true), requestOnePokemons(select[selectIndex].url);
          }
        }}
        className="opacity-0 absolute translate-x-[-30px] sm:translate-x-[-45px] translate-y-[-56px] sm:translate-y-[-90px]"
      >
        sel
      </button>
      <button
        onClick={() => {
          soundButtonBack(isOn);
          if (showList) {
            setdetailPokemon(false);
            setActivePokemon({});
          }
        }}
        className="opacity-0 absolute translate-x-[-50px] sm:translate-x-[-87px] translate-y-[-30px] sm:translate-y-[-60px]"
      >
        back
      </button>
      <button
        onClick={() => {
          if (showList && !detailPokemon) {
            soundButton1(isOn);
            if (selectIndex > 0) {
              setSelectIndex(selectIndex - 1);
            }
          }
        }}
        className="opacity-0 absolute translate-x-[-320px] sm:translate-x-[-580px] translate-y-[-18px] sm:translate-y-[-7px]"
      >
        UP
      </button>
      <button
        onClick={() => {
          if (showList && !detailPokemon) {
            soundButton1(isOn);
            if (selectIndex < 4) {
              setSelectIndex(selectIndex + 1);
            }
          }
        }}
        className="opacity-0 absolute translate-x-[-330px] sm:translate-x-[-590px] translate-y-[30px] sm:translate-y-[50px]"
      >
        down
      </button>
      <button
        onClick={() => {
          if (showList && !detailPokemon) {
            soundButton1(isOn);
            if (index > 0) {
              setPokemonsData(null);
              setIndex(index - 5), setSelectIndex(0);
              handlePage("previuos");
            }
          }
        }}
        className="opacity-0 absolute translate-x-[-345px] sm:translate-x-[-610px] translate-y-[2px] sm:translate-y-[18px]"
      >
        left
      </button>
      <button
        onClick={() => {
          if (showList && !detailPokemon) {
            soundButton1(isOn);
            if (index < 500) {
              setPokemonsData(null);
              setIndex(index + 5), setSelectIndex(0), handlePage("next");
            }
          }
        }}
        className="opacity-0 absolute translate-x-[-300px] sm:translate-x-[-550px] translate-y-[2px] sm:translate-y-[18px]"
      >
        right
      </button>
      <button
        onClick={() => {
          setPageIndex(0);
          setIndex(0);
          setSelectIndex(0);
          setShowList(false), soundButtonBack(isOn);
          if (showList) {
            setdetailPokemon(false);
          }
        }}
        className="opacity-0 absolute translate-x-[-194px] sm:translate-x-[-340px] translate-y-[123px] sm:translate-y-[239px]"
      >
        home
      </button>
    </div>
  );
}
export default Buttons;
