import React from "react";
import Keys from "./keys";
import { notes } from "./notesArray.js";
import Recording from "./recording";

const Piano = ({ volume, setSongNotes, songNotes, startRecord }) => {
  return (
    <div className=" min-w-fit flex flex-col w-1/3 h-1/2 z-10 ">
      <Recording />
      <div className="piano min-w-fit flex justify-center rounded-b-lg w-full h-[calc(100%_-_2rem)] z-10">
        {notes.map((pad) => (
          <Keys
            key={pad.id}
            pad={pad}
            volume={volume}
            songNotes={songNotes}
            setSongNotes={setSongNotes}
            startRecord={startRecord}
          />
        ))}
      </div>
    </div>
  );
};

export default Piano;
