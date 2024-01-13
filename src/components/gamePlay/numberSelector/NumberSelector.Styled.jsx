import styled, { css } from "styled-components";

export const StyledSelectedNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 10px;

  p.error {
    color: #ff0c0c;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const StyledBox = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    background: #000;
    color: #fff;
    transition: 0.3s ease all;
  }
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background: black;
      color: white;
    `}
`;
