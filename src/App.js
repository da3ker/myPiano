import "./cube.scss";
import Cube from "./Cube";
import Piano from "./components/piano";
import ControlBox from "./components/controlBox";
import { useState } from "react";
import Store from "./Store";

function App() {
  const [volume, setVolume] = useState(1);
  const [songNotes, setSongNotes] = useState([]);
  const [startRecord, setStartRecord] = useState();

  const dots = [];
  for (let i = 1; i <= 608; i++) {
    dots.push(<span id={i} key={i} />);
  }

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <Store>
      <div className="App w-screen h-screen flex flex-col justify-center items-center min-w-fit bg-neutral-900">
        <div className="container absolute w-full h-full flex flex-wrap">
          {dots}
        </div>

        <Piano
          volume={volume}
          songNotes={songNotes}
          setSongNotes={setSongNotes}
          startRecord={startRecord}
        />
        <ControlBox
          volume={volume}
          setVolume={setVolume}
          refreshPage={refreshPage}
          songNotes={songNotes}
          setSongNotes={setSongNotes}
          setStartRecord={setStartRecord}
        />
        <Cube />
      </div>
    </Store>
  );
}

export default App;
