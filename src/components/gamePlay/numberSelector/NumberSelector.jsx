import { useState } from "react";
import {
  StyledBox,
  StyledSelectedNumberContainer,
} from "./NumberSelector.Styled";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const numArray = [1, 2, 3, 4, 5, 6];

  const handleNumberSelection = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <StyledSelectedNumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numArray.map((value) => (
          <StyledBox
            key={value}
            onClick={() => handleNumberSelection(value)}
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
