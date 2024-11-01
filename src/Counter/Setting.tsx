import React, { useState } from "react";
import styled from "styled-components";

export const Setting = () => {

    const [maxValue, setMaxValue] = useState(5)


    return ( 
        <div>
            <div>
                <StyledWrapper>
                    <p>max value:</p>
                    <input type="number" value={maxValue}/>
                </StyledWrapper>
                <StyledWrapper>
                    <p>start value</p>
                    <input />
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