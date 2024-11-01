import React, { useState } from "react";
import styled from "styled-components";

type SettingPropsType = {
    maxValue: number
    startValue: number
}

export const Setting = (props: SettingPropsType) => {

    


    return ( 
        <div>
            <div>
                <StyledWrapper>
                    <p>max value:</p>
                    <input type="number" value={props.maxValue}/>
                </StyledWrapper>
                <StyledWrapper>
                    <p>start value</p>
                    <input type="number" value={props.startValue}/>
                </StyledWrapper>
            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
`