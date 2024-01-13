import { useState } from "react";
import { StyledDiceContainer } from "./RoleDice.Styled";

const RoleDice = () => {
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
      <StyledDiceContainer>
        <div className="dice" onClick={roleDice}>
          <img src={`./img/dice/dice_${currentDice}.png`} alt="Dice 1" />
        </div>
        <p>Click on Dice to roll</p>
      </StyledDiceContainer>
    </>
  );
};

export default RoleDice;
