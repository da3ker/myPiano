import React from "react";
import Keys from "./keys";
import { notes } from "./notesArray.js";
const Piano = () => {
  return (
    <div className="piano flex flex-row">
      {notes.map((pad) => (
        <Keys key={pad.id} pad={pad} />
      ))}
    </div>
  );
};

export default Piano;
