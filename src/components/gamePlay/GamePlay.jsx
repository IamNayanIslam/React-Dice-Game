import { useState } from "react";
import { StyledMain } from "./GamePlay.Styled";
import NumberSelector from "./numberSelector/NumberSelector";
import RoleDice from "./roleDice/RoleDice";
import TotalScore from "./totalScore/TotalScore";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  return (
    <>
      <StyledMain>
        <div className="top-section">
          <TotalScore score={score} />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </StyledMain>
    </>
  );
};

export default GamePlay;
