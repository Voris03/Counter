import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

type CounterPropsType = {
  num: number;
  maxValue: number;
  incNum: () => void;
  resetNum: () => void;
};

export const Counter = (props: CounterPropsType) => {
  const isMaxValueReached = props.num === props.maxValue;

  return (
    <StyledCounter>
      <StyledWrapperNumber>
        <StyledNumber isMaxValueReached={isMaxValueReached}>
          {props.num}
        </StyledNumber>
      </StyledWrapperNumber>
      <StyledWrapperButton>
          <Button
            title={"inc"}
            onClick={props.incNum}
            isDisabled={isMaxValueReached} // Блокировка кнопки
          />

        <Button title={"reset"} onClick={props.resetNum} />
      </StyledWrapperButton>
    </StyledCounter>
  );
};

// Основной стиль для компонента Counter
export const StyledCounter = styled.div`
  width: 300px;
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Стиль для обертки числа
const StyledWrapperNumber = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00ffff;
  border-radius: 10px;
`;

// Стиль для числа, изменяющий цвет при достижении maxValue
const StyledNumber = styled.p<{ isMaxValueReached: boolean }>`
  font-size: 52px;
  color: ${(props) => (props.isMaxValueReached ? "red" : "#00ffff")};
`;

// Стиль для обертки кнопок
const StyledWrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #00ffff;
  padding: 10px;
  border-radius: 10px;
`;
