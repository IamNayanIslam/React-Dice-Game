import { StyledScoreContainer } from "./TotalScore.Styled";

const TotalScore = ({ score }) => {
  return (
    <>
      <StyledScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </StyledScoreContainer>
    </>
  );
};

export default TotalScore;
