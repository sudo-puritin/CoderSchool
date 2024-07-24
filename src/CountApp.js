import React, { useState } from "react";
import "./CountAppStyle.css";

function CountApp() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "";

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span className="value" style={{ color }}>
        {count}
      </span>
      <div className="btn-group">
        <button className="btn btn-decrease" onClick={decreament}>
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={resetCount}>
          RESET
        </button>
        <button className="btn btn-increase" onClick={increament}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default CountApp;
