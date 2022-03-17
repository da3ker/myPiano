import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../Store";

const Keys = ({ pad, volume, songNotes, startRecord }) => {
  const [flat, setFlat] = useState("");
  const [active, setActive] = useState("");
  const [recording, setRecording] = useContext(Context);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    isFlat(pad);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const isFlat = (pad) => {
    if (pad.id.length > 1) {
      setFlat("flat");
    }
  };

  const handleKeyPress = (event) => {
    if (event.repeat) return;
    if (event.keyCode === pad.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(pad.keyTrigger);
    songNotes.push({
      key: pad.keyTrigger,
      start: Date.now() - startRecord,
    });
    setActive("active");
    setTimeout(() => setActive(""), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + pad.keyTrigger + " ");
  };

  return (
    <div
      id={pad.id}
      className={`keys w-[calc(100%_/_7)] h-full min-w-fit rounded-b-lg cursor-pointe border-2 bg-slate-50 border-gray-900 flex flex-col justify-between items-center ${flat} ${active}`}
      onClick={playSound}
    >
      <audio className="key" id={pad.keyTrigger} src={pad.audio}></audio>
      <code className="text-[8px] sm:text-xs font-semibold">
        {pad.keyTrigger}
      </code>
      <code>{pad.id}</code>
    </div>
  );
};

export default Keys;
