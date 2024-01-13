import { StyledMain } from "./GamePlay.Styled";
import NumberSelector from "./numberSelector/NumberSelector";
import RoleDice from "./roleDice/RoleDice";
import TotalScore from "./totalScore/TotalScore";

const GamePlay = () => {
  return (
    <>
      <StyledMain>
        <div className="top-section">
          <TotalScore />
          <NumberSelector />
        </div>
        <RoleDice />
      </StyledMain>
    </>
  );
};

export default GamePlay;
