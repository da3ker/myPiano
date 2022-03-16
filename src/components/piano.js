import React from "react";
import Keys from "./keys";
import { notes } from "./notesArray.js";
const Piano = ({ volume, setSongNotes, songNotes, startRecord }) => {
  return (
    <div className="piano min-w-fit flex justify-center rounded-b-lg  w-1/3 h-2/5 z-10">
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
  );
};

export default Piano;
