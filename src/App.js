import "./App.css";
import Cards from "./components/Cards";
import React from "react";
import CardData from "./components/CardData"
const name = "parth";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();


function App() {
  return (
    <>
      <h1 className="heading_style">
        Cards
      </h1>
      {CardData.map((val, index) => {
        return (
          <>
            <Cards
              key={val.id}
              imgLink={val.imgLink}
              cardCate={val.cardCate}
              cardTitle={val.cardTitle}
              link={val.link}
            />
          </>
        );
      })}

      {/* <Calc/> */}
      {/* <Greeting/> */}
      {/* <h1>
        hello, i am {name}.
      </h1>
      <p>my fev no {3 * 3}</p>
      <p>today date is {currentDate} </p>
      <p>current time date is {currentTime} </p> */}
    </>
  );
}

export default App;
