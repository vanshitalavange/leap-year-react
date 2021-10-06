import "./styles.css";
import React from "react";
import { useState } from "react";
import calendar from "./images/calendar.svg";

export default function App() {
  const [result, setResult] = useState("");
  const [year, setYear] = useState("");
  function checkLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
  function clickEventHandler() {
    if (year < 0 || year === "") {
      setResult("Please enter a valid input");
    } else {
      if (checkLeapYear(year)) {
        setResult(year + "  is a leap year 🥳");
      } else {
        setResult(year + " is not a leap year 🙁");
      }
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Is it a Leap Year?</h1>
        <div className="img-container">
          <img id="hero-img" src={calendar} />
        </div>
        <label>Enter a year:</label>
        <input
          onChange={(event) => setYear(event.target.value)}
          id="year"
          type="number"
        />
        <button onClick={() => clickEventHandler()} id="btn-check">
          check
        </button>
        <div id="output">{result}</div>
      </div>
    </div>
  );
}
