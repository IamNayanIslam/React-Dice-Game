import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  .img {
    img {
      width: 649px;
    }
  }
  .content {
    h1 {
      font-size: 76px;
      white-space: nowrap;
    }
  }
`;

export const StyledButton = styled.button`
  font-size: 16px;
  width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #fff;
  color: #000;
  border: 1px solid #000;
  border: none;
  outline: transparent;
  cursor: pointer;
  border: 1px solid #000;
  transition: 0.4s ease-in background;
  &:hover {
    background: #000;
    color: #fff;
    border: 1px solid #000;
    transition: 0.3s ease-in background;
  }
`;

export const BlackButton = styled(StyledButton)`
  background: #000;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
