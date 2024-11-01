import React, { useState } from "react";

export const Counter = () => {
    const [num, setNum] = useState(0);

    const foldNum = () => {
        setNum(prevNum => prevNum + 1);
    };

    const deductNum = () => {
        setNum(prevNum => prevNum - 1);
    };

    return (
        <div>
            {num}
            <button onClick={foldNum}>+</button>
            <button onClick={deductNum}>-</button>
        </div>
    );
};