import React, { useState } from "react";

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
      <button type="submit">Submit</button>
    </form>
  );
}
