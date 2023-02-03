import React  from "react";
import { add, sub, multi, div } from "./Calculate";
function Calc() {
  return (
    <>
      <ol>
        <li> {add(10, 20)} </li>
        <li> {sub(10, 2)} </li>
        <li> {multi(10, 2)} </li>
        <li> {div(10, 2)} </li>
      </ol>
    </>
  );
}
export default Calc;
