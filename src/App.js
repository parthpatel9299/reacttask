import "./App.css";
import Cards from "./components/Cards";
import React from "react";
import CardData from "./components/CardData";
import IfCondition from "./components/IfCondition";
import Condition from "./components/Condition";
import Calc from "./components/Calc";
import Greeting from "./components/Greeting";
import Game from "./components/Game";
import Counter from "./components/Counter";
import DateUpdate from "./components/DateUpdate";
import AutoDateUpdate from "./components/AutoDateUpdate";
import Form from "./components/Form";
import DataForm from "./components/DataForm";
import Login from "./components/Login";
import ToDoList from "./components/ToDoList";
import Incrise from "./components/Incrise";

const name = "parth";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <>
      <Incrise />
      <ToDoList />
      <Login />
      <DataForm />
      <Form />
      <AutoDateUpdate />
      <DateUpdate />
      <Counter />
      <Game />
      <h1 className="heading_style">Cards</h1>
      <IfCondition />
      <Condition />
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

      <Calc />
      <Greeting />
      <h1>hello, i am {name}.</h1>
      <p>my fev no {3 * 3}</p>
      <p>today date is {currentDate} </p>
      <p>current time date is {currentTime} </p>
    </>
  );
}

export default App;