import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ title, onClick, isDisabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled} isDisabled={isDisabled}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ isDisabled?: boolean }>`
  background-color: ${(props) => (props.isDisabled ? "#6b93a6" : "#3498db")}; // цвет для заблокированной и активной кнопки
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  filter: ${(props) => (props.isDisabled ? "blur(1px)" : "none")};
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isDisabled ? "#6b93a6" : "#2980b9")};
  }
`;