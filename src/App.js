import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date(); // gets current date
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step: {Math.abs(step)}</span>
      {/* <button onClick={() => setStep((s) => s - 1)}>-</button> */}
      {/* <span>Step: {Math.abs(step)}</span> */}
      {/* <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      {/* <span>Count: {Math.abs(count)}</span> */}
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <br />
      <p>
        <span>
          {count === 0
            ? " Today is : "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
