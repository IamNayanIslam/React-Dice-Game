import { useState } from "react";
import StartGame from "./components/startGame/StartGame";
import GamePlay from "./components/gamePlay/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleIsGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      <div>
        {isGameStarted ? (
          <GamePlay />
        ) : (
          <StartGame toggle={toggleIsGameStarted} />
        )}
      </div>
    </>
  );
};

export default App;
