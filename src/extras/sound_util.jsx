import React from "react";
import { useSounds } from "./sounds";

function Sound_util() {
  const { sound } = useSounds();

  return (
    <audio id="myAudio" style={{ display: "none" }}>
      <source src={sound} type="audio/mpeg" />
    </audio>
  );
}

export default Sound_util;
