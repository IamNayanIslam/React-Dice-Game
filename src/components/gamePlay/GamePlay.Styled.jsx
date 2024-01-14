import styled from "styled-components";

export const StyledMain = styled.main`
  .top-section {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 500px) {
    .top-section {
      flex-direction: column;
      gap: 10px;
    }
  }

  .buttons {
    margin-top: 36px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`;
