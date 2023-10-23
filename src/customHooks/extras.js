import { useEffect, useState } from "react";


function useExtra() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  
  useEffect(() => {
    function updateBatteryStatus(battery) {
      setBatteryLevel(battery.level * 100 + "%");
    }
    navigator.getBattery().then(updateBatteryStatus);
    navigator.getBattery().then(function (battery) {
      battery.addEventListener("levelchange", () =>
        updateBatteryStatus(battery)
      );
    });
  }, []);

  return { batteryLevel };
}

export { useExtra };
