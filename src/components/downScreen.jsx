import Sound_util from "../extras/sound_util";

export const DownScreen = ({ startSystem, icons, setIsOn, isOn, soundButtonSelect, soundButtonBack, setShowList}) => {

  return (
    <>
    <Sound_util/>
      <div className="absolute justify-center items-center h-full w-full flex z-0">
        <div
          className={`${
            startSystem ? "down-on" : "down-off"
          } w-[150px] sm:w-[270px] min-h-[113px] sm:h-[201px] translate-y-[69px] sm:translate-y-[122px] text-white flex flex-row justify-center`}
        >
          <div
            className={`${
              startSystem ? "opacity-100" : "opacity-0"
            } flex flex-col justify-center items-center w-1/2`}
          >
            <img
              onClick={() => {setShowList(true), soundButtonSelect(isOn)}}
              className={`${icons ? "show-icons" : "hide-icons"} w-[50%]`}
              src="/gaming.png"
              alt="icon.ong"
            />
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
              startSystem ? "opacity-100" : "opacity-0"
            } w-1/2 flex flex-col justify-center items-center`}
          >
            <img
              onClick={() => {
                setIsOn(false), soundButtonBack(isOn);
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
