import React, { useState } from "react";
import { Button } from "reactstrap";

export default function DataForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const inputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((preValue) => {
      if ((name === "username")) {
        return {
          username: value,
          password: preValue.password,
        };
      } else if ((name === "password")) {
        return {
          username: preValue.username,
          password: value,
        };
      }
    });
  };

  return (
    <form onClick={onSubmit}>
      <h1>Hello {data.username} {data.password}</h1>
      <input
        type={"text"}
        name={"username"}
        onChange={inputValue}
        placeholder="username"
        value={data.username}
      />
      <input
        type={"text"}
        name={"password"}
        onChange={inputValue}
        placeholder="password"
        value={data.password}
      />
      <Button color="success"  type="submit">Submit</Button>
    </form>
  );
}
