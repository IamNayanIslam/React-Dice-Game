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

  .close-game {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 36px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s ease-in-out all;
    &:hover {
      transition: 0.3s ease-in-out all;
      color: #f32d01;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 840px) {
    .close-game {
      right: 3px;
      top: 3px;
      font-size: 36px;
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
