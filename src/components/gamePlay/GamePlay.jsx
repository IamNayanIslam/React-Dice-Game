import { useState } from "react";
import { StyledMain } from "./GamePlay.Styled";
import NumberSelector from "./numberSelector/NumberSelector";
import RoleDice from "./roleDice/RoleDice";
import TotalScore from "./totalScore/TotalScore";
import { BlackButton, StyledButton } from "../startGame/StartGame.Styled";
import Rules from "../gameRules/Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

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

  const handleShowRules = () => {
    setShowRules((prev) => !prev);
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
        <div className="buttons">
          <StyledButton onClick={() => setScore(0)}>Reset Score</StyledButton>
          <BlackButton onClick={handleShowRules}>
            {!showRules ? "Show" : "Hide"} Rules
          </BlackButton>
          {showRules && <Rules />}
        </div>
      </StyledMain>
    </>
  );
};

export default GamePlay;
