import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.isDisabled}>
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #00ffff;
  width: 100px;
  height: 45px;
  border-radius: 15px;

  font-size: 32px;
  color: rgb(69, 69, 69);
`;
