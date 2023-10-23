import { useState } from "react";

const sounds = {
  start: "/start.mp3",
  button1: "/button.mp3",
  select: "/forward.mp3",
  back: "/backward.mp3",
};

function useSounds() {
  const [sound, setSound] = useState("");

  const soundButton1 = (isOn) => {
    setSound(sounds.button1);
    const audio = new Audio(sounds.button1);
    if (isOn) audio.play();
  };

  const soundButtonBack = (isOn) => {
    setSound(sounds.back);
    const audio = new Audio(sounds.back);
    if (isOn) audio.play();
  };

  const soundButtonSelect = (isOn) => {
    setSound(sounds.select);
    const audio = new Audio(sounds.select);
    if (isOn) audio.play();
  };

  const soundButtonStart = (isOn) => {
    setSound(sounds.start);
    const audio = new Audio(sounds.start);
    if (!isOn) audio.play();
  };

  return {
    soundButton1,
    soundButtonStart,
    soundButtonBack,
    soundButtonSelect,
    sound,
  };
}

export { useSounds };
