import React, { useState } from "react";

export const Counter = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(prevNum => prevNum + 1);
    };

    const resetNum = () => {
        setNum(0);
    };

    return (
        <div>
            <div>
                {num}
            </div>
            <div>
                <button onClick={incNum}>inc</button>
                <button onClick={resetNum}>reset</button>
                <button onClick={() => {}}>set</button>
            </div>
        </div>
    );
};