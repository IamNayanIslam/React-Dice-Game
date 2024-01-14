import { useEffect, useState } from "react";
import StartGame from "./components/startGame/StartGame";
import GamePlay from "./components/gamePlay/GamePlay";
import { getDataFromLocalStorage } from "./Utility/utilities";

const MyApp = () => {
  const [isGameStarted, setIsGameStarted] = useState(
    getDataFromLocalStorage("gameStarter") || false
  );

  useEffect(() => {
    localStorage.setItem("gameStarter", JSON.stringify(isGameStarted));
  }, [isGameStarted]);

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
