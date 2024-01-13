import { useState } from "react";
import { StyledMain } from "./GamePlay.Styled";
import NumberSelector from "./numberSelector/NumberSelector";
import RoleDice from "./roleDice/RoleDice";
import TotalScore from "./totalScore/TotalScore";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice(randomNumber);
  };

  return (
    <>
      <StyledMain>
        <div className="top-section">
          <TotalScore />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </StyledMain>
    </>
  );
};

export default GamePlay;
