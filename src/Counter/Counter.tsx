import React, { useState } from "react";
import styled from "styled-components";

export const Counter = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(prevNum => prevNum + 1);
    };

    const resetNum = () => {
        setNum(0);
    };

    return (
        <StyledCounter>
            <StyledWrapperNumber>
                <StyledNumber>{num}</StyledNumber>
            </StyledWrapperNumber>
            <StyledWrapperButton>
                <Button onClick={incNum}>inc</Button>
                <Button onClick={resetNum}>reset</Button>
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

const Button = styled.button`
    background-color: #00ffff;
    width: 100px;
    height: 45px;
    border-radius: 15px;

    font-size: 32px;
    color: rgb(69, 69, 69);
`