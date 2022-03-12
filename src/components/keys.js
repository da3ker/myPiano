import React from "react";
import { useState, useEffect } from "react";

const Keys = ({ pad }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (event) => {
    if (event.keyCode === pad.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(pad.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.play();
  };
  return (
    <div
      id={pad.id}
      className="keys w-20 h-56 bg-slate-50 border-2 border-gray-900"
      onClick={playSound}
    >
      <audio className="key" id={pad.keyTrigger} src={pad.audio}></audio>
      {pad.keyTrigger}
    </div>
  );
};

export default Keys;
