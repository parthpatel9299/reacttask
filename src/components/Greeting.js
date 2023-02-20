import React from "react";
const d = new Date();
const hour = d.getHours();
let GreetingFor = "";
let cssTime =  " " ;

if (hour >= 1 && hour <= 11) {
  GreetingFor = `Good Morning`;
  cssTime = { color: "green" };
} else if (hour >= 12 && hour <= 19) {
  GreetingFor = "Good Afternoon";
  cssTime = { color: "orange" };
} else {
  GreetingFor = "Good Night";
  cssTime = { color: "gray " };
}

function Greeting() {
  return (
    <>
      <h1>
        hello sir, <span style={{cssTime}}>{GreetingFor}</span>{" "}
      </h1>
    </>
  );
}
export default Greeting;
