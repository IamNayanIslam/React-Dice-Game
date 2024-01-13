import { useState } from "react";
import {
  StyledBox,
  StyledSelectedNumberContainer,
} from "./NumberSelector.Styled";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const numArray = [1, 2, 3, 4, 5, 6];

  return (
    <StyledSelectedNumberContainer>
      <div className="flex">
        {numArray.map((value) => (
          <StyledBox
            key={value}
            onClick={() => setSelectedNumber(value)}
            $isSelected={value === selectedNumber}
          >
            {value}
          </StyledBox>
        ))}
      </div>
      <p>Select Number</p>
    </StyledSelectedNumberContainer>
  );
};

export default NumberSelector;
