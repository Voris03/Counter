import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type CounterPropsType = {
    num: number
    maxValue: number
    incNum: () => void
    resetNum: () => void
}

export const Counter = (props: CounterPropsType) => {




    const isNumberValid = props.num === props.maxValue

    return (
        <StyledCounter>
            <StyledWrapperNumber>
                <StyledNumber>{props.num}</StyledNumber>
            </StyledWrapperNumber>
            <StyledWrapperButton>
                <Button title={"inc"} onClick={props.incNum}  isDisabled={isNumberValid}  />
                <Button title={"reset"} onClick={props.resetNum} />
                {/* <button onClick={() => {}}>set</button> */}
            </StyledWrapperButton>
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
    width: 35%;
    height: 300px;
    border: 3px solid #00ffff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledWrapperNumber = styled.div`
    width: 80%;
    height: 65%;
    margin: 15px;
    border: 3px solid #00ffff;
    border-radius: 10px;
`

const StyledNumber = styled.p`
    font-size: 52px;
    color: #00ffff;
`

const StyledWrapperButton = styled.div`
    width: 80%;
    height: 25%;
    margin: 15px;
    border: 3px solid #00ffff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

