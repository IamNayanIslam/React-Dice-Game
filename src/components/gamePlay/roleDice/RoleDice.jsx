import { StyledDiceContainer } from "./RoleDice.Styled";

const RoleDice = ({ currentDice, roleDice }) => {
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
