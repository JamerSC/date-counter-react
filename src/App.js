import { useState } from "react";

function App() {
  return <DateCounter />;
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date(); // gets current date
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>Step: {Math.abs(step)}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>Count: {Math.abs(count)}</span>
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <br />
      <p>
        <span>
          {count === 0
            ? " Today is : "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default App;
