import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input, Row } from "reactstrap";

export default function Pokemon() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      console.log(res.data);
      setMoves(res.data.moves.length)
    }
    getData();
  });
  return (
    <Row className="mt-4 mb-5">
      <h1 className="mb-4 fs-5">select num is {num}</h1>
      <h1 className="mb-4 fs-5">select name is     {name}</h1>
      <h1 className="mb-4 fs-5">select moves~ is {moves}</h1>
  
      
      <Input
        name="select"
        type="select"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option>1</option>
        <option>25</option>
        <option>3</option>
        <option>6</option>
        <option>5</option>
      </Input>
    </Row>
  );
}
