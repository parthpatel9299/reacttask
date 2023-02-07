import React, { useState } from "react";

export default function AutoDateUpdate() {
  let date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);
  const autoUpdate = () => {
    date = new Date().toLocaleTimeString();
    setTime(date);
  };
  setInterval(autoUpdate, 1000);
  return (
    <div className="counter">
      <h1>{time}</h1>
    </div>
  );
}
