import React, { useState } from "react";

export default function DateUpdate() {
  let date = new Date();
  const [time, setTime] = useState(date.toLocaleTimeString());
  const AddCount = () => {
    date = new Date();
    setTime(date.toLocaleTimeString());
  };
  return (
    <div className="counter">
      <h1>{time}</h1>
      <button onClick={AddCount}>click me</button>
    </div>
  );
}
