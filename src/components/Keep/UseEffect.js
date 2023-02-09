import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `you clicked me ${num} times`;
  }, [num]);
  return (
    <>
      <Button
        color="success"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </Button>
    </>
  );
}
