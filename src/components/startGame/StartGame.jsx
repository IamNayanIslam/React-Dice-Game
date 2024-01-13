import { StyledButton, StyledContainer } from "./StartGame.Styled";

const StartGame = ({ toggle }) => {
  return (
    <div>
      <StyledContainer>
        <div className="img">
          <img src="./img/dices.png" alt="" />
        </div>
        <div className="content">
          <h1>START GAME</h1>
          <StyledButton onClick={toggle}>Play Now</StyledButton>
        </div>
      </StyledContainer>
    </div>
  );
};

export default StartGame;
