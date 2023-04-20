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
import Accordion from "./components/Accordion/Accordion";
import OnePageSide from "./components/OnePageSide";
import Keep from "./components/Keep/Keep";
import ContextApi from "./components/Keep/ContextApi";
import UseContext from "./components/Keep/UseContext";
import UseEffect from "./components/Keep/UseEffect";
import Covid from "./components/Covid19/Covid";
import Pokemon from "./components/Pokemon/Pokemon";
import { Container } from "reactstrap";
import Search from "./components/Search/Search";
const name = "parth";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <Container>
    <Keep/>
 <Search/>
    <Pokemon/>
      <Pokemon />
      <Covid />
      <UseEffect />
      <UseContext />
      <ContextApi />
      <OnePageSide />
      <Accordion />
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

      
      <Greeting /> 
<h1>hello, i am {name}.</h1>
      <p>my fev no {3 * 3}</p>
      <p>today date is {currentDate} </p>
      <p>current time date is {currentTime} </p>
      <nav>
          <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/about">About</a>
            </li>
            <li>
              <a to="/Incrise">Incrise</a>
            </li>
          </ul>
        </nav> 
    </Container>
  );
}

export default App;
