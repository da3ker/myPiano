import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Store";

const ControlBox = ({
  volume,
  setVolume,
  refreshPage,
  songNotes,
  setSongNotes,
  setStartRecord,
}) => {
  const [recording, setRecording] = useContext(Context);
  const [visibility, setVisibility] = useState("hidden");
  const [isOn, setIsOn] = useState("");
  const [isPlaying, setIsPlaying] = useState("");

  let audioTag;

  const record = () => {
    if (!isOn) {
      setVisibility("hidden");
      setIsOn("isOn");
      setRecording("");
      console.log("now recording");
      setStartRecord(Date.now());
      setSongNotes([]);
    }
    if (isOn) {
      setVisibility("");
      console.log(songNotes);
      return setIsOn("");
    }
    setIsOn("isOn");
  };

  let totalTime = 0;
  const times = () => {
    totalTime = songNotes[songNotes.length - 1].start;
  };

  const playRecording = () => {
    if (!isPlaying) {
      if (songNotes.length === 0) return;
      songNotes.forEach((note) => {
        setTimeout(() => {
          playNote(note.key);
          setIsPlaying("isOn");
        }, note.start);
      });
      times();
      console.log(totalTime);
      setTimeout(() => {
        setIsPlaying("");
      }, totalTime);
    }
    return setIsPlaying("");
  };

  const playNote = (key) => {
    audioTag = document.getElementById(key);
    audioTag.currentTime = 0;
    audioTag.play();
    audioTag.volume = volume;
    return setIsPlaying("");
  };

  return (
    <div className="control-box w-1/3 min-w-[195px] h-1/5 flex flex-col items-center z-1 mt-1 text-sm text-gray-200 font-semibold tracking-widest">
      <div className="buttons flex justify-between w-full mt-2 font-mono ">
        <button className={`z-10 font-bold p-2 ${isOn}`} onClick={record}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Record
        </button>
        <button
          className={`z-10 font-bold p-2 ${visibility} ${isPlaying}`}
          onClick={playRecording}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Play
        </button>
        <button
          className="z-10 font-bold p-2"
          onClick={() => {
            refreshPage();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Clear
        </button>
      </div>
      <div className="flex flex-col items-center w-1/2 mt-4">
        <code>Volume</code>
        <input
          type="range"
          step="0.01"
          onChange={(event) => setVolume(event.target.value)}
          value={volume}
          max="1"
          min="0"
          className="slider w-full bg-transparent z-10"
        />
      </div>
    </div>
  );
};

export default ControlBox;
