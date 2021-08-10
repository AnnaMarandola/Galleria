import { useEffect, useState } from "react";
import { paintingsData } from "./paintingsData";
import Mansonry from "./components/Mansonry";
import TopBar from "./components/TopBar";
import Gallery from "./components/Gallery";
import Player from "./components/Player";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [paintingId, setPaintingId] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    console.log(paintingId);
  }, [paintingId, index]);

  const painting = paintingsData.find(
    (painting) => painting.name === paintingId
  );

  const handleSlideShow = () => (e) => {
    started ? setStarted(false) : setStarted(true);
    setPaintingId(e.target.id);
    setIndex(
      paintingsData.findIndex((painting) => painting.name === e.target.id)
    );
  };

  const galleryLenght = paintingsData.length;

  const goNext = () => (e) => {
    if (index < galleryLenght - 1) {
      setIndex(index + 1);
    } else {
      setStarted(false);
    }
  };

  const goback = () => (e) => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setStarted(false);
    }
  };

  return (
    <div className="App">
      <TopBar handleSlideShow={handleSlideShow()} started={started} />
      {started ? (
        <div>
          <Gallery painting={painting} index={index} />
          <Player painting={painting} index={index} goNext={goNext()} goBack={goback()} />
        </div>
      ) : (
        <Mansonry handleSlideShow={handleSlideShow()} />
      )}
    </div>
  );
}

export default App;
