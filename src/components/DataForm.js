import React, { useState } from "react";

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
<<<<<<< HEAD
      } else if ((name === "password")) {
=======
      } else if((name === "password")){
>>>>>>> b30b3baa60913c1f082094ef2a1f644f2865c4f7
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
      <button type="submit">Submit</button>
    </form>
  );
}
