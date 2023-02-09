import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Form() {
  const [name, setName] = useState();
  const [FullName, setFullName] = useState();
  const onSubmit = (e) => {

    setFullName(name);
  };
  const inputValue = (e) => {
    setName(e.target.value);
  };

  return (
    <form onClick={onSubmit}>
      <h1>Hello {FullName}</h1>
      <input type={"text"} onChange={inputValue} value={name} />
      <Button color="success"  type="submit">Submit</Button>
    </form>
  );
}
