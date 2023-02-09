import React, { createContext } from "react";
import ContextApiChild from "./ContextApiChild";
import UseContext from "./UseContext";

const FullName = createContext();
const LastName = createContext();

const ContextApi = () => {
  return (
    <>
      <FullName.Provider value={"Parth"}>
        <LastName.Provider value={"Patel"}>
          <ContextApiChild />
          <UseContext/>
        </LastName.Provider>
      </FullName.Provider>
    </>
  );
};
export default ContextApi;
export { FullName , LastName};
