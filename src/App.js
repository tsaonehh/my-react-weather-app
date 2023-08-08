import React from "react";
import Weather from "./Weather"

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather defaultCity="Gaborone" />
        <footer>
          This project was coded by{" "}
          <a href="https://meek-cendol-e5e18a.netlify.app" target="_blank">
            Tsaone W Bejile
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/tsaonehh/my-react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
