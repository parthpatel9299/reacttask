import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Counter() {
    const [count, setCount] = useState(0);
    const AddCount = () => {
        setCount(count + 1 )
    }
  return (
    <div className="counter">
      <h1>{count}</h1>
      <Button color="success"  onClick={AddCount}>click me</Button>
    </div>
  );
}
