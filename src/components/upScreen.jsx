import moment from "moment";
import { useEffect, useState } from "react";

export const UpScreen = ({ isOn, batteryLevel, startSystem }) => {
  const [currentHour, setCurrentHour] = useState(moment().format("h:mm:ss a"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHour(moment().format("h:mm:ss a"));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="500 absolute justify-center items-center h-1/2 w-full flex z-0">
        <div className="bg-gray-900 min-w-[186px] sm:min-w-[340px] min-h-[112px] sm:min-h-[206px] translate-y-[-60px] sm:translate-y-[-110px] text-white flex justify-center items-center">
          <p
            className={`${
              !isOn ? "led-off" : "led-on"
            } absolute w-2 h-1 sm:w-[15px] sm:h-[9px] rounded-full bg-green-600 z-50 translate-x-[137px] translate-y-[-50px] sm:translate-x-[249.5px] sm:translate-y-[-91.2px]`}
          ></p>
          <img
            className={`${
              !isOn ? "hidden-logo " : "start"
            } absolute w-[100px] sm:w-[160px] h-[40px] sm:h-[60px] mb-2`}
            src="/start-logo.png"
            alt="start-logo.png"
          />
        </div>
        <div
          className={`${
            !startSystem ? "hidden-back" : "show-back"
          } absolute w-[190px] sm:w-[346px] h-[112px] sm:h-[209px] translate-y-[-61px] sm:translate-y-[-111px] z-10`}
        >
          <div className="bg-black opacity-70 text-[10px] sm:text-sm flex justify-between w-full absolute z-20">
            <p className="text-white mx-1">Battery: {batteryLevel}</p>
            <p className="text-white mx-1">{currentHour}</p>
          </div>
          <img className="w-full h-full z-10 relative" src="/wall.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
