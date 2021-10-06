import "./styles.css";
import React from "react";
import { useState } from "react";
import calendar from "./images/calendar.svg";

export default function App() {
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
