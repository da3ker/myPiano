import "./App.scss";
import "./cube.scss";
import Cube from "./Cube";
import Piano from "./components/piano";

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center bg-neutral-900">
      <Piano />
      <Cube />
    </div>
  );
}

export default App;
