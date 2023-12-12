import React from "react";
import { useState } from "react";

const UsestateComp = () => {
  const [count, setCount] = useState(0);
  const increaseState = () => {
    setCount((preState) => preState + 1);
  };
  const decreaseState = () => {
    setCount((preState) => --preState);
  };
  return (
    <div>
      <h2>Use State</h2>
      <h3>Counter is {count}</h3>
      <button onClick={increaseState}>Increase count</button>
      <button onClick={decreaseState}>Decrease State</button>
      <button onClick={() => setCount(0)}>Reset count</button>
    </div>
  );
};

export default UsestateComp;
