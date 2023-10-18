
export const DownScreen = ({ startSystem, icons, setIsOn, isOn, soundButton1, setShowList}) => {

  return (
    <>
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
              onClick={() => {setShowList(true), soundButton1(isOn)}}
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
              startSystem ? "opacity-100" : "opacity-0"
            } w-1/2 flex flex-col justify-center items-center`}
          >
            <img
              onClick={() => {
                setIsOn(false), soundButton1(isOn);
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
