import React, { useState } from "react";

export default function AutoDateUpdate() {
  let date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);
  const autoUpdate = () => {
    date = new Date().toLocaleTimeString();
    setTime(date);
<<<<<<< HEAD
=======
    console.log(date);
>>>>>>> b30b3baa60913c1f082094ef2a1f644f2865c4f7
  };
  setInterval(autoUpdate, 1000);
  return (
    <div className="counter">
      <h1>{time}</h1>
    </div>
  );
}
