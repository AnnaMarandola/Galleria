import "./App.css";
import Mansonry from "./components/Mansonry";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [started, setStarted] = useState(false);
  const [paintingId, setPaintingId] = useState();

  useEffect(
    () => {
      console.log(paintingId)
    },
    [paintingId]
  )

  const handleSlideShow = () => (e) => {
    started ? setStarted(false) : setStarted(true);
    setPaintingId(e.target.id)
  };

  console.log("paintingId", paintingId)


  return (
    <div className="App">
      <TopBar handleSlideShow={handleSlideShow()} started={started} />
      {started ? <Gallery paintingId={paintingId} /> : <Mansonry handleSlideShow={handleSlideShow()} />}
    </div>
  );
}

export default App;
