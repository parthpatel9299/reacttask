import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../weather.css";
export default function WeatherApp() {
  const [inputValue, setInputValue] = useState();
  const [city, setCity] = useState('ahmedabad');

  console.log("inputValue", inputValue);
  const SearchValue = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const featchApi = async () =>{
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d0afe42eafee8c226c63391969baa20`
 const response = await fetch(url)
 console.log(response,"response");
    }
    featchApi()
  })
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            name="search"
            id="search"
            className="inputField"
            onChange={SearchValue}
          />
        </div> <div className="info">
        <h2 className="location"></h2>
        <h1 className="temp"></h1>
        <h3 className="tempmin_max"></h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      </div>
     
    </>
  );
}
