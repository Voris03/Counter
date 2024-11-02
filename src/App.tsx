import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { Setting } from "./Counter/Setting";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [num, setNum] = useState(startValue);

  const incNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const resetNum = () => {
    setNum(startValue);
  };

  const setSetting = () => {
    setNum(startValue);
  };

  return (
    <div className="App">
      <Setting
        maxValue={maxValue}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        setSetting={setSetting}
      />
      <Counter
        num={num}
        maxValue={maxValue}
        incNum={incNum}
        resetNum={resetNum}
      />
    </div>
  );
}

export default App;
