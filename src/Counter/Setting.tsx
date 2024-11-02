import React, { useState } from "react";
import styled from "styled-components";
import { StyledCounter } from "./Counter";
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
        setTempMaxValue(Number(e.target.value)); // Локальное обновление tempMaxValue
    };

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempStartValue(Number(e.target.value)); // Локальное обновление tempStartValue
    };

    const applySettings = () => {
        props.setMaxValue(tempMaxValue); // Передача tempMaxValue в App
        props.setStartValue(tempStartValue); // Передача tempStartValue в App
        props.setSetting(); // Применение установленных значений
    };

    return (
        <StyledCounter>
            <div>
                <StyledWrapper>
                    <p>max value:</p>
                    <input
                        type="number"
                        value={tempMaxValue} // Привязка к tempMaxValue
                        onChange={handleMaxValueChange}
                    />
                </StyledWrapper>
                <StyledWrapper>
                    <p>start value:</p>
                    <input
                        type="number"
                        value={tempStartValue} // Привязка к tempStartValue
                        onChange={handleStartValueChange}
                    />
                </StyledWrapper>
            </div>
            <div>
                <Button title="set" onClick={applySettings} />
            </div>
        </StyledCounter>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;