import { useState } from "react";
import StartGame from "./components/startGame/StartGame";
import GamePlay from "./components/gamePlay/GamePlay";

const MyApp = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

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

export default MyApp;
