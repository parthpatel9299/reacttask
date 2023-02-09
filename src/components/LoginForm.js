import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [FullName, setFullName] = useState('');
  const [userPass, setUserPass] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
    setUserPass(password);
  };
  const inputValue = (e) => {
    setName(e.target.value);
  };
  const inputValuePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onClick={onSubmit}>
      <h1>
        Hello {FullName} {userPass}
      </h1>
      <input
        type={"text"}
        onChange={inputValue}
        placeholder="username"
        value={name}
      />
      <input
        type={"text"}
        onChange={inputValuePass}
        placeholder="password"
        value={password}
      />
      <Button color="success"  type="submit">Submit</Button>
    </form>
  );
}
