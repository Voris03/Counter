import React, { useState } from "react";

export const Counter = () => {

    const [num, setNum] = useState(0)

    const changeNum = (num: number) => {
        debugger
        setNum(num+1)
    }

    return (
        <div>
            {num}
            <button onClick={() => {changeNum(num)}}>+</button>
        </div>
    )
}