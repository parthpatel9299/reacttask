import React from "react";
import { FullName, LastName } from "./ContextApi";
export default function ContextApiChild() {
  return (
    <FullName.Consumer>
      {(fn) => {
        return (
          <LastName.Consumer>
            {(ln) => {
              return<h1>
                hello my name is {fn} {ln}
              </h1>;
            }}
          </LastName.Consumer>
        );
      }}
    </FullName.Consumer>
  );
}
