import { Button } from "reactstrap";
import React, { useState } from "react";

export default function Incrise() {
  const [count, setCount] = useState(0);

  const Incriment = () => {
    setCount(count + 1);
  };
  const Decriment = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert('min val : 0')
    }
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Button color="success"  onClick={Incriment}>+</Button>{" "}
        <Button color="success"  onClick={Decriment}>-</Button>
      </div>
    </>
  );
}
