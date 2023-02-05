import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const AddCount = () => {
        setCount(count + 1 )
    }
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={AddCount}>click me</button>
    </div>
  );
}
