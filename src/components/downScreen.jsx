import React, { useEffect, useState } from "react";

export const DownScreen = ({ isOn, setIsOn, soundButton, requestPokemons, setShowList}) => {
  const [animation, setAnimation] = useState(false);
  const [icons, setIcons] = useState(false);
  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        setAnimation(true);
      }, 4000);
      setTimeout(() => {
        setIcons(true);
      }, 5500);
    }
    setAnimation(false);
    setIcons(false);
  }, [isOn]);

  return (
    <>
      <div className="absolute justify-center items-center h-full w-full flex z-0">
        <div
          className={`${
            animation ? "down-on" : "down-off"
          } w-[150px] sm:w-[270px] min-h-[113px] sm:h-[201px] translate-y-[69px] sm:translate-y-[122px] text-white flex flex-row justify-center`}
        >
          <div
            className={`${
              animation ? "opacity-100" : "opacity-0"
            } flex flex-col justify-center items-center w-1/2`}
          >
            <img
              onClick={() => {soundButton() , requestPokemons(), setShowList(true)}}
              className={`${icons ? "show-icons" : "hide-icons"} w-[50%]`}
              src="/gaming.png"
              alt="icon.ong"
            />
            <audio id="myAudio" style={{ display: "none" }}>
              <source src="/button.mp3" type="audio/mpeg" />
            </audio>
            <p
              className={`${
                icons ? "show-icons" : "hide-icons"
              } text-black font-semibold text-xs md:text-sm`}
            >
              Pokemons
            </p>
          </div>
          <div
            className={`${
              animation ? "opacity-100" : "opacity-0"
            } w-1/2 flex flex-col justify-center items-center`}
          >
            <img
              onClick={() => {
                setIsOn(false), soundButton();
              }}
              className={`${icons ? "show-icons" : "hide-icons"} w-[50%]`}
              src="/Shutdown.png"
              alt="icon.png"
            />
            <p
              className={`${
                icons ? "show-icons" : "hide-icons"
              } text-black font-semibold text-xs md:text-sm`}
            >
              ShutDown
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
