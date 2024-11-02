import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type SettingPropsType = {
  maxValue: number;
  startValue: number;
  setMaxValue: (value: number) => void;
  setStartValue: (value: number) => void;
  setSetting: () => void;
};

export const Setting = (props: SettingPropsType) => {
  const [tempMaxValue, setTempMaxValue] = useState(props.maxValue);
  const [tempStartValue, setTempStartValue] = useState(props.startValue);

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMaxValue(Number(e.target.value));
  };

  const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempStartValue(Number(e.target.value));
  };

  const applySettings = () => {
    props.setMaxValue(tempMaxValue);
    props.setStartValue(tempStartValue);
    props.setSetting();
  };

  return (
    <StyledSetting>
      <StyledInputWrapper>
        <StyledLabel>max value:</StyledLabel>
        <StyledInput type="number" value={tempMaxValue} onChange={handleMaxValueChange} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel>start value:</StyledLabel>
        <StyledInput type="number" value={tempStartValue} onChange={handleStartValueChange} />
      </StyledInputWrapper>
      <StyledButtonWrapper>
        <Button title="set" onClick={applySettings} />
      </StyledButtonWrapper>
    </StyledSetting>
  );
};

const StyledSetting = styled.div`
  width: 300px;
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #00ffff;
  padding: 10px;
  border-radius: 10px;
`;

const StyledLabel = styled.p`
  color: #00ffff;
  font-size: 16px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  color: #333;
  outline: none;
`;

const StyledButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 10px;
`;